import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { config } from '../config/company';
import charlotteImg from '../assets/charlotte-profil-2.jpg';

export default function QuiSuisJe() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Bonjour Charlotte, je souhaite discuter de mon projet Qualiopi."
    );
    window.open(`https://wa.me/${config.company.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Qui suis-je ? | Charlotte Allexandre | Eden Conseil Qualité</title>
        <meta name="description" content="Charlotte Allexandre - Consultante Qualité spécialisée dans l'accompagnement des organismes de formation et la certification Qualiopi depuis 2020." />
        <link rel="canonical" href="https://edenconseilqualite.fr/qui-suis-je" />
        <meta property="og:title" content="Qui suis-je ? | Charlotte Allexandre | Eden Conseil Qualité" />
        <meta property="og:description" content="Découvrez le parcours et l'expertise de Charlotte Allexandre, consultante qualité experte en Qualiopi et accompagnement des organismes de formation." />
        <meta property="og:url" content="https://edenconseilqualite.fr/qui-suis-je" />
        <meta property="og:type" content="profile" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Accueil',
              item: 'https://edenconseilqualite.fr'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Qui suis-je ?',
              item: 'https://edenconseilqualite.fr/qui-suis-je'
            }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Charlotte Allexandre',
          jobTitle: 'Consultante Qualité & Auditrice Qualiopi',
          description: 'Consultante qualité spécialisée dans l\'accompagnement des organismes de formation et la certification Qualiopi',
          affiliation: {
            '@type': 'Organization',
            name: 'Eden Conseil Qualité'
          },
          url: 'https://edenconseilqualite.fr/qui-suis-je',
          email: 'edenconseilqualite@gmail.com',
          telephone: '+33767058187',
          yearsActive: '2020',
          areaServed: { '@type': 'Country', name: 'FR' }
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 via-amber-800 to-amber-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Qui suis-je ?</h1>
          <p className="text-xl text-amber-50">
            Charlotte Allexandre, Consultante Qualité & Ingénieure depuis 2020
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* About Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-16 items-center">
            {/* Image */}
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={charlotteImg} 
                  alt="Charlotte Allexandre - Consultante Qualité" 
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Charlotte Allexandre</h2>
                <p className="text-lg text-red-600 font-semibold mb-4">Consultante & Auditrice Qualiopi</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Je suis <strong>plus</strong> qu'une consultante qualité. Je vous accompagne dans la structuration complète de vos démarches qualité, la mise en conformité de vos organismes de formation, CFA, centres de bilan de compétences et toute structure souhaitant obtenir ou maintenir leur certification <strong>Qualiopi</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Depuis plusieurs années, j'accompagne les professionnels de la formation dans la structuration de leurs démarches qualité, la mise en conformité de leurs documents, la préparation aux audits et l'optimisation de leurs pratiques internes.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Me contacter
                </Link>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="bg-amber-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-red-600 mb-6">Mon Expertise</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mon parcours m'a permis d'intervenir auprès de nombreux organismes de formation, sur des problématiques variées : création de dossier NDA, conformité Qualiopi, préparation aux audits initiaux ou de surveillance, mise en place de procédures, programmes de formation, conventions, évaluations, veilles, indicateurs qualité et structuration administrative.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En parallèle de mon activité de consultante, j'interviens également en tant qu'<strong>auditrice Qualiopi</strong>, ce qui me permet d'avoir une vision concrète des attentes du référentiel national qualité et des exigences observées lors des audits.
            </p>
          </div>

          {/* My Approach */}
          <div className="space-y-8">
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-bold text-red-600 mb-2">Une Approche Stratégique, Opérationnelle et Pragmatique</h3>
              <p className="text-gray-700">
                Cette double expertise me permet d'accompagner mes clients avec une approche à la fois <strong>stratégique, opérationnelle et pragmatique</strong>.
              </p>
            </div>

            <div className="border-l-4 border-amber-800 pl-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">Mon Objectif</h3>
              <p className="text-gray-700">
                Mon objectif est simple : rendre la qualité plus claire, plus accessible et plus efficace pour les organismes de formation.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-bold text-red-600 mb-2">Accompagnement Sérieux, Personnalisé et Humain</h3>
              <p className="text-gray-700 leading-relaxed">
                Chez <strong>Eden Conseil Qualité</strong>, j'ai à cœur de proposer un accompagnement sérieux, personnalisé et humain. Chaque organisme a son fonctionnement, ses contraintes, ses objectifs et son niveau de maturité. C'est pourquoi je prends le temps d'analyser chaque situation afin de proposer des solutions adaptées, conformes et réellement applicables sur le terrain.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                J'accompagne mes clients avec <strong>exigence, pédagogie et transparence</strong>, afin qu'ils puissent aborder leurs démarches qualité avec confiance et sérénité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">Mes Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-red-600 text-4xl font-bold mb-4">✓</div>
              <h3 className="text-xl font-bold text-red-600 mb-3">Exigence</h3>
              <p className="text-gray-700">
                Rigueur et respect des normes qualité pour assurer vos succès
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-red-600 text-4xl font-bold mb-4">→</div>
              <h3 className="text-xl font-bold text-red-600 mb-3">Pédagogie</h3>
              <p className="text-gray-700">
                Explication claire et progressive pour que vous compreniez chaque étape
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-red-600 text-4xl font-bold mb-4">♦</div>
              <h3 className="text-xl font-bold text-red-600 mb-3">Transparence</h3>
              <p className="text-gray-700">
                Communication honnête sur les défis et les solutions pour votre projet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à discuter de votre projet ?</h2>
          <p className="text-amber-50 text-lg mb-8 max-w-2xl mx-auto">
            Contactez-moi pour un premier échange sur vos besoins en matière de qualité et de certification.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-red-600 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition"
            >
              Me contacter
            </Link>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              <MessageCircle size={20} />
              Discuter sur WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Breadcrumb Link */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="text-red-600 hover:text-red-700 font-semibold">
            ← Retour à l'accueil
          </Link>
        </div>
      </section>
    </div>
  );
}
