import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Award } from 'lucide-react';
import { useEffect } from 'react';
import { config } from '../../config/company';

export default function PackQualiopiEdofPage() {
  useEffect(() => {
    document.title = 'Pack Qualiopi + EDOF : Certification + accès CPF complet | Eden Conseil Qualité';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Pack tout-en-un : Obtenez Qualiopi ET accédez à EDOF/CPF. Parcours complet, délais optimisés, un seul accompagnateur.');
  }, []);

  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Qualiopi + EDOF/CPF
            <span className="block text-amber-100 text-3xl md:text-4xl font-semibold mt-3">
              Tout ce qu'il faut pour réussir
            </span>
          </h1>
          
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vous voulez Qualiopi ET accès CPF complet. Ce pack couvre A-Z : certification, demande EDOF, publication formations, conformité totale.
            Un seul accompagnateur, une vision 360°, des délais optimisés.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Award size={24} className="text-gold" />
                <span className="font-semibold">Qualiopi complète</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Zap size={24} className="text-amber-200" />
                <span className="font-semibold">EDOF/CPF ready</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <CheckCircle size={24} className="text-violet-300" />
                <span className="font-semibold">100% conformité</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => {
                const message = encodeURIComponent('Je veux Qualiopi + EDOF/CPF tout ensemble. Comment vous organisez ça ?');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Découvrir le pack complet
            </button>
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors border-2 border-red-600"
            >
              Devis pack
            </Link>
          </div>

          <p className="text-amber-50 text-sm">
            Optimisation maximale • Un partenaire • Vision complète
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">
            Pourquoi ce pack existe
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Qualiopi et EDOF/CPF sont liés. Les faire ensemble, c'est intelligent.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border-l-4 border-red-600">
              <h3 className="font-bold text-red-600 text-lg mb-3">Sans ce pack</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-orange-500">✗</span>
                  Deux accompagnements séparés (budget + temps doublé)
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-500">✗</span>
                  Prise en charge progressive, délais allongés
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-500">✗</span>
                  Incohérence possible entre Qualiopi et EDOF
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-500">✗</span>
                  Stress du passage d'un prestataire à l'autre
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border-l-4 border-amber-500">
              <h3 className="font-bold text-red-600 text-lg mb-3">Avec ce pack</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-red-600">✓</span>
                  Un seul accompagnateur, vision 360°
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✓</span>
                  Délais optimisés (Qualiopi + EDOF en parallèle)
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✓</span>
                  Cohérence garantie entre certificateur et EDOF
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✓</span>
                  Budget pack = 10-15% moins cher qu'à la carte
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Ce qui est inclus dans le pack
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Audit diagnostic complet',
              'Plan d\'action 30-60-90 (Qualiopi)',
              'Documentation Qualiopi (manuel, procédures)',
              'Audit blanc Qualiopi',
              'Demande d\'accès EDOF',
              'Paramétrage compte EDOF',
              'Publication formations CPF',
              'Conformité EDOF/CPF validée',
              'Formation équipe (Qualiopi + EDOF)',
              'Support régulier pendant 6 mois',
              'Corrections post-audit',
              'Veille réglementaire (3 mois inclus)'
            ].map((item) => (
              <div key={item} className="bg-amber-50 rounded-lg p-6 border-l-4 border-red-600">
                <div className="flex gap-3">
                  <CheckCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Timeline du pack
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-red-600 mb-2">Mois 1-2 : Fondations</h3>
              <p className="text-gray-700 text-sm">Diagnostic, roadmap, documentation, demande EDOF lancée.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-red-600 mb-2">Mois 3-4 : Déploiement</h3>
              <p className="text-gray-700 text-sm">Mise en place Qualiopi, validation EDOF, publication formations.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-red-600 mb-2">Mois 5-6 : Finalisation</h3>
              <p className="text-gray-700 text-sm">Audit blanc, corrections, audit final Qualiopi, EDOF live.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-amber-500">
              <h3 className="font-bold text-red-600 mb-2">Après : Support</h3>
              <p className="text-gray-700 text-sm">Support 3 mois, audit de surveillance, conformité EDOF continue.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Budget pack
          </h2>

          <div className="max-w-2xl mx-auto bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-8 border-2 border-red-600">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-700">
                <span>Qualiopi complet</span>
                <span className="font-semibold">3-8k€</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>EDOF/CPF complet</span>
                <span className="font-semibold">2-4k€</span>
              </div>
              <div className="flex justify-between text-gray-700 pb-4 border-b border-violet-300">
                <span>Si à la carte</span>
                <span className="font-semibold text-orange-500">5-12k€</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-red-600">
                <span>Pack prix</span>
                <span className="text-red-600">5-10k€</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm text-center">
              Économie : 10-15%. Certificateur + EDOF : 1.5-6k€ supplémentaires. Total : 6.5-16k€.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            FAQ pack
          </h2>

          <div className="space-y-4">
            {[
              { q: 'Qualiopi et EDOF, c\'est pas la même chose ?', a: 'Non. Qualiopi = certification qualité. EDOF = plateforme où vous publiez formations CPF. Liés mais différents. Ensemble = smart.' },
              { q: 'Peut-on faire Qualiopi sans EDOF ?', a: 'Oui, mais vous perdez CPF (gros marché). Mieux : Qualiopi d\'abord, puis EDOF. Ce pack fait les deux bien.' },
              { q: 'Délais : vraiment 6 mois ?', a: 'Environ, pour une structure standard. Micro-organisme : 3-4 mois. Gros : 6-8 mois. On adapte.' },
              { q: 'Support inclus après ?', a: 'Oui, 3 mois inclus. Puis, maintenance annuelle optionnelle. On ne vous abandonne pas.' }
            ].map((item, idx) => (
              <details key={idx} className="bg-white rounded-lg border border-gray-200 p-6 open:bg-amber-50 cursor-pointer group">
                <summary className="font-bold text-red-600 flex justify-between items-center">
                  {item.q}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-700">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-red-600 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt pour le parcours complet ?</h2>
          <p className="text-xl text-amber-100 mb-10">Devis pack, sans engagement.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const message = encodeURIComponent('Je veux le pack Qualiopi + EDOF/CPF. Devis gratuit ?');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-lg"
            >
              Devis pack
            </button>
            <Link
              to="/contact"
              className="inline-block bg-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-500 transition-colors border-2 border-white"
            >
              Prise RDV
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
