import { Link } from 'react-router-dom';
import { CheckCircle, Clock, FileText, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { config } from '../../config/company';

export default function InscriptionEDOF() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Inscription EDOF : accès MonCompteFormation</title>
        <meta name="description" content="Inscription EDOF simplement. Dossier complet préparé, suivi auprès DREETS, publications formations sur MonCompteFormation. Zéro rejet." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/inscription-edof" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/inscription-edof" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://edenconseilqualite.fr/' },
            { '@type': 'ListItem', position: 2, name: 'Inscription EDOF', item: 'https://edenconseilqualite.fr/acquisition/inscription-edof' }
          ]
        })}</script>
      </Helmet>

      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Inscription EDOF</h1>
          <p className="text-xl text-amber-50 mb-8">Accédez à MonCompteFormation en 2-8 semaines avec dossier complet</p>
          <button
            onClick={() => {
              const message = encodeURIComponent('Je veux m\'inscrire sur EDOF. Comment ça marche ?');
              window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
            }}
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors"
          >
            Démarrer inscription EDOF
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Qu'est-ce qu'EDOF ?</h2>
          <p className="text-gray-700 mb-6 text-lg">
            EDOF (Espace Des Organismes de Formation) est le portail où vous déclarez vos formations pour qu'elles soient visibles sur MonCompteFormation. C'est obligatoire pour accéder au financement CPF.
          </p>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Les 4 étapes de l'inscription</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
                Pré-requis vérifiés
              </h4>
              <p className="text-gray-700 text-sm">Qualiopi, SIRET, NDA validés</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
                Dossier préparé
              </h4>
              <p className="text-gray-700 text-sm">Informations organisme + formations + justificatifs</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
                Dépôt et suivi DREETS
              </h4>
              <p className="text-gray-700 text-sm">Validation par l'administration (2-8 semaines)</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">4</span>
                Publication formations
              </h4>
              <p className="text-gray-700 text-sm">Vos formations apparaissent sur MonCompteFormation</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Prérequis obligatoires</h3>
          <div className="space-y-3 mb-8">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Certification Qualiopi</strong> en cours de validité</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>SIRET d'organisme</strong> de formation validé</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Numéro d'activité DREETS</strong> obtenu</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Formations RNCP/RS</strong> à proposer</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Délais et coûts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 mb-2"><strong>Délai inscription :</strong></p>
              <p className="text-lg text-red-600 font-bold">2-8 semaines</p>
              <p className="text-sm text-gray-600 mt-2">Selon complétude dossier</p>
            </div>
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 mb-2"><strong>Coût accompagnement :</strong></p>
              <p className="text-lg text-red-600 font-bold">800 € - 1 500 €</p>
              <p className="text-sm text-gray-600 mt-2">Dossier complet + suivi</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-red-600 mb-6">Services connexes</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/acquisition/acceder-edof" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Accéder EDOF</p>
              <p className="text-gray-600 text-xs mt-1">Pour organismes existants</p>
            </Link>
            <Link to="/acquisition/referencer-formation-cpf" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Référencer CPF</p>
              <p className="text-gray-600 text-xs mt-1">Publication formations</p>
            </Link>
            <Link to="/acquisition/pack-qualiopi-edof" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Qualiopi + EDOF</p>
              <p className="text-gray-600 text-xs mt-1">Pack complet</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
