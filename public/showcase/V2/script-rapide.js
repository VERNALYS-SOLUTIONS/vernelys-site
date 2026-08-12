/* ══════════════════════════════════════════════════════════════
   Vernelys moteur d'animation V2
   Même contrat que la V1 : ?render=1 délègue la lecture au script de
   capture (window.__play / __done / __tail) et ?speed= ralentit la
   lecture pendant la capture. Le scénario est dans play(), tout en bas.
   ══════════════════════════════════════════════════════════════ */

const $=id=>document.getElementById(id);
const stage=$('stage'),ptr=$('ptr'),ring=$('ring'),
      paneHome=$('paneHome'),paneApp=$('paneApp'),
      appsT=$('appsT'),modal=$('modal'),scrim=$('scrim'),mcTR=$('mcTR'),
      crumb=$('crumb'),pgBar=$('pgBar'),row=document.querySelector('.row'),
      recBtn=$('recBtn'),modalQS=$('modalQS'),qsGo=$('qsGo'),modalRec=$('modalRec'),rtime=$('rtime'),
      linkFld=$('linkFld'),linkTxt=$('linkTxt'),teams=$('teams'),tmBot=$('tmBot'),tmToast=$('tmToast'),
      rowRAC=$('rowRAC'),detail=$('detail'),
      selCli=$('selCli'),lstCli=$('lstCli'),optCli=$('optCli'),selCliV=$('selCliV'),
      selNat=$('selNat'),lstNat=$('lstNat'),optNat=$('optNat'),selNatV=$('selNatV'),
      btnSave=$('btnSave'),fillBox=$('fillBox'),qsBadge=$('qsBadge'),
      mCli=$('mCli'),mNat=$('mNat'),sendR=$('sendR'),wave=$('wave'),lvl=$('lvl'),
      intro=$('intro'),outro=$('outro'),pauseBtn=$('pauseBtn'),sub=$('sub'),subT=$('subT');

/* Décors générés : trop répétitifs pour être écrits à la main dans le HTML. */
wave.innerHTML = Array.from({length:74},(_,i)=>{
  const h = 3 + Math.abs(Math.sin(i*1.7)*Math.cos(i*.6)) * 21;
  return `<i style="height:${h.toFixed(1)}px"></i>`;
}).join('');
lvl.innerHTML = Array.from({length:7},(_,i)=>
  `<i style="animation-delay:${(i*.11).toFixed(2)}s"></i>`).join('');

/* ?render=1 hands playback to the capture script and fills the frame exactly */
const RENDER=new URLSearchParams(location.search).has('render');
/* speed<1 plays slower, letting a slow capture collect more frames per second
   of animation. Durations are compressed again at encode time. CSS transitions
   are slowed separately via CDP Animation.setPlaybackRate. */
const SPEED=parseFloat(new URLSearchParams(location.search).get('speed')||'1')||1;
const NOSUB=window.__NOSUB===true||new URLSearchParams(location.search).has('nosub');
/* ?skipto=onglets : le compte rendu s'ouvre déjà complété, la scène de saisie
   (dossier client + nature) est sautée. Utilisé par le récap global, qui veut
   le parcours des onglets sans le remplissage de la fiche. */
const SKIPTO=new URLSearchParams(location.search).get('skipto')||'';

/* Facteur de rythme, indépendant de SPEED (qui, lui, ne sert qu'au ralenti de
   capture). PACE>1 étire toute la timeline ; on le remet à 1 avant la scène
   des onglets pour la conserver à sa cadence rapide actuelle. */
let PACE=1.3;

function fit(){
  if(RENDER){
    // fill the viewport exactly from the top-left corner. Capturing at a larger
    // viewport (e.g. 3840x2160) makes Chrome re-rasterise text at the final
    // scale, so the output is natively sharp rather than upscaled.
    const s=Math.min(innerWidth/1600,innerHeight/900);
    stage.style.transformOrigin='top left';
    stage.style.transform=`scale(${s})`;
    return;
  }
  const s=Math.min(innerWidth/1600,innerHeight/900)*.98;stage.style.transform=`scale(${s})`;
}
addEventListener('resize',fit);fit();
if(RENDER){
  stage.style.borderRadius='0';stage.style.boxShadow='none';
  document.documentElement.style.background='#fff';
  // a transform does not affect layout, so the flex centring would still place
  // the unscaled 1600x900 box in the middle and the scale would grow from
  // there, pushing the frame off. Pin the stage to the top-left corner.
  document.body.style.alignItems='flex-start';
  document.body.style.justifyContent='flex-start';
  pauseBtn.style.display='none';
}

/* ---- pause/resume: every wait/animation below reads time from vnow(), a
   clock that freezes while paused, instead of performance.now() directly ---- */
let pausedAccum=0,pauseStartedAt=null;
function vnow(){return(pauseStartedAt!==null?pauseStartedAt:performance.now())-pausedAccum;}
function setPaused(p){
  if(p===(pauseStartedAt!==null))return;
  if(p){
    pauseStartedAt=performance.now();
    document.getAnimations().forEach(a=>a.pause());
    pauseBtn.textContent='▶ Reprendre';
  }else{
    pausedAccum+=performance.now()-pauseStartedAt;
    pauseStartedAt=null;
    document.getAnimations().forEach(a=>a.play());
    pauseBtn.textContent='⏸ Pause';
  }
}
function togglePause(){setPaused(pauseStartedAt===null);}

/* rAF-polled against vnow() (not setTimeout) so a pause also freezes pending waits */
function wait(ms){
  const total=ms*PACE/SPEED;
  return new Promise(res=>{
    const t0=vnow();
    (function step(){vnow()-t0>=total?res():requestAnimationFrame(step)})();
  });
}
const SC=()=>stage.getBoundingClientRect().width/1600;
function ctr(el,ox=0,oy=0){
  const r=el.getBoundingClientRect(),s=stage.getBoundingClientRect(),k=SC();
  return {x:(r.left+r.width/2-s.left)/k+ox,y:(r.top+r.height/2-s.top)/k+oy};
}
let cx=1180,cy=140;
const draw=()=>ptr.style.transform=`translate(${cx}px,${cy}px)`;draw();

/* frame-synced and time-based: one position per rendered frame, whatever the
   frame rate, instead of a fixed number of 16ms hops */
function moveTo(el,ox=0,oy=0,dur=600){
  const p=ctr(el,ox,oy),sx=cx,sy=cy;
  return new Promise(res=>{
    const t0=vnow(),total=dur*PACE/SPEED;
    const step=()=>{
      const now=vnow();   // single time source: rAF timestamps can
      const t=Math.min(1,(now-t0)/total),e=1-Math.pow(1-t,3);  // be on a slowed timeline
      cx=sx+(p.x-sx)*e;cy=sy+(p.y-sy)*e;draw();
      t<1?requestAnimationFrame(step):res();
    };
    requestAnimationFrame(step);
  });
}
function click(){ring.style.left=cx+'px';ring.style.top=cy+'px';
  ring.classList.remove('go');void ring.offsetWidth;ring.classList.add('go')}

/* ─────────── sous-titres (narration) ─────────── */
async function showSub(t){
  if(NOSUB)return;
  if(sub.classList.contains('on')){sub.classList.remove('on');await wait(210)}
  subT.textContent=t;sub.classList.add('on');await wait(160);
}
function hideSub(){sub.classList.remove('on')}

/* Entrée en cascade des blocs d'un pane, dans l'ordre de leur data-s. */
async function revealIn(pane,sel,gap=110){
  const items=[...pane.querySelectorAll(sel)]
    .sort((a,b)=>(+a.dataset.s||0)-(+b.dataset.s||0));
  for(const el of items){el.classList.add('in');await wait(gap)}
}

/* ────────────────── CARTON INTRO ────────────────── */
async function runIntro(){
  intro.classList.add('on');
  await wait(1850);
  intro.classList.add('out');intro.classList.remove('on');
  await wait(400);
  await showSub('Vos réunions, transcrites et transformées en comptes rendus structurés.');
}

/* ────────────────── CARTON FIN ────────────────── */
/* PACE est déjà revenu à 1 ici (réarmé avant runOnglets) : durées non compensées */
async function runOutro(){
  await wait(350);
  hideSub();
  outro.classList.add('on');
  await wait(2200);
}

/* ────────────────── SCÈNE 1 : l'accueil ────────────────── */
async function runHome(){
  paneHome.classList.add('on');
  await revealIn(paneHome,'.fu',68);
  await wait(300);

  // le curseur vise le bouton Applications de la barre haute
  await showSub('Depuis l\'accueil, « Applications » ouvre la bibliothèque d\'apps et d\'agents.');
  await moveTo(appsT,0,0,420);
  appsT.classList.add('hot');
  await wait(120);
  appsT.classList.add('press');
  click();
  await wait(95);
  appsT.classList.remove('press');
}

/* ────────────────── SCÈNE 2 : la modale ────────────────── */
async function runModal(){
  row.classList.add('pushed');
  scrim.classList.add('on');
  modal.classList.add('on');
  appsT.classList.remove('hot');
  await showSub('Sélectionnez « Transcription & CR de réunion » pour démarrer.');
  await wait(420);

  // descente vers la carte de l'application
  await moveTo(mcTR,0,0,440);
  mcTR.classList.add('hot');
  await wait(130);
  mcTR.classList.add('press');
  click();
  await wait(95);
  mcTR.classList.remove('press');
  await wait(90);

  modal.classList.remove('on');
  scrim.classList.remove('on');
  row.classList.remove('pushed');
  await wait(150);
}

/* ────────────────── SCÈNE 3 : l'application ────────────────── */
async function runApp(){
  paneHome.classList.remove('on');paneHome.classList.add('out');
  await wait(230);
  paneApp.classList.add('on');
  crumb.classList.add('in');
  await revealIn(paneApp,'.fu2',80);
  await showSub('Retrouvez vos transcriptions en attente, l\'historique et l\'agenda de vos réunions.');
  // le traitement en cours progresse : l'écran est vivant, pas une capture figée
  pgBar.classList.add('go');
  await wait(820);
}

/* Frappe au clavier synchronisée sur les frames : un setTimeout par caractère
   dérive sous ~30ms et se désynchronise du rafraîchissement, ce qui se voit. */
function typeSmooth(el,text,cps){
  return new Promise(res=>{
    const t0=vnow(),total=text.length/cps*1000/SPEED;let last=-1;
    const step=()=>{
      const p=Math.min(1,(vnow()-t0)/total),n=Math.round(p*text.length);
      if(n!==last){el.textContent=text.slice(0,n);last=n}
      p<1?requestAnimationFrame(step):res();
    };requestAnimationFrame(step);
  });
}

/* Chrono d'enregistrement, piloté par le temps réel de la timeline. */
function runTimer(el,seconds){
  return new Promise(res=>{
    const t0=vnow(),total=seconds*1000/SPEED;
    const step=()=>{
      const p=Math.min(1,(vnow()-t0)/total),s=Math.floor(p*seconds);
      el.textContent='00:'+String(s).padStart(2,'0');
      p<1?requestAnimationFrame(step):res();
    };requestAnimationFrame(step);
  });
}

/* Clic sur un élément : approche, survol, appui, onde.
   Version rapide : approche plus vive et survol raccourci le geste reste
   lisible mais on supprime le temps mort avant le clic. */
async function clickOn(el,dur=380,hold=120){
  await moveTo(el,0,0,dur);
  el.classList.add('hot');await wait(hold);
  el.classList.add('press');click();await wait(95);
  el.classList.remove('press');
}

/* ────────── SCÈNE 4 : enregistrement en présentiel ────────── */
async function runPresentiel(){
  await showSub('Démarrage rapide en présentiel : un micro, un clic, l\'enregistrement commence.');
  await clickOn(recBtn,440,140);
  recBtn.classList.remove('hot');
  row.classList.add('pushed');
  scrim.classList.add('on');modalQS.classList.add('on');
  await wait(850);                        // on laisse lire la fiche

  await clickOn(qsGo,380,150);
  qsGo.classList.remove('hot');
  modalQS.classList.remove('on');
  await wait(170);
  modalRec.classList.add('on');
  await runTimer(rtime,2);                // chrono plus court, rythme plus vif
  await wait(450);

  modalRec.classList.remove('on');scrim.classList.remove('on');
  row.classList.remove('pushed');
  await wait(320);
}

/* ────────── SCÈNE 5 : réunion en ligne via un lien ────────── */
async function runLien(){
  await showSub('Collez un lien Teams, Meet ou Zoom : l\'assistant rejoint la réunion et transcrit en direct.');
  await moveTo(linkFld,-90,0,430);
  click();
  linkFld.classList.add('filled','typing');
  await wait(150);
  await typeSmooth(linkTxt,'https://teams.live.com/meet/vernelys2026',44);
  await wait(300);
  linkFld.classList.remove('typing');
  await wait(180);

  teams.classList.add('on');
  await wait(850);                        // la réunion tourne déjà
  tmToast.classList.add('in');
  await wait(320);
  tmBot.classList.add('in');
  await wait(1500);

  tmToast.classList.remove('in');
  await wait(220);
  teams.classList.remove('on');
  // on repart du tableau de bord propre : le champ se vide
  linkFld.classList.remove('filled');linkTxt.textContent='';
  await wait(430);
}

/* ────────── SCÈNE 6 : ouverture et complétion d'un compte rendu ────────── */
async function runDetail(){
  await showSub('Complétez le dossier client et la nature de la réunion en un clic.');
  await clickOn(rowRAC,440,160);
  rowRAC.classList.remove('hot');
  await wait(110);
  detail.classList.add('on');
  await wait(900);

  /* dossier client */
  await clickOn(selCli,430,150);
  lstCli.classList.add('show');
  await wait(320);
  await moveTo(optCli,0,0,280);
  optCli.classList.add('pick');
  await wait(200);
  click();
  selCliV.textContent='SARL Martin & Fils';
  lstCli.classList.remove('show');optCli.classList.remove('pick');
  selCli.classList.remove('hot');
  await wait(280);

  /* nature */
  await clickOn(selNat,380,150);
  lstNat.classList.add('show');
  await wait(320);
  await moveTo(optNat,0,0,300);
  optNat.classList.add('pick');
  await wait(200);
  click();
  selNatV.textContent='Entretien client';
  lstNat.classList.remove('show');optNat.classList.remove('pick');
  selNat.classList.remove('hot');
  await wait(220);

  /* le bouton ne s'active qu'une fois les deux champs remplis */
  btnSave.classList.add('on');
  await wait(320);
  await clickOn(btnSave,380,160);
  btnSave.classList.remove('hot','press');
  await wait(150);

  // la fiche est complète : le bandeau se replie, l'en-tête reprend les infos
  fillBox.classList.add('gone');
  qsBadge.classList.add('gone');
  mCli.classList.add('in');mNat.classList.add('in');
  sendR.classList.add('on');
  await wait(1150);
}

/* Variante de la scène 6 sous ?skipto=onglets : on ouvre le même compte rendu,
   mais déjà renseigné, pour enchaîner directement sur le parcours des onglets. */
async function runDetailReady(){
  await clickOn(rowRAC,440,160);
  rowRAC.classList.remove('hot');
  await wait(110);
  // état final de la fiche posé AVANT l'ouverture du volet : sinon on verrait
  // le bandeau de saisie se replier tout seul à l'écran.
  selCliV.textContent='SARL Martin & Fils';
  selNatV.textContent='Entretien client';
  btnSave.classList.add('on');
  fillBox.classList.add('gone');
  qsBadge.classList.add('gone');
  mCli.classList.add('in');mNat.classList.add('in');
  sendR.classList.add('on');
  detail.classList.add('on');
  await wait(1100);
}

/* ────────── SCÈNE 7 : parcours des onglets du compte rendu ────────── */
async function runOnglets(){
  const tabs=[...document.querySelectorAll('.tbi')];
  // pose variable selon la densité de l'onglet : ça donne du rythme plutôt
  // qu'un défilement mécanique à intervalle constant
  const dwell={odj:950,tsk:1250,dec:950,rap:1600};
  await showSub('Ordre du jour, tâches, décisions, rapport : tout est généré et prêt à valider.');
  for(const tab of tabs.slice(1)){
    await clickOn(tab,360,130);
    tab.classList.remove('hot');
    tabs.forEach(t=>t.classList.remove('on'));
    tab.classList.add('on');
    document.querySelectorAll('.tp').forEach(p=>p.classList.remove('on'));
    $('tp-'+tab.dataset.t).classList.add('on');
    await wait(dwell[tab.dataset.t]||1100);
  }
}

/* ────────────────── remise à zéro ────────────────── */
function reset(){
  intro.classList.remove('on','out');
  outro.classList.remove('on','out');
  [paneHome,paneApp].forEach(p=>p.classList.remove('on','out'));
  document.querySelectorAll('.fu,.fu2').forEach(e=>e.classList.remove('in'));
  modal.classList.remove('on');scrim.classList.remove('on');row.classList.remove('pushed');
  modalQS.classList.remove('on');modalRec.classList.remove('on');
  teams.classList.remove('on');tmToast.classList.remove('in');tmBot.classList.remove('in');
  detail.classList.remove('on');
  document.querySelectorAll('.hot,.press,.pick').forEach(e=>e.classList.remove('hot','press','pick'));
  crumb.classList.remove('in');
  pgBar.classList.remove('go');
  linkFld.classList.remove('filled','typing');linkTxt.textContent='';
  rtime.textContent='00:00';
  lstCli.classList.remove('show');lstNat.classList.remove('show');
  selCliV.textContent='Sélectionner…';selNatV.textContent='Sélectionner…';
  btnSave.classList.remove('on');fillBox.classList.remove('gone');qsBadge.classList.remove('gone');
  mCli.classList.remove('in');mNat.classList.remove('in');sendR.classList.remove('on');
  document.querySelectorAll('.tbi').forEach((t,i)=>t.classList.toggle('on',i===0));
  document.querySelectorAll('.tp').forEach(p=>p.classList.toggle('on',p.id==='tp-syn'));
  hideSub();
  cx=1180;cy=140;draw();
}

let busy=false;
window.__done=false;
async function play(){
  if(busy)return;busy=true;window.__done=false;
  PACE=1.3;                     // réarmé à chaque tour (la boucle a pu le laisser à 1)
  reset();await wait(RENDER?0:300);
  await runIntro();
  await runHome();await runModal();await runApp();
  await runPresentiel();await runLien();
  if(SKIPTO==='onglets')await runDetailReady();
  else await runDetail();
  PACE=1;                       // la scène des onglets garde sa cadence rapide
  await runOnglets();
  await runOutro();
  // The last captured frame is held for the whole tail, so it must be a settled
  // state signalling __done mid-transition would truncate the ending.
  if(RENDER){window.__tail=3.0}
  busy=false;window.__done=true;
  // en lecture interactive (hors capture), la boucle repart seule après une pause
  if(!RENDER)wait(2000).then(play);
}

if(RENDER){
  window.__play=play;                 // capture script calls this
}else{
  stage.addEventListener('click',play);
  addEventListener('load',()=>setTimeout(play,400));
  pauseBtn.addEventListener('click',togglePause);
  addEventListener('keydown',e=>{
    if(e.code==='Space'){e.preventDefault();togglePause()}
  });
}
