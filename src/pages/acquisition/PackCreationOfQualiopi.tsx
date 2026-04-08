import { Link } from 'react-router-dom';
import { CheckCircle, Target, Users } from 'lucide-react';
import { useEffect } from 'react';
import { config } from '../../config/company';

export default function PackCreationOfQualiopiPage() {
  useEffect(() => {
    document.title = 'Pack Création OF + Qualiopi : Tout en 1 | Eden Conseil Qualité';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Pack complet : créer organisme formation + obtenir Qualiopi. Tout inclus, pas de pièces manquantes. Budget clair, délai 3-4 mois.');
  }, []);

  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pack Création OF + Qualiopi
            <span className="block text-amber-100 text-3xl md:text-4xl font-semibold mt-3">
              De zéro à certifié en 3-4 mois
            </span>
          </h1>
          
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vous n'avez pas encore d'organisme formation ? Ou il existe mais sans Qualiopi ?
            Ce pack, c'est créer ou formaliser votre organisme + obtenir certification en même temps.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <CheckCircle size={24} className="text-violet-300" />
                <span className="font-semibold">Création légale</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Target size={24} className="text-amber-200" />
                <span className="font-semibold">Qualiopi garantie</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Users size={24} className="text-amber-200" />
                <span className="font-semibold">Accès CPF + EDOF</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => {
                const message = encodeURIComponent('Pack création OF + Qualiopi : comment ça marche ?');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Consulter expert
            </button>
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors border-2 border-red-600"
            >
              Prise de RDV
            </Link>
          </div>

          <p className="text-amber-50 text-sm">
            Accompagnement complet • Tout légal • Qualiopi incluse
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">
            Pourquoi ce pack
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Les 2 étapes critiques de toute structure formation.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                titre: 'Créer légalement votre organisme',
                desc: 'SIRET, déclaration formation, assurances. Si vous débutez, c\'est complexe et chronophage.'
              },
              {
                titre: 'Obtenir Qualiopi',
                desc: 'Sans Qualiopi, zéro financement public. CPF, Transitions Pro, régions : tous demandent.'
              },
              {
                titre: 'Les deux ensemble c\'est cohérent',
                desc: 'Pas d\'attendre que l\'organisme soit créé pour lancer Qualiopi. Les deux en parallèle = 3-4 mois au lieu de 6.'
              },
              {
                titre: 'Budget clair et fixe',
                desc: 'À la carte = surprise. Pack = tout compris, pas de frais cachés ni rallonge.'
              },
              {
                titre: 'EDOF incluse',
                desc: 'Qualiopi signifie EDOF. Vous sortez avec accès MonCompteFormation, CPF, apprenants.'
              },
              {
                titre: 'Une équipe dédiée',
                desc: 'Pas 3 prestataires. Un seul interlocuteur pour création + Qualiopi + EDOF.'
              }
            ].map((item) => (
              <div key={item.titre} className="bg-gray-50 rounded-lg p-6 border-l-4 border-red-600">
                <h3 className="font-bold text-red-600 mb-2">{item.titre}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Contenu du pack
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-600">
              <h3 className="font-bold text-red-600 mb-4 text-lg">Création organisme (Mois 1-2)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Statut juridique conseillé (SARL, EI, etc.)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Immatriculation SIRET</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Déclaration de formation (préfecture)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Assurances RC + garantie financière</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Numéro de déclaration d'activité</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-600">
              <h3 className="font-bold text-red-600 mb-4 text-lg">Qualiopi + EDOF (Mois 2-4)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Sélection auditeur Qualiopi agréé</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Dossier Qualiopi complet (pièces + preuves)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Audit Qualiopi et correction</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Inscription EDOF</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Publication MonCompteFormation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Timeline + Budget
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <h3 className="font-bold text-red-600 text-lg mb-4">Durée</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">Sem 1-2 :</span>
                  <span>Diagnostic + structure juridique</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">Sem 3-4 :</span>
                  <span>SIRET + déclaration formation</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">Sem 5-8 :</span>
                  <span>Dossier Qualiopi + audit</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">Sem 9-12 :</span>
                  <span>Certification + EDOF</span>
                </li>
                <li className="border-t border-amber-200 pt-3 font-bold text-red-600">
                  Total : 3-4 mois
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <h3 className="font-bold text-red-600 text-lg mb-4">Budget pack</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>Accompagnement création</span>
                  <span className="font-semibold">1000-1500€</span>
                </li>
                <li className="flex justify-between">
                  <span>Qualiopi + audit</span>
                  <span className="font-semibold">2500-3500€</span>
                </li>
                <li className="flex justify-between">
                  <span>EDOF + inscription</span>
                  <span className="font-semibold">500-800€</span>
                </li>
                <li className="border-t border-amber-200 pt-3 font-bold text-red-600 flex justify-between">
                  <span>Total pack :</span>
                  <span>4500-5800€</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            FAQ Pack création OF + Qualiopi
          </h2>

          <div className="space-y-4">
            {[
              { q: 'Je dois d\'abord créer la structure pour Qualiopi ?', a: 'Non, les deux peuvent avancer en parallèle. Dès que vous avez SIRET et déclaration, on peut lancer Qualiopi. Gain 2-3 mois.' },
              { q: 'Et si ma structure existe déjà mais sans Qualiopi ?', a: 'Ça marche aussi. On adapte le pack : juste Qualiopi + EDOF. Moins cher, ~3-4 mois également.' },
              { q: 'Vous gérez les démarches administratives ?', a: 'Oui, tout. On remplit dossiers, on suit avec préfecture, URSSAF, assurances. Vous signez.' },
              { q: 'Et après le pack, c\'est fini ?', a: 'Qualiopi = 3 ans. Après, audit annuel obligatoire. On propose suivi continu mais pas obligatoire.' }
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
          <h2 className="text-4xl font-bold mb-4">Lancez votre organisme formation</h2>
          <p className="text-xl text-amber-100 mb-10">Pack complet création + Qualiopi. Clé en main.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const message = encodeURIComponent('Pack création OF + Qualiopi : info ?');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-lg"
            >
              Consulter
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
