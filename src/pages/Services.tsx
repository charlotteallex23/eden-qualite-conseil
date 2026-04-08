import { Building2, TrendingUp, Shield, FileCheck, Award, Search, Target, BookOpen, FileText, Users, MessageCircle, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { config } from '../config/company';

export default function Services() {
  useEffect(() => {
    // Meta tags
    document.title = 'Services de Conseil Formation | Consultant Qualiopi CPF EDOF';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Création organisme formation, accompagnement Qualiopi, CPF, EDOF. Services complets pour développer votre activité de formation.');
  }, []);

  const navigate = useNavigate();
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Bonjour, je suis intéressé par un accompagnement sur-mesure. Pouvez-vous me fournir plus d\'informations ?'
    );
    window.open(
      `https://wa.me/${config.company.whatsapp.replace(/[^\d]/g, '')}?text=${message}`,
      '_blank'
    );
  };

  const services = [
    {
      icon: Building2,
      title: 'Conseil Création OF / CFA',
      color: 'blue',
      description: 'Vous envisagez de créer un organisme de formation ou un Centre de Formation d\'Apprentis ? Cette phase critique nécessite une expertise solide pour valider votre projet et sécuriser votre investissement.',
      items: [
        { icon: Search, text: 'Audit rapide de faisabilité' },
        { icon: FileCheck, text: 'Aide au montage de dossier NDA' },
        { icon: Target, text: 'Structuration de l\'offre de formation' },
        { icon: Shield, text: 'Mise en conformité initiale' }
      ],
      details: [
        {
          title: 'Audit de faisabilité complet',
          description: 'Nous analysons la viabilité de votre projet : marché, concurrence, ressources nécessaires, conformité réglementaire, financements possibles.'
        },
        {
          title: 'Aide déclaration DREETS',
          description: 'Accompagnement complet pour remplir et déposer votre dossier de déclaration d\'activité auprès de la DREETS.'
        },
        {
          title: 'Structuration offre formation',
          description: 'Définition des formations, certifications RNCP/RS, durées, tarification, et positionnement marché.'
        },
        {
          title: 'Conformité initiale Qualiopi',
          description: 'Mise en place des processus, documentation et outils pour être prêt à l\'audit Qualiopi dès le démarrage.'
        }
      ],
      faqItems: [
        {
          q: 'Combien de temps pour créer un organisme de formation ?',
          a: 'Entre 3 et 6 mois selon votre situation. DREETS (2-4 mois), Qualiopi (3-5 mois). Nous optimisons ce calendrier.'
        },
        {
          q: 'Quels sont les coûts de création ?',
          a: 'Entre 3 000€ et 10 000€ selon structure (juridique, locaux, formateurs). Nous vous aidons à optimiser ce budget.'
        },
        {
          q: 'Pouvez-vous m\'aider à trouver des formations RNCP à dispenser ?',
          a: 'Oui, nous proposons des formations RNCP clés en main que vous pouvez reprendre en tant qu\'organisme agréé.'
        },
        {
          q: 'Suis-je obligé d\'avoir Qualiopi ?',
          a: 'Oui, si vous recevez des financements publics (CPF, OPCO, État, Région). Cela couvre 95% des projets viables.'
        }
      ]
    },
    {
      icon: TrendingUp,
      title: 'Conseil Développement',
      color: 'blue',
      description: 'Vous avez un organisme existant et souhaitez accélérer sa croissance ? Nous vous aidons à diversifier votre offre, augmenter votre visibilité et vos revenus.',
      items: [
        { icon: Award, text: 'Partenariats certificateurs RS/RNCP' },
        { icon: FileCheck, text: 'Aide à l\'éligibilité CPF' },
        { icon: BookOpen, text: 'Référencements EDOF / Kairos' },
        { icon: Target, text: 'Stratégie OF / croissance' }
      ],
      details: [
        {
          title: 'Partenariat certificateur RS RNCP',
          description: 'Mise en relation avec certificateurs reconnus pour proposer vos propres certifications RS et RNCP.'
        },
        {
          title: 'Stratégie CPF optimisée',
          description: 'Analyse complète pour rendre vos formations éligibles au CPF et maximiser votre accès à ce marché de 6,5 milliards €.'
        },
        {
          title: 'Enregistrement EDOF',
          description: "Demande d'accés à l'espace des Organismes de Formations (EDOF) pour proposer vos formations sur MonCompteFormation."
        },
        {
          title: 'Plan croissance personnalisé',
          description: 'Définition d\'une stratégie de développement : offre, tarification, positionnement, acquisition apprenants.'
        }
      ],
      faqItems: [
        {
          q: 'Comment augmenter mon CA avec le CPF ?',
          a: 'En rendant vos formations éligibles CPF. En moyenne, + 150-200% d\'apprenants et de CA dans les 12 mois.'
        },
        {
          q: 'Quels types de formations être éligibles CPF ?',
          a: 'Les formations certifiantes : RNCP, RS, CQP. Les formations sans certification ne sont pas finançables.'
        },
        {
          q: 'Je dois être sur EDOF ?',
          a: 'Oui si vous avez déclenchement une activité OF. C\'est la base pour accéder aux financements publics.'
        },
        {
          q: 'Combien peut m\'apporter une nouvelle RS ?',
          a: 'Entre 20k€ et 100k€/an selon secteur et stratégie commerciale. Certains clients font x3 en 2 ans.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Conseil Gestion & Conformité',
      color: 'blue',
      description: 'La conformité est devenue un élément clé de votre crédibilité et de votre accès aux financements. Nous sécurisons votre organisme sur tous les fronts réglementaires.',
      items: [
        { icon: Award, text: 'Préparation Qualiopi audit initial' },
        { icon: FileText, text: 'Mise en place des preuves' },
        { icon: Users, text: 'Assistance audit de surveillance' },
        { icon: FileCheck, text: 'BPF (Bilan Pédagogique et Financier)' },
        { icon: BookOpen, text: 'Procédures & modèles prêts à l\'emploi' }
      ],
      details: [
        {
          title: 'Audit blanc Qualiopi',
          description: 'Audit complet interne avant audit officiel. Nous identifions tous les écarts et proposons un plan d\'action.'
        },
        {
          title: 'Préparation audit initial',
          description: 'Mise en conformité complète : processus documentés, preuves collectées, formation équipe aux critères.'
        },
        {
          title: 'Assistance audits de surveillance',
          description: 'Suivi annuel Qualiopi : préparation dossier, présence auditeur, correctifs post-audit.'
        },
        {
          title: 'BPF annuel : rédaction et dépôt',
          description: 'Nous collectons données pédagogiques, organisons données financières, rédigeons et déposons le BPF complet.'
        }
      ],
      faqItems: [
        {
          q: 'Combien coûte une préparation Qualiopi ?',
          a: 'Entre 3k€ et 8k€ selon taille organisme. Eden Conseil Qualité propose des forfaits flexibles.'
        },
        {
          q: 'Combien de temps pour préparer un audit Qualiopi ?',
          a: '3-5 mois pour être prêt (audit blanc + corrections). Plus rapide si on optimise.'
        },
        {
          q: 'Qu\'est-ce qui fait échouer un audit Qualiopi ?',
          a: 'Absences de preuves (+ courant), formateurs non qualifiés, accessibilité handicapés, évaluations manquantes.'
        },
        {
          q: 'BPF : est-ce obligatoire ?',
          a: 'Oui pour tous les OF déclarés. À déposer avant 30 juin pour année précédente.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
            Nos Services d'Accompagnement
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un accompagnement complet et personnalisé pour structurer, développer et sécuriser votre organisme de formation ou CFA
          </p>
        </div>

        {/* Services Cards */}
        <div className="space-y-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-red-600 to-amber-800 p-8">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {service.title}
                    </h2>
                    <p className="text-amber-100 mt-2">{service.description}</p>
                  </div>
                </div>
              </div>

              {/* Main Items */}
              <div className="p-8">
                <h3 className="font-bold text-gray-900 mb-6 text-lg">Ce que nous proposons :</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-amber-50 transition-colors"
                    >
                      <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                        <item.icon className="w-5 h-5 text-red-600" />
                      </div>
                      <p className="text-gray-700 font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>

                {/* Detailed Descriptions */}
                <div className="bg-amber-50 rounded-lg p-6 mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">Détails du service :</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="border-l-4 border-red-600 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{detail.title}</h4>
                        <p className="text-gray-700 text-sm">{detail.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Questions fréquentes :</h3>
                  <div className="space-y-3">
                    {service.faqItems.map((faqItem, faqIndex) => (
                      <div key={faqIndex} className="border rounded-lg">
                        <button
                          onClick={() => setExpandedFaqIndex(expandedFaqIndex === faqIndex + (index * 10) ? null : faqIndex + (index * 10))}
                          className="w-full p-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-gray-100 transition"
                        >
                          {faqItem.q}
                          <ChevronDown 
                            size={20} 
                            className={`transition-transform ${expandedFaqIndex === faqIndex + (index * 10) ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {expandedFaqIndex === faqIndex + (index * 10) && (
                          <div className="px-4 pb-4 border-t text-gray-700">
                            {faqItem.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Related Resources */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-red-600 mb-6">Ressources pour approfondir</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/qualiopi"
              className="p-4 border-l-4 border-red-600 hover:shadow-md transition cursor-pointer"
            >
              <h3 className="font-bold text-gray-900 mb-2">Guide complet Qualiopi →</h3>
              <p className="text-gray-700 text-sm">Tous les domaines, critères, étapes et pièges à éviter</p>
            </Link>
            <Link
              to="/cpf-eligibilite"
              className="p-4 border-l-4 border-red-600 hover:shadow-md transition cursor-pointer"
            >
              <h3 className="font-bold text-gray-900 mb-2">Stratégie CPF →</h3>
              <p className="text-gray-700 text-sm">Comment multiplier votre chiffre d'affaires par le CPF</p>
            </Link>
            <Link
              to="/edof-referencement"
              className="p-4 border-l-4 border-red-600 hover:shadow-md transition cursor-pointer"
            >
              <h3 className="font-bold text-gray-900 mb-2">EDOF enregistrement →</h3>
              <p className="text-gray-700 text-sm">Guide pas à pas pour vous enregistrer et optimiser visibilité</p>
            </Link>
            <Link
              to="/ressources"
              className="p-4 border-l-4 border-red-600 hover:shadow-md transition cursor-pointer"
            >
              <h3 className="font-bold text-gray-900 mb-2">Nos ressources →</h3>
              <p className="text-gray-700 text-sm">Télécharger nos guides, checklist et templates prêts à l'emploi</p>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-red-600 via-amber-800 to-red-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à transformer votre organisme de formation ?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Chaque organisme est unique. Contactez-nous pour un diagnostic gratuit et une stratégie personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl"
            >
              Prendre RDV gratuit
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Discuter par WhatsApp
            </button>
            <button
              onClick={() => navigate('/tarifs')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all"
            >
              Voir les tarifs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
