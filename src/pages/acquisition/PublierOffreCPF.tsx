import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { config } from '../../config/company';

export default function PublierOffreCPF() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Publier Offre CPF : publication & optimisation</title>
        <meta name="description" content="Publier formation CPF : processus complet, structuration fiche, optimisation visibilité MonCompteFormation. Maximiser conversions apprenant." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/publier-offre-cpf" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/publier-offre-cpf" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://edenconseilqualite.fr/' },
            { '@type': 'ListItem', position: 2, name: 'Publier Offre CPF', item: 'https://edenconseilqualite.fr/acquisition/publier-offre-cpf' }
          ]
        })}</script>
      </Helmet>

      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Publier une Offre CPF</h1>
          <p className="text-xl text-amber-50 mb-8">Structure, optimisation, visibilité maximale sur MonCompteFormation</p>
          <button
            onClick={() => {
              const message = encodeURIComponent('Je veux publier mes formations CPF avec visibilité maximale. Comment ça marche ?');
              window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
            }}
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors"
          >
            Publier formation CPF
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Les 3 étapes de publication</h2>
          
          <div className="space-y-4 mb-8">
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2">1. Structurer votre fiche formation</h4>
              <p className="text-gray-700 text-sm">Titre, description, objectifs, prérequis, durée, tarif, modalités</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2">2. Dépôt EDOF</h4>
              <p className="text-gray-700 text-sm">Création fiche, saisie données, validation complétude</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2">3. Publication MonCompteFormation</h4>
              <p className="text-gray-700 text-sm">Apparition automatique une fois validée par DREETS</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Éléments clés de la fiche</h3>
          <div className="space-y-3 mb-8">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <span className="text-gray-700"><strong>Titre accrocheur</strong> avec mots-clés</span>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <span className="text-gray-700"><strong>Description détaillée</strong> (min. 200 caractères)</span>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <span className="text-gray-700"><strong>Objectifs clairs</strong> : compétences acquises</span>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <span className="text-gray-700"><strong>Prérequis explicités</strong> ou "aucun"</span>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <span className="text-gray-700"><strong>Durée précise</strong> en heures</span>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <span className="text-gray-700"><strong>Tarif transparent</strong> + modalités paiement</span>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Optimisation visibilité</h3>
          <div className="bg-gradient-to-r from-red-50 to-amber-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-4">L'algorithme MonCompteFormation favorise :</p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Avis apprenants</strong> &gt; 4/5 (collecte systématique)</li>
              <li>✓ <strong>Sessions disponibles</strong> dans les 30 jours</li>
              <li>✓ <strong>Prix cohérent</strong> avec marché</li>
              <li>✓ <strong>Descriptions complètes</strong> et bien rédigées</li>
              <li>✓ <strong>Taux de réussite documentés</strong></li>
              <li>✓ <strong>Accessibilité handicap</strong> mention</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Délai de publication</h3>
          <p className="text-gray-700 mb-4">
            <strong>Après validation dossier :</strong> Votre formation apparaît sur MonCompteFormation sous 24-48h. Les apprenants peuvent alors s'inscrire et utiliser leur CPF.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-red-600 mb-6">Services connexes</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/acquisition/referencer-formation-cpf" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Référencer formation</p>
              <p className="text-gray-600 text-xs mt-1">Dossier conforme, zéro refus</p>
            </Link>
            <Link to="/acquisition/acceder-edof" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Accéder EDOF</p>
              <p className="text-gray-600 text-xs mt-1">Inscription complète</p>
            </Link>
            <Link to="/acquisition/pack-of-cpf" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Pack OF + CPF</p>
              <p className="text-gray-600 text-xs mt-1">Solution complète</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
