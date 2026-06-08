import { Link } from 'react-router-dom';
import { CheckCircle, Clock, FileText, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { config } from '../../config/company';

export default function AuditInitialQualiopi() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Audit Initial Qualiopi : préparation & réussite</title>
        <meta name="description" content="Audit initial Qualiopi. Préparation, checklist, délais. Comment réussir votre premier audit officiel avec 100% de conformité." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/audit-initial-qualiopi" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/audit-initial-qualiopi" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://edenconseilqualite.fr/' },
            { '@type': 'ListItem', position: 2, name: 'Audit Initial', item: 'https://edenconseilqualite.fr/acquisition/audit-initial-qualiopi' }
          ]
        })}</script>
      </Helmet>

      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Audit Initial Qualiopi</h1>
          <p className="text-xl text-amber-50 mb-8">Passage de votre premier audit officiel avec préparation maximale et support expert</p>
          <button
            onClick={() => {
              const message = encodeURIComponent('Je souhaite me préparer pour mon audit initial Qualiopi. Pouvez-vous m\'aider ?');
              window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
            }}
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors"
          >
            Préparation audit initial
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Préparation audit initial</h2>
          <p className="text-gray-700 mb-6 text-lg">
            L'audit initial est la première étape Qualiopi. Contrairement aux audits de surveillance, il examine votre conformité globale sur tous les domaines.
          </p>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Les 5 phases de préparation</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-semibold text-red-600 mb-2">1. Diagnostic complet (2-3 semaines)</h4>
              <p className="text-gray-700 text-sm">Audit blanc, identification écarts, plan priorité</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-semibold text-red-600 mb-2">2. Correction écarts (4-8 semaines)</h4>
              <p className="text-gray-700 text-sm">Mise en place processus, documentation, preuves</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-semibold text-red-600 mb-2">3. Formation équipe (1-2 semaines)</h4>
              <p className="text-gray-700 text-sm">Ateliers sur critères, préparation orale</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-semibold text-red-600 mb-2">4. Simulation audit (2-3 jours)</h4>
              <p className="text-gray-700 text-sm">Audit blanc final, vérification complète</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-semibold text-red-600 mb-2">5. Audit officiel (2-3 jours)</h4>
              <p className="text-gray-700 text-sm">Avec certificateur agréé, support de notre part</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Checklist audit initial</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700"><strong>Manuel qualité</strong> formalisé et signé</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700"><strong>6 domaines Qualiopi</strong> documentés et preuves</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700"><strong>BPF complet</strong> avec indicateurs</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700"><strong>Évaluations apprenant</strong> collectées</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700"><strong>Équipe formée</strong> sur critères</span>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Délais réalistes</h3>
          <p className="text-gray-700 mb-4">
            <strong>Du diagnostic au passage audit :</strong> 3-6 mois selon taille organisme et avancement initial.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-red-600 mb-6">Services connexes</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/acquisition/preaudit-qualiopi" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Pré-audit</p>
              <p className="text-gray-600 text-xs mt-1">Audit blanc complet</p>
            </Link>
            <Link to="/acquisition/documents-qualiopi" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Documents</p>
              <p className="text-gray-600 text-xs mt-1">Kit modèles complet</p>
            </Link>
            <Link to="/acquisition/obtenir-qualiopi" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Accompagnement</p>
              <p className="text-gray-600 text-xs mt-1">De A à Z</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
