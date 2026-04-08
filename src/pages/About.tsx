import { Users, Award, Lightbulb, Target, CheckCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { config } from '../config/company';

export default function About() {
  useEffect(() => {
    // Meta tags
    document.title = 'À Propos | Eden Conseil Qualité - Experts Qualiopi CPF EDOF';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Qui sommes-nous ? Découvrez l\'équipe Eden Conseil Qualité, experts en certification Qualiopi et développement d\'organismes de formation.');
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Bonjour, je suis intéressé par découvrir comment vous pouvez accompagner mon organisme de formation. Pouvez-vous me fournir plus d\'informations ?'
    );
    window.open(
      `https://wa.me/${config.company.whatsapp.replace(/[^\d]/g, '')}?text=${message}`,
      '_blank'
    );
  };
  const values = [
    {
      icon: Target,
      title: 'Expertise ciblée',
      description: 'Spécialistes en formation professionnelle depuis 10+ ans'
    },
    {
      icon: Lightbulb,
      title: 'Solutions innovantes',
      description: 'Accompagnement personnalisé adapté à votre contexte'
    },
    {
      icon: Award,
      title: 'Résultats mesurables',
      description: '98% de réussite aux audits Qualiopi'
    },
    {
      icon: Users,
      title: 'Proximité',
      description: 'Équipe disponible et réactive'
    }
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Création de Eden Conseil Qualité',
      description: 'Naissance du cabinet suite à plusieurs années d\'accompagnement de clients'
    },
    {
      year: '2017',
      title: 'Expansion et certifications',
      description: 'Obtention de certifications additionnelles, élargissement de l\'offre'
    },
    {
      year: '2020',
      title: 'Transition numérique',
      description: 'Intégration des solutions digitales dans l\'accompagnement client'
    },
    {
      year: '2023',
      title: 'Plateforme en ligne',
      description: 'Lancement de ressources et outils digitaux pour les OF & CFA'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-900 to-red-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de nous</h1>
          <p className="text-xl text-amber-100">
            Depuis plus de 10 ans, nous accompagnons les organismes de formation et CFA dans leur création, développement et conformité.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Notre mission</h2>
              <p className="text-gray-700 mb-4">
                Eden Conseil Qualité accompagne les organismes de formation et CFA dans leur transformation et leur conformité. 
                Nous croyons que chaque organisme mérite un accompagnement de qualité, adapté à sa situation unique.
              </p>
              <p className="text-gray-700 mb-4">
                Notre expertise couvre l'ensemble du cycle de vie : création, certification Qualiopi, développement (CPF, RNCP, RS) 
                et gestion optimisée de votre activité.
              </p>
              <p className="text-gray-700">
                Nous ne proposons pas de solutions génériques. Chaque client reçoit un diagnostic personnalisé et un plan d'action 
                spécifique à ses enjeux.
              </p>
            </div>
            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-6">Les chiffres qui parlent</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold text-red-600">500+</div>
                  <p className="text-gray-700">Organismes accompagnés</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600">98%</div>
                  <p className="text-gray-700">Taux de réussite Qualiopi</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600">10+</div>
                  <p className="text-gray-700">Années d'expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">Nos valeurs</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <val.icon className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-red-600 mb-2">{val.title}</h3>
                <p className="text-gray-700 text-sm">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">Notre histoire</h2>
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                  {idx < timeline.length - 1 && <div className="w-1 h-24 bg-amber-200"></div>}
                </div>
                <div className="pb-8">
                  <div className="text-2xl font-bold text-red-600">{item.year}</div>
                  <h3 className="text-xl font-semibold text-red-600 mt-2">{item.title}</h3>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">Pourquoi choisir Eden Conseil Qualité ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-600 mb-2">Expertise spécialisée</h4>
                <p className="text-gray-700">10+ ans dans le secteur de la formation professionnelle</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-600 mb-2">Approche personnalisée</h4>
                <p className="text-gray-700">Diagnostic et accompagnement adapté à votre contexte</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-600 mb-2">Résultats mesurables</h4>
                <p className="text-gray-700">98% de réussite à la certification Qualiopi</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-600 mb-2">Support continu</h4>
                <p className="text-gray-700">Équipe disponible avant, pendant et après l'audit</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-600 mb-2">Accompagnement global</h4>
                <p className="text-gray-700">De la création au développement et l'optimisation</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-600 mb-2">Outils et ressources</h4>
                <p className="text-gray-700">Templates, guides et outils prêts à l'emploi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à nous faire confiance ?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Découvrez comment nous pouvons accompagner votre organisme
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 font-semibold py-3 px-8 rounded-lg hover:bg-amber-50 transition-colors"
            >
              Contactez-nous
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
