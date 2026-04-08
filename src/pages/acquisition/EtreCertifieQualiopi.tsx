import { Link } from 'react-router-dom';
import { CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';
import { config } from '../../config/company';

export default function EtreCertifieQualiopiPage() {
  useEffect(() => {
    document.title = 'Être certifié Qualiopi : Méthode simple & plan d\'action | Eden Conseil Qualité';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Devenir certifié Qualiopi simplement. Méthode éprouvée, plan d\'action clair, zéro charge cachée. Accompagnement complet jusqu\'à la certification.');
  }, []);

  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Être certifié Qualiopi
            <span className="block text-amber-100 text-3xl md:text-4xl font-semibold mt-3">
              avec une méthode simple et éprouvée
            </span>
          </h1>
          
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Pas de prise de tête. Un plan d'action clair, des modèles prêts, un expert à vos côtés. 
            Vous obtenez votre certification Qualiopi sans stress, en 3-6 mois.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <TrendingUp size={24} className="text-amber-200" />
                <span className="font-semibold">Méthode à 5 étapes</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <CheckCircle size={24} className="text-amber-200" />
                <span className="font-semibold">Conformité garantie</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Clock size={24} className="text-amber-200" />
                <span className="font-semibold">Support continu</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => {
                const message = encodeURIComponent('Je veux être certifié Qualiopi. Comment ça marche avec vous ?');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Commencer maintenant
            </button>
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors border-2 border-red-600"
            >
              Prise de RDV
            </Link>
          </div>

          <p className="text-amber-50 text-sm">
            Réponse rapide • Pas d'engagement
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Notre méthode simple : 5 étapes qui marchent
          </h2>

          <div className="space-y-8">
            {[
              {
                num: 1,
                titre: 'Diagnostic rapide (1 semaine)',
                desc: 'Analyse complète de vos processus actuels. Identifie les écarts par domaine. Vous avez le panorama complet.'
              },
              {
                num: 2,
                titre: 'Plan d\'action précis (2 semaines)',
                desc: 'Roadmap 30-60-90 jours détaillée. Qui fait quoi, quand, comment. Aucune ambiguïté.'
              },
              {
                num: 3,
                titre: 'Documentation + modèles (4-8 semaines)',
                desc: 'Manuel qualité, procédures, outils. Tout prêt à adapter. Gain de temps massif.'
              },
              {
                num: 4,
                titre: 'Mise en place + coaching (continu)',
                desc: 'On vous aide à déployer. Ateliers, check-ins réguliers, réponses aux questions. Jamais seul(e).'
              },
              {
                num: 5,
                titre: 'Audit blanc + audit final (4-6 semaines)',
                desc: 'Simulation complète, corrections rapides, puis audit réel en confiance. Zéro surprise.'
              }
            ].map((step) => (
              <div key={step.num} className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-lg p-8 border-l-4 border-red-600">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold text-lg">
                      {step.num}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-red-600 mb-2">{step.titre}</h3>
                    <p className="text-gray-700">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Ce que vous recevez
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Rapport diagnostic complet',
              'Plan d\'action 30-60-90',
              'Manuel qualité + procédures',
              'Modèles d\'outils (évaluation, BPF)',
              'Ateliers de formation équipe',
              'Audit blanc + plan de correction',
              'Support régulier (check-ins)',
              'Préparation auditeurs'
            ].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg p-6 border-l-4 border-red-600">
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
            Questions fréquentes
          </h2>

          <div className="space-y-4">
            {[
              { q: 'Combien de temps au total ?', a: '3-6 mois selon votre maturité. Diagnostic + roadmap : 2-3 semaines. Mise en œuvre : 4-8 semaines. Audit blanc + corrections : 2-4 semaines.' },
              { q: 'Quel budget prévoir ?', a: 'Notre accompagnement : 2-12k€ selon votre taille. Certificateur : 1-5k€. Total : 3-17k€ environ.' },
              { q: 'Et si on échoue l\'audit ?', a: 'L\'audit blanc l\'empêche. On identifie les problèmes avant, vous les corrigez, on valide. Vous arrivez à l\'audit réel en confiance.' },
              { q: 'Combien d\'heures par semaine pour mon équipe ?', a: '2-4h en moyenne. On étale pour minimiser la charge. Après le 1er audit, ça baisse drastiquement.' }
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
          <h2 className="text-4xl font-bold mb-4">Prêt à être certifié ?</h2>
          <p className="text-xl text-amber-100 mb-10">Démarrez avec un appel de diagnostic gratuit.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const message = encodeURIComponent('Je veux démarrer ma certification Qualiopi.');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-lg"
            >
              Appel gratuit (WhatsApp)
            </button>
            <Link
              to="/contact"
              className="inline-block bg-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-500 transition-colors border-2 border-white"
            >
              Prendre RDV
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
