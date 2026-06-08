import { Link } from 'react-router-dom';
import { CheckCircle, Download, FileText, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { config } from '../../config/company';

export default function DocumentsQualiopi() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Documents Qualiopi : modèles & méthode</title>
        <meta name="description" content="Documents Qualiopi : liste complète, modèles prêts à l'emploi, méthode pas à pas pour constituer votre dossier de conformité." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/documents-qualiopi" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/documents-qualiopi" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://edenconseilqualite.fr/' },
            { '@type': 'ListItem', position: 2, name: 'Documents Qualiopi', item: 'https://edenconseilqualite.fr/acquisition/documents-qualiopi' }
          ]
        })}</script>
      </Helmet>

      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Documents Qualiopi</h1>
          <p className="text-xl text-amber-50 mb-8">Kit complet : modèles prêts, liste de contrôle, méthode de rédaction</p>
          <button
            onClick={() => {
              const message = encodeURIComponent('Je souhaite obtenir le kit documents Qualiopi complet. Quel est le prix ?');
              window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
            }}
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors"
          >
            Obtenir les documents
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Documents Qualiopi obligatoires</h2>
          
          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Liste complète de contrôle</h3>
          <div className="space-y-3 mb-8">
            <div className="flex gap-3">
              <FileText className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-gray-700"><strong>Manuel Qualité</strong> : politique, objectifs, structure</span>
            </div>
            <div className="flex gap-3">
              <FileText className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-gray-700"><strong>Procédures</strong> : recrutement, formation, évaluation, plaintes</span>
            </div>
            <div className="flex gap-3">
              <FileText className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-gray-700"><strong>BPF annuel</strong> : bilan pédagogique et financier</span>
            </div>
            <div className="flex gap-3">
              <FileText className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-gray-700"><strong>Fiches formations</strong> : objectifs, contenu, durée</span>
            </div>
            <div className="flex gap-3">
              <FileText className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-gray-700"><strong>Évaluations apprenant</strong> : pré/post formation</span>
            </div>
            <div className="flex gap-3">
              <FileText className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-gray-700"><strong>Feuilles d'émargement</strong> : présence, signatures</span>
            </div>
            <div className="flex gap-3">
              <FileText className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-gray-700"><strong>CV formateurs</strong> : compétences, expérience</span>
            </div>
            <div className="flex gap-3">
              <FileText className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-gray-700"><strong>Contrats apprenant/organisme</strong> : conditions</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Nos modèles prêts à l'emploi</h3>
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-4">
              <strong>Le kit complet inclut :</strong>
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Manuel Qualité 15 pages (à personnaliser)</li>
              <li>✓ 8 Procédures documentées</li>
              <li>✓ Modèle BPF pré-rempli</li>
              <li>✓ Fiche formation-type</li>
              <li>✓ Évaluation pré/post modèle</li>
              <li>✓ Feuille émargement Excel</li>
              <li>✓ Guide méthodique étape par étape</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-red-600 mt-8 mb-4">Coût et délai</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 mb-2"><strong>Kit documents :</strong></p>
              <p className="text-lg text-red-600 font-bold">500 € - 1 500 €</p>
              <p className="text-sm text-gray-600 mt-2">Selon niveau de personnalisation</p>
            </div>
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 mb-2"><strong>Délai de livraison :</strong></p>
              <p className="text-lg text-red-600 font-bold">5-7 jours</p>
              <p className="text-sm text-gray-600 mt-2">Après collecte de vos infos</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-red-600 mb-6">Services connexes</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/acquisition/preaudit-qualiopi" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Pré-audit</p>
              <p className="text-gray-600 text-xs mt-1">Vérification documents</p>
            </Link>
            <Link to="/acquisition/audit-initial-qualiopi" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Audit initial</p>
              <p className="text-gray-600 text-xs mt-1">Passage audit officiel</p>
            </Link>
            <Link to="/acquisition/obtenir-qualiopi" className="p-4 bg-white rounded-lg border hover:border-red-600">
              <p className="font-semibold text-red-600 text-sm">Accompagnement</p>
              <p className="text-gray-600 text-xs mt-1">Pack complet de A à Z</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
