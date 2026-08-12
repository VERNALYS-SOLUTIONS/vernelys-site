import Link from "next/link";

// ---------------------------------------------------------------------------
// Informations légales de l'éditeur (art. 6 III LCEN) et coordonnées du
// responsable de traitement (art. 13 RGPD).
// ---------------------------------------------------------------------------
const LEGAL = {
  company: "VERNALYS SOLUTIONS",
  legalForm: "SAS (société par actions simplifiée)",
  capital: "10 000 €",
  rcsCity: "Lyon",
  siren: "108 293 630 (SIRET siège : 108 293 630 00019)",
  vat: "FR 63 108293630",
  address: "2 Rue Docteur Horand, 69009 Lyon",
  publicationDirector: "Etienne PERNELLE",
  contactEmail: "contact@vernelys.com",
  phone: "07 87 37 85 59",
  lastUpdate: "12 août 2026",
};

export const metadata = {
  title: "Confidentialité & mentions légales",
  description:
    "Politique de confidentialité, traitement des données personnelles (RGPD) et mentions légales de VERNALYS SOLUTIONS et du complément Excel Vernelys.",
};

export default function ConfidentialitePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        Informations légales
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">
        Confidentialité & mentions légales
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Cette page décrit l&apos;identité de l&apos;éditeur du site, la manière
        dont vos données personnelles sont traitées dans le cadre du site et du
        complément Excel Vernelys, ainsi que les droits dont vous disposez.
      </p>
      <p className="mt-2 text-sm text-slate-500">
        Dernière mise à jour : {LEGAL.lastUpdate}.
      </p>

      <nav className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm">
        <p className="font-semibold text-slate-700">Sommaire</p>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            ["editeur", "1. Éditeur du site"],
            ["hebergement", "2. Hébergement"],
            ["pi", "3. Propriété intellectuelle"],
            ["responsable", "4. Responsable du traitement"],
            ["donnees", "5. Données collectées"],
            ["finalites", "6. Finalités & bases légales"],
            ["destinataires", "7. Destinataires & sous-traitants"],
            ["transferts", "8. Transferts hors UE"],
            ["conservation", "9. Durées de conservation"],
            ["droits", "10. Vos droits"],
            ["cookies", "11. Cookies & traceurs"],
            ["profilage", "12. Décisions automatisées"],
            ["securite", "13. Sécurité & violations de données"],
            ["modifications", "14. Modifications"],
            ["contact", "15. Contact"],
          ].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="text-brand-600 hover:underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-14 space-y-14">
        <Section id="editeur" title="1. Éditeur du site">
          <p>Le présent site est édité par :</p>
          <ul className="list-none space-y-1">
            <li>
              <strong>{LEGAL.company}</strong>, {LEGAL.legalForm}
            </li>
            <li>Capital social : {LEGAL.capital}</li>
            <li>Siège social : {LEGAL.address}</li>
            <li>
              Immatriculée au RCS de {LEGAL.rcsCity} sous le numéro{" "}
              {LEGAL.siren}
            </li>
            <li>TVA intracommunautaire : {LEGAL.vat}</li>
            <li>
              Contact :{" "}
              <a
                href={`mailto:${LEGAL.contactEmail}`}
                className="text-brand-600 hover:underline"
              >
                {LEGAL.contactEmail}
              </a>
            </li>
            {LEGAL.phone ? <li>Téléphone : {LEGAL.phone}</li> : null}
            <li>Directeur de la publication : {LEGAL.publicationDirector}</li>
          </ul>
        </Section>

        <Section id="hebergement" title="2. Hébergement">
          <p>Le site est hébergé par :</p>
          <ul className="list-none space-y-1">
            <li>
              <strong>Vercel Inc.</strong>
            </li>
            <li>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
            <li>
              Contact :{" "}
              <a
                href="https://vercel.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                vercel.com/contact
              </a>
            </li>
          </ul>
          <p className="text-sm">
            Les fichiers du site sont distribués via le réseau de diffusion de
            Vercel. Les traitements liés à l&apos;hébergement sont encadrés par
            l&apos;accord de sous-traitance (DPA) de Vercel, incluant les
            clauses contractuelles types de la Commission européenne (voir la
            section{" "}
            <a href="#transferts" className="text-brand-600 hover:underline">
              Transferts hors Union européenne
            </a>
            ).
          </p>
        </Section>

        <Section id="pi" title="3. Propriété intellectuelle">
          <p>
            L&apos;ensemble des contenus du site (textes, visuels, logos, marque
            « Vernelys », documentation) est protégé par le droit de la propriété
            intellectuelle et demeure la propriété exclusive de {LEGAL.company}{" "}
            ou de ses partenaires. Toute reproduction, représentation ou
            réutilisation, totale ou partielle, sans autorisation écrite
            préalable est interdite.
          </p>
        </Section>

        <Section id="responsable" title="4. Responsable du traitement">
          <p>
            Le responsable du traitement des données personnelles collectées via
            le site et le complément Vernelys est {LEGAL.company}. Pour toute
            question relative à la protection des données, vous pouvez écrire à{" "}
            <a
              href={`mailto:${LEGAL.contactEmail}`}
              className="text-brand-600 hover:underline"
            >
              {LEGAL.contactEmail}
            </a>
            .
          </p>
          <p>
            Le traitement des données est réalisé conformément au Règlement
            (UE) 2016/679 (RGPD) et à la loi « Informatique et Libertés ».
          </p>
        </Section>

        <Section id="donnees" title="5. Données collectées">
          <p className="font-medium text-slate-800">
            5.1 — Sur le présent site vitrine
          </p>
          <p>
            Le site est un site vitrine statique. Il ne comporte ni compte
            utilisateur, ni base de données, ni outil de mesure d&apos;audience.
            Aucun formulaire n&apos;envoie de données vers nos serveurs :
          </p>
          <FeatureTable
            rows={[
              [
                "Formulaire de démonstration",
                "Le formulaire de la page Contact n'effectue aucun envoi réseau. Il ouvre votre logiciel de messagerie avec un e-mail pré-rempli (nom, prénom, e-mail, téléphone facultatif, cabinet, taille d'équipe, solution souhaitée, message). Le traitement ne commence que si vous choisissez d'envoyer cet e-mail à sales@vernelys.com.",
              ],
              [
                "Journaux d'hébergement",
                "Notre hébergeur Vercel journalise automatiquement les requêtes techniques (adresse IP, date et heure, page demandée, type de navigateur) à des fins de sécurité, de prévention des abus et de bon fonctionnement du service.",
              ],
              [
                "Polices et ressources",
                "La police Inter est auto-hébergée sur notre domaine : aucune requête n'est envoyée à Google Fonts ni à un autre service tiers. Les images, vidéos et animations de démonstration sont servies depuis notre propre domaine.",
              ],
            ]}
          />

          <p className="pt-2 font-medium text-slate-800">
            5.2 — Dans le complément Excel et la plateforme Vernelys
          </p>
          <p>
            Si vous êtes utilisateur de nos solutions, nous sommes susceptibles
            de traiter les catégories de données suivantes :
          </p>
          <FeatureTable
            rows={[
              [
                "Données de compte",
                "Code entreprise, identifiants de connexion et adresse e-mail professionnelle utilisés pour activer et gérer la licence Vernelys.",
              ],
              [
                "Données de contact",
                "Informations que vous nous transmettez spontanément (e-mail, contenu de votre message) lors d'une demande de support ou de licence.",
              ],
              [
                "Données d'usage",
                "Données techniques liées à l'utilisation du complément (fonctionnalités utilisées, journaux d'erreurs) pour assurer le bon fonctionnement et l'amélioration du service.",
              ],
              [
                "Données techniques",
                "Données de connexion générées automatiquement (adresse IP, type de navigateur, horodatage) à des fins de sécurité et de statistiques.",
              ],
              [
                "Contenus traités",
                "Les documents PDF et le contenu des feuilles Excel que vous traitez avec Vernelys (OCR, audit TVA, assistant IA) peuvent être transmis à nos prestataires techniques le temps strictement nécessaire au traitement demandé.",
              ],
            ]}
          />
          <p className="text-sm">
            Pour ces traitements, votre cabinet agit en qualité de responsable
            de traitement à l&apos;égard des données de ses propres clients, et{" "}
            {LEGAL.company} en qualité de sous-traitant au sens de
            l&apos;article 28 du RGPD. Les conditions de ce rôle sont fixées par
            un accord de sous-traitance (DPA) annexé au contrat de licence,
            disponible sur demande à{" "}
            <a
              href={`mailto:${LEGAL.contactEmail}`}
              className="text-brand-600 hover:underline"
            >
              {LEGAL.contactEmail}
            </a>
            .
          </p>
        </Section>

        <Section id="finalites" title="6. Finalités & bases légales">
          <p>Vos données sont traitées pour les finalités suivantes :</p>
          <FeatureTable
            rows={[
              [
                "Demande de démonstration",
                "Traiter votre demande, vous recontacter et préparer une éventuelle relation contractuelle. Base légale : mesures précontractuelles prises à votre demande (art. 6.1.b) et votre consentement recueilli lors de l'envoi du formulaire (art. 6.1.a).",
              ],
              [
                "Informations commerciales",
                "Vous adresser des informations sur nos produits, uniquement si vous avez coché la case dédiée. Base légale : consentement (art. 6.1.a), révocable à tout moment.",
              ],
              [
                "Fourniture du service",
                "Activation et gestion de la licence, authentification, exécution des fonctionnalités du complément et de la plateforme. Base légale : exécution du contrat (art. 6.1.b).",
              ],
              [
                "Support & relation client",
                "Répondre à vos demandes et assurer le support technique. Base légale : exécution du contrat (art. 6.1.b) et intérêt légitime à assurer un support de qualité (art. 6.1.f).",
              ],
              [
                "Sécurité & bon fonctionnement",
                "Journaux d'hébergement, prévention des abus, détection d'incidents, amélioration du service. Base légale : intérêt légitime à assurer la sécurité et la disponibilité du service (art. 6.1.f).",
              ],
              [
                "Obligations légales",
                "Respect de nos obligations comptables, fiscales et légales, réponse aux réquisitions. Base légale : obligation légale (art. 6.1.c).",
              ],
            ]}
          />
          <p className="text-sm">
            La fourniture des données marquées comme obligatoires dans le
            formulaire est nécessaire pour traiter votre demande ; à défaut,
            nous ne serions pas en mesure d&apos;y répondre. Les autres champs
            sont facultatifs.
          </p>
        </Section>

        <Section id="destinataires" title="7. Destinataires & sous-traitants">
          <p>
            <strong>Vos données ne sont ni vendues, ni louées, ni cédées à des
            tiers à des fins publicitaires.</strong>{" "}
            Elles sont accessibles aux seuls personnels habilités de{" "}
            {LEGAL.company} ainsi qu&apos;aux sous-traitants ci-dessous, qui
            agissent uniquement sur nos instructions documentées et sont liés
            par un accord conforme à l&apos;article 28 du RGPD :
          </p>
          <FeatureTable
            rows={[
              [
                "Vercel Inc. (États-Unis)",
                "Hébergement du site vitrine et diffusion des fichiers d'installation. Traite les journaux techniques de connexion.",
              ],
              [
                "Prestataires OCR & IA",
                "Reconnaissance de texte et fonctionnalités d'intelligence artificielle du complément et de la plateforme. Ils n'interviennent que sur les contenus que vous soumettez explicitement à ces traitements et n'utilisent pas vos données pour entraîner leurs modèles.",
              ],
              [
                "Messagerie professionnelle",
                "Réception et suivi de vos demandes envoyées à sales@vernelys.com.",
              ],
            ]}
          />
          <p className="text-sm">
            La liste nominative et à jour de nos sous-traitants, ainsi que leur
            pays d&apos;implantation, est communiquée sur simple demande à{" "}
            <a
              href={`mailto:${LEGAL.contactEmail}`}
              className="text-brand-600 hover:underline"
            >
              {LEGAL.contactEmail}
            </a>
            . Des données peuvent également être transmises aux autorités
            administratives ou judiciaires compétentes lorsque la loi
            l&apos;exige.
          </p>
        </Section>

        <Section id="transferts" title="8. Transferts hors Union européenne">
          <p>
            Nous privilégions des prestataires hébergeant les données au sein de
            l&apos;Union européenne. Certains prestataires (hébergement,
            fonctionnalités d&apos;IA) sont toutefois établis aux États-Unis, ce
            qui peut donner lieu à un transfert de données hors de
            l&apos;Union européenne.
          </p>
          <p>
            Ces transferts sont encadrés par des garanties appropriées au sens
            du chapitre V du RGPD : adhésion du prestataire au{" "}
            <em>EU-U.S. Data Privacy Framework</em> reconnu adéquat par la
            décision de la Commission européenne du 10 juillet 2023, ou à
            défaut clauses contractuelles types de la Commission européenne
            complétées, le cas échéant, de mesures techniques supplémentaires
            (chiffrement en transit et au repos, minimisation des données
            transmises).
          </p>
          <p>
            Une copie des garanties mises en place peut vous être communiquée
            sur demande à{" "}
            <a
              href={`mailto:${LEGAL.contactEmail}`}
              className="text-brand-600 hover:underline"
            >
              {LEGAL.contactEmail}
            </a>
            .
          </p>
        </Section>

        <Section id="conservation" title="9. Durées de conservation">
          <p>
            Vos données sont conservées le temps strictement nécessaire aux
            finalités pour lesquelles elles sont traitées :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Demandes de démonstration et prospects : 3 ans à compter du
              dernier contact de votre part, conformément à la recommandation
              de la CNIL.
            </li>
            <li>
              Données de compte et de licence : pendant toute la durée de la
              relation contractuelle, puis archivées en base intermédiaire
              pendant la durée des prescriptions légales applicables (5 ans en
              matière commerciale, 10 ans pour les pièces comptables).
            </li>
            <li>
              Demandes de support : jusqu&apos;à 3 ans après le dernier contact.
            </li>
            <li>
              Journaux techniques et journaux de connexion : de quelques jours à
              12 mois maximum.
            </li>
            <li>
              Contenus traités (PDF, feuilles Excel) : le temps strictement
              nécessaire au traitement, sans conservation au-delà.
            </li>
            <li>
              Preuve du consentement à la prospection : durée du consentement,
              puis 3 ans après son retrait à titre de preuve.
            </li>
          </ul>
        </Section>

        <Section id="droits" title="10. Vos droits">
          <p>
            Conformément aux articles 15 à 22 du RGPD et à la loi
            « Informatique et Libertés », vous disposez des droits suivants sur
            vos données personnelles :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Droit d&apos;accès</strong> : obtenir la confirmation que
              vos données sont traitées et en recevoir une copie.
            </li>
            <li>
              <strong>Droit de rectification</strong> : faire corriger des
              données inexactes ou incomplètes.
            </li>
            <li>
              <strong>Droit à l&apos;effacement</strong> : demander la
              suppression de vos données, dans les limites de nos obligations
              légales de conservation.
            </li>
            <li>
              <strong>Droit à la limitation</strong> du traitement et{" "}
              <strong>droit d&apos;opposition</strong>, notamment à tout
              traitement fondé sur notre intérêt légitime et, sans condition, à
              la prospection commerciale.
            </li>
            <li>
              <strong>Droit à la portabilité</strong> : recevoir les données que
              vous nous avez fournies dans un format structuré et lisible par
              machine.
            </li>
            <li>
              <strong>Droit de retirer votre consentement</strong> à tout
              moment, sans que cela remette en cause la licéité du traitement
              effectué avant ce retrait.
            </li>
            <li>
              <strong>Droit de définir des directives</strong> relatives au sort
              de vos données après votre décès.
            </li>
          </ul>
          <p>
            Pour exercer ces droits, écrivez-nous à{" "}
            <a
              href={`mailto:${LEGAL.contactEmail}`}
              className="text-brand-600 hover:underline"
            >
              {LEGAL.contactEmail}
            </a>
            . Nous répondons dans un délai d&apos;un mois à compter de la
            réception de votre demande, délai pouvant être prorogé de deux mois
            en cas de demande complexe. Une preuve d&apos;identité peut vous
            être demandée en cas de doute raisonnable sur votre identité.
          </p>
          <p>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont
            pas respectés, vous pouvez introduire une réclamation auprès de la
            CNIL — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 (
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              www.cnil.fr
            </a>
            ).
          </p>
        </Section>

        <Section id="cookies" title="11. Cookies & traceurs">
          <p>
            <strong>
              Le présent site ne dépose aucun cookie et n&apos;utilise aucun
              traceur.
            </strong>{" "}
            Il ne comporte ni mesure d&apos;audience, ni outil analytique, ni
            pixel publicitaire, ni bouton de réseau social. Les polices de
            caractères sont auto-hébergées et les contenus multimédias sont
            servis depuis notre propre domaine : aucune requête n&apos;est
            adressée à un service tiers lors de votre navigation.
          </p>
          <p>
            Aucun consentement préalable n&apos;est donc requis au titre de
            l&apos;article 82 de la loi « Informatique et Libertés », et aucun
            bandeau cookies ne vous est présenté. Si cette situation venait à
            évoluer (ajout d&apos;un outil de mesure d&apos;audience, par
            exemple), un mécanisme de recueil du consentement conforme aux
            recommandations de la CNIL serait mis en place et la présente page
            mise à jour.
          </p>
          <p>
            Vous pouvez à tout moment configurer votre navigateur pour bloquer
            ou supprimer les cookies déposés par les sites que vous visitez.
          </p>
        </Section>

        <Section id="profilage" title="12. Décisions automatisées & profilage">
          <p>
            Nous ne mettons en œuvre aucune prise de décision automatisée
            produisant des effets juridiques à votre égard ou vous affectant de
            manière significative, au sens de l&apos;article 22 du RGPD, ni
            aucun profilage à des fins publicitaires. Les fonctionnalités
            d&apos;intelligence artificielle de nos solutions assistent
            l&apos;utilisateur dans son travail : elles restent sous son
            contrôle et leurs résultats font l&apos;objet d&apos;une validation
            humaine.
          </p>
        </Section>

        <Section id="securite" title="13. Sécurité & violations de données">
          <p>
            {LEGAL.company} met en œuvre des mesures techniques et
            organisationnelles appropriées afin de protéger vos données contre
            tout accès non autorisé, perte ou altération : chiffrement des
            échanges (HTTPS/TLS avec HSTS), politique de sécurité du contenu
            (CSP) et en-têtes de sécurité stricts, contrôle et limitation des
            accès aux données selon le principe du moindre privilège,
            hébergement auprès d&apos;un prestataire certifié, maintien à jour
            des composants logiciels et journalisation des accès techniques.
          </p>
          <p>
            En cas de violation de données à caractère personnel susceptible
            d&apos;engendrer un risque pour vos droits et libertés, nous en
            informons la CNIL dans les 72 heures conformément à l&apos;article
            33 du RGPD et, lorsque le risque est élevé, les personnes concernées
            dans les meilleurs délais (article 34).
          </p>
          <p>
            Si vous pensez avoir identifié une vulnérabilité de sécurité sur ce
            site ou dans nos solutions, nous vous remercions de nous la signaler
            de manière responsable à{" "}
            <a
              href={`mailto:${LEGAL.contactEmail}`}
              className="text-brand-600 hover:underline"
            >
              {LEGAL.contactEmail}
            </a>
            .
          </p>
        </Section>

        <Section id="modifications" title="14. Modifications">
          <p>
            La présente politique peut être mise à jour pour refléter
            l&apos;évolution du site, du service ou de la réglementation. La date
            de dernière mise à jour est indiquée en haut de cette page. Nous vous
            invitons à la consulter régulièrement.
          </p>
        </Section>

        <Section id="contact" title="15. Contact">
          <p>
            Pour toute question relative à cette politique ou à vos données
            personnelles, contactez-nous à{" "}
            <a
              href={`mailto:${LEGAL.contactEmail}`}
              className="text-brand-600 hover:underline"
            >
              {LEGAL.contactEmail}
            </a>{" "}
            ou via notre page{" "}
            <Link href="/contact" className="text-brand-600 hover:underline">
              Contact
            </Link>
            .
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-slate-700">{children}</div>
    </section>
  );
}

function FeatureTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200">
      <table className="w-full text-sm">
        <tbody className="divide-y divide-slate-200">
          {rows.map(([name, desc]) => (
            <tr key={name} className="bg-white">
              <td className="w-1/3 px-4 py-3 font-semibold text-slate-800 align-top">
                {name}
              </td>
              <td className="px-4 py-3 text-slate-600">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
