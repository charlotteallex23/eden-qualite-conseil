import { Link } from 'react-router-dom';
import { CheckCircle, Users, Briefcase } from 'lucide-react';
import { useEffect } from 'react';
import { config } from '../../config/company';

export default function QuialiopiFormateurIndependantPage() {
  useEffect(() => {
    document.title = 'Qualiopi formateur indépendant : Processus light & budget adapté | Eden Conseil Qualité';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Formateur indépendant ? Obtenez Qualiopi sans surcharge. Processus light, budget réaliste, accompagnement solo-preneur.');
  }, []);

  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Qualiopi pour formateurs
            <span className="block text-amber-100 text-3xl md:text-4xl font-semibold mt-3">
              indépendants et petits collectifs
            </span>
          </h1>
          
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vous travaillez seul(e) ou en petit collectif. Qualiopi n'est pas un luxe de grand groupe.
            Un processus léger, un budget réaliste, de l'accompagnement adapté à votre contexte solo.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Briefcase size={24} className="text-amber-200" />
                <span className="font-semibold">Processus minimaliste</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Users size={24} className="text-amber-200" />
                <span className="font-semibold">Accompagnement perso</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <CheckCircle size={24} className="text-amber-200" />
                <span className="font-semibold">Budget flexible</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => {
                const message = encodeURIComponent('Je suis formateur indépendant. Je veux Qualiopi. Comment on peut faire ?');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Appel diagnostic gratuit
            </button>
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors border-2 border-red-600"
            >
              Prise de RDV
            </Link>
          </div>

          <p className="text-amber-50 text-sm">
            Réponse rapide • Pas de package lourd • Budget transparent
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">
            Le défi du formateur solo
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Vous avez peu de temps, pas de service qualité interne, budget limité. Comment faire ?
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-red-600 mb-3">Le piège : se surcharger</h3>
              <p className="text-gray-700">
                Penser qu'il faut une équipe QA complète, des procédures ultra-détaillées. Non, vous êtes seul(e). 
                La simple solution est souvent la meilleure.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-amber-500">
              <h3 className="font-bold text-red-600 mb-3">La solution : minimalisme intelligent</h3>
              <p className="text-gray-700">
                Documenter l'essentiel. Preuves simples mais complètes. Un bilan pédagogique honnête. 
                Les auditeurs reconnaissent et respectent l'authenticité du solo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Votre parcours Qualiopi light
          </h2>

          <div className="space-y-6">
            {[
              {
                titre: 'Audit diagnostique (1 semaine)',
                desc: 'Visite simple, questions clés. Pas de gros rapport. Juste : où vous êtes, quoi corriger.'
              },
              {
                titre: 'Kit documentation light (2-3 semaines)',
                desc: 'Manuel qualité condensé, 2-3 procédures clés. Modèles génériques, vous adaptez un peu.'
              },
              {
                titre: 'Mise en place (3-4 semaines)',
                desc: 'Appels courtes régulières (1h/semaine). On débloquer les trucs simples. Pas de lourdeur.'
              },
              {
                titre: 'Bilan pédagogique simplifié (2 semaines)',
                desc: 'BPF honnête : formations dispensées, satisfaction, résultats. Pas d\'usine à gaz.'
              },
              {
                titre: 'Audit blanc light (1-2 semaines)',
                desc: 'Simulation courte. On joue le certificateur. Vous corrigez et c\'est bon.'
              },
              {
                titre: 'Audit final (quelques jours)',
                desc: 'Vous êtes prêt(e). L\'auditeur reconnait votre sérieux. Certification lancée.'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-red-600 shadow-sm">
                <h3 className="font-bold text-red-600 mb-2">{step.titre}</h3>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Budget réaliste pour solo
          </h2>

          <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-700">
                <span>Accompagnement light</span>
                <span className="font-semibold">1.5-3k€</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Documentations modèles</span>
                <span className="font-semibold">inclus</span>
              </div>
              <div className="flex justify-between text-gray-700 pb-4 border-b border-gray-300">
                <span>Support régulier</span>
                <span className="font-semibold">inclus</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-red-600">
                <span>Total accompagnement</span>
                <span>1.5-3k€</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm">
              Plus : certificateur (500-1.5k€). Total tout-in : 2-4.5k€ environ. Accessible. Faisable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Questions formateurs indépendants
          </h2>

          <div className="space-y-4">
            {[
              { q: 'Seul(e), je peux vraiment avoir Qualiopi ?', a: 'Oui, absolument. Les auditeurs connaissent la réalité des formateurs indépendants. Pas de prérequis "équipe minimum".' },
              { q: 'Combien de preuves faut-il ?', a: 'La qualité prime sur la quantité. 5-10 formations bien documentées > 50 formations mal suivies. Authentique compte.' },
              { q: 'Le BPF solo est possible ?', a: 'Oui. Vous rapportez : formations dispensées, profils apprenants, satisfaction, insertion après. C\'est honnête et suffisant.' },
              { q: 'Comment gérer indicateurs d\'insertion seul(e) ?', a: 'Simple : appel/email 6 mois après. "Où êtes-vous ?" Vrai suivi, pas usine à gaz. Les auditeurs respectent ça.' },
              { q: 'Et les délais ?', a: '3-4 mois typiquement pour un solo. Plus court qu\'une grosse structure car moins de lenteurs administratives.' }
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
          <h2 className="text-4xl font-bold mb-4">Votre tour de formateur certifié</h2>
          <p className="text-xl text-amber-100 mb-10">Appel d'évaluation : gratuit et sans engagement.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const message = encodeURIComponent('Formateur indépendant. Je veux Qualiopi. Comment on fait ?');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-lg"
            >
              Appel d'évaluation
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
