import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle } from 'lucide-react';

export default function ProceduresQualiopi() {
  return (
    <div className="py-20 bg-gray-50">
      <Helmet>
        <title>Procédures Qualiopi | Kit Complet + Modèles | Eden Conseil</title>
        <meta name="description" content="Kit complet de procédures Qualiopi: 8 procédures essentielles, modèles adaptés, BPF, documentations. Prêt à l'emploi pour audit." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/procedures-qualiopi" />
        <meta property="og:title" content="Procédures Qualiopi | Kit Complet" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/procedures-qualiopi" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Kit Procédures Qualiopi',
          description: 'Kit complet 8 procédures Qualiopi + modèles + BPF',
          offers: { '@type': 'Offer', priceCurrency: 'EUR', price: '500-1500' }
        })}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
          Procédures Qualiopi Clé en Main
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          8 procédures essentielles + modèles prêts à utiliser. Kit complet pour audit Qualiopi en conformité.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Les 8 Procédures Essentielles
          </h2>

          <div className="space-y-4">
            {[
              { num: 1, title: "Gestion des formations", desc: "Cahier des charges, évaluation, suivi apprenants" },
              { num: 2, title: "Gestion des formateurs", desc: "Recrutement, évaluation, compétences, mises à jour" },
              { num: 3, title: "Processus d'amélioration", desc: "Mesures d'amélioration continue, indicateurs" },
              { num: 4, title: "Gestion des réclamations", desc: "Traitement, suivi, documentation apprenant" },
              { num: 5, title: "Accessibilité et inclusion", desc: "Adaptations handicap, détection besoins" },
              { num: 6, title: "Gestion des données", desc: "Confidentialité, RGPD, sécurité apprenant" },
              { num: 7, title: "Partenariats externes", desc: "Sous-traitance, conventions, responsabilités" },
              { num: 8, title: "Gestion qualité interne", desc: "Audits internes, veille réglementaire" }
            ].map(proc => (
              <div key={proc.num} className="flex gap-4 p-4 bg-gray-50 rounded border-l-4 border-red-600">
                <div className="bg-red-600 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  {proc.num}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{proc.title}</p>
                  <p className="text-sm text-gray-600">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contenu du kit */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Contenu du kit inclus
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "✓ 8 procédures détaillées + modèles Word",
                "✓ Manuel qualité Qualiopi adapté",
                "✓ Politique qualité + engagement",
                "✓ Formulaires audit interne",
                "✓ Tableau indicateurs Qualiopi",
                "✓ Plan d'action template",
                "✓ Grille d'évaluation formation",
                "✓ Registre amélioration continue"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">{item.split(" ")[0]}</span>
                  <span className="text-gray-700 text-sm">{item.substring(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="mt-8 bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">Budget kit procédures</h3>
            <div className="text-2xl font-bold text-red-600 mb-2">500€ - 1 500€</div>
            <p className="text-sm text-gray-700">
              Dépend du niveau de personnalisation. Tarif réduit si associé à un audit blanc ou accompagnement.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <Link to="/contact" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700">
              Commander kit procédures
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/acquisition/documents-qualiopi" className="p-4 border-l-4 border-red-600 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="font-bold text-gray-900">Documents Qualiopi</h4>
            <p className="text-sm text-gray-600">Kit complet BPF + modèles</p>
          </Link>
          <Link to="/acquisition/audit-qualiopi" className="p-4 border-l-4 border-red-600 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="font-bold text-gray-900">Audit blanc Qualiopi</h4>
            <p className="text-sm text-gray-600">Vérification procédures</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
