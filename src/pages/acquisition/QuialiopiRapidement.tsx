import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Shield } from 'lucide-react';
import { useEffect } from 'react';
import { config } from '../../config/company';

export default function QuialiopiRapidementPage() {
  useEffect(() => {
    document.title = 'Obtenir Qualiopi rapidement : Plan accéléré réaliste | Eden Conseil Qualité';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Qualiopi en moins de 3 mois ? C\'est possible. Plan accéléré réaliste, sans raccourcis. Démarrez immédiatement.');
  }, []);

  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Obtenir Qualiopi
            <span className="block text-amber-100 text-3xl md:text-4xl font-semibold mt-3">
              en moins de 3 mois
            </span>
          </h1>
          
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vous êtes pressé. Qualiopi n'attend pas. Découvrez notre plan accéléré, réaliste, sans couper les coins.
            De nombreux organismes réussissent en 8-12 semaines avec la bonne stratégie.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Zap size={24} className="text-yellow-300" />
                <span className="font-semibold">Plan accéléré</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Shield size={24} className="text-violet-300" />
                <span className="font-semibold">Sans compromis qualité</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <CheckCircle size={24} className="text-amber-200" />
                <span className="font-semibold">Prouvé et fiable</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => {
                const message = encodeURIComponent('Je veux Qualiopi vite. Comment faire ?');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-yellow-500 text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl"
            >
              Démarrer plan express
            </button>
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors border-2 border-red-600"
            >
              Discuter urgence
            </Link>
          </div>

          <p className="text-amber-50 text-sm">
            Faisable en 8-12 semaines • Pas de magie, juste de l'organisation
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">
            Pourquoi c'est possible en moins de 3 mois ?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Trois éléments clés :
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-8 border-l-4 border-red-600">
              <h3 className="text-lg font-bold text-red-600 mb-3">1. Diagnostic express</h3>
              <p className="text-gray-700">
                Pas d'audit blanc long. Juste l'essentiel : où vous êtes, quoi fixer en priorité. 3-5 jours.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-8 border-l-4 border-red-600">
              <h3 className="text-lg font-bold text-red-600 mb-3">2. Documentation prêtes</h3>
              <p className="text-gray-700">
                On vous donne les modèles 80% rédigés. Vous adaptez, on valide. Pas de blank page.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-8 border-l-4 border-red-600">
              <h3 className="text-lg font-bold text-red-600 mb-3">3. Équipe dédiée</h3>
              <p className="text-gray-700">
                Contact disponible, réunions courtes fréquentes. On débloquer les freins immédiatement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Timeline express : 8-12 semaines
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="font-bold text-red-600 mb-2">Semaines 1-2 : Diagnostic + Plan</h3>
              <p className="text-gray-700 text-sm">Évaluation rapide, roadmap accéléré, liste d'actions.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="font-bold text-red-600 mb-2">Semaines 3-8 : Mise en place intensive</h3>
              <p className="text-gray-700 text-sm">Docs, processus, formation équipe. Momentum continu.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="font-bold text-red-600 mb-2">Semaines 9-10 : Audit blanc rapide</h3>
              <p className="text-gray-700 text-sm">Simulation, corrections en temps réel.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-amber-500">
              <h3 className="font-bold text-red-600 mb-2">Semaines 11-12 : Audit final</h3>
              <p className="text-gray-700 text-sm">Vous êtes prêt. Certification lancée.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Le vrai coût d'une vitesse accrue
          </h2>

          <div className="bg-white rounded-lg border border-gray-200 p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-700">Accompagnement accéléré</span>
                <span className="font-bold text-red-600">+30-40%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-700">Ressources dédiées 24/48h</span>
                <span className="font-bold text-red-600">Budget flexible</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">Budget total estimé</span>
                <span className="font-bold text-lg text-red-600">4-16k€</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-6 text-center">
              Oui, plus cher qu'un accompagnement standard. Mais vous gagnez 2-3 mois. À vous de juger si c'est worth it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            FAQ : Express mode
          </h2>

          <div className="space-y-4">
            {[
              { q: 'C\'est vraiment faisable en 3 mois sans se presser ?', a: 'Oui, mais il faut de la mobilisation en interne. 4-6h/semaine d\'implication clé. C\'est gérable, pas de burnout.' },
              { q: 'Vous coupez les coins ?', a: 'Non. L\'audit blanc reste rigoureux. On raccourcit l\'analyse préalable et on utilise des modèles, mais on ne sacrifie pas la conformité.' },
              { q: 'Le certificateur peut refuser pour "trop rapide" ?', a: 'Non, aucun risque légal. Mais il est vrai qu\'un accompagnement express demande discipline. Avec nous, ça marche.' },
              { q: 'Qui peut utiliser ce plan ?', a: 'Organismes matures ou structurés. Si vous partez de zéro total, 3 mois c\'est trop court. Nous vous le disons honnêtement.' }
            ].map((item, idx) => (
              <details key={idx} className="bg-gray-50 rounded-lg border border-gray-200 p-6 open:bg-amber-50 cursor-pointer group">
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
          <h2 className="text-4xl font-bold mb-4">Envie de foncer ?</h2>
          <p className="text-xl text-amber-100 mb-10">Validation rapide de faisabilité : gratuit.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const message = encodeURIComponent('Je veux Qualiopi en moins de 3 mois. C\'est possible ?');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-lg"
            >
              Validation express
            </button>
            <Link
              to="/contact"
              className="inline-block bg-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-500 transition-colors border-2 border-white"
            >
              Prise RDV urgente
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
