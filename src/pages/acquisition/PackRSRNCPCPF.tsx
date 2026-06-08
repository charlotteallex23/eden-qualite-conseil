import { Link } from 'react-router-dom';
import { CheckCircle, Target, Award, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { config } from '../../config/company';

export default function PackRSRNCPCPF() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Pack RS RNCP CPF : stratégie complète</title>
        <meta name="description" content="Pack RS RNCP CPF : choisir vos certifications, les intégrer dans votre OF, les rendre éligibles CPF. Stratégie complète de croissance." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/pack-rs-rncp-cpf" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/pack-rs-rncp-cpf" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://edenconseilqualite.fr/' },
            { '@type': 'ListItem', position: 2, name: 'Pack RS RNCP CPF', item: 'https://edenconseilqualite.fr/acquisition/pack-rs-rncp-cpf' }
          ]
        })}</script>
      </Helmet>

      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Pack RS / RNCP / CPF</h1>
          <p className="text-xl text-amber-50 mb-8">Choisir et intégrer vos certifications pour maximiser l'accès CPF</p>
          <button
            onClick={() => {
              const message = encodeURIComponent('Je souhaite ajouter une certification RS/RNCP à mon OF. Quel est votre accompagnement ?');
              window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
            }}
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors"
          >
            Planifier stratégie certifications
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Comprendre RS, RNCP, CPF</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-bold text-red-600 mb-2">Qu'est-ce qu'une certification RS (Répertoire Spécifique) ?</h3>
              <p className="text-gray-700">
                Certification de compétences métier spécifiques, reconnue par les branches professionnelles. Moins lourde qu'une RNCP, très actuelle.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-bold text-red-600 mb-2">Qu'est-ce qu'une certification RNCP (Répertoire National) ?</h3>
              <p className="text-gray-700">
                Certification inscrite au Répertoire National. Plus reconnue, plus lourde à mettre en place, idéale pour formations "diplômantes".
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-bold text-red-600 mb-2">Lien avec CPF ?</h3>
              <p className="text-gray-700">
                Les formations CPF doivent déboucher sur une certification RS ou RNCP. C'est la seule condition d'éligibilité CPF.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Notre accompagnement</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-600">Audit marché</h4>
                <p className="text-gray-700 text-sm">Identifier les certifications pertinentes pour votre secteur</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-600">Mise en relation avec certificateurs</h4>
                <p className="text-gray-700 text-sm">Nous négocions les partenariats, délais, coûts</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-600">Intégration à votre OF</h4>
                <p className="text-gray-700 text-sm">Programme pédagogique, modalités, infrastructures</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-600">Référencement CPF</h4>
                <p className="text-gray-700 text-sm">Publication sur EDOF et MonCompteFormation</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Délais et investissement</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 mb-2"><strong>Pour chaque certification :</strong></p>
              <p className="text-lg text-red-600 font-bold">3-6 mois</p>
              <p className="text-sm text-gray-600 mt-2">Partenariat + intégration</p>
            </div>
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 mb-2"><strong>Investissement :</strong></p>
              <p className="text-lg text-red-600 font-bold">2 000 € - 5 000 €</p>
              <p className="text-sm text-gray-600 mt-2">Par certification + CPF</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-red-600 mb-6">Services liés</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/acquisition/pack-of-cpf" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Pack OF + CPF</p>
              <p className="text-gray-600 text-xs mt-1">Qualiopi + EDOF + CPF</p>
            </Link>
            <Link to="/acquisition/referencer-formation-cpf" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Référencer CPF</p>
              <p className="text-gray-600 text-xs mt-1">Publication formations</p>
            </Link>
            <Link to="/acquisition/acceder-edof" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Accéder EDOF</p>
              <p className="text-gray-600 text-xs mt-1">Inscription complète</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
