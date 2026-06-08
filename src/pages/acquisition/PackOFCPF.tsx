import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Award, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { config } from '../../config/company';

export default function PackOFCPF() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Pack OF + CPF : accès MonCompteFormation</title>
        <meta name="description" content="Pack OF CPF : certification Qualiopi + inscription EDOF + accès MonCompteFormation. Captez les apprenants CPF dès maintenant." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/pack-of-cpf" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/pack-of-cpf" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://edenconseilqualite.fr/' },
            { '@type': 'ListItem', position: 2, name: 'Pack OF CPF', item: 'https://edenconseilqualite.fr/acquisition/pack-of-cpf' }
          ]
        })}</script>
      </Helmet>

      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Pack OF + CPF</h1>
          <p className="text-xl text-amber-50 mb-4">Certification Qualiopi + EDOF + MonCompteFormation</p>
          <p className="text-lg text-amber-100 mb-8">Multiplier votre CA par 3-5x avec l'accès CPF</p>
          <button
            onClick={() => {
              const message = encodeURIComponent('Je souhaite obtenir l\'accès CPF et MonCompteFormation. Comment ça marche ?');
              window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
            }}
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors"
          >
            Accéder au CPF maintenant
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Que contient le pack ?</h2>
          
          <div className="space-y-4 mb-8">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <CheckCircle size={20} /> Certification Qualiopi
              </h3>
              <p className="text-gray-700">Audit blanc + accompagnement complet + audit officiel</p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <CheckCircle size={20} /> Inscription EDOF
              </h3>
              <p className="text-gray-700">Dossier complet préparé + suivi auprès DREETS</p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <CheckCircle size={20} /> Publication CPF
              </h3>
              <p className="text-gray-700">Vos formations prêtes sur MonCompteFormation</p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <CheckCircle size={20} /> Support 24/7
              </h3>
              <p className="text-gray-700">Équipe disponible avant/pendant/après</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Impact sur votre CA</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-lg border border-red-200">
              <p className="text-gray-600 text-sm mb-2">Actuellement</p>
              <p className="text-3xl font-bold text-gray-700">100 %</p>
              <p className="text-xs text-gray-600 mt-2">CA autofinancé</p>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-amber-100 p-6 rounded-lg border-2 border-red-600">
              <p className="text-gray-600 text-sm mb-2">Après 6 mois CPF</p>
              <p className="text-3xl font-bold text-red-600">300-500 %</p>
              <p className="text-xs text-gray-600 mt-2">CPF = nouvelles sources</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-lg border border-red-200">
              <p className="text-gray-600 text-sm mb-2">Impact net</p>
              <p className="text-3xl font-bold text-green-600">+ 200-400 %</p>
              <p className="text-xs text-gray-600 mt-2">Croissance rapide</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Délais et investissement</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 mb-2"><strong>Délai total :</strong></p>
              <p className="text-lg text-red-600 font-bold">6-9 mois</p>
              <p className="text-sm text-gray-600 mt-2">De Qualiopi à CPF actif</p>
            </div>
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 mb-2"><strong>Investissement :</strong></p>
              <p className="text-lg text-red-600 font-bold">8 000 € - 15 000 €</p>
              <p className="text-sm text-gray-600 mt-2">ROI en 3-4 mois généralement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-red-600 mb-6">Packages complémentaires</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/acquisition/pack-qualiopi-edof" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Qualiopi + EDOF</p>
              <p className="text-gray-600 text-xs mt-1">Sans accompagnement marketing</p>
            </Link>
            <Link to="/acquisition/obtenir-qualiopi" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Certification seule</p>
              <p className="text-gray-600 text-xs mt-1">Qualiopi uniquement</p>
            </Link>
            <Link to="/acquisition/acceder-edof" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">EDOF seul</p>
              <p className="text-gray-600 text-xs mt-1">Pour organismes certifiés</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
