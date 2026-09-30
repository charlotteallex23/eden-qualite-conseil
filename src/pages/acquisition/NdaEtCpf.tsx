import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Lock, BadgeCheck, FileWarning } from 'lucide-react';

export default function NdaEtCpf() {
  return (
    <div className="py-20 bg-gray-50">
      <Helmet>
        <title>NDA et CPF | Confidentialite EDOF | Eden Conseil</title>
        <meta
          name="description"
          content="NDA et CPF: securiser donnees apprenants, EDOF et pieces de conformite. Clauses cles et bonnes pratiques pour OF/CFA."
        />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/nda-et-cpf" />
        <meta property="og:title" content="NDA et CPF | Confidentialite EDOF" />
        <meta property="og:description" content="Guide pratique NDA et CPF pour organismes de formation." />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/nda-et-cpf" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'NDA et CPF: securiser vos donnees EDOF',
          description: 'Bonnes pratiques juridiques et operationnelles pour la confidentialite CPF.',
          author: { '@type': 'Organization', name: 'Eden Conseil Qualite' },
          mainEntityOfPage: 'https://edenconseilqualite.fr/acquisition/nda-et-cpf',
          datePublished: '2026-07-03'
        })}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">NDA et CPF</h1>
        <p className="text-xl text-gray-600 mb-8">
          Proteger les donnees EDOF et dossiers apprenants avec un cadre NDA solide et exploitable.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6" />
              Donnees sensibles en contexte CPF
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">Donnees apprenants</p>
                <p className="text-sm text-gray-600">Identite, parcours, justificatifs, traces pedagogiques.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">Donnees EDOF/MCF</p>
                <p className="text-sm text-gray-600">Sessions, tarifs, dossiers de preuve, habilitations.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
              <BadgeCheck className="w-6 h-6" />
              Clauses NDA recommandees pour CPF
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Finalite precise du traitement des donnees.</li>
              <li>Mesures de securite (acces, chiffrement, logs).</li>
              <li>Sous-traitance encadree et responsabilites claires.</li>
              <li>Notification incident + delai d'alerte contractuel.</li>
              <li>Sort des donnees en fin de mission (retour/suppression).</li>
            </ul>
          </section>

          <section className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
            <h2 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
              <FileWarning className="w-5 h-5" />
              Risques si NDA absent ou faible
            </h2>
            <ul className="text-sm text-red-900 space-y-2">
              <li>Exposition de donnees apprenants et non-conformite RGPD.</li>
              <li>Litiges contractuels en cas de fuite d'information.</li>
              <li>Fragilisation de votre conformite lors controle CPF.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Accompagnement NDA + conformité CPF</h2>
            <p className="text-gray-700 mb-4">
              Nous alignons votre NDA avec vos pratiques EDOF/CPF et vos obligations RGPD, puis nous auditons vos preuves.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Demander un diagnostic NDA CPF
            </Link>
          </section>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Link to="/acquisition/conformite-cpf" className="bg-white rounded-lg shadow p-4 border-l-4 border-red-600 hover:shadow-lg transition">
            <h3 className="font-bold text-gray-900">Conformite CPF</h3>
            <p className="text-sm text-gray-600">Audit et correction des points de risque.</p>
          </Link>
          <Link to="/acquisition/nda-qualiopi" className="bg-white rounded-lg shadow p-4 border-l-4 border-red-600 hover:shadow-lg transition">
            <h3 className="font-bold text-gray-900">NDA Qualiopi</h3>
            <p className="text-sm text-gray-600">Protection des preuves et procedures audit.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}