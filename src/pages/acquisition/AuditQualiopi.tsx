import { Link } from 'react-router-dom';
import { AlertCircle, FileText, MessageCircle, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { config } from '../../config/company';
import { useState } from 'react';

const faqs = [
  {
    q: 'Combien de temps dure un audit Qualiopi ?',
    a: 'La durée dépend de la taille de votre organisme et de votre catalogue de formations. Pour un petit OF (moins de 10 salariés, catalogue limité), l\'audit dure généralement 1 journée. Pour un organisme plus grand ou un CFA, comptez 2 à 3 journées. L\'auditeur vous communique le programme et la durée prévue avant l\'audit.'
  },
  {
    q: 'Que vérifie l\'auditeur pendant l\'audit Qualiopi ?',
    a: 'L\'auditeur vérifie 32 indicateurs répartis sur 7 critères : conditions d\'information du public, identification des objectifs, adaptation aux publics, adéquation des moyens, qualification des intervenants, investissement dans les compétences, et recueil des appréciations. Il examine à la fois vos documents écrits et vos pratiques réelles (preuves tangibles).'
  },
  {
    q: 'Peut-on échouer à l\'audit Qualiopi ?',
    a: 'Oui. Le taux d\'échec au premier audit sans préparation dépasse 40 %. Les causes les plus fréquentes : procédures existantes mais non appliquées dans les faits, manque de traçabilité, outils d\'évaluation absents ou inadaptés, et documents copiés non personnalisés. Avec un accompagnement sérieux, le taux de réussite dépasse 95 %.'
  },
  {
    q: 'Qu\'est-ce qu\'un audit blanc et pourquoi est-il indispensable ?',
    a: 'Un audit blanc est une simulation complète de l\'audit réel, réalisée par un consultant externe qui joue le rôle de l\'auditeur. Il permet d\'identifier les manques avant le jour J, d\'entraîner les membres de votre équipe aux questions des auditeurs et de corriger les derniers écarts. Nous réalisons systématiquement un audit blanc dans nos accompagnements.'
  },
  {
    q: 'Quels documents faut-il préparer avant l\'audit ?',
    a: 'Les documents clés à avoir : règlement intérieur des formations, procédures d\'inscription et d\'accueil, plans de formation individualisés, outils d\'évaluation des acquis (quiz, grilles), fiches de présence signées, questionnaires de satisfaction apprenants, système de traitement des réclamations, preuves de qualification des formateurs, et politique d\'amélioration continue.'
  },
  {
    q: 'Que se passe-t-il après un audit réussi ?',
    a: 'Vous recevez votre certificat Qualiopi, valable 3 ans (avec un audit de surveillance à 18 mois). Ce certificat vous ouvre l\'accès aux financements publics, aux OPCO et à EDOF pour le CPF. Nous vous proposons un suivi post-certification pour maintenir votre conformité et préparer sereinement l\'audit de surveillance.'
  }
];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 font-semibold text-gray-900"
      >
        <span>{faq.q}</span>
        <span className="ml-4 text-red-600 text-xl flex-shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-6 py-4 bg-amber-50 text-gray-700 leading-relaxed border-t border-gray-200">
          {faq.a}
        </div>
      )}
    </div>
  );
}

const indicateurs = [
  { num: '1', titre: 'Information du public et des parties prenantes', desc: 'Transparence sur les objectifs, contenus, délais, modalités pédagogiques, tarifs et résultats des formations proposées.' },
  { num: '2', titre: 'Identification et analyse des besoins', desc: 'Méthodes pour recueillir et analyser les besoins des apprenants avant chaque formation. Adaptation du programme si nécessaire.' },
  { num: '3', titre: 'Adaptation aux publics et accessibilité', desc: 'Prise en compte des situations de handicap, adaptation des modalités pédagogiques, accompagnement des publics en difficulté.' },
  { num: '4', titre: 'Adéquation des ressources pédagogiques', desc: 'Locaux, matériels, outils numériques : tout doit être adapté et en bon état. Preuves d\'utilisation effective exigées.' },
  { num: '5', titre: 'Qualification des intervenants', desc: 'Chaque formateur doit justifier de compétences professionnelles et pédagogiques dans son domaine d\'intervention.' },
  { num: '6', titre: 'Investissement dans les compétences des équipes', desc: 'Politique de formation interne, veille sectorielle, développement professionnel des formateurs et du personnel administratif.' },
  { num: '7', titre: 'Recueil et prise en compte des appréciations', desc: 'Enquêtes de satisfaction structurées, traitement des réclamations, mesure des résultats et mise en place d\'actions d\'amélioration.' }
];

export default function AuditQualiopi() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Bonjour, je souhaite me préparer à l\'audit Qualiopi. Pouvez-vous m\'accompagner ?');
    window.open(`https://wa.me/${config.company.whatsapp.replace(/[^\d]/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Réussir l'Audit Qualiopi : Préparation, déroulement et conseils | Eden Conseil Qualité</title>
        <meta name="description" content="Tout savoir sur l'audit Qualiopi : déroulement, documents à préparer, 7 critères vérifiés, audit blanc. Préparez-vous efficacement pour réussir du premier coup." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/audit-qualiopi" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/audit-qualiopi" />
        <meta property="og:image" content="https://edenconseilqualite.fr/og-image.webp" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://edenconseilqualite.fr/' },
            { '@type': 'ListItem', position: 2, name: 'Audit Qualiopi', item: 'https://edenconseilqualite.fr/acquisition/audit-qualiopi' }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a }
          }))
        })}</script>
      </Helmet>

      {/* HERO */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-800 via-amber-900 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-200 font-semibold uppercase tracking-widest text-sm mb-4">Guide complet</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Réussir l'audit Qualiopi
            <span className="block text-amber-100 text-2xl md:text-3xl font-medium mt-4">
              Déroulement, préparation, 7 critères : tout ce qu'il faut savoir
            </span>
          </h1>
          <p className="text-xl text-amber-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            L'audit Qualiopi ne s'improvise pas. Comprendre exactement ce que l'auditeur cherche
            est la clé pour réussir du premier coup — et ne pas perdre 6 mois à recommencer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle size={20} /> Me faire accompagner
            </button>
            <Link
              to="/acquisition/obtenir-qualiopi"
              className="bg-white text-red-700 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-amber-50 transition-all"
            >
              Accompagnement complet
            </Link>
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: '32', label: 'Indicateurs vérifiés' },
            { val: '7', label: 'Critères qualité' },
            { val: '+40%', label: 'Taux d\'échec sans prépa' },
            { val: '98%', label: 'Réussite avec Eden Conseil' }
          ].map((s, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-red-600 mb-1">{s.val}</p>
              <p className="text-gray-600 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DÉROULEMENT DE L'AUDIT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Comment se déroule un audit Qualiopi ?</h2>
          <p className="text-gray-600 text-center mb-12 text-lg">L'audit se déroule en 4 temps, chacun avec ses enjeux propres.</p>
          <div className="space-y-5">
            {[
              {
                phase: 'Avant l\'audit (J-30 à J-15)',
                desc: 'L\'auditeur vous envoie la liste des documents à préparer. Vous rassemblez vos preuves : programmes de formation, feuilles de présence, comptes rendus, questionnaires de satisfaction, CV des formateurs. C\'est la phase la plus intense en termes de préparation.',
                couleur: 'bg-blue-50 border-blue-300'
              },
              {
                phase: 'Ouverture de l\'audit (J, matin)',
                desc: 'Réunion de présentation avec la direction et les référents qualité. L\'auditeur présente le programme de la journée, les critères évalués et la méthode. C\'est le moment de clarifier le périmètre et les points d\'attention.',
                couleur: 'bg-amber-50 border-amber-300'
              },
              {
                phase: 'Examen documentaire et entretiens (J, milieu)',
                desc: 'L\'auditeur lit vos procédures, consulte vos preuves et interroge les formateurs, le responsable administratif et parfois les apprenants. Il vérifie que ce qui est écrit correspond à ce qui est fait réellement.',
                couleur: 'bg-red-50 border-red-300'
              },
              {
                phase: 'Clôture et restitution (J, fin)',
                desc: 'L\'auditeur présente ses constats : points positifs, non-conformités majeures et mineures. Vous avez ensuite un délai (généralement 3 mois) pour corriger les non-conformités avant que le certificat soit délivré ou refusé.',
                couleur: 'bg-green-50 border-green-300'
              }
            ].map((item, i) => (
              <div key={i} className={`border-l-4 rounded-xl p-6 ${item.couleur}`}>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.phase}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 CRITÈRES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Les 7 critères vérifiés par l'auditeur</h2>
          <p className="text-gray-600 text-center mb-10 text-lg">Le référentiel Qualiopi repose sur 7 critères qualité déclinés en 32 indicateurs. Voici ce que chaque critère implique concrètement.</p>
          <div className="space-y-4">
            {indicateurs.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 border border-gray-200 rounded-xl hover:border-red-200 transition-colors">
                <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.titre}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Documents indispensables avant l'audit</h2>
          <p className="text-gray-600 text-center mb-10 text-lg">Cette liste non exhaustive couvre les preuves les plus fréquemment demandées.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Règlement intérieur des formations',
              'Procédure d\'inscription et d\'accueil des apprenants',
              'Plans de formation individualisés',
              'Programmes de formation détaillés (objectifs, contenus, méthodes)',
              'Feuilles d\'émargement signées (2 fois par jour)',
              'Outils d\'évaluation des acquis (avant/pendant/après)',
              'Questionnaires de satisfaction apprenants complétés',
              'Système de traitement des réclamations et réclamations reçues',
              'CV et diplômes des formateurs',
              'Preuves de développement des compétences internes',
              'Compte rendus de réunions qualité',
              'Tableaux de bord et indicateurs de résultats'
            ].map((doc, i) => (
              <div key={i} className="flex gap-3 bg-white p-4 rounded-lg border border-amber-200">
                <FileText size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{doc}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-gray-500 text-sm">
            Téléchargez notre checklist complète sur la{' '}
            <Link to="/ressources" className="text-red-600 hover:underline">page Ressources</Link>.
          </p>
        </div>
      </section>

      {/* ERREURS */}
      <section className="py-16 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <AlertCircle size={48} className="mx-auto mb-6 text-amber-300" />
          <h2 className="text-3xl font-bold mb-10 text-center">Les 3 erreurs fatales à l'audit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                titre: 'Procédures non appliquées',
                desc: 'Avoir des procédures sur papier mais ne pas les suivre dans la pratique. L\'auditeur croise toujours les documents avec les témoignages des formateurs et des apprenants.'
              },
              {
                titre: 'Preuves insuffisantes',
                desc: 'Affirmer "on le fait" sans preuve tangible (feuille signée, compte rendu, tableau de bord, email…). L\'auditeur ne juge que ce qui est documenté.'
              },
              {
                titre: 'Équipe non préparée',
                desc: 'Des formateurs qui ne connaissent pas les procédures qualité ou qui répondent de manière contradictoire aux questions de l\'auditeur. La cohérence est cruciale.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg text-amber-200 mb-2">{item.titre}</h3>
                <p className="text-amber-50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Vos questions sur l'audit Qualiopi</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Search size={40} className="mx-auto mb-4 text-red-600" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simulez votre audit avant le jour J</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Notre audit blanc vous donne une vision précise de ce qui manque et de ce qui est prêt.
            Vous arrivez à l'audit officiel sans surprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle size={20} /> Demander un audit blanc
            </button>
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all"
            >
              Prendre contact
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Voir aussi :{' '}
            <Link to="/acquisition/obtenir-qualiopi" className="text-red-600 hover:underline">Obtenir Qualiopi</Link>
            {' '}·{' '}
            <Link to="/acquisition/qualiopi-rapidement" className="text-red-600 hover:underline">Qualiopi rapidement</Link>
            {' '}·{' '}
            <Link to="/acquisition/prix-certification-qualiopi" className="text-red-600 hover:underline">Prix Qualiopi</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
