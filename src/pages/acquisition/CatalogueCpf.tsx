import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp } from 'lucide-react';

export default function CatalogueCpf() {
  return (
    <div className="py-20 bg-gray-50">
      <Helmet>
        <title>Catalogue CPF | Structure Offres | EDOF MCF | Optimisation Visibilité</title>
        <meta name="description" content="Structurer votre catalogue CPF sur MCF. Optimisation fiches formation, tarification, augmentation conversions apprenants." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/catalogue-cpf" />
        <meta property="og:title" content="Catalogue CPF | Structuration Offres" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/catalogue-cpf" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Structurer son Catalogue CPF',
          description: 'Guide: structure offres CPF, optimisation MCF, augmentation conversions',
          author: { '@type': 'Organization', name: 'Eden Conseil Qualité' }
        })}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
          Structurer votre Catalogue CPF
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Guide complet: structuration offres, optimisation MCF, augmentation visibilité et conversions
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Structure idéale d'une offre CPF
          </h2>

          <div className="space-y-6">
            {/* Éléments clés */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Éléments obligatoires + recommandés</h3>
              <div className="space-y-3">
                {[
                  { title: "Titre formation", rec: "Impact 40% conversions", example: "Certification Qualiopi: Guide complet (au lieu de 'Qualiopi')" },
                  { title: "Descriptions court/long", rec: "SEO MCF + clarté", example: "Court: 150 chars | Long: 300-500 chars" },
                  { title: "Objectifs pédagogiques", rec: "Obligatoire légal", example: "3-5 objectifs SMART explicites" },
                  { title: "Contenu programme", rec: "Détail = confiance", example: "Jour 1: ..., Jour 2: ..., etc." },
                  { title: "Prérequis & public", rec: "Filtrage apprenants", example: "Prérequis: Expérience formation +" },
                  { title: "Tarifs clairs", rec: "Conversion critique", example: "Tarif fixe + tarif réduit transparence" },
                  { title: "Durée exacte", rec: "Affichage MCF", example: "35 heures (pas 'variable')" },
                  { title: "Modalités", rec: "Filtrage recherche", example: "Présentiel | Distanciel | Hybride" }
                ].map((elem, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
                    <div className="flex justify-between mb-2">
                      <p className="font-bold text-gray-900">{elem.title}</p>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">{elem.rec}</span>
                    </div>
                    <p className="text-sm text-gray-600">📌 {elem.example}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Erreurs couantes */}
            <div className="bg-red-50 border-l-4 border-red-600 p-6">
              <h3 className="font-bold text-red-900 mb-3">Pièges = pertes apprenants</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3">
                  <span className="font-bold">✗</span>
                  <span><strong>Titre générique</strong> → Classement bas MCF, faible clic-through</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">✗</span>
                  <span><strong>Tarif absent/confus</strong> → 30% d'abandon avant inscription</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">✗</span>
                  <span><strong>Durée "flexible"</strong> → Non-affichage MCF, invisibilité recherche</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">✗</span>
                  <span><strong>Contenu vague</strong> → Apprenants déçus, mauvais avis CPF</span>
                </li>
              </ul>
            </div>

            {/* Optimisation MCF */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Augmenter visibilité MCF (+40% conversions)
              </h3>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded">
                  <p className="font-bold text-green-900 mb-2">1. Optimisation titre + tags</p>
                  <p className="text-sm text-green-800">Inclure keywords: certification, audit, conformité, formation</p>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <p className="font-bold text-green-900 mb-2">2. Compléter tous les champs</p>
                  <p className="text-sm text-green-800">MCF favorise offres 100% complètes = boost ranking naturel</p>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <p className="font-bold text-green-900 mb-2">3. Avis/notation apprenant</p>
                  <p className="text-sm text-green-800">Avis &gt; 4.5 étoiles = priorité affichage MCF</p>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <p className="font-bold text-green-900 mb-2">4. Tarif compétitif visible</p>
                  <p className="text-sm text-green-800">Tarif lisible (pas caché) = +50% clics</p>
                </div>
              </div>
            </div>

            {/* Stratégie multi-offres */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
              <h3 className="font-bold text-blue-900 mb-3">Stratégie multi-offres recommandée</h3>
              <p className="text-sm text-blue-800 mb-3">
                Au lieu d'1 seule grosse offre → Créer 3-4 offres ciblées pour augmenter surface MCF:
              </p>
              <ul className="text-sm space-y-1 text-blue-800">
                <li>• Formation initiale compète (ex: 35h)</li>
                <li>• Module perfectionnement (ex: 14h)</li>
                <li>• Accompagnement conseil (ex: à la demande)</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Audit catalogue CPF</h4>
              <p className="text-gray-700 mb-4">
                Nous analysons votre catalogue, identifions optimisations MCF et structurons offres pour +40% visibilité.
              </p>
              <Link to="/contact" className="inline-block bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700">
                Demander audit catalogue
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/acquisition/inscription-edof" className="p-4 border-l-4 border-red-600 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="font-bold text-gray-900">Inscription EDOF</h4>
            <p className="text-sm text-gray-600">Créer compte EDOF</p>
          </Link>
          <Link to="/acquisition/publier-offre-cpf" className="p-4 border-l-4 border-red-600 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="font-bold text-gray-900">Publier offre CPF</h4>
            <p className="text-sm text-gray-600">Publication MCF 24-48h</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
