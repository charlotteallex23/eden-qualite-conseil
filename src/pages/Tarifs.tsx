import { Check, ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { config } from '../config/company';

export default function Tarifs() {
  useEffect(() => {
    // Meta tags
    document.title = 'Tarifs & Devis | Services Conseil Formation Qualiopi CPF EDOF';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Découvrez nos tarifs pour certification Qualiopi, développement formation, création organisme. Devis personnalisé sur demande.');
  }, []);

  const navigate = useNavigate();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const devisRef = useRef<HTMLDivElement>(null);

  const scrollToDevis = () => {
    devisRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Bonjour, je souhaite obtenir un devis personnalisé pour les services de Eden Conseil Qualité. Pouvez-vous m\'aider ?'
    );
    window.open(
      `https://wa.me/${config.company.whatsapp.replace(/[^\d]/g, '')}?text=${message}`,
      '_blank'
    );
  };

  const pricingOptions = [
    {
      title: "Accompagnement Obtention NDA",
      price: "À partir de 500€",
      description: "Démarrez votre organisme de formation sur des bases solides",
      features: [
        "Analyse préalable de votre projet OF",
        "Assistance complète au dépôt du NDA",
        "Structuration de votre offre pédagogique",
        "Mise en conformité avec les exigences légales",
      ],
      highlight: false,
      duration: "6-8 semaines"
    },
    {
      title: "Certification Qualiopi – Audit Initial",
      price: "À partir de 1 990€",
      description: "Une préparation méthodique pour réussir votre audit du premier coup",
      features: [
        "Audit blanc intégral avec restitutions",
        "Construction de vos preuves et livrables",
        "Mise en place des processus qualité",
        "Formation opérationnelle de votre équipe",
        "Coaching et accompagnement jour J",
      ],
      highlight: true,
      duration: "12-16 semaines"
    },
    {
      title: "Création & Déploiement de CFA",
      price: "Sur devis",
      description: "Conception complète d'un CFA conforme, efficient et rentable",
      features: [
        "Étude approfondie de faisabilité",
        "Montage administratif complet du CFA",
        "Accompagnement aux relations institutionnelles",
        "Formalisation des process qualité",
        "Préparation à l'agrément et aux contrôles",
      ],
      highlight: false,
      duration: "À définir"
    },
    {
      title: "Dossiers RNCP / RS – Partenariat Certificateur",
      price: "À partir de 400€",
      description: "Créez ou rejoignez une certification professionnelle reconnue",
      features: [
        "Analyse stratégique de l'opportunité",
        "Rédaction du dossier RNCP/RS",
        "Construction du référentiel compétences",
        "Élaboration des modalités d'évaluation",
        "Accompagnement au dépôt et suivi France Compétences",
      ],
      highlight: false,
      duration: "8-12 semaines"
    },
    {
      title: "Éligibilité CPF & Référencement EDOF",
      price: "À partir de 990€",
      description: "Rendez vos formations finançables et visibles sur MonCompteFormation",
      features: [
        "Diagnostic complet de vos formations",
        "Structuration des blocs de compétences",
        "Préparation à la conformité CPF",
        "Accompagnement au référencement sur EDOF",
      ],
      highlight: true,
      duration: "4-6 semaines"
    },
    {
      title: "Audit de Surveillance Qualiopi",
      price: "À partir de 890€",
      description: "Anticipez votre audit de surveillance et sécurisez votre certification",
      features: [
        "Contrôle de vos preuves et indicateurs",
        "Actualisation de vos procédures internes",
        "Audit blanc personnalisé",
        "Plan d'actions correctives détaillé",
        "Coaching et suivi jusqu'à l'audit",
      ],
      highlight: false,
      duration: "6-8 semaines"
    },
  ];

  const faqItems = [
    {
      question: "Quel est le délai pour un accompagnement ?",
      answer: "Les délais varient selon le service choisi, de 4 à 16 semaines. Un accompagnement Qualiopi complet prend généralement 3-4 mois. Nous nous adaptons toujours à votre calendrier et vous proposons un planning détaillé lors de la première consultation."
    },
    {
      question: "Proposez-vous un paiement échelonné ?",
      answer: "Oui, absolument. Nous proposons des modalités de paiement échelonnées selon les étapes de votre accompagnement. Nous en discutons ensemble lors de notre premier rendez-vous."
    },
    {
      question: "Puis-je commencer par une consultation gratuite ?",
      answer: "Oui, nos premiers rendez-vous sont gratuits et sans engagement. Nous diagnostiquons votre situation et vous proposons un plan d'action adapté."
    },
    {
      question: "Vos tarifs incluent-ils la TVA ?",
      answer: "Non, tous nos tarifs sont affichés HT (Hors Taxes). La TVA sera appliquée selon votre statut (vous recevrez une facture détaillée)."
    },
    {
      question: "Que faire si mes besoins ne correspondent pas aux offres listées ?",
      answer: "Aucun problème ! Nous proposons des accompagnements personnalisés et sur devis pour toute demande spécifique. Contactez-nous pour discuter de vos besoins uniques."
    },
    {
      question: "Combien coûte un audit blanc Qualiopi ?",
      answer: "L'audit blanc est généralement inclus dans nos packages Qualiopi. Si vous souhaitez un audit blanc seul (hors accompagnement complet), comptez entre 500 et 1500€ selon la taille de votre structure."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
            Nos Tarifs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions adaptées à chaque étape de développement de votre organisme de formation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col ${
                option.highlight ? 'ring-2 ring-red-900 transform lg:scale-105' : ''
              }`}
            >
              {option.highlight && (
                <div className="bg-red-900 text-white text-center py-2 font-semibold text-sm">
                  POPULAIRE
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-red-600 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  <span className="font-semibold">Durée :</span> {option.duration}
                </p>
                <p className="text-gray-600 mb-6 min-h-[48px]">
                  {option.description}
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-red-600">
                    {option.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToDevis}
                  className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    option.highlight
                      ? 'bg-red-600 text-white hover:bg-amber-800'
                      : 'bg-amber-50 text-red-600 hover:bg-amber-100'
                  }`}
                >
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tableau comparatif */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-red-600 mb-8 text-center">Tableau comparatif</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-red-600">
                  <th className="text-left py-4 px-4 font-bold text-red-600">Service</th>
                  <th className="text-center py-4 px-4 font-bold text-red-600">Durée</th>
                  <th className="text-center py-4 px-4 font-bold text-red-600">Tarif</th>
                  <th className="text-center py-4 px-4 font-bold text-red-600">Personnalisation</th>
                </tr>
              </thead>
              <tbody>
                {pricingOptions.map((option, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-amber-50">
                    <td className="py-4 px-4 font-semibold text-red-600">{option.title}</td>
                    <td className="py-4 px-4 text-center text-gray-700">{option.duration}</td>
                    <td className="py-4 px-4 text-center text-gray-700">{option.price}</td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-red-600 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Devis personnalisé */}
        <div ref={devisRef} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16 scroll-mt-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Besoin d'un devis personnalisé ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Chaque projet est unique. Nos tarifs peuvent être adaptés en fonction de vos besoins spécifiques, de la taille de votre structure et de l'ampleur de l'accompagnement souhaité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Discuter sur WhatsApp
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/services')}
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all"
              >
                Voir nos services
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Questions fréquentes sur nos tarifs</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-amber-50 transition-colors"
                >
                  <h3 className="font-semibold text-red-600 text-left">{item.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-red-600 transition-transform flex-shrink-0 ml-4 ${
                      expandedFAQ === idx ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === idx && (
                  <div className="border-t border-gray-200 p-6 bg-amber-50">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-red-600 mb-4 text-center">
            Informations importantes
          </h3>
          <ul className="space-y-2 text-gray-700 max-w-3xl mx-auto">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span>Tous nos tarifs sont HT et peuvent être ajustés selon la complexité du projet</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span>Premier rendez-vous gratuit et sans engagement</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span>Possibilité de paiement échelonné selon les prestations</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span>Devis détaillé fourni avant toute intervention</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
