import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { config } from '../../config/company';

export default function PreAuditQualiopi() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Pré-audit Qualiopi : audit blanc & corrections</title>
        <meta name="description" content="Pré-audit Qualiopi complet. Audit blanc pour identifier tous les écarts avant l'audit officiel. Délais, coût, plan d'action correctif inclus." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/preaudit-qualiopi" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/preaudit-qualiopi" />
        <meta property="og:image" content="https://edenconseilqualite.fr/og-image.webp" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://edenconseilqualite.fr/' },
            { '@type': 'ListItem', position: 2, name: 'Pré-audit Qualiopi', item: 'https://edenconseilqualite.fr/acquisition/preaudit-qualiopi' }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Pré-audit Qualiopi',
          description: 'Audit blanc complet avant audit Qualiopi officiel',
          provider: { '@type': 'Organization', name: 'Eden Conseil Qualité' },
          areaServed: 'FR'
        })}</script>
      </Helmet>

      {/* HERO */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pré-audit Qualiopi (Audit Blanc)
            <span className="block text-amber-100 text-3xl md:text-4xl font-semibold mt-3">
              Éliminez les surprises avant le vrai audit
            </span>
          </h1>
          
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            L'audit blanc simule le vrai audit avec la même rigueur. Vous identifiez tous les écarts et les corrigez en amont. Zéro stress le jour J.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <CheckCircle size={24} className="text-amber-200" />
                <span className="font-semibold">Simulation complète</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <FileText size={24} className="text-amber-200" />
                <span className="font-semibold">Plan d'action clair</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Clock size={24} className="text-amber-200" />
                <span className="font-semibold">2-4 semaines</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              const message = encodeURIComponent('Bonjour, je souhaite réaliser un pré-audit Qualiopi complet. Quel est votre disponibilité ?');
              window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
            }}
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors shadow-lg"
          >
            Demander le pré-audit
          </button>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Qu'est-ce qu'un pré-audit Qualiopi ?</h2>
          <p className="text-gray-700 mb-4 text-lg">
            Le pré-audit est une simulation complète du vrai audit Qualiopi. Un auditeur certifié externe examine votre organisme selon les mêmes critères que l'audit officiel.
          </p>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Avantages du pré-audit</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Identifiez les écarts</strong> avant le vrai audit</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Plan d'action précis</strong> avec priorités claires</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Formation de votre équipe</strong> sur les critères</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>95% de réussite</strong> au vrai audit après corrections</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Déroulement du pré-audit</h3>
          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-red-600 pl-4 py-2">
              <h4 className="font-semibold text-red-600">Phase 1 : Audit document (1-2 jours)</h4>
              <p className="text-gray-700 text-sm mt-1">Examen du dossier : manuels, procédures, preuves</p>
            </div>
            <div className="border-l-4 border-red-600 pl-4 py-2">
              <h4 className="font-semibold text-red-600">Phase 2 : Audit terrain (1-2 jours)</h4>
              <p className="text-gray-700 text-sm mt-1">Visite, interviews équipe, vérification preuves</p>
            </div>
            <div className="border-l-4 border-red-600 pl-4 py-2">
              <h4 className="font-semibold text-red-600">Phase 3 : Rapport détaillé (3-5 jours)</h4>
              <p className="text-gray-700 text-sm mt-1">Liste des écarts, plan d'action, délais correction</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Coûts du pré-audit</h3>
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-4"><strong>Budget moyen : 1 500 € - 3 500 € HT</strong></p>
            <ul className="space-y-2 text-gray-700">
              <li>• Micro OF (1-5 formations) : 1 200 - 1 800 €</li>
              <li>• PE/PME (5-20 formations) : 1 800 - 2 800 €</li>
              <li>• ETI (20+ formations) : 2 800 - 3 500 €</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Utilité du pré-audit</h3>
          <p className="text-gray-700 mb-4">
            <strong>Oui, c'est indispensable si :</strong> Vous n'êtes jamais certifié Qualiopi, vous manquez de confiance sur votre conformité, vous voulez minimiser les risques d'échec.
          </p>
          <p className="text-gray-700">
            <strong>ROI : </strong> Le coût du pré-audit (~2 500€) est récupéré en 1-2 mois grâce à la réussite garantie à l'audit officiel (évite dépenses de correction ultérieures).
          </p>
        </div>
      </section>

      {/* SERVICES CONNEXES */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-red-600 mb-6">Services connexes</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/acquisition/obtenir-qualiopi" className="p-4 bg-white rounded-lg border hover:border-red-600 hover:shadow-md transition-all">
              <p className="font-semibold text-red-600 text-sm">Obtenir Qualiopi</p>
              <p className="text-gray-600 text-xs mt-1">Accompagnement complet de A à Z</p>
            </Link>
            <Link to="/acquisition/audit-initial-qualiopi" className="p-4 bg-white rounded-lg border hover:border-red-600 hover:shadow-md transition-all">
              <p className="font-semibold text-red-600 text-sm">Audit initial</p>
              <p className="text-gray-600 text-xs mt-1">Préparation et passage officiel</p>
            </Link>
            <Link to="/acquisition/documents-qualiopi" className="p-4 bg-white rounded-lg border hover:border-red-600 hover:shadow-md transition-all">
              <p className="font-semibold text-red-600 text-sm">Documents Qualiopi</p>
              <p className="text-gray-600 text-xs mt-1">Kit complet modèles + méthode</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt pour l'audit ?</h2>
          <p className="text-xl text-amber-100 mb-8">Débuter votre pré-audit cette semaine</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-red-600 font-semibold py-3 px-8 rounded-lg hover:bg-amber-50 transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
}
