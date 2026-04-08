import { Briefcase, TrendingUp, CheckCircle, Award, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { config } from '../config/company';

interface CaseStudy {
  id: string;
  clientName: string;
  sector: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  logo?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    clientName: 'FormaPro Sud',
    sector: 'Centre de formation multi-secteur',
    challenge: 'Création d\'un organisme de formation et demande de reconnaissance Qualiopi sans guide ou accompagnement',
    solution: 'Audit de faisabilité complet, structuration de l\'offre, montage du dossier NDA, préparation audit initial Qualiopi et coaching opérationnel',
    results: [
      'Obtention de la reconnaissance Qualiopi au 1er audit',
      'Mise en conformité des processus pédagogiques',
      'Développement de 8 formations éligibles CPF'
    ],
    metrics: [
      { label: 'Délai de création', value: '4 mois' },
      { label: 'Taux de succès', value: '100%' },
      { label: 'Formations CPF', value: '8' }
    ]
  },
  {
    id: 'case-2',
    clientName: 'CFA TechSkills',
    sector: 'CFA dans le secteur digital',
    challenge: 'Préparation à l\'audit Qualiopi blanc (certains critères peu maîtrisés) et absence de documentation qualité',
    solution: 'Audit blanc intégral, construction des preuves manquantes, mise en place des processus qualité, formation équipe',
    results: [
      'Tous les critères Qualiopi validés',
      'Documentation qualité complète',
      'Audit blanc concluant avantl\'audit officiel'
    ],
    metrics: [
      { label: 'Critères validés', value: '100%' },
      { label: 'Écarts majeurs trouvés', value: '0' },
      { label: 'Délai audit officiel', value: '3 mois' }
    ]
  },
  {
    id: 'case-3',
    clientName: 'Institut LangForm',
    sector: 'Organisme de formation en langues',
    challenge: 'Développement : création de dossiers RNCP/RS et référencement CPF/EDOF pour augmenter la visibilité et les financements',
    solution: 'Étude stratégique, conception de 3 dossiers RS ciblés, support dépôt France Compétences, intégration EDOF/Moncompteformation',
    results: [
      '3 certifications RS créées et actives',
      'Intégration réussie dans Moncompteformation.gouv.fr',
      'Augmentation de 45% des apprenants via CPF'
    ],
    metrics: [
      { label: 'Certifications créées', value: '3' },
      { label: 'Délai homologation', value: '6 mois' },
      { label: 'Croissance apprenants', value: '+45%' }
    ]
  },
  {
    id: 'case-4',
    clientName: 'Academy Management',
    sector: 'Organisme de formation en management',
    challenge: 'Audit de surveillance Qualiopi à venir, mais processus pédagogiques à consolider et BPF complexe',
    solution: 'Diagnostic complet, optimisation des processus, support BPF, préparation audit surveillance et accompagnement audit',
    results: [
      'Audit de surveillance réussi sans écart majeur',
      'BPF optimisé et clarifié',
      'Système qualité pérennisé et autonome'
    ],
    metrics: [
      { label: 'Écarts majeurs', value: '0' },
      { label: 'Écarts mineurs', value: '2' },
      { label: 'Autonomie qualité', value: '+80%' }
    ]
  }
];

export default function CaseStudies() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Bonjour, je suis intéressé par vos services après avoir vu vos cas de réussite. Pouvez-vous me fournir plus d\'informations ?'
    );
    window.open(
      `https://wa.me/${config.company.whatsapp.replace(/[^\d]/g, '')}?text=${message}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-900 to-red-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Cas de réussite</h1>
          <p className="text-xl text-amber-100">
            Découvrez comment nous avons accompagné plus de 500 organismes de formation à atteindre leurs objectifs
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-700">Organismes accompagnés</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
              <p className="text-gray-700">Taux de réussite Qualiopi</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
              <p className="text-gray-700">Formations créées</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
              <p className="text-gray-700">Ans d'expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Infos */}
                  <div>
                    <div className="mb-6">
                      <span className="px-3 py-1 bg-amber-100 text-red-600 rounded-full text-sm font-medium">
                        {study.sector}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-red-600 mb-4">{study.clientName}</h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                          <Briefcase className="w-5 h-5" /> Défi
                        </h4>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" /> Solution
                        </h4>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" /> Résultats
                        </h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex gap-2 text-gray-700">
                              <span className="text-red-600">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Métriques */}
                  <div className="bg-amber-50 p-8 rounded-lg flex flex-col justify-center">
                    <h4 className="font-semibold text-red-600 mb-6 flex items-center gap-2">
                      <Award className="w-5 h-5" /> Chiffres clés
                    </h4>
                    <div className="space-y-8">
                      {study.metrics.map((metric, i) => (
                        <div key={i}>
                          <div className="text-3xl font-bold text-red-600 mb-1">{metric.value}</div>
                          <p className="text-gray-700 text-sm">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages rapides */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">Ce que disent nos clients</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Eden Conseil Qualité nous a vraiment aidés à structurer notre organisme. L'audit blanc a été déterminant pour réussir l'audit officiel.",
                author: "Directeur, FormaPro Sud"
              },
              {
                quote: "Équipe très réactive et pédagogue. Ils expliquent, ne jugent pas, et proposent des solutions concrètes.",
                author: "Directrice Qualité, CFA TechSkills"
              },
              {
                quote: "Grâce à leur accompagnement, nous avons réussi à créer 3 certifications RS et à augmenter nos apprenants CPF de 45%.",
                author: "Fondateur, Institut LangForm"
              },
              {
                quote: "L'audit de surveillance ? Zéro écart majeur. C'est pour dire ! Merci à Eden Conseil Qualité.",
                author: "Directeur, Academy Management"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-amber-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-red-600">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à rejoindre nos clients satisfaits ?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Contactez-nous pour discuter de votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 font-semibold py-3 px-8 rounded-lg hover:bg-amber-50 transition-colors"
            >
              Commencer votre transformation
            </Link>
            <button
              onClick={handleWhatsApp}
              className="inline-block bg-[#25D366] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
