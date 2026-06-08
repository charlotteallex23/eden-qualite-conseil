import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { config } from '../../config/company';

export default function PackSurveillanceRenouvellement() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Surveillance + Renouvellement Qualiopi</title>
        <meta name="description" content="Pack surveillance renouvellement : audits annuels + audit renouvellement 3 ans. Maintien conformité sans stress, Qualiopi valide 3 ans de plus." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/pack-surveillance-renouvellement" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/pack-surveillance-renouvellement" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://edenconseilqualite.fr/' },
            { '@type': 'ListItem', position: 2, name: 'Surveillance + Renouvellement', item: 'https://edenconseilqualite.fr/acquisition/pack-surveillance-renouvellement' }
          ]
        })}</script>
      </Helmet>

      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Surveillance + Renouvellement</h1>
          <p className="text-xl text-amber-50 mb-8">Maintien conformité Qualiopi : audits annuels + renouvellement 3 ans</p>
          <button
            onClick={() => {
              const message = encodeURIComponent('Je veux sécuriser mon renouvellement Qualiopi dans 3 ans. Comment ça marche ?');
              window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
            }}
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors"
          >
            Sécuriser renouvellement
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Qu'est-ce que la surveillance Qualiopi ?</h2>
          
          <p className="text-gray-700 mb-6 text-lg">
            Après obtention de Qualiopi (3 ans), vous devez passer des audits de surveillance pour maintenir votre conformité.
          </p>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Le calendrier 3 ans</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2">Année 1 : Audit de surveillance</h4>
              <p className="text-gray-700 text-sm">Vérifie le maintien conformité. Délai : 18 mois après audit initial</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2">Années 2-3 : Audits internes</h4>
              <p className="text-gray-700 text-sm">Vous maintenez conformité. Nous proposons audits blancs annuels</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2">Année 3 : Audit de renouvellement</h4>
              <p className="text-gray-700 text-sm">Vérification complète. Qualiopi valide pour 3 ans supplémentaires</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Notre pack inclut</h3>
          <div className="space-y-3 mb-8">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Audit surveillance</strong> (18 mois après initial)</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Audits blancs annuels</strong> (années 2-3)</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Audit de renouvellement</strong> (année 3)</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Support 24/7</strong> pour corriger écarts</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Veille réglementaire</strong> tout au long</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Coûts et délais</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 mb-2"><strong>Pack 3 ans :</strong></p>
              <p className="text-lg text-red-600 font-bold">5 000 € - 12 000 €</p>
              <p className="text-sm text-gray-600 mt-2">Selon taille organisme</p>
            </div>
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 mb-2"><strong>Audit de renouvellement seul :</strong></p>
              <p className="text-lg text-red-600 font-bold">1 500 € - 3 500 €</p>
              <p className="text-sm text-gray-600 mt-2">Audit officiel année 3</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Pourquoi choisir notre pack ?</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              Vous n'êtes jamais seul face aux audits
            </li>
            <li className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              Taux de réussite renouvellement: 98%
            </li>
            <li className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              Coûts prévisibles sur 3 ans
            </li>
            <li className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              Conformité à jour en permanence
            </li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-red-600 mb-6">Services connexes</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/acquisition/obtenir-qualiopi" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Obtenir Qualiopi</p>
              <p className="text-gray-600 text-xs mt-1">Première certification</p>
            </Link>
            <Link to="/acquisition/audit-initial-qualiopi" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Audit initial</p>
              <p className="text-gray-600 text-xs mt-1">Premier passage audit</p>
            </Link>
            <Link to="/acquisition/preaudit-qualiopi" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Pré-audit</p>
              <p className="text-gray-600 text-xs mt-1">Audit blanc complet</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
