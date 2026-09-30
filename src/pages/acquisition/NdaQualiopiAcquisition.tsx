import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileCheck2, AlertTriangle } from 'lucide-react';

export default function NdaQualiopiAcquisition() {
  return (
    <div className="py-20 bg-gray-50">
      <Helmet>
        <title>NDA Qualiopi | Securiser Vos Donnees Audit | Eden Conseil</title>
        <meta
          name="description"
          content="NDA Qualiopi: clauses, obligations et securisation des preuves d'audit. Modele et accompagnement pour organismes de formation."
        />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/nda-qualiopi" />
        <meta property="og:title" content="NDA Qualiopi | Securiser Vos Donnees Audit" />
        <meta property="og:description" content="Guide NDA Qualiopi: proteger donnees, preuves et documents sensibles." />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/nda-qualiopi" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'NDA Qualiopi: proteger les donnees et preuves d audit',
          description: 'Cadre pratique pour rediger et utiliser un NDA dans un accompagnement Qualiopi.',
          author: { '@type': 'Organization', name: 'Eden Conseil Qualite' },
          mainEntityOfPage: 'https://edenconseilqualite.fr/acquisition/nda-qualiopi',
          datePublished: '2026-07-03'
        })}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">NDA Qualiopi</h1>
        <p className="text-xl text-gray-600 mb-8">
          Comment proteger vos preuves, process et donnees sensibles pendant l'accompagnement Qualiopi.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" />
              Pourquoi un NDA en projet Qualiopi
            </h2>
            <p className="text-gray-700 mb-4">
              Un NDA (accord de confidentialite) protege les informations partagees pendant la preparation de l'audit:
              documents qualite, indicateurs, processus internes, donnees apprenants et pieces de conformite.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Protection des preuves d'audit et plans d'action.</li>
              <li>Encadrement de la sous-traitance et des acces externes.</li>
              <li>Reduction des risques de fuite de donnees sensibles.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
              <FileCheck2 className="w-6 h-6" />
              Clauses indispensables du NDA Qualiopi
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">Perimetre des donnees</p>
                <p className="text-sm text-gray-600">Definir precisement quelles donnees et documents sont confidentiels.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">Duree de confidentialite</p>
                <p className="text-sm text-gray-600">Appliquer une duree claire pendant mission + post-mission.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">Acces et habilitations</p>
                <p className="text-sm text-gray-600">Limiter les personnes autorisees et tracer les consultations.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">Restitution/destruction</p>
                <p className="text-sm text-gray-600">Prevoir la suppression ou restitution des documents en fin de mission.</p>
              </div>
            </div>
          </section>

          <section className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
            <h2 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Erreurs frequentes a eviter
            </h2>
            <ul className="text-sm text-amber-900 space-y-2">
              <li>Clause trop generale, impossible a appliquer en cas de litige.</li>
              <li>Absence de regle de destruction des documents transmis.</li>
              <li>NDA non aligne avec RGPD et traitement donnees apprenants.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Besoin d'un NDA adapte a votre OF ?</h2>
            <p className="text-gray-700 mb-4">
              Nous adaptons le NDA a votre activite (OF, CFA, sous-traitance, EDOF) et l'integrons a votre dossier Qualiopi.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Demander un modele NDA Qualiopi
            </Link>
          </section>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Link to="/acquisition/documents-qualiopi" className="bg-white rounded-lg shadow p-4 border-l-4 border-red-600 hover:shadow-lg transition">
            <h3 className="font-bold text-gray-900">Documents Qualiopi</h3>
            <p className="text-sm text-gray-600">Modeles et procedures pour audit.</p>
          </Link>
          <Link to="/acquisition/nda-et-cpf" className="bg-white rounded-lg shadow p-4 border-l-4 border-red-600 hover:shadow-lg transition">
            <h3 className="font-bold text-gray-900">NDA et CPF</h3>
            <p className="text-sm text-gray-600">NDA pour EDOF, CPF et donnees apprenants.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}