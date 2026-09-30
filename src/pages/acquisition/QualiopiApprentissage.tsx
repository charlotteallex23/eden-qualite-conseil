import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';

export default function QualiopiApprentissage() {
  return (
    <div className="py-20 bg-gray-50">
      <Helmet>
        <title>Qualiopi Apprentissage | CFA Certification | Exigences Qualiopi</title>
        <meta name="description" content="Certification Qualiopi pour CFA et apprentissage. Exigences spécifiques, audit blanc, accompagnement expert. Formation en alternance conforme." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/qualiopi-apprentissage" />
        <meta property="og:title" content="Qualiopi Apprentissage | Certification CFA" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/qualiopi-apprentissage" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Qualiopi Apprentissage | Certification CFA',
          description: 'Guide complet: exigences Qualiopi pour CFA, apprentissage et formation en alternance.',
          author: { '@type': 'Organization', name: 'Eden Conseil Qualité' },
          datePublished: '2026-07-03',
          image: 'https://edenconseilqualite.fr/og-image.webp'
        })}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
          Qualiopi pour Apprentissage et CFA
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Certification Qualiopi adaptée aux exigences de l'alternance et de la formation en apprentissage
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-600 mb-6">Exigences Qualiopi pour CFA</h2>
          
          <div className="space-y-6">
            {/* Critères spécifiques */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Critères spécifiques apprentissage
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                  <h4 className="font-semibold text-gray-900 mb-2">Maître de stage</h4>
                  <p className="text-sm text-gray-600">Formation maître de stage obligatoire (Qualiopi critère 3.2)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                  <h4 className="font-semibold text-gray-900 mb-2">Suivi entreprise</h4>
                  <p className="text-sm text-gray-600">Suivi du stagiaire en entreprise documenté (preuves de visites)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                  <h4 className="font-semibold text-gray-900 mb-2">Partenariats entreprises</h4>
                  <p className="text-sm text-gray-600">Conventions de stage et gestion des entreprises d'accueil</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                  <h4 className="font-semibold text-gray-900 mb-2">Évaluations alternantes</h4>
                  <p className="text-sm text-gray-600">Preuves d'évaluation en centre + en entreprise</p>
                </div>
              </div>
            </div>

            {/* Critères généraux à adapter */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Critères Qualiopi 6 Pilliers</h3>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <div className="bg-red-100 text-red-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Définition du programme</p>
                    <p className="text-sm text-gray-600">Programme adapté à la formation en apprentissage (alternance CFA)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-red-100 text-red-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Compétences formateurs</p>
                    <p className="text-sm text-gray-600">Formateurs avec expérience métier + pédagogie (critère CFA)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-red-100 text-red-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Ingénierie formation</p>
                    <p className="text-sm text-gray-600">Adaptation pédagogique + suivi maître de stage</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-red-100 text-red-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">Évaluation apprenants</p>
                    <p className="text-sm text-gray-600">Évaluations CFA + entreprise + validation finale</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-red-100 text-red-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</div>
                  <div>
                    <p className="font-semibold text-gray-900">Accessibilité & inclusion</p>
                    <p className="text-sm text-gray-600">Accès à la formation pour tous, adaptations si besoin</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-red-100 text-red-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">6</div>
                  <div>
                    <p className="font-semibold text-gray-900">Investissement continu</p>
                    <p className="text-sm text-gray-600">Amélioration continue + veille pédagogique</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Objections */}
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
              <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Pièges courants en audit
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Suivis maître de stage incomplets</strong> → Preuves visites CFA manquantes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Conventions vagues</strong> → Obligations maître de stage floues</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Évaluations doubles oubliées</strong> → Pas d'évaluation CFA OU entreprise</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Absence de coordination</strong> → Pas de communication CFA/entreprise</span>
                </li>
              </ul>
            </div>

            {/* Calendrier typique */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                Calendrier CFA type
              </h3>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <span className="bg-red-600 text-white px-4 py-2 rounded font-semibold text-sm flex-shrink-0">Mois 0-3</span>
                  <p className="text-gray-700"><strong>Audit blanc Qualiopi</strong> + ajustements apprentissage</p>
                </div>
                <div className="flex gap-4">
                  <span className="bg-red-600 text-white px-4 py-2 rounded font-semibold text-sm flex-shrink-0">Mois 3-6</span>
                  <p className="text-gray-700"><strong>Mise en place</strong> suivi maître stage + formations</p>
                </div>
                <div className="flex gap-4">
                  <span className="bg-red-600 text-white px-4 py-2 rounded font-semibold text-sm flex-shrink-0">Mois 6-9</span>
                  <p className="text-gray-700"><strong>Audit Qualiopi</strong> officiellement avec preuve d'alternance</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 p-6 rounded-lg mt-8">
              <h4 className="font-bold text-gray-900 mb-2">Accompagnement CFA Qualiopi</h4>
              <p className="text-gray-700 mb-4">
                Nous avons accompagné <strong>60+ CFA</strong> à obtenir Qualiopi du premier coup. Audit blanc spécialisé apprentissage inclus.
              </p>
              <Link to="/contact" className="inline-block bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700">
                Demander un devis CFA
              </Link>
            </div>
          </div>
        </div>

        {/* Liens internes */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/acquisition/audit-qualiopi" className="p-4 border-l-4 border-red-600 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="font-bold text-gray-900 mb-1">Audit blanc Qualiopi</h4>
            <p className="text-sm text-gray-600">Pré-audit complet avant audit officiel</p>
          </Link>
          <Link to="/acquisition/pack-qualiopi-edof" className="p-4 border-l-4 border-red-600 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="font-bold text-gray-900 mb-1">Pack Qualiopi + EDOF</h4>
            <p className="text-sm text-gray-600">Certification + référencement CPF</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
