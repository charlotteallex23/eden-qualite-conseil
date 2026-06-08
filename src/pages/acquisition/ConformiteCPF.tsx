import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, FileText, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { config } from '../../config/company';

export default function ConformiteCPF() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Conformité CPF : audit & traçabilité</title>
        <meta name="description" content="Conformité CPF : audit interne, traçabilité, éviter contrôles Caisse Dépôts. Sécuriser vos formations et apprenants CPF." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/conformite-cpf" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/conformite-cpf" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://edenconseilqualite.fr/' },
            { '@type': 'ListItem', position: 2, name: 'Conformité CPF', item: 'https://edenconseilqualite.fr/acquisition/conformite-cpf' }
          ]
        })}</script>
      </Helmet>

      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Conformité CPF</h1>
          <p className="text-xl text-amber-50 mb-8">Audit interne, traçabilité, éviter sanctions Caisse des Dépôts</p>
          <button
            onClick={() => {
              const message = encodeURIComponent('Je veux m\'assurer que j\'ai une conformité CPF 100%. Pouvez-vous vérifier ?');
              window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
            }}
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors"
          >
            Audit conformité CPF
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Pourquoi auditer votre conformité CPF ?</h2>
          
          <p className="text-gray-700 mb-6 text-lg">
            La Caisse des Dépôts intensifie les contrôles CPF. Un seul écart peut entraîner : suspension de compte, remboursement forcé, amendes. Mieux vaut prévenir.
          </p>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Les 5 zones de risque</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <AlertCircle size={20} /> Traçabilité apprenant
              </h4>
              <p className="text-gray-700 text-sm">Émargements, présence, évaluations manquants ou incomplets</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <AlertCircle size={20} /> Preuves de service fait
              </h4>
              <p className="text-gray-700 text-sm">Formation réellement dispensée, attestations absentes</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <AlertCircle size={20} /> Facturations correctes
              </h4>
              <p className="text-gray-700 text-sm">Tarification conforme, pas de surfacturations</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <AlertCircle size={20} /> Résultats documentés
              </h4>
              <p className="text-gray-700 text-sm">Taux satisfaction, insertion professionnelle, abandon</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <AlertCircle size={20} /> Délai 11 jours
              </h4>
              <p className="text-gray-700 text-sm">11 jours minimum entre inscription et formation (sauf exceptions)</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Notre audit conformité CPF</h3>
          <div className="space-y-3 mb-8">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Audit document</strong> : dossiers, preuves, fiches</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Audit terrain</strong> : vérification sur 5-10 cas apprenant</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Audit process</strong> : méthode suivi/facturation/résultats</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Plan correctif</strong> : recommandations prioritaires</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Résultats et délais</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 mb-2"><strong>Audit complet :</strong></p>
              <p className="text-lg text-red-600 font-bold">3-5 jours</p>
              <p className="text-sm text-gray-600 mt-2">Incluant rapport détaillé</p>
            </div>
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 mb-2"><strong>Coût :</strong></p>
              <p className="text-lg text-red-600 font-bold">1 500 € - 3 000 €</p>
              <p className="text-sm text-gray-600 mt-2">Selon taille organisme</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Ce que vous gagnez</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              Sérénité face aux contrôles Caisse Dépôts
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              Plan d'action clair pour corriger écarts
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              Preuves documentées pour justification
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              Processus amélioré pour continuité
            </li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-red-600 mb-6">Services connexes</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/acquisition/referencer-formation-cpf" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Référencer CPF</p>
              <p className="text-gray-600 text-xs mt-1">Formations conformes</p>
            </Link>
            <Link to="/acquisition/publier-offre-cpf" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Publier offre</p>
              <p className="text-gray-600 text-xs mt-1">Publication optimisée</p>
            </Link>
            <Link to="/acquisition/acceder-edof" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Gestion EDOF</p>
              <p className="text-gray-600 text-xs mt-1">Inscription complète</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
