import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

export default function AuditSurveillanceQualiopi() {
  return (
    <div className="py-20 bg-gray-50">
      <Helmet>
        <title>Audit de Surveillance Qualiopi | Renouvellement 3 ans | Maintien Conformité</title>
        <meta name="description" content="Audit de surveillance Qualiopi: maintien de conformité tous les 18 mois. Préparation, coûts, échéancier et preuves à constituer." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/audit-surveillance-qualiopi" />
        <meta property="og:title" content="Audit de Surveillance Qualiopi | Maintien Certification" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/audit-surveillance-qualiopi" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Audit de Surveillance Qualiopi',
          description: 'Guide complet: audit surveillance Qualiopi, échéances, préparation et maintien de certification.',
          author: { '@type': 'Organization', name: 'Eden Conseil Qualité' },
          datePublished: '2026-07-03'
        })}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
          Audit de Surveillance Qualiopi
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Maintenir votre certification Qualiopi : échéances, préparation et conformité continue
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-600 mb-6">Comprendre l'audit de surveillance</h2>
          
          <div className="space-y-6">
            {/* Qu'est-ce que c'est */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <h3 className="font-bold text-blue-900 mb-2">C'est quoi ?</h3>
              <p className="text-blue-800 text-sm">
                Audit intermédiaire obligatoire entre le certificat initial (3 ans) pour vérifier le maintien de votre conformité Qualiopi. Tous les <strong>18 mois</strong> après votre certification.
              </p>
            </div>

            {/* Calendrier */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-600" />
                Calendrier certification 3 ans
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex gap-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded font-bold">Mois 0</span>
                  <p><strong>Audit initial Qualiopi</strong> → Certification obtenue</p>
                </div>
                <div className="flex gap-4">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded font-bold">Mois 18</span>
                  <p><strong>1er audit surveillance</strong> → Vérification maintien</p>
                </div>
                <div className="flex gap-4">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded font-bold">Mois 36</span>
                  <p><strong>Audit renouvellement</strong> → Nouvelle certification 3 ans</p>
                </div>
              </div>
            </div>

            {/* Qu'est-ce qu'on vérifie */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Que contrôle l'auditeur ?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                  <p className="font-semibold text-gray-900 mb-2">Conformité continue</p>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Respect des 6 critères Qualiopi</li>
                    <li>• Évolution conforme du programme</li>
                    <li>• Formations formateurs à jour</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                  <p className="font-semibold text-gray-900 mb-2">Preuves d'activité</p>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Formations dispensées 18 derniers mois</li>
                    <li>• Évaluations apprenants</li>
                    <li>• Amélioration continue documentée</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Préparation */}
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
              <h3 className="font-bold text-amber-900 mb-3">Pièges courants</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Pas assez de preuves d'activité 18 derniers mois</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Formations formateurs expirées</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Absence de trace d'amélioration continue</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Documents non à jour (BPF, règlement intérieur)</span>
                </li>
              </ul>
            </div>

            {/* Coûts */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Budget audit surveillance</h3>
              <div className="bg-gray-50 p-6 rounded border border-gray-300">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Audit surveillance certificateur</span>
                    <span className="font-bold">1 500€ - 3 500€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Audit blanc préparatoire (optionnel)</span>
                    <span className="font-bold">1 000€ - 2 000€</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-bold text-gray-900">Total audit surveillance</span>
                    <span className="font-bold text-red-600">1 500€ - 3 500€</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Audit blanc avant surveillance</h4>
              <p className="text-gray-700 mb-4">
                Nous proposons un <strong>audit blanc spécialisé</strong> pour vous préparer 1-2 mois avant l'audit surveillance. <strong>98% de réussite</strong>.
              </p>
              <Link to="/contact" className="inline-block bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700">
                Demander audit blanc
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/acquisition/audit-qualiopi" className="p-4 border-l-4 border-red-600 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="font-bold text-gray-900">Audit initial Qualiopi</h4>
            <p className="text-sm text-gray-600">Préparation 1er audit</p>
          </Link>
          <Link to="/acquisition/pack-surveillance-renouvellement" className="p-4 border-l-4 border-red-600 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="font-bold text-gray-900">Pack surveillance 3 ans</h4>
            <p className="text-sm text-gray-600">Tous audits inclus</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
