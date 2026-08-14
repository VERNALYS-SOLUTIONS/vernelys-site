// ---------------------------------------------------------------------------
// Conditions Générales de Service (CGS) des Solutions Vernelys.
//
// Transcription du document contractuel de référence
// « 2026-08 Vernelys - CGS.docx ». Le texte doit rester conforme au document
// signé : toute correction rédactionnelle doit d'abord être faite dans le
// document Word, puis reportée ici.
//
// Chaque version est archivée telle qu'elle a été publiée : on n'édite JAMAIS
// une version déjà diffusée, on en ajoute une nouvelle en tête du tableau
// CGS_VERSIONS (la première entrée est celle « en vigueur »). Les clients
// conservent ainsi un lien stable vers la version qui leur est opposable.
//
// Cette page n'est liée depuis aucune page du site, est absente du sitemap et
// est marquée « noindex » (voir app/cgs/page.tsx et next.config.ts) : son URL
// est communiquée directement aux clients.
// ---------------------------------------------------------------------------

// Enrichissements interprétés par le rendu (voir CgsDocument.tsx) :
//   **gras**                 → texte en gras
//   [libellé](href)          → lien interne, externe ou mailto
//   [•] et {{texte}}         → emplacement à compléter, mis en évidence
export type CgsBlock =
  | { type: "p"; text: string }
  /** Sous-article numéroté du document : « 3.1 Droit d'Utilisation ». */
  | { type: "h3"; text: string }
  /** Sous-division en gras : « 5.3.1 Engagement. ». */
  | { type: "h4"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: [string, string]; rows: [string, string][] }
  | { type: "formula"; text: string };

export type CgsSection = {
  id: string;
  /** Intitulé complet tel qu'il figure au document contractuel. */
  title: string;
  blocks: CgsBlock[];
};

export type CgsVersion = {
  /** Segment d'URL : /cgs/2026-08-14 */
  slug: string;
  /** Titre du document, repris à l'identique. */
  documentTitle: string;
  /** Sous-titre du document, repris à l'identique. */
  documentSubtitle: string;
  /** Date de publication au format ISO, pour <time dateTime>. */
  isoDate: string;
  /** Date affichée dans la barre latérale. */
  shortDate: string;
  /** Date affichée en toutes lettres dans le corps du document. */
  longDate: string;
  /** Résumé des évolutions par rapport à la version précédente. */
  summary: string;
  sections: CgsSection[];
};

const SECTIONS_2026_08_14: CgsSection[] = [
  {
    id: "preambule",
    title: "Préambule",
    blocks: [
      {
        type: "p",
        text: "Les présentes conditions générales de service (les « CGS ») sont conclues entre :",
      },
      {
        type: "ul",
        items: [
          "**VERNALYS SOLUTIONS**, SAS au capital de 10 000 euros, immatriculée au registre du commerce et des sociétés de Lyon sous le numéro 108 293 630, dont le siège social est situé 2 rue Docteur Horand, 69009 Lyon, France, exerçant sous le nom commercial « VERNELYS », ci-après dénommée « VERNELYS », et",
          "le client, personne physique ou morale agissant dans le cadre de son activité professionnelle, ci-après dénommé le « Client ».",
        ],
      },
      {
        type: "p",
        text: "VERNELYS et le Client sont chacun une « Partie » et ensemble les « Parties ».",
      },
      {
        type: "p",
        text: "VERNELYS édite et exploite une solution logicielle en mode SaaS, accessible en ligne et complétée de compléments pour la suite bureautique Microsoft Office. VERNELYS propose en outre des développements spécifiques, des services professionnels ainsi que des prestations de support et de maintenance.",
      },
      {
        type: "p",
        text: "Les présentes CGS ont pour objet de définir les conditions dans lesquelles VERNELYS met ces prestations à la disposition du Client. Le Client est invité à en prendre connaissance attentivement avant de les accepter.",
      },
    ],
  },
  {
    id: "definitions",
    title: "Définitions",
    blocks: [
      {
        type: "p",
        text: "Les termes ci-après, employés avec une majuscule dans les présentes, ont la signification suivante, au singulier comme au pluriel.",
      },
      {
        type: "ul",
        items: [
          "**« Anomalie »** : tout dysfonctionnement de la Solution par rapport à la Documentation, reproductible et imputable à la Solution, qui empêche l'accès ou l'utilisation normale de tout ou partie de ses fonctionnalités ou qui en affecte les résultats.",
          "**« CGS »** : les présentes conditions générales de service et leurs annexes, ainsi que le Devis conclu avec VERNELYS.",
          "**« Complément Office »** : les compléments logiciels édités par VERNELYS, installés sur les postes de travail du Client et s'intégrant à la suite bureautique Microsoft Office, dont les fonctionnalités sont décrites dans la Documentation.",
          "**« Compte Client »** : le compte créé au nom du Client à partir des informations qu'il communique, permettant l'accès à la Solution.",
          "**« Compte Utilisateur »** : le compte nominatif créé pour un Utilisateur autorisé par le Client aux fins d'utilisation de la Solution.",
          "**« Date de Mise à Disposition »** : la date à laquelle VERNELYS met la Solution à disposition du Client, matérialisée par l'envoi au Client du courrier électronique de création du Compte Client.",
          "**« Devis »** : les conditions particulières relatives à la souscription du Client, précisant notamment les prestations retenues, le nombre d'Utilisateurs, la durée d'engagement, la périodicité de facturation et le prix applicable. Chaque Devis est régi par les présentes CGS.",
          "**« Documentation »** : la description des fonctionnalités, des prérequis techniques et du mode d'utilisation de la Solution et du Complément Office, mise à disposition du Client sur le Site Internet et sur le centre d'aide accessible à l'adresse [•]. Toute autre documentation est exclue, notamment la documentation commerciale ou promotionnelle.",
          "**« Données du Client »** : l'ensemble des données, fichiers, enregistrements audios, pièces jointes, textes, images et contenus du Client saisis, transmis, collectés, conservés ou reçus par les Utilisateurs dans le cadre de l'utilisation de la Solution ou de l'exécution des CGS.",
          "**« Données à Caractère Personnel »** : toute donnée se rapportant à une personne physique identifiée ou identifiable, au sens du RGPD.",
          "**« Développement Spécifique »** : toute prestation de développement réalisée par VERNELYS sur les spécifications propres du Client, souscrite par Devis et régie par l'article 6.",
          "**« Droit d'Utilisation »** : le droit d'utilisation de la Solution concédé par VERNELYS au Client et à ses Utilisateurs, tel que décrit à l'article 3.1.",
          "**« Fonctionnalités IA »** : les fonctionnalités intégrant une technologie d'intelligence artificielle générative, identifiées comme telles dans la Solution, la Documentation ou sur le Site Internet, et mises à disposition par VERNELYS.",
          "**« Heures Ouvrées »** : du lundi au vendredi, de 9h00 à 18h00 (heure de Paris), hors jours fériés français.",
          "**« Informations Confidentielles »** : toute information, quelle qu'en soit la nature, divulguée par une Partie à l'autre dans le cadre des CGS, par écrit ou par oral, selon la définition précisée à l'article 17.",
          "**« Mises à Jour »** : les versions partielles ou complètes successives de la Solution ou des Compléments Office, pouvant comporter des corrections d'Anomalies, des adaptations ou des améliorations, fournies par VERNELYS dans le cadre des CGS.",
          "**« Plan »** : la formule d'abonnement souscrite par le Client, définie notamment par son périmètre fonctionnel, son nombre d'Utilisateurs et son prix.",
          "**« RGPD »** : le règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.",
          "**« Service en Ligne Tiers »** : tout service en ligne mis à disposition par un tiers, connecté à la Solution par le biais de connecteurs, permettant d'importer des données dans la Solution ou d'exporter des Données du Client vers ce service.",
          "**« Services Afférents »** : les services afférents à la fourniture de la Solution, à savoir les services de support, d'accompagnement, de maintenance, de recherche et développement, d'évolution et d'optimisation de la Solution.",
          "**« Services Professionnels »** : les services proposés sur demande du Client au titre de l'article 7, tels que les prestations de migration, de reprise ou de restauration de données, de paramétrage ou d'accompagnement au déploiement.",
          "**« Site Internet »** : le site internet de VERNELYS, accessible à l'adresse racine [https://vernelys.com](https://vernelys.com), ou toute autre adresse qui viendrait à le remplacer.",
          "**« Solution »** : l'ensemble des programmes informatiques édités par VERNELYS en mode SaaS, dont les fonctionnalités sont décrites sur le Site Internet et dans la Documentation, y compris les Mises à Jour, et pour lesquels le Client dispose du Droit d'Utilisation, accessibles via une connexion internet au moyen d'une interface web. La Solution inclut également les Compléments Office ainsi que toutes œuvres de l'esprit créées par VERNELYS ou dont celle-ci dispose du droit d'exploitation, à l'exception des Données du Client.",
          "**« Utilisateur »** : la personne physique autorisée par le Client à utiliser la Solution pour son compte et agissant sous sa responsabilité, à savoir un salarié, prestataire, collaborateur ou mandataire social du Client.",
        ],
      },
    ],
  },
  {
    id: "article-1",
    title: "Article 1 — Objet des CGS, acceptation",
    blocks: [
      { type: "h3", text: "1.1 Objet" },
      {
        type: "p",
        text: "Les CGS ont pour objet de déterminer et d'encadrer les modalités selon lesquelles (i) VERNELYS accorde au Client un Droit d'Utilisation de la Solution et fournit, le cas échéant, les Services Afférents, les Services Professionnels et les Développements Spécifiques, et (ii) le Client accède à la Solution et l'utilise.",
      },
      { type: "h3", text: "1.2 Acceptation des CGS par le Client" },
      {
        type: "p",
        text: "Les CGS sont soumises à l'acceptation du Client selon l'une ou l'autre des modalités suivantes, au choix des Parties :",
      },
      {
        type: "ul",
        items: [
          "par signature du Devis applicable, qui emporte acceptation sans réserve des présentes CGS auxquelles il renvoie ; ou",
          "par validation en ligne, en cochant la case prévue à cet effet lors de la création du Compte Client ou de l'authentification.",
        ],
      },
      {
        type: "p",
        text: "Dans l'un et l'autre cas, le Client reconnaît avoir pris connaissance des CGS et déclare les accepter sans réserve. Lorsque les deux modalités interviennent, elles se cumulent sans que l'une puisse être interprétée comme dérogeant à l'autre.",
      },
      {
        type: "p",
        text: "Le Client garantit que la personne physique acceptant les CGS en son nom dispose de la capacité et des pouvoirs nécessaires pour l'engager.",
      },
      {
        type: "p",
        text: "Le Client peut consulter, télécharger, stocker et imprimer à tout moment la version des CGS qui lui est applicable, au format PDF, à l'adresse qui lui est communiquée lors de la souscription et accessible depuis son Compte Client. Une copie sur support durable peut également être obtenue sur simple demande adressée à [contact@vernelys.com](mailto:contact@vernelys.com).",
      },
      {
        type: "p",
        text: "Le Client reconnaît avoir effectué, avant de s'engager, toutes les vérifications d'usage et déclare avoir reçu les informations nécessaires lui permettant d'évaluer l'adéquation de la Solution à ses besoins propres. L'accès et l'utilisation de la Solution par les Utilisateurs emportent acceptation expresse et sans réserve des CGS par le Client.",
      },
    ],
  },
  {
    id: "article-2",
    title: "Article 2 — Versions et modifications des CGS",
    blocks: [
      { type: "h3", text: "2.1 Version applicable" },
      {
        type: "p",
        text: "La version des CGS applicable au Client est celle en vigueur au jour de leur acceptation, telle qu'éventuellement modifiée par la suite dans les conditions ci-après.",
      },
      { type: "h3", text: "2.2 Modification" },
      {
        type: "p",
        text: "Les CGS peuvent être modifiées par VERNELYS, qui notifie toute modification au Client un (1) mois avant son entrée en vigueur. Cette notification est communiquée par courrier électronique, sur le Site Internet et lors de la prochaine connexion à la solution.",
      },
      { type: "h3", text: "2.3 Acceptation ou refus des modifications" },
      {
        type: "p",
        text: "Si le Client refuse les modifications proposées, il doit le notifier par écrit dans un délai d'un (1) mois. En cas de refus exprès, la version des CGS précédemment acceptée par le Client continuera de régir les relations entre les parties. Sans notification de désaccord dans le délai imparti, le Client sera réputé avoir accepté les nouvelles conditions.",
      },
      {
        type: "p",
        text: "Par exception, en cas de modification rendue nécessaire par une évolution législative ou réglementaire, les CGS sont réputées modifiées avec effet immédiat. VERNELYS en informera le Client. Dans ce cas spécifique, le Client ne pourra pas exiger le maintien des conditions antérieures, mais conservera le droit de résilier le contrat sans frais par notification écrite dans un délai d'un (1) mois suivant l'information.",
      },
    ],
  },
  {
    id: "article-3",
    title: "Article 3 — Accès et utilisation de la Solution",
    blocks: [
      { type: "h3", text: "3.1 Droit d'Utilisation" },
      {
        type: "p",
        text: "En contrepartie du paiement du prix de l'abonnement, VERNELYS concède au Client un droit d'accès à distance et d'utilisation en ligne de la Solution, limité, non exclusif, non cessible, non transférable, insusceptible de sous-licence et personnel, conformément à la Documentation et dans les limites du Plan souscrit.",
      },
      {
        type: "p",
        text: "Le Droit d'Utilisation est concédé à compter de la Date de Mise à Disposition et jusqu'à l'expiration ou la résiliation des CGS.",
      },
      { type: "h3", text: "3.2 Accès à la Solution" },
      {
        type: "p",
        text: "La Solution est accessible depuis le Site Internet ou directement via l'adresse communiquée au Client, au moyen d'un navigateur du marché. Le Client reconnaît :",
      },
      {
        type: "ul",
        items: [
          "qu'il dispose de la compétence et des moyens nécessaires pour accéder à la Solution et l'utiliser, en particulier d'un accès à internet souscrit auprès du fournisseur de son choix, dont le coût est à sa charge ;",
          "que la qualité et la fiabilité des transmissions dépendent des infrastructures de réseau sur lesquelles elles circulent et présentent un caractère aléatoire, pouvant conduire à des pannes ou des saturations plaçant le Client dans l'incapacité d'accéder à la Solution ;",
          "qu'il lui appartient d'assurer la sécurité de ses équipements terminaux, de ses logiciels et des Données du Client, notamment contre toute contamination virale ou tentative d'intrusion ;",
          "qu'il est responsable de l'accès et de l'usage de la Solution par ses Utilisateurs et se porte garant du respect des CGS par ceux-ci.",
        ],
      },
      { type: "h3", text: "3.3 Compte Client" },
      {
        type: "p",
        text: "L'accès à la Solution nécessite la création par VERNELYS d'un Compte Client au moyen des informations communiquées par le Client. Celles-ci doivent être complètes, exactes et à jour, ce dont le Client se porte garant, et être actualisées sans délai en cas de modification, notamment en cas d'évolution du nombre d'Utilisateurs, de changement de dénomination sociale, d'adresse ou de coordonnées de facturation.",
      },
      {
        type: "p",
        text: "Celles-ci doivent être complètes, exactes et à jour, ce dont le Client se porte garant, et être actualisées sans délai en cas de modification, notamment en cas d'évolution du nombre d'Utilisateurs, de changement de dénomination sociale, d'adresse ou de coordonnées de facturation.",
      },
      {
        type: "p",
        text: "Le Client demeure seul responsable de l'usage qui pourrait être fait de son Compte Client, sauf en cas de violation de données résultant d'un manquement de VERNELYS. L'adresse de courrier électronique liée au Compte Client doit rester valide aussi longtemps que le compte existe.",
      },
      { type: "h3", text: "3.4 Comptes Utilisateurs" },
      {
        type: "p",
        text: "Chaque Compte Utilisateur est nominatif, spécifique à l'adresse de courrier électronique indiquée, et ne peut être partagé. Le Client s'engage à ce que les mots de passe de ses Utilisateurs demeurent strictement confidentiels et à avertir VERNELYS sans délai en cas de compromission ou de divulgation.",
      },
      {
        type: "p",
        text: "Le Client peut accorder à certains Utilisateurs des droits d'administration. Il est seul responsable de l'attribution de ces droits, de la surveillance des accès et des actions réalisées par ses Utilisateurs.",
      },
      {
        type: "p",
        text: "Toute opération réalisée sur la Solution par un Utilisateur connecté avec ses identifiants est réputée effectuée au nom et pour le compte du Client. Le Client accepte expressément que les systèmes d'enregistrement automatiques de VERNELYS fassent preuve des connexions, de leurs dates et heures, ainsi que des opérations réalisées sur la Solution.",
      },
      { type: "h3", text: "3.5 Restrictions au Droit d'Utilisation" },
      {
        type: "p",
        text: "Le Client s'interdit et interdit à ses Utilisateurs de : (i) donner en nantissement, grever d'une charge, partager, louer, vendre, divulguer les identifiants de connexion ou mettre la Solution à disposition de tout tiers n'étant pas un Utilisateur ; (ii) créer ou permettre à quiconque de créer un programme informatique similaire à la Solution ; (iii) utiliser la Solution à un objet autre que professionnel ; (iv) procéder à une ingénierie inverse, désassembler, décompiler ou tenter de découvrir le code source de la Solution, sous réserve des exceptions légales impératives ; (v) copier, reproduire, imiter, créer des œuvres dérivées, traduire, porter ou modifier le code source ou la structure de la base de données de la Solution ; (vi) réaliser des tests de charge ; (vii) porter atteinte aux droits de propriété intellectuelle de VERNELYS ou aux droits de tiers ; (viii) introduire des données ou fichiers susceptibles de porter atteinte au contenu ou à la présentation de la Solution, en particulier des virus ou logiciels malveillants.",
      },
      { type: "h3", text: "3.6 Suspension du Droit d'Utilisation" },
      {
        type: "p",
        text: "VERNELYS se réserve le droit de suspendre le Droit d'Utilisation du Client ou de tout Utilisateur (i) en cas de violation de données ou de faille de sécurité, afin de protéger les Données du Client jusqu'à ce que l'atteinte ait cessé, (ii) en cas de manquement du Client ou d'un Utilisateur aux CGS, y compris en cas d'impayé, (iii) en cas d'acte ou d'omission inapproprié du Client ou de ses Utilisateurs, y compris injures ou menaces envers le personnel de VERNELYS, ou (iv) en cas de suspicion de fraude ou d'acte malveillant.",
      },
      {
        type: "p",
        text: "Sauf situation d'urgence, VERNELYS accorde au Client un délai de cinq (5) jours ouvrés à compter de la notification du manquement pour y remédier avant toute suspension. Pendant la période de suspension, le prix demeure dû. VERNELYS est relevée de son obligation de fournir la Solution et ne peut être tenue responsable des conséquences de la suspension.",
      },
      { type: "h3", text: "3.7 Plans et périmètre souscrit" },
      {
        type: "p",
        text: "La Solution est accessible selon les Plans dont les fonctionnalités sont décrites sur le Site Internet. Le Plan souscrit, le périmètre fonctionnel et le nombre d'Utilisateurs figurent au Devis. Certains Plans peuvent comporter des limites de volume, dont le dépassement nécessite le passage au Plan supérieur.",
      },
    ],
  },
  {
    id: "article-4",
    title: "Article 4 — Compléments Office",
    blocks: [
      { type: "h3", text: "4.1 Objet et droit d'utilisation" },
      {
        type: "p",
        text: "VERNELYS concède au Client, pour la durée de l'abonnement, un droit d'utilisation des Compléments Office non exclusif, non cessible, insusceptible de sous-licence et nominatif par Utilisateur, comprenant le droit de les installer et de les utiliser sur les postes de travail du Client. Le nombre de postes autorisés figure au Devis.",
      },
      {
        type: "p",
        text: "Les Compléments Office font partie intégrante de la Solution. Les articles 3.5 (restrictions) et 3.6 (suspension) leur sont applicables.",
      },
      { type: "h3", text: "4.2 Prérequis techniques" },
      {
        type: "p",
        text: "L'utilisation des Compléments Office suppose que les postes du Client répondent aux prérequis techniques figurant dans la Documentation, en particulier s'agissant des versions de la suite Microsoft Office, du système d'exploitation et des composants d'exécution supportés. Cette liste évolue dans le temps et est mise à jour par VERNELYS sans que cela constitue une modification des CGS. Il appartient au Client de s'assurer de la conformité de son parc informatique.",
      },
      { type: "h3", text: "4.3 Installation et déploiement" },
      {
        type: "p",
        text: "L'installation et le déploiement des Compléments Office sur les postes du Client relèvent de sa responsabilité, en ce compris l'obtention des droits d'administration nécessaires, l'adaptation de ses politiques de sécurité et, le cas échéant, le déploiement centralisé. VERNELYS peut apporter son assistance au titre des Services Professionnels, facturée séparément.",
      },
      { type: "h3", text: "4.4 Interopérabilité avec les produits Microsoft" },
      {
        type: "p",
        text: "Le Client reconnaît expressément que Microsoft est un éditeur tiers dont VERNELYS ne maîtrise ni les évolutions, ni le calendrier, ni les décisions techniques. En conséquence, toute évolution, mise à jour, modification ou suppression d'une fonctionnalité des produits Microsoft rendant tout ou partie des Compléments Office inopérant, dégradé ou incompatible n'engage pas la responsabilité de VERNELYS et n'ouvre droit au profit du Client ni à indemnité, ni à remboursement, ni à résiliation anticipée.",
      },
      {
        type: "p",
        text: "VERNELYS s'engage, au titre d'une obligation de moyens, à mettre en œuvre les diligences raisonnables pour rétablir la compatibilité des Compléments Office dans un délai raisonnable. Les dispositions de l'article 11 sont applicables.",
      },
      { type: "h3", text: "4.5 Mises à Jour" },
      {
        type: "p",
        text: "Le Client s'engage à installer les Mises à Jour des Compléments Office mises à disposition par VERNELYS et à sensibiliser ses Utilisateurs à cette nécessité. L'utilisation d'une version obsolète fait perdre au Client le bénéfice des services de support et de la garantie de fonctionnement.",
      },
      { type: "h3", text: "4.6 Données traitées par les Compléments Office" },
      {
        type: "p",
        text: "Les Compléments Office accèdent aux fichiers et données du Client nécessaires à son fonctionnement sur le poste de travail et transmettent à la Solution les données décrites dans la Documentation. Ces traitements sont régis par l'article 18 et l'Annexe 1.",
      },
      { type: "h3", text: "4.7 Expiration du droit d'utilisation" },
      {
        type: "p",
        text: "Le droit d'utilisation des Compléments Office expire de plein droit à l'échéance de l'abonnement ou à la résiliation des CGS. Le mécanisme d'activation désactive alors automatiquement les Compléments Office. Le Client s'engage à le désinstaller de l'ensemble des postes concernés dans un délai de quinze (15) jours et s'interdit toute manœuvre visant à contourner, neutraliser ou prolonger le mécanisme d'activation.",
      },
    ],
  },
  {
    id: "article-5",
    title: "Article 5 — Propriété intellectuelle et Données du Client",
    blocks: [
      { type: "h3", text: "5.1 Propriété intellectuelle de VERNELYS" },
      {
        type: "p",
        text: "La Solution est une œuvre de l'esprit au sens du code de la propriété intellectuelle. VERNELYS est investie de l'ensemble des droits de propriété intellectuelle sur la Solution, les Compléments Office, la Documentation, les méthodes, le savoir-faire et les livrables fournis dans le cadre des Services Professionnels, y compris les droits d'auteur, brevets, droits relatifs au secret des affaires, marques et autres droits y afférents.",
      },
      {
        type: "p",
        text: "Le Client n'acquiert aucun droit de propriété ni titre de quelque nature que ce soit, à l'exception du Droit d'Utilisation et, s'agissant des Développements Spécifiques, des droits expressément cédés en application de l'article 6.5. Toute utilisation non expressément autorisée est illicite au sens de l'article L. 122-6 du code de la propriété intellectuelle. Le Client ne doit pas soustraire, dissimuler ou modifier les mentions de droits d'auteur, de marques ou de propriété apposées sur la Solution.",
      },
      { type: "h3", text: "5.2 Retours et suggestions" },
      {
        type: "p",
        text: "Le Client accorde à VERNELYS une licence mondiale, perpétuelle, irrévocable et libre de redevance pour utiliser et incorporer dans la Solution toute suggestion, recommandation ou correction fournie par le Client ou ses Utilisateurs concernant le fonctionnement de la Solution.",
      },
      { type: "h3", text: "5.3 Garantie d'éviction du fait des tiers" },
      { type: "h4", text: "5.3.1 Engagement." },
      {
        type: "p",
        text: "En cas de réclamation introduite par un tiers à l'encontre du Client au motif que la Solution porterait atteinte à un droit de propriété intellectuelle de ce tiers préexistant à la Date de Mise à Disposition, VERNELYS défend le Client et prend en charge les dommages et intérêts, coûts et frais auxquels celui-ci serait condamné par une décision de justice définitive, ou qui seraient convenus par accord transactionnel préalablement approuvé par VERNELYS.",
      },
      { type: "h4", text: "5.3.2 Conditions cumulatives." },
      {
        type: "p",
        text: "Le bénéfice de cette garantie est subordonné au respect cumulatif des conditions suivantes : (i) le Client informe VERNELYS par écrit de la réclamation dans un délai de cinq (5) jours ouvrés à compter de sa connaissance ; (ii) le Client confie à VERNELYS le contrôle exclusif de la contestation et du règlement de la réclamation, y compris le droit de transiger ; (iii) le Client fournit à VERNELYS, aux frais de cette dernière, toute l'assistance, les informations et les pouvoirs raisonnablement nécessaires ; (iv) le Client s'abstient de toute reconnaissance de responsabilité et de toute transaction sans l'accord écrit préalable de VERNELYS. Le non-respect de l'une quelconque de ces conditions prive le Client du bénéfice de la garantie.",
      },
      { type: "h4", text: "5.3.3 Exclusions." },
      {
        type: "p",
        text: "La garantie ne s'applique pas aux réclamations résultant de : (i) toute utilisation excédant le périmètre du Droit d'Utilisation ; (ii) toute modification ou œuvre dérivée de la Solution réalisée par ou pour le Client ; (iii) l'utilisation d'une version obsolète après mise à disposition par VERNELYS d'une version non contrefaisante ; (iv) toute combinaison de la Solution avec une technologie, un logiciel, un matériel ou un Service en Ligne Tiers non fourni par VERNELYS, lorsque la contrefaçon alléguée aurait pu être évitée sans cette combinaison ; (v) les Données du Client ; (vi) les Développements Spécifiques réalisés sur les spécifications du Client ; (vii) les données de sortie des Fonctionnalités IA.",
      },
      { type: "h4", text: "5.3.4 Recours exclusif du Client." },
      {
        type: "p",
        text: "En cas de réclamation couverte, VERNELYS peut, à sa seule discrétion : (i) obtenir pour le Client le droit de continuer à utiliser la Solution, (ii) modifier ou remplacer la Solution pour la rendre non contrefaisante, sous réserve qu'elle demeure substantiellement équivalente, ou (iii) résilier les CGS, le Client obtenant alors le remboursement au prorata des montants payés d'avance et non consommés. L'option retenue par VERNELYS constitue le dédommagement unique et exclusif du Client au titre d'une réclamation pour atteinte à des droits de propriété intellectuelle.",
      },
      { type: "h4", text: "5.3.5 Plafond." },
      {
        type: "p",
        text: "Les obligations de VERNELYS au titre du présent article s'exercent dans la limite du plafond stipulé à l'article 11.4.",
      },
      { type: "h4", text: "5.3.6 Garantie réciproque du Client." },
      {
        type: "p",
        text: "Le Client garantit que les Données du Client, ses spécifications et l'ensemble des éléments qu'il fournit à VERNELYS ne portent atteinte à aucun droit de tiers. Il garantit VERNELYS contre tout recours à ce titre et prend à sa charge les frais de défense ainsi que les conséquences d'une éventuelle condamnation.",
      },
      { type: "h3", text: "5.4 Propriété des Données du Client" },
      {
        type: "p",
        text: "Le Client est et reste à tout moment propriétaire des Données du Client. Il s'engage à n'insérer dans la Solution que des données licites, non contraires à l'ordre public et aux bonnes mœurs, et s'interdit d'y mettre en ligne des données protégées par des droits de tiers sans avoir obtenu au préalable les autorisations nécessaires.",
      },
      {
        type: "h3",
        text: "5.5 Droits limités d'utilisation des Données du Client par VERNELYS",
      },
      {
        type: "p",
        text: "Dans le cadre de l'exécution des CGS, le Client autorise VERNELYS à collecter, conserver et traiter les Données du Client, directement ou par l'intermédiaire de ses sous-traitants, aux seules fins de : (i) fourniture de la Solution et des Services Afférents ; (ii) surveillance, détection, prévention et traitement des fraudes, gestion des sauvegardes, des incidents de sécurité et des Anomalies ; (iii) production de statistiques d'utilisation et amélioration de la Solution et des Services Afférents ; (iv) respect de ses obligations légales et contractuelles. Toute autre utilisation est exclue. VERNELYS s'interdit notamment de vendre, louer ou céder les Données du Client à des tiers et de les utiliser pour entraîner ou améliorer des modèles d'intelligence artificielle, dans les conditions précisées à l'article 15.3.",
      },
    ],
  },
  {
    id: "article-6",
    title: "Article 6 — Développements Spécifiques",
    blocks: [
      { type: "h3", text: "6.1 Souscription" },
      {
        type: "p",
        text: "Les Développements Spécifiques font l'objet d'un Devis distinct, accepté par le Client. Le Devis précise le périmètre, les livrables attendus, le prix, les modalités de facturation et le calendrier prévisionnel.",
      },
      { type: "h3", text: "6.2 Spécifications" },
      {
        type: "p",
        text: "Sur la base de l'expression de besoin du Client, VERNELYS établit les spécifications du Développement Spécifique. Ces spécifications sont soumises à la validation écrite du Client et constituent, une fois validées, le référentiel exclusif de la recette. Toute demande d'évolution postérieure à cette validation fait l'objet d'un avenant chiffré, pouvant emporter révision du prix et du calendrier.",
      },
      { type: "h3", text: "6.3 Obligation de collaboration du Client" },
      {
        type: "p",
        text: "Le Client désigne un interlocuteur unique disposant du pouvoir de valider les spécifications et la recette. Il s'engage à répondre aux sollicitations de VERNELYS dans un délai de cinq (5) jours ouvrés, à fournir en temps utile les accès, environnements, jeux de données et informations nécessaires, et à participer aux phases de test. Tout retard imputable au Client décale d'autant le calendrier et peut donner lieu à refacturation des temps d'immobilisation constatés.",
      },
      { type: "h3", text: "6.4 Recette" },
      {
        type: "p",
        text: "À la livraison, le Client dispose d'un délai de dix (10) jours ouvrés pour vérifier la conformité du livrable aux spécifications validées et formuler, le cas échéant, des réserves écrites et motivées. VERNELYS procède aux corrections nécessaires et représente le livrable, ouvrant un nouveau délai de vérification de cinq (5) jours ouvrés.",
      },
      {
        type: "p",
        text: "La recette est réputée acquise sans réserve : (i) à défaut de réserve écrite et motivée formulée dans les délais ci-dessus, ou (ii) dès la mise en production ou l'exploitation du livrable par le Client, quelle qu'en soit l'étendue. Ne peuvent constituer des réserves les demandes portant sur des fonctionnalités non prévues aux spécifications validées.",
      },
      {
        type: "h3",
        text: "6.5 Propriété intellectuelle des Développements Spécifiques",
      },
      { type: "h4", text: "6.5.1 Éléments préexistants." },
      {
        type: "p",
        text: "Les briques logicielles, bibliothèques, frameworks, outils, méthodes et savoir-faire développés ou acquis par VERNELYS antérieurement au Développement Spécifique, ou indépendamment de celui-ci, demeurent sa propriété exclusive. Le Client bénéficie sur ces éléments d'un droit d'utilisation non exclusif, non cessible, limité à ses besoins internes propres et à la durée des CGS.",
      },
      { type: "h4", text: "6.5.2 Composants génériques." },
      {
        type: "p",
        text: "Tout élément développé à l'occasion du Développement Spécifique mais ne reflétant pas la logique métier propre au Client notamment les composants d'interface, les mécanismes techniques, les connecteurs, les routines de traitement et tout élément susceptible d'être réemployé sans révéler l'organisation ou les processus du Client demeure la propriété exclusive de VERNELYS et suit le régime de l'article 6.5.1.",
      },
      { type: "h4", text: "6.5.3 Cession du Livrable Spécifique." },
      {
        type: "p",
        text: "VERNELYS cède au Client, à titre exclusif, les droits patrimoniaux d'auteur portant sur la partie du livrable reflétant la logique métier propre au Client (le « Livrable Spécifique »), à savoir les droits de reproduction, de représentation, d'adaptation, de traduction, de correction et d'évolution, sur tout support connu ou inconnu, pour le monde entier et pour la durée légale de protection des droits.",
      },
      {
        type: "p",
        text: "Conformément à l'article L. 131-1 du code de la propriété intellectuelle, la cession n'est pas opérée par les présentes CGS mais par chaque Devis, qui identifie le Livrable Spécifique concerné et délimite les droits cédés dans les conditions requises par l'article L. 131-3 du même code.",
      },
      {
        type: "p",
        text: "La cession ne prend effet qu'à l'encaissement intégral du prix du Développement Spécifique. Jusqu'à cette date, le Client ne dispose d'aucun droit sur le Livrable Spécifique autre qu'un droit d'usage provisoire révocable.",
      },
      { type: "h4", text: "6.5.4 Destination des droits cédés." },
      {
        type: "p",
        text: "La cession est consentie pour les besoins internes propres du Client, en ce compris le droit de reproduire, d'adapter, de corriger et de faire évoluer le Livrable Spécifique, directement ou par un prestataire de son choix soumis à une obligation de confidentialité. Elle exclut expressément le droit de commercialiser, distribuer, concéder en licence le Livrable Spécifique.",
      },
      { type: "h4", text: "6.5.5 Licence en retour au profit de VERNELYS." },
      {
        type: "p",
        text: "Le Client concède à VERNELYS, à compter de la cession, une licence non exclusive, mondiale, irrévocable, libre de redevance et consentie pour la durée légale de protection des droits, portant sur le Livrable Spécifique, comprenant le droit de l'utiliser, le reproduire, l'adapter, le modifier, l'intégrer à la Solution et de l'exploiter auprès de tout tiers, y compris à titre onéreux. Cette licence s'exerce dans le respect de l'article 17 : elle ne confère à VERNELYS aucun droit sur les Données du Client ni sur ses Informations Confidentielles, et VERNELYS s'interdit, dans le cadre de toute réutilisation, de divulguer des éléments permettant d'identifier le Client, son organisation ou ses processus.",
      },
      {
        type: "p",
        text: "Le Client peut exclure la présente licence en souscrivant l'option d'exclusivité au tarif figurant au Devis ; dans ce cas, VERNELYS conserve uniquement les droits visés aux articles 6.5.1, 6.5.2 et 6.5.6.",
      },
      { type: "h4", text: "6.5.6 Savoir-faire, résiduels et non-exclusivité." },
      {
        type: "p",
        text: "VERNELYS demeure libre de réutiliser sans restriction les idées, principes, méthodes, techniques, algorithmes et connaissances mis en œuvre ou acquis à l'occasion du Développement Spécifique. Le Client reconnaît expressément que VERNELYS reste libre de concevoir, développer et commercialiser des solutions ou fonctionnalités identiques ou similaires pour tout tiers, y compris un concurrent du Client, sans que le Client puisse se prévaloir d'une quelconque exclusivité.",
      },
      { type: "h4", text: "6.5.7 Remise du code source." },
      {
        type: "p",
        text: "VERNELYS remet au Client le code source du Livrable Spécifique, à l'issue de la recette et après encaissement intégral du prix, dans le format et selon les modalités précisées au Devis. Cette remise ne porte que sur le Livrable Spécifique, à l'exclusion des éléments préexistants et des composants génériques visés aux articles 6.5.1 et 6.5.2, lesquels demeurent fournis sous forme exécutable ou par l'intermédiaire de la Solution, sous licence.",
      },
      { type: "h3", text: "6.6 Garantie" },
      {
        type: "p",
        text: "VERNELYS garantit la conformité du Livrable Spécifique aux spécifications validées pendant une durée de six (6) mois à compter de la recette. Sont exclues de cette garantie les non-conformités résultant d'une modification réalisée par le Client ou un tiers, de l'environnement technique du Client, de la qualité des données sources fournies, ou d'une utilisation non conforme aux spécifications. VERNELYS est tenue d'une obligation de moyens.",
      },
      { type: "h3", text: "6.7 Maintenance" },
      {
        type: "p",
        text: "La maintenance corrective et évolutive du Livrable Spécifique n'est pas incluse dans le prix du Développement Spécifique. Elle fait, le cas échéant, l'objet d'un abonnement complémentaire chiffré au Devis. À défaut de souscription, aucune intervention n'est due par VERNELYS au-delà de la période de garantie.",
      },
      { type: "h3", text: "6.8 Prix et facturation" },
      {
        type: "p",
        text: "Le Développement Spécifique est réalisé au forfait ou en régie selon la mention portée au Devis. Sauf stipulation contraire, un acompte est exigible à la commande, le solde étant facturé selon les jalons prévus au Devis. Les prestations en régie sont facturées au temps passé sur la base du taux journalier figurant au Devis.",
      },
      { type: "h3", text: "6.9 Exécution au sein de la Solution" },
      {
        type: "p",
        text: "Lorsque le Livrable Spécifique s'exécute au sein de la Solution, son accès et son utilisation demeurent régis par l'article 3 et subordonnés à un abonnement en cours de validité. La cession consentie à l'article 6.5.3 n'emporte pas droit d'accès à la Solution au-delà du terme des CGS.",
      },
    ],
  },
  {
    id: "article-7",
    title: "Article 7 — Services Professionnels",
    blocks: [
      { type: "h3", text: "7.1 Souscription" },
      {
        type: "p",
        text: "VERNELYS peut être amenée à fournir des Services Professionnels auxquels le Client souscrit par Devis. Ces services sont facturés séparément de l'abonnement.",
      },
      { type: "h3", text: "7.2 Migration et reprise de données" },
      {
        type: "p",
        text: "VERNELYS propose des services de migration de données depuis les systèmes préexistants du Client vers la Solution. Le Client reconnaît que la migration peut nécessiter, selon la nature et le format des données sources, des opérations de retraitement préalables, dont VERNELYS l'informe des limites techniques éventuelles. Le Client demeure responsable de l'exactitude, de la qualité et de la licéité des données sources qu'il fournit. Il lui appartient de vérifier les données après migration et de signaler toute anomalie dans un délai de quarante-huit (48) heures suivant leur mise à disposition.",
      },
      { type: "h3", text: "7.3 Restauration de données" },
      {
        type: "p",
        text: "L'Utilisateur disposant du rôle d'administrateur qui souhaite obtenir la restauration de Données du Client supprimées en informe VERNELYS dans les meilleurs délais. Toute restauration donne lieu au paiement de frais spécifiques à la charge du Client, majorés lorsque la suppression remonte à plus de trente (30) jours. VERNELYS est tenue d'une obligation de moyens et se réserve le droit de refuser une demande de restauration.",
      },
      { type: "h3", text: "7.4 Paramétrage et accompagnement" },
      {
        type: "p",
        text: "VERNELYS peut réaliser des prestations de paramétrage, d'accompagnement au déploiement et d'assistance à l'installation des Compléments Office, selon les modalités et le prix figurant au Devis.",
      },
      { type: "h3", text: "7.5 Exclusion de garantie et coopération" },
      {
        type: "p",
        text: "VERNELYS est débitrice d'une obligation de moyens au titre des Services Professionnels et décline toute responsabilité quant à leur adéquation aux besoins propres du Client. Le Client coopère avec VERNELYS, notamment en fournissant les informations et accès nécessaires, en participant aux tests et processus de validation, et en s'assurant de l'exactitude des informations transmises.",
      },
    ],
  },
  {
    id: "article-8",
    title: "Article 8 — Obligations des Parties",
    blocks: [
      { type: "h3", text: "8.1 Obligations de VERNELYS" },
      { type: "h4", text: "8.1.1 Disponibilité." },
      {
        type: "p",
        text: "VERNELYS dimensionne ses infrastructures d'hébergement, matériels et systèmes de manière à délivrer la Solution dans les meilleures conditions de sécurité et d'accessibilité. VERNELYS s'engage à mettre la Solution à disposition du Client dans les conditions de disponibilité définies en Annexe 2 (Contrat de niveau de service), qui prévoit une disponibilité de 99 %. Si la disponibilité constatée est inférieure à ce taux, VERNELYS accorde au Client des crédits selon les modalités de l'Annexe 2.",
      },
      {
        type: "p",
        text: "Si la disponibilité de la Solution est inférieure à 90 % sur un mois calendaire donné, le Client peut résilier les CGS immédiatement et sans frais, nonobstant toute période d'engagement en cours, et obtenir le remboursement au prorata des montants payés d'avance et non consommés.",
      },
      { type: "h4", text: "8.1.2 Mises à Jour." },
      {
        type: "p",
        text: "Les Mises à Jour sont mises à disposition du Client sans frais supplémentaires. Toutefois, la mise à disposition de nouvelles fonctionnalités non incluses dans le Plan initialement souscrit peut nécessiter le paiement de frais supplémentaires. Les CGS s'appliquent à l'ensemble des Mises à Jour. VERNELYS ne saurait en aucun cas être tenue de réaliser les évolutions demandées par le Client.",
      },
      { type: "h4", text: "8.1.3 Correction des Anomalies." },
      {
        type: "p",
        text: "VERNELYS ne saurait garantir que la Solution est exempte de tout aléa, défaut de conception ou d'utilisation, mais s'engage à remédier aux Anomalies avec la diligence d'un professionnel du secteur. La Solution est mise à disposition en l'état, sans faire l'objet de mesures d'adaptation spécifiques, et ne saurait répondre à l'ensemble des besoins propres du Client. VERNELYS ne garantit pas l'aptitude de la Solution à atteindre les objectifs ou résultats que le Client se serait fixés.",
      },
      { type: "h4", text: "8.1.4 Sécurité." },
      {
        type: "p",
        text: "VERNELYS s'engage à mettre en œuvre les mesures techniques et organisationnelles conformes à l'état de l'art pour assurer la sécurité des Données du Client hébergées dans ses systèmes. Ces mesures sont décrites sur la page accessible à l'adresse [•] et détaillées à l'Appendice 2 de l'Annexe 1. Si le Client souhaite réaliser un test de sécurité de la Solution par ses propres moyens, quelles qu'en soient les modalités, il doit obtenir l'autorisation écrite préalable de VERNELYS.",
      },
      { type: "h4", text: "8.1.5 Hébergement." },
      {
        type: "p",
        text: "VERNELYS assure l'hébergement de la Solution et des Données du Client sur des serveurs localisés sur le territoire de l'Union européenne.",
      },
      { type: "h3", text: "8.2 Obligations du Client" },
      { type: "p", text: "Le Client, pour son compte et celui de ses Utilisateurs :" },
      {
        type: "ul",
        items: [
          "paie le prix de l'abonnement et des prestations souscrites conformément aux CGS ;",
          "accède à la Solution et l'utilise conformément aux dispositions légales en vigueur, à la Documentation, aux CGS et pour les seuls besoins de son activité professionnelle ;",
          "est seul responsable des Données du Client et assume l'entière responsabilité de leur nature, de leur contenu, de leur qualité, de leur exactitude, de leur intégrité et de leur licéité ;",
          "s'engage à ne pas tenter d'obtenir un accès non autorisé à la Solution ;",
          "s'interdit d'envoyer ou de stocker via la Solution des données à caractère illicite, obscène ou diffamatoire, ou portant atteinte aux droits d'un tiers, à la protection des mineurs ou à la vie privée ;",
          "met à la disposition de VERNELYS, en temps utile et à ses frais, les données techniques, informations, fichiers et ressources nécessaires à la fourniture de la Solution ;",
          "s'assure qu'aucune personne autre que les Utilisateurs n'accède à la Solution et informe VERNELYS sans délai de tout incident dont il aurait connaissance ;",
          "prend les dispositions nécessaires pour que ses Utilisateurs prennent connaissance des CGS et respectent les obligations qui en résultent ;",
          "prend toutes précautions pour garantir la non-divulgation des Informations Confidentielles au personnel non autorisé.",
        ],
      },
    ],
  },
  {
    id: "article-9",
    title: "Article 9 — Durée, résiliation et réversibilité",
    blocks: [
      { type: "h3", text: "9.1 Entrée en vigueur et durée d'engagement" },
      {
        type: "p",
        text: "Les CGS entrent en vigueur à compter de la date de leur acceptation par le Client.",
      },
      {
        type: "p",
        text: "Sauf durée différente stipulée au Devis, les CGS sont conclues pour une durée ferme de trente-six (36) mois à compter de la Date de Mise à Disposition (la « Période d'Engagement Initiale »).",
      },
      {
        type: "p",
        text: "À l'issue de la Période d'Engagement Initiale, les CGS sont reconduites tacitement pour des périodes successives de douze (12) mois, sauf résiliation par l'une ou l'autre des Parties notifiée par écrit au moins deux (2) mois avant le terme de la période en cours.",
      },
      {
        type: "p",
        text: "VERNELYS informe le Client, par courrier électronique adressé trente (30) jours avant l'expiration du délai de préavis, de la date limite à laquelle il peut notifier sa résiliation pour le terme en cours.",
      },
      { type: "h3", text: "9.2 Ajout d'Utilisateurs en cours de période" },
      {
        type: "p",
        text: "Les Utilisateurs ajoutés en cours de période d'engagement sont souscrits pour la durée restant à courir jusqu'au terme de la période en cours et facturés prorata temporis à compter de leur date d'activation, dans les conditions de l'article 10.2.",
      },
      { type: "h3", text: "9.3 Extension de périmètre de périmètre" },
      {
        type: "p",
        text: "La souscription en cours de période d'Utilisateurs supplémentaires ou d'une application, d'un module ou d'un complément non prévu au Devis initial est rattachée à la période d'engagement en cours, dont elle suit le terme et les conditions de renouvellement, et facturée prorata temporis. Par exception, lorsqu'une application, un module ou un complément est souscrit au cours des douze (12) derniers mois de la période d'engagement, il est souscrit pour une durée minimale de douze (12) mois, sans modifier le terme applicable au périmètre initial.",
      },
      { type: "h3", text: "9.4 Résiliation pour manquement" },
      {
        type: "p",
        text: "Chaque Partie peut résilier les CGS de plein droit en cas d'inexécution par l'autre Partie de l'une quelconque de ses obligations, non réparée dans un délai de quinze (15) jours calendaires suivant notification. La résiliation prend effet à l'issue de ce délai, sauf accord contraire des Parties.",
      },
      { type: "h3", text: "9.5 Résiliation anticipée par le Client" },
      {
        type: "p",
        text: "Sauf en cas de résiliation pour manquement de VERNELYS à ses obligations ou en application de l'article 8.1.1, toute résiliation intervenant avant le terme d'une période d'engagement entraîne :",
      },
      {
        type: "p",
        text: "(i) l'absence de remboursement des montants déjà versés au titre de la période commencée, et",
      },
      {
        type: "p",
        text: "(ii) la déchéance rétroactive des remises accordées au titre de l'engagement, entraînant le recalcul de la période écoulée sur la base du tarif standard sans engagement. Le Client sera de plein droit et immédiatement redevable de la différence entre ce montant recalculé et les sommes déjà versées.",
      },
      {
        type: "p",
        text: "Le tarif standard sans engagement et le montant de la remise d'engagement figurent au Devis.",
      },
      { type: "h3", text: "9.6 Effets de la résiliation" },
      {
        type: "p",
        text: "La résiliation entraîne, à sa date d'effet, la cessation du Droit d'Utilisation, la clôture du Compte Client et des Comptes Utilisateurs, la désactivation des Compléments Office dans les conditions de l'article 4.7, la suppression de toute synchronisation avec les Services en Ligne Tiers, puis la suppression des Données du Client dans les conditions de l'Annexe 1. Les stipulations qui, par leur nature, ont vocation à survivre à la résiliation demeurent en vigueur.",
      },
      {
        type: "h3",
        text: "9.7 Changement de fournisseur et export des Données du Client",
      },
      {
        type: "p",
        text: "Le présent article s'applique notamment en cas de demande de changement de fournisseur au sens du règlement (UE) 2023/2854 (le « Data Act »).",
      },
      {
        type: "p",
        text: "Le Client qui résilie les CGS peut à tout moment transférer les Données du Client exportables vers un nouveau fournisseur ou vers sa propre infrastructure, ou en demander la suppression. VERNELYS met gratuitement à disposition les Données du Client exportables dans un format structuré, couramment utilisé et lisible par machine. La spécification des données exportables et les instructions d'export figurent dans la Documentation.",
      },
      {
        type: "p",
        text: "VERNELYS fournit une assistance raisonnable durant le processus de changement et maintient la continuité de la Solution pendant une période transitoire de trente (30) jours mise en place sur demande expresse du Client, prolongeable une fois à la demande de celui-ci. VERNELYS ne facture aucun frais au titre du changement de fournisseur ou du transfert des Données du Client ; les sommes dues au titre de l'article 9.5 demeurent exigibles et constituent des frais de résiliation anticipée au sens du Data Act.",
      },
      {
        type: "p",
        text: "Dans les trente (30) jours calendaires suivant la fin de la période transitoire ou la résiliation, le Client doit exporter les Données du Client qu'il souhaite conserver. Au-delà, VERNELYS se réserve le droit de les supprimer conformément à l'Annexe 1. Le Client s'engage à procéder lui-même aux opérations d'archivage nécessaires au respect de ses obligations légales de conservation.",
      },
    ],
  },
  {
    id: "article-10",
    title: "Article 10 — Conditions financières",
    blocks: [
      { type: "h3", text: "10.1 Prix" },
      {
        type: "p",
        text: "En contrepartie du Droit d'Utilisation et des Services Afférents, le Client s'engage à payer à VERNELYS le prix figurant au Devis. Sauf accord exprès contraire, tous les montants sont exigibles en euros. Tous les prix s'entendent hors taxes. Sauf accord écrit contraire, chaque Partie assume ses propres frais.",
      },
      { type: "h3", text: "10.2 Modalités de paiement" },
      {
        type: "p",
        text: "Le prix est payable d'avance, à la commande puis à chaque échéance, selon la périodicité retenue au Devis : mensuelle ou semestrielle. Les Utilisateurs ajoutés en cours de période font l'objet d'une régularisation à l'échéance suivante, calculée prorata temporis à compter de leur date d'activation. Le moyen de paiement accepté est le virement bancaire ou le prélèvement SEPA.",
      },
      {
        type: "p",
        text: "Le virement bancaire est le mode de paiement par défaut. Le Client s'engage à maintenir un moyen de paiement valide pendant toute la durée des CGS.",
      },
      { type: "h3", text: "10.3 Révision des prix" },
      {
        type: "p",
        text: "Les prix sont révisés annuellement, à la date anniversaire de la Date de Mise à Disposition, par application de la variation de l'indice SYNTEC selon la formule : P1 = P0 × (S1 / S0), où P0 désigne le prix en vigueur, S0 le dernier indice publié à la date de signature du Devis et S1 le dernier indice publié à la date de révision. La révision ne peut conduire à une diminution du prix.",
      },
      { type: "h3", text: "10.4 Contestation de facture" },
      {
        type: "p",
        text: "Toute contestation de facture doit être notifiée à VERNELYS dans un délai de soixante (60) jours suivant sa date d'émission. L'existence d'une contestation n'affecte pas l'exigibilité immédiate de la facture, laquelle ne peut être payée par compensation. Si la contestation est fondée, VERNELYS procède aux ajustements nécessaires dans les meilleurs délais.",
      },
      { type: "h3", text: "10.5 Retard de paiement" },
      {
        type: "p",
        text: "En cas de non-paiement à l'échéance, toute somme impayée porte automatiquement intérêt, sans formalité préalable, à un taux égal à trois (3) fois le taux de l'intérêt légal en vigueur, jusqu'à parfait paiement. VERNELYS facture en outre une indemnité forfaitaire de recouvrement de quarante (40) euros par facture impayée, sans préjudice de la possibilité de réclamer une indemnisation complémentaire sur justification. Le défaut de paiement autorise VERNELYS à suspendre le Droit d'Utilisation dans les conditions de l'article 3.6.",
      },
    ],
  },
  {
    id: "article-11",
    title: "Article 11 — Responsabilité et assurance",
    blocks: [
      { type: "h3", text: "11.1 Obligation de moyens" },
      {
        type: "p",
        text: "VERNELYS est débitrice d'une obligation de moyens au titre des CGS, y compris en termes de performance, de qualité et de continuité de service, de sécurité, d'évolutivité et de mise en conformité avec l'état de l'art, ainsi que s'agissant des fonctionnalités qui ne dépendent pas d'elle, notamment celles reposant sur des services, serveurs ou interfaces de programmation de tiers.",
      },
      { type: "h3", text: "11.2 Limitation de responsabilité" },
      {
        type: "p",
        text: "Le Client reconnaît que la responsabilité de VERNELYS ne saurait être engagée au titre des décisions et choix qu'il effectue sur la base de la Solution. Les automatisations et suggestions proposées par la Solution sont soumises à la validation du Client, à qui il appartient d'en vérifier la pertinence ; la responsabilité de VERNELYS ne saurait être engagée au titre d'une suggestion validée par le Client.",
      },
      {
        type: "p",
        text: "Le Client reconnaît expressément que VERNELYS ne pourra être tenue responsable des interruptions de service ou de tout dommage lié à un cas de force majeure, au fait du Client ou d'un Utilisateur, ou au fait d'un tiers, notamment les éditeurs de Services en Ligne Tiers et l'éditeur de la suite bureautique visée à l'article 4.4.",
      },
      { type: "h3", text: "11.3 Nature des dommages réparables" },
      {
        type: "p",
        text: "VERNELYS n'est tenue que de la réparation des dommages directs et prévisibles directement imputables à un manquement à l'une de ses obligations contractuelles. VERNELYS ne peut en aucune circonstance encourir de responsabilité au titre des pertes ou dommages indirects, ni au titre de tout gain manqué, perte d'exploitation, perte de chiffre d'affaires ou de bénéfice, perte de clientèle, perte de données non imputable à VERNELYS ou perte d'une chance. Le Client s'engage à prendre toutes précautions utiles pour réduire le préjudice susceptible de résulter de l'utilisation de la Solution.",
      },
      { type: "h3", text: "11.4 Plafond de responsabilité" },
      {
        type: "p",
        text: "Le montant des dommages réparables que VERNELYS peut être amenée à payer au Client est limité, tous dommages confondus et cumulés, au prix effectivement reçu par VERNELYS au titre du Droit d'Utilisation au cours des neuf (9) mois précédant la survenance du fait générateur du dommage.",
      },
      {
        type: "p",
        text: "Le plafond ci-dessus ne s'applique pas (i) en cas de dol ou de faute lourde de VERNELYS, ni (ii) en cas de dommages corporels ou de décès.",
      },
      {
        type: "p",
        text: "Le Client peut porter ce plafond à douze (12) mois en souscrivant l'option correspondante, facturée selon le tarif en vigueur figurant au Devis. Cette option est souscrite à la commande ou au renouvellement, pour la période d'engagement entière, et présente un caractère irrévocable. Elle ne peut être souscrite postérieurement à la survenance d'un fait générateur de responsabilité, ni produire d'effet rétroactif.",
      },
      {
        type: "p",
        text: "Le présent article survit à la résiliation ou à la résolution des CGS pour quelque cause que ce soit.",
      },
      { type: "h3", text: "11.5 Assurance" },
      {
        type: "p",
        text: "VERNELYS s'engage à maintenir en vigueur une assurance responsabilité civile professionnelle couvrant les dommages susceptibles de survenir à l'occasion de l'exécution des CGS.",
      },
    ],
  },
  {
    id: "article-12",
    title: "Article 12 — Force majeure",
    blocks: [
      {
        type: "p",
        text: "Conformément à l'article 1218 du code civil, chacune des Parties est dégagée de toute responsabilité si l'inexécution de ses obligations résulte d'un cas de force majeure, au sens de la loi et de la jurisprudence.",
      },
      {
        type: "p",
        text: "Sont notamment considérés comme des cas de force majeure, sans que cette liste soit limitative et sous réserve qu'ils réunissent les caractères de l'article 1218 du code civil : les catastrophes naturelles, incendies et inondations, les épidémies et pandémies, les guerres, actes de terrorisme et émeutes, les grèves générales ou affectant les fournisseurs d'énergie ou de télécommunications, les décisions des autorités publiques, les défaillances généralisées des réseaux de télécommunication ou d'électricité, ainsi que les cyberattaques, notamment les attaques par déni de service, les intrusions et les rançongiciels affectant VERNELYS ou l'un de ses sous-traitants.",
      },
      {
        type: "p",
        text: "La Partie invoquant de telles circonstances en notifie l'existence à l'autre Partie dès que possible, met en œuvre ses meilleurs efforts pour en limiter les conséquences et reprend l'exécution des CGS immédiatement après leur disparition. Si ces circonstances se poursuivent au-delà d'un (1) mois, les CGS peuvent être résiliées sans indemnité de part et d'autre, par notification écrite prenant effet à sa réception.",
      },
    ],
  },
  {
    id: "article-13",
    title: "Article 13 — Services de support",
    blocks: [
      {
        type: "p",
        text: "VERNELYS met à la disposition des Utilisateurs un service de support dans les conditions définies en Annexe 3. Les demandes de support sont soumises exclusivement par les canaux qui y sont décrits.",
      },
    ],
  },
  {
    id: "article-14",
    title: "Article 14 — Mise à Jour et maintenance",
    blocks: [
      { type: "h3", text: "14.1 Maintenance planifiée" },
      {
        type: "p",
        text: "VERNELYS planifie et effectue périodiquement des travaux de maintenance, notamment dans le cadre des Mises à Jour, afin de mettre à disposition de nouvelles fonctionnalités ou de corriger des Anomalies. VERNELYS planifie ces opérations de manière à minimiser leur impact sur la disponibilité de la Solution.",
      },
      { type: "h3", text: "14.2 Maintenance non planifiée" },
      {
        type: "p",
        text: "VERNELYS peut effectuer des travaux de maintenance non planifiés à tout moment, notamment pour corriger une Anomalie en urgence. Le Client reconnaît que les évolutions législatives ou technologiques peuvent rendre tout ou partie de la Solution inadaptée ; VERNELYS a alors la faculté d'effectuer une Mise à Jour non planifiée.",
      },
      { type: "h3", text: "14.3 Notification" },
      {
        type: "p",
        text: "Dans la mesure du possible, VERNELYS avertit le Client de la date et de l'heure des interventions de maintenance planifiée avec un préavis de deux (2) jours ouvrés. Lorsqu'une opération nécessite l'interruption de la Solution, VERNELYS l'effectue de préférence en dehors des Heures Ouvrées, sauf maintenance non planifiée et urgente.",
      },
    ],
  },
  {
    id: "article-15",
    title: "Article 15 — Fonctionnalités IA",
    blocks: [
      { type: "h3", text: "15.1 Activation" },
      {
        type: "p",
        text: "Selon le Plan souscrit, la Solution intègre des fonctionnalités basées sur l'Intelligence Artificielle (IA) accessibles aux Utilisateurs. En souscrivant à la Solution et en l'utilisant, le Client accepte que l'IA soit une composante inhérente aux fonctionnalités proposées.",
      },
      { type: "h3", text: "15.2 Données traitées et propriété" },
      {
        type: "p",
        text: "Les données traitées par les Fonctionnalités IA comprennent (i) les données fournies par les Utilisateurs pour être traitées, notamment celles saisies dans une instruction (les « Données d'Entrée »), (ii) les Données du Client et toute base de connaissance permettant d'enrichir ou de contextualiser les réponses (les « Données Sources ») et (iii) tout résultat généré (les « Données de Sortie »).",
      },
      {
        type: "p",
        text: "Le Client demeure propriétaire des Données d'Entrée et accorde à VERNELYS une licence non exclusive, pour la durée des CGS, pour accéder, traiter, utiliser et afficher les Données d'Entrée aux seules fins de fourniture des Fonctionnalités IA. Dans la mesure où le Client dispose de droits sur les Données de Sortie, il les conserve et accorde à VERNELYS une licence de même portée et aux mêmes fins.",
      },
      { type: "h3", text: "15.3 Non-réutilisation aux fins d'entraînement" },
      {
        type: "p",
        text: "VERNELYS n'utilise pas, et n'autorise aucun tiers à utiliser, les Données d'Entrée, les Données Sources et les Données de Sortie pour entraîner ou améliorer des modèles d'intelligence artificielle générative.",
      },
      { type: "h3", text: "15.4 Données d'usage" },
      {
        type: "p",
        text: "VERNELYS peut utiliser les métadonnées relatives à la manière dont les Utilisateurs recourent aux Fonctionnalités IA, ainsi que les données de journalisation, aux fins d'amélioration de ces fonctionnalités. Ces données ne sont partagées avec aucun tiers aux fins d'entraînement de modèles.",
      },
      { type: "h3", text: "15.5 Fournisseurs de modèles" },
      {
        type: "p",
        text: "Les Fonctionnalités IA reposent sur des modèles fournis par des tiers. Ces fournisseurs interviennent en qualité de sous-traitants ultérieurs au sens du RGPD et figurent, avec l'activité qui leur est confiée et le lieu de traitement, sur la liste tenue à jour à l'adresse [•]. Lorsque le traitement s'opère en dehors de l'Union européenne, VERNELYS met en œuvre les garanties appropriées prévues par le chapitre V du RGPD.",
      },
      { type: "h3", text: "15.6 Absence de garantie sur les Données de Sortie" },
      {
        type: "p",
        text: "VERNELYS ne donne aucune garantie quant à l'exactitude, l'exhaustivité, la fiabilité ou la conformité aux lois et règlements des Données de Sortie. Les Fonctionnalités IA reposent sur des modèles probabilistes susceptibles de générer des réponses inattendues ou incorrectes. En raison de leur nature : (i) les niveaux de service de l'Annexe 2 ne s'appliquent pas aux Fonctionnalités IA ; (ii) les Données de Sortie peuvent ne pas être uniques ; (iii) les Données de Sortie ne représentent pas le point de vue de VERNELYS.",
      },
      { type: "h3", text: "15.7 Usage responsable" },
      {
        type: "p",
        text: "Le Client s'engage, pour son compte et celui de ses Utilisateurs, à : (i) évaluer la cohérence, la vraisemblance et la pertinence des Données de Sortie, en recourant à une revue humaine avant toute utilisation ou tout partage ; (ii) ne pas utiliser les Fonctionnalités IA pour des activités illégales ou malveillantes ; (iii) ne pas les utiliser pour développer des modèles concurrents ; (iv) ne pas les utiliser d'une manière contraire à la Documentation ; (v) ne pas inclure dans les Données d'Entrée des données personnelles ou confidentielles de tiers sans disposer d'une base légale ou d'une autorisation.",
      },
      {
        type: "p",
        text: "Le Client garantit VERNELYS contre toute réclamation liée à l'usage qu'il fait, ou que font ses Utilisateurs, des Fonctionnalités IA.",
      },
      { type: "h3", text: "15.8 Transparence" },
      {
        type: "p",
        text: "Conformément à l'article 50 du règlement (UE) 2024/1689, la Solution informe les Utilisateurs lorsqu'ils interagissent avec un système d'intelligence artificielle et signale les contenus générés par celui-ci.",
      },
    ],
  },
  {
    id: "article-16",
    title: "Article 16 — Services en Ligne Tiers",
    blocks: [
      {
        type: "p",
        text: "La Solution permet aux Utilisateurs de la synchroniser avec des Services en Ligne Tiers, afin notamment d'importer des données provenant de ces services ou d'exporter des Données du Client vers ceux-ci. Une liste indicative de ces intégrations est disponible à l'adresse [•].",
      },
      {
        type: "p",
        text: "Toute souscription à un Service en Ligne Tiers se fait exclusivement entre le Client et le fournisseur concerné, et est soumise aux conditions de ce dernier, que le Client doit accepter. Le Client autorise VERNELYS à traiter les données provenant des Services en Ligne Tiers qu'il connecte à la Solution, aux seuls besoins de la fourniture de la Solution et des Services Afférents.",
      },
      {
        type: "p",
        text: "VERNELYS n'est pas responsable de l'utilisation par le Client des Services en Ligne Tiers et ne garantit ni leur fonctionnement ni leur disponibilité. Les fournisseurs concernés ne sont pas des sous-traitants de VERNELYS. Si le fournisseur d'un Service en Ligne Tiers cesse de rendre son service disponible ou interopérable, ou en modifie les conditions, VERNELYS peut cesser de fournir les fonctionnalités correspondantes sans encourir d'obligation de remboursement.",
      },
      {
        type: "p",
        text: "Lorsqu'un Service en Ligne Tiers est techniquement intégré à la Solution, le Client autorise VERNELYS à lui transmettre les informations le concernant nécessaires à cette utilisation. Si l'intégration est réalisée par un connecteur tiers, sa fourniture peut être soumise au paiement de frais de connexion.",
      },
    ],
  },
  {
    id: "article-17",
    title: "Article 17 — Confidentialité",
    blocks: [
      { type: "h3", text: "17.1 Définition" },
      {
        type: "p",
        text: "Constitue une « Information Confidentielle » toute information, quelle qu'en soit la nature (commerciale, industrielle, technique, financière), divulguée par une Partie (la « Partie Divulgatrice ») à l'autre (le « Destinataire ») dans le cadre des CGS, par écrit ou par oral. Les Informations Confidentielles incluent notamment les Données à Caractère Personnel, la Solution, ses codes, algorithmes, méthodes et procédés, ainsi que le Devis.",
      },
      {
        type: "p",
        text: "Ne constituent pas des Informations Confidentielles les informations qui (a) ont été développées de façon indépendante par le Destinataire, (b) sont portées à sa connaissance sans restriction par un tiers ayant le droit de les divulguer, (c) appartenaient au domaine public au moment de leur divulgation ou y sont tombées sans fait du Destinataire, ou (d) étaient légitimement connues du Destinataire sans restriction au moment de leur divulgation.",
      },
      { type: "h3", text: "17.2 Obligations du Destinataire" },
      {
        type: "p",
        text: "Le Destinataire traite comme confidentielles les Informations Confidentielles reçues et ne les utilise qu'aux fins d'exécuter ses obligations au titre des CGS. Il ne peut les divulguer à aucun tiers sans l'autorisation préalable et écrite de la Partie Divulgatrice, à l'exception de ses salariés et cocontractants qui (i) sont soumis à des obligations de confidentialité au moins aussi protectrices et (ii) ont besoin d'y accéder pour l'exécution des CGS. Le Destinataire applique des mesures de protection identiques à celles qu'il prend pour ses propres informations les plus sensibles, et en aucun cas inférieures à des mesures raisonnables.",
      },
      { type: "h3", text: "17.3 Durée et exceptions" },
      {
        type: "p",
        text: "Ces obligations s'appliquent pendant la durée des CGS et pendant cinq (5) ans suivant leur expiration ou leur résiliation. Les Informations Confidentielles peuvent être divulguées en application d'une décision d'un tribunal ou d'une autorité publique, le Destinataire devant alors le notifier immédiatement à la Partie Divulgatrice et s'efforcer d'en limiter la portée.",
      },
    ],
  },
  {
    id: "article-18",
    title: "Article 18 — Données à caractère personnel",
    blocks: [
      { type: "h3", text: "18.1 Responsable de traitement" },
      {
        type: "p",
        text: "Les Parties se conforment aux réglementations qui leur sont applicables en matière de protection des Données à Caractère Personnel, notamment à la loi n° 78-17 du 6 janvier 1978 modifiée et au RGPD. Chaque Partie agit en qualité de responsable de traitement pour les opérations qu'elle effectue pour ses propres besoins et s'engage à fournir aux personnes concernées les informations requises. Le Client déclare avoir pris connaissance de la politique de confidentialité de VERNELYS, accessible à l'adresse [•].",
      },
      { type: "h3", text: "18.2 Sous-traitance" },
      {
        type: "p",
        text: "Tout traitement de Données à Caractère Personnel effectué par VERNELYS en qualité de sous-traitant dans le cadre de l'utilisation de la Solution par le Client est régi par la convention de traitement figurant en Annexe 1.",
      },
      { type: "h3", text: "18.3 Contact" },
      {
        type: "p",
        text: "Toute demande relative à la protection des données peut être adressée à VERNELYS à l'adresse [rgpd@vernelys.com](mailto:rgpd@vernelys.com). VERNELYS n'a pas désigné de délégué à la protection des données, n'entrant pas dans les cas visés à l'article 37 du RGPD.",
      },
    ],
  },
  {
    id: "article-19",
    title: "Article 19 — Sous-traitance",
    blocks: [
      {
        type: "p",
        text: "Le Client accepte expressément que VERNELYS soit en droit, sans formalité d'autorisation ou d'information préalable, de sous-traiter tout ou partie de ses obligations au titre des CGS. En cas de sous-traitance, VERNELYS demeure seule tenue du respect des obligations souscrites et responsable vis-à-vis du Client de tout manquement causé par son sous-traitant. Le recours à des sous-traitants ultérieurs traitant des Données à Caractère Personnel est régi par l'Annexe 1.",
      },
    ],
  },
  {
    id: "article-20",
    title: "Article 20 — Référence commerciale",
    blocks: [
      {
        type: "p",
        text: "Le Client autorise VERNELYS à citer son nom et à utiliser ou reproduire son logo et ses marques sur le Site Internet, dans ses documents commerciaux, courriers électroniques et annonces de presse, sous quelque forme et sur quelque support que ce soit. Le Client peut retirer cette autorisation à tout moment par notification écrite, VERNELYS disposant alors d'un délai raisonnable pour procéder au retrait.",
      },
    ],
  },
  {
    id: "article-21",
    title: "Article 21 — Transfert des CGS",
    blocks: [
      {
        type: "p",
        text: "Le Client reconnaît expressément que VERNELYS est en droit de transférer, par cession, apport ou toute autre opération juridique, ses droits et obligations au titre des CGS, à titre onéreux ou gratuit, à tout tiers. VERNELYS est libérée de ses obligations dès que le transfert a été notifié au Client et n'est pas solidaire du cessionnaire.",
      },
      {
        type: "p",
        text: "Les CGS ne peuvent faire l'objet d'un transfert par le Client, sous quelque forme que ce soit, sauf autorisation écrite préalable de VERNELYS, laquelle ne pourra être refusée sans motif légitime.",
      },
    ],
  },
  {
    id: "article-22",
    title: "Article 22 — Droit applicable et juridiction compétente",
    blocks: [
      { type: "h3", text: "22.1 Loi applicable" },
      {
        type: "p",
        text: "Les CGS sont régies par la loi française, sans application des règles de conflits de lois.",
      },
      { type: "h3", text: "22.2 Résolution amiable" },
      {
        type: "p",
        text: "Les Parties s'efforceront de résoudre à l'amiable les différends qui pourraient survenir entre elles.",
      },
      { type: "h3", text: "22.3 Juridiction compétente" },
      {
        type: "p",
        text: "En l'absence de résolution amiable, tout litige relatif aux présentes CGS, notamment à leur formation, leur validité, leur exécution, leur interprétation, leur expiration ou leur résiliation, sera soumis à la compétence exclusive du tribunal de commerce de Lyon, auquel il est fait attribution expresse de juridiction, nonobstant appels en garantie ou pluralité de défendeurs, même pour les procédures d'urgence ou les procédures conservatoires, en référé ou sur requête.",
      },
    ],
  },
  {
    id: "article-23",
    title: "Article 23 — Stipulations diverses",
    blocks: [
      { type: "h3", text: "23.1 Absence de renonciation implicite" },
      {
        type: "p",
        text: "La non-application ou le retard dans l'application de l'une quelconque des stipulations des CGS par une Partie ne saurait être interprété comme l'abandon par cette Partie du droit ou de l'obligation correspondante.",
      },
      { type: "h3", text: "23.2 Domiciliation" },
      {
        type: "p",
        text: "Les Parties font élection de domicile à leur siège social respectif pour l'exécution des CGS.",
      },
      { type: "h3", text: "23.3 Nullité d'une stipulation" },
      {
        type: "p",
        text: "Si une stipulation des CGS venait à être déclarée nulle ou inapplicable, les autres stipulations demeureraient en vigueur. Les Parties s'engagent alors à négocier de bonne foi une disposition de substitution valable dont l'effet économique se rapprochera le plus possible de celui de la disposition frappée de nullité.",
      },
      { type: "h3", text: "23.4 Prédominance des CGS" },
      {
        type: "p",
        text: "Les CGS prévalent sur tout autre document envoyé ou échangé antérieurement par les Parties, ainsi que sur toute convention orale antérieure. Elles remplacent tout contrat antérieur passé entre les mêmes Parties et ayant le même objet. Toutes conditions générales d'achat du Client, quelle que soit la date de leur communication, sont spécifiquement écartées. Les intitulés d'articles sont insérés à des fins pratiques et ne font pas partie des CGS.",
      },
      {
        type: "p",
        text: "Les CGS, leurs Annexes et le Devis forment un ensemble contractuel unique. En cas de contradiction, les stipulations prévalent dans l'ordre suivant : (1) le Devis, (2) les Annexes, (3) le corps des CGS. Le Devis ne peut toutefois déroger aux CGS ou aux Annexes que par une stipulation expresse identifiant l'article auquel il est dérogé.",
      },
      { type: "h3", text: "23.5 Notifications" },
      {
        type: "p",
        text: "L'ensemble des notifications requises au titre des CGS sont faites (i) par courrier à l'adresse du siège social fournie par l'autre Partie ou (ii) par courrier électronique. Les Parties reconnaissent aux courriers électroniques la même force probante que les écrits sur support papier. Sauf mention contraire, les notifications sont adressées, s'agissant du Client, à l'adresse du représentant qu'il a désigné dans la Solution, et s'agissant de VERNELYS, à l'adresse [contact@vernelys.com](mailto:contact@vernelys.com).",
      },
      { type: "h3", text: "23.6 Indépendance des Parties" },
      {
        type: "p",
        text: "Les Parties sont indépendantes. Aucune ne peut être considérée comme employé, salarié, agent, associé ou représentant légal de l'autre, et aucune n'a le droit ou le pouvoir de s'engager au nom ou pour le compte de l'autre.",
      },
    ],
  },
  {
    id: "article-24",
    title: "Article 24 - Essais gratuits et fonctionnalités bêta",
    blocks: [
      { type: "h3", text: "24.1 Essai gratuit" },
      {
        type: "p",
        text: "VERNELYS peut proposer au Client un accès d'évaluation gratuit à tout ou partie de la Solution, pour la durée et le périmètre indiqués lors de la souscription de l'essai. L'essai est fourni « en l'état » et « selon disponibilité », sans garantie d'aucune sorte ; les Annexes 2 et 3 ne s'appliquent pas, VERNELYS pouvant toutefois fournir une assistance à sa discrétion. VERNELYS peut modifier, suspendre ou interrompre l'essai à tout moment, sans préavis ni indemnité. À l'issue de la période d'essai, à défaut de souscription d'un abonnement, le Compte Client est désactivé et les Données du Client saisies pendant l'essai sont supprimées dans un délai de trente (30) jours ; il appartient au Client de les exporter avant ce terme. Par dérogation à l'article 11.4, la responsabilité totale de VERNELYS au titre d'un essai gratuit est limitée, tous dommages confondus, à cent (100) euros. Les articles 3.5, 5, 17 et 18 demeurent applicables pendant l'essai.",
      },
      { type: "h3", text: "24.2 Fonctionnalités bêta" },
      {
        type: "p",
        text: "VERNELYS peut mettre à la disposition du Client des fonctionnalités identifiées comme « bêta », « préversion », « pilote » ou « accès anticipé ». Ces fonctionnalités sont fournies « en l'état », à des fins d'évaluation ; elles peuvent être modifiées, suspendues ou retirées à tout moment et sont exclues de toute garantie ainsi que des Annexes 2 et 3. VERNELYS recommande de ne pas les utiliser sur des données de production critiques. Les retours du Client à leur sujet sont régis par l'article 5.2.",
      },
    ],
  },
  {
    id: "annexe-1",
    title:
      "Annexe 1 — Convention de traitement des Données à Caractère Personnel",
    blocks: [
      {
        type: "p",
        text: "La présente convention (la « CTD ») est conclue entre VERNELYS et le Client, tels que définis dans les CGS. Elle fait partie intégrante des CGS et constitue l'accord des Parties quant au traitement par VERNELYS des Données à Caractère Personnel du Client. En cas de contradiction entre les CGS et la CTD, la CTD prévaut. Les termes définis ont la signification qui leur est attribuée dans les CGS ou dans le RGPD.",
      },
      {
        type: "p",
        text: "Les Parties reconnaissent que (a) VERNELYS agit en qualité de sous-traitant ou de sous-traitant ultérieur des Données à Caractère Personnel listées à l'Appendice 1, (b) le Client peut être responsable de traitement ou sous-traitant selon le cas, et (c) chaque Partie se conforme aux obligations lui incombant en vertu du RGPD. La CTD ne s'applique pas aux traitements dont VERNELYS détermine les finalités et les moyens, couverts par sa politique de confidentialité.",
      },
      {
        type: "p",
        text: "**Durée.** La CTD prend effet à la Date de Mise à Disposition et demeure en vigueur jusqu'à la suppression par VERNELYS de l'ensemble des Données à Caractère Personnel du Client.",
      },
      {
        type: "p",
        text: "**Instructions du Client.** Le Client donne instruction à VERNELYS de ne traiter les Données à Caractère Personnel que conformément au RGPD : (a) pour fournir la Solution et les Services Afférents, (b) comme indiqué par le Client ou comme l'exige son utilisation de la Solution, (c) comme précisé dans les CGS et la présente CTD, ou (d) comme documenté dans toute autre instruction légitime et écrite. Si VERNELYS estime qu'une instruction enfreint le RGPD, elle la suspend et en informe immédiatement le Client.",
      },
      {
        type: "p",
        text: "**Responsable de traitement tiers.** Le Client garantit que, s'il agit lui-même en qualité de sous-traitant sur instruction d'un responsable de traitement tiers, ses instructions et sa désignation de VERNELYS ont été autorisées par ce responsable de traitement, et qu'il en apportera la preuve sur demande.",
      },
      {
        type: "p",
        text: "**Suppression pendant la durée.** VERNELYS permet au Client de supprimer les Données à Caractère Personnel d'une manière compatible avec les fonctionnalités de la Solution. L'utilisation par le Client des fonctions de suppression constitue une instruction de supprimer les données concernées, à laquelle VERNELYS se conforme dès que raisonnablement possible et au plus tard dans un délai d'un (1) mois, porté à trois (3) mois en cas de demande complexe, sauf obligation légale de conservation.",
      },
      {
        type: "p",
        text: "**Suppression à l'expiration.** À l'expiration des durées de conservation définies à l'Appendice 1, VERNELYS supprime les Données à Caractère Personnel du Client, y compris les copies existantes. Il appartient au Client de conserver une copie de ses données afin de satisfaire à ses propres obligations légales.",
      },
      {
        type: "p",
        text: "**Mesures de sécurité.** VERNELYS met en place et maintient des mesures techniques et organisationnelles appropriées, décrites à l'Appendice 2, destinées à garantir la confidentialité, l'intégrité, la disponibilité et la résilience de la Solution, à rétablir l'accès aux données dans des délais appropriés après un incident, et à tester régulièrement leur efficacité. VERNELYS peut les mettre à jour, sous réserve que ces mises à jour n'entraînent pas de dégradation du niveau global de sécurité.",
      },
      {
        type: "p",
        text: "**Respect de la sécurité et confidentialité du personnel.** VERNELYS prend les mesures appropriées pour assurer le respect des mesures de sécurité par ses salariés, prestataires et sous-traitants ultérieurs, notamment en s'assurant que les personnes autorisées à traiter les données sont soumises à une obligation de confidentialité et ont suivi une formation appropriée.",
      },
      {
        type: "p",
        text: "**Incidents.** Si VERNELYS a connaissance d'un incident affectant les Données à Caractère Personnel, elle (a) le notifie au Client dans les meilleurs délais et (b) prend les mesures raisonnables pour en réduire les effets. La notification est accompagnée, dans la mesure du possible et sur demande, d'une description de l'incident et des mesures prises ou recommandées. Le Client demeure responsable du respect de ses obligations de notification au titre du RGPD.",
      },
      {
        type: "p",
        text: "**Assistance.** VERNELYS apporte au Client une assistance raisonnable, compte tenu de la nature du traitement et des informations dont elle dispose, pour le respect de ses obligations au titre des articles 32 à 34 du RGPD, ainsi que pour répondre aux demandes d'exercice des droits des personnes concernées. Si VERNELYS reçoit directement une telle demande, elle invite la personne concernée à s'adresser au Client.",
      },
      {
        type: "p",
        text: "**Registre.** VERNELYS tient par écrit un registre des catégories d'activités de traitement effectuées pour le compte du Client, conformément à l'article 30 du RGPD.",
      },
      {
        type: "p",
        text: "**Information des personnes concernées.** Il appartient au Client d'informer les personnes concernées des traitements mis en œuvre, de leurs bases légales et de leurs finalités, et de recueillir leur consentement lorsque cela est nécessaire.",
      },
      {
        type: "p",
        text: "**Audits.** Le Client peut faire réaliser, à ses frais, un (1) audit par an, d'une durée maximale de trois (3) jours ouvrés, afin de vérifier la conformité de VERNELYS à la présente CTD. L'audit est notifié par écrit au moins trente (30) jours à l'avance. Il se limite aux processus, à l'organisation et aux outils directement liés à la mise en œuvre du RGPD pour la Solution, à l'exclusion de toute donnée relative à d'autres clients, des données financières de VERNELYS et des données relatives à son personnel. Les activités d'audit ne doivent en aucun cas affecter le fonctionnement de la Solution ni endommager l'infrastructure. Les informations obtenues constituent des Informations Confidentielles. Le rapport d'audit est mis gratuitement à disposition de VERNELYS, qui dispose d'un délai raisonnable pour formuler ses observations.",
      },
      {
        type: "p",
        text: "**Hébergement.** Pendant toute la durée, VERNELYS s'engage à ce que les Données à Caractère Personnel du Client soient hébergées sur le territoire de l'Union européenne, sous réserve des traitements opérés par les fournisseurs de modèles visés à l'article 15.5, pour lesquels les garanties du chapitre V du RGPD sont mises en œuvre.",
      },
      {
        type: "p",
        text: "**Sous-traitants ultérieurs.** Le Client autorise expressément le recours à des sous-traitants ultérieurs, sous réserve que VERNELYS tienne à jour la liste accessible à l'adresse [•], précisant leur activité et le lieu de traitement. VERNELYS s'assure par contrat que chaque sous-traitant ultérieur est soumis à des obligations équivalentes à celles de la présente CTD et demeure entièrement responsable de ses actes et omissions. VERNELYS informe le Client de tout nouveau sous-traitant ultérieur au moins trente (30) jours avant qu'il ne commence à traiter des données. En cas d'objection légitime et raisonnable notifiée dans les trente (30) jours, et à défaut d'accord entre les Parties, le Client peut résilier les CGS ; ce droit de résiliation constitue son recours unique.",
      },
      { type: "h3", text: "Appendice 1 — Informations sur le traitement" },
      {
        type: "table",
        head: ["Rubrique", "Contenu"],
        rows: [
          [
            "Objet",
            "Fourniture par VERNELYS au Client de la Solution et des Services Afférents.",
          ],
          [
            "Catégories de personnes concernées",
            "Les Utilisateurs du Client ; le personnel du Client ; les personnes dont les données sont traitées par le biais de la Solution du fait de leur saisie par le Client.",
          ],
          [
            "Catégories de données",
            "Identité et coordonnées : nom, prénom, adresse électronique, numéro de téléphone. Données professionnelles : fonction, coordonnées professionnelles, données relatives à l'activité du Client. Données d'utilisation et de connexion, telles que les journaux techniques, liées à l'usage de la Solution. [À compléter avec infos maxime]",
          ],
          ["Lieu d'hébergement", "Union européenne."],
          [
            "Finalités",
            "Fourniture de la Solution et des Services Afférents ; hébergement des Données du Client ; fourniture des Fonctionnalités IA.",
          ],
          [
            "Durée de conservation",
            "Pendant toute la durée des CGS, puis pendant la période d'export de trente (30) jours visée à l'article 9.7, le cas échéant augmentée de la période transitoire. À l'issue, VERNELYS supprime l'ensemble des Données du Client, y compris les copies, dans un délai maximal de quatre-vingt-dix (90) jours, sauf obligation légale de conservation.",
          ],
        ],
      },
      { type: "h3", text: "Appendice 2 — Mesures de sécurité" },
      {
        type: "p",
        text: "À compter de la Date de Mise à Disposition, VERNELYS met en place et maintient les mesures de sécurité décrites à l'adresse [•].",
      },
    ],
  },
  {
    id: "annexe-2",
    title: "Annexe 2 — Contrat de niveau de service",
    blocks: [
      {
        type: "p",
        text: "Pour les besoins de la présente annexe, la Solution s'entend de la solution accessible en ligne, à l'exclusion du Complément Office et des Fonctionnalités IA.",
      },
      { type: "h3", text: "1. Niveau de disponibilité" },
      {
        type: "p",
        text: "VERNELYS s'engage à rendre la Solution disponible aux Utilisateurs pendant au moins 99 % du temps (la « Disponibilité »). La Disponibilité est calculée mensuellement, par mois calendaire, selon la formule suivante :",
      },
      {
        type: "formula",
        text: "Disponibilité = (Disponibilité Réelle / Disponibilité Totale Programmée) × 100",
      },
      {
        type: "p",
        text: "La « Disponibilité Totale Programmée » s'entend de sept (7) jours par semaine et vingt-quatre (24) heures par jour, exprimés en minutes. La « Disponibilité Réelle » s'entend de la Disponibilité Totale Programmée diminuée des Interruptions.",
      },
      {
        type: "p",
        text: "Constitue une « Interruption » le temps, exprimé en minutes, pendant lequel les Utilisateurs ne peuvent pas accéder à la Solution. Ne sont pas considérés comme des Interruptions : tout dysfonctionnement partiel de la Solution ; toute indisponibilité inférieure à trente (30) minutes cumulées sur une même journée ; toute indisponibilité résultant d'un cas de force majeure au sens de l'article 12 ; toute utilisation de la Solution en violation des CGS ou non conforme à la Documentation ; les opérations de maintenance planifiée ou d'urgence visées à l'article 14, ainsi que les interventions réalisées en dehors des Heures Ouvrées ; les suspensions autorisées par l'article 3.6 ; toute indisponibilité causée par un événement échappant au contrôle raisonnable de VERNELYS, notamment la défaillance d'une technologie tierce ou de l'environnement du Client ; toute indisponibilité causée par les Données du Client ; toute indisponibilité affectant les Fonctionnalités IA ou le Complément Office.",
      },
      { type: "h3", text: "2. Crédits de service" },
      {
        type: "p",
        text: "Si la Disponibilité constatée au cours d'un mois calendaire est inférieure à 99 %, VERNELYS accorde au Client un crédit calculé comme suit :",
      },
      {
        type: "table",
        head: ["Disponibilité constatée", "Crédit accordé"],
        rows: [
          ["Inférieure à 99 % et supérieure ou égale à 97 %", "2 % du prix mensuel"],
          ["Inférieure à 97 % et supérieure ou égale à 95 %", "5 % du prix mensuel"],
          ["Inférieure à 95 % et supérieure ou égale à 90 %", "7 % du prix mensuel"],
          [
            "Inférieure à 90 %",
            "10 % du prix mensuel et faculté de résiliation (article 8.1.1)",
          ],
        ],
      },
      {
        type: "p",
        text: "Le prix mensuel s'entend du prix effectivement reçu par VERNELYS au titre du Droit d'Utilisation pour le mois pendant lequel la Disponibilité a été affectée.",
      },
      {
        type: "p",
        text: "Pour bénéficier d'un crédit, le Client doit adresser une réclamation à VERNELYS dans un délai de trente (30) jours à compter du moment où il devient éligible. Le non-respect de ce délai entraîne la perte du droit au crédit. Les crédits sont appliqués en réduction du prix sur la facture suivante.",
      },
      {
        type: "p",
        text: "Les crédits de service et la faculté de résiliation prévue à l'article 8.1.1 constituent les seuls et uniques recours du Client, et la seule et unique responsabilité de VERNELYS, en cas de manquement au présent contrat de niveau de service. Le Client peut suivre l'état opérationnel de la Solution à l'adresse [•].",
      },
    ],
  },
  {
    id: "annexe-3",
    title: "Annexe 3 — Conditions et modalités de support",
    blocks: [
      {
        type: "p",
        text: "Une plateforme d'assistance en ligne est mise à la disposition des Utilisateurs à l'adresse [•], afin de leur fournir les informations utiles à l'utilisation de la Solution ainsi qu'un canal de discussion. Son utilisation est soumise aux CGS. Les Utilisateurs ne peuvent soumettre de demande de support que par ce canal.",
      },
      {
        type: "p",
        text: "Lorsqu'il formule une demande, l'Utilisateur fournit les informations de diagnostic nécessaires à son traitement, notamment une description du problème, de la configuration et du réseau du Client, ainsi que les Données du Client pertinentes. L'Utilisateur communique avec l'équipe de support autant que de besoin. Lorsque cela est nécessaire, l'équipe de support de VERNELYS peut (i) accéder aux Données du Client et (ii) se connecter en tant qu'Utilisateur impacté pour accéder à son environnement, ces accès étant limités dans le temps et utilisés aux seules fins de traitement de la demande.",
      },
      {
        type: "p",
        text: "Si VERNELYS considère qu'une demande de support constitue une demande d'évolution fonctionnelle, elle peut la rediriger vers son équipe produit afin qu'elle soit prise en considération pour une éventuelle Mise à Jour, sans être débitrice d'une obligation de résultat à cet égard.",
      },
      {
        type: "p",
        text: "Certaines demandes adressées au support peuvent être traitées et recevoir une réponse générée par un système d'intelligence artificielle. L'Utilisateur peut à tout moment demander l'intervention d'un conseiller humain en le précisant dans son message.",
      },
      {
        type: "p",
        text: "La plateforme d'assistance en ligne est accessible vingt-quatre (24) heures sur vingt-quatre et sept (7) jours sur sept pour une aide en libre-service. L'équipe de support est disponible pendant les Heures Ouvrées. Le support est fourni en français.",
      },
      {
        type: "p",
        text: "VERNELYS fournit les services de support tant que les CGS sont en vigueur et n'a aucune obligation de les fournir après leur expiration ou leur résiliation.",
      },
    ],
  },
];

export const CGS_VERSIONS: CgsVersion[] = [
  {
    slug: "2026-08-14",
    documentTitle: "CONDITIONS GENERALES DE SERVICE",
    documentSubtitle:
      "Vernales Solutions - Clients professionnels | Version du 14/08/2026",
    isoDate: "2026-08-14",
    shortDate: "14/08/2026",
    longDate: "14 août 2026",
    summary: "Version initiale des conditions générales de service.",
    sections: SECTIONS_2026_08_14,
  },
];

/** Version en vigueur : première entrée du tableau. */
export const CGS_CURRENT = CGS_VERSIONS[0];

export function getCgsVersion(slug: string): CgsVersion | undefined {
  return CGS_VERSIONS.find((v) => v.slug === slug);
}
