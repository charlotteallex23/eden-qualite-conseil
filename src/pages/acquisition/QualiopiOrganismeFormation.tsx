import { Link } from 'react-router-dom';
import { CheckCircle, Building2, Users } from 'lucide-react';
import { useEffect } from 'react';
import { config } from '../../config/company';

export default function QualiopiOrganismeFormationPage() {
  useEffect(() => {
    document.title = 'Qualiopi pour organismes formation : Certification méthodique | Eden Conseil Qualité';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Qualiopi pour centre de formation, OPCO, département. Structuration + audit garantie. 3-6 mois, budget prévisible.');
  }, []);

  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Qualiopi pour organismes formation
            <span className="block text-amber-100 text-3xl md:text-4xl font-semibold mt-3">
              Certification structurée et conforme
            </span>
          </h1>
          
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vous pilotez une structure formation. Qualiopi est obligatoire pour accéder aux financements.
            Processus long ? Oui. Compliqué ? Pas si vous avez du soutien. On gère.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Building2 size={24} className="text-violet-300" />
                <span className="font-semibold">Audit certifié</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Users size={24} className="text-amber-200" />
                <span className="font-semibold">Apprenants garantis</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <CheckCircle size={24} className="text-amber-200" />
                <span className="font-semibold">3 ans de validité</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => {
                const message = encodeURIComponent('Qualiopi pour mon organisme formation : audit ?');
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
            Audit méthodique • Zéro surprise • Certification garantie
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">
            Pourquoi Qualiopi pour organismes
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            C'est pas optionnel. C'est obligatoire pour survivre.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                titre: 'CPF (Compte Personnel Formation)',
                desc: 'Apprenants utilisent crédit CPF (5000€). Sans Qualiopi = rejet. Avec = accès illimité.'
              },
              {
                titre: 'Financements public (régions, Transitions Pro, FNE)',
                desc: 'Tous demandent numéro Qualiopi. Pas de Qualiopi = pas d\'argent public.'
              },
              {
                titre: 'MonCompteFormation visibility',
                desc: 'Seules les structures Qualiopi apparaissent. Sans = zéro visibilité.'
              },
              {
                titre: 'Crédibilité pour apprenants',
                desc: 'Qualiopi = certification gouvernementale. Assurance qualité = confiance.'
              },
              {
                titre: 'OPCO & financeurs privés',
                desc: 'OPCO exigent Qualiopi avant prise en charge. Même pour financement privé.'
              },
              {
                titre: 'Durée : 3 ans',
                desc: 'Coût amorti sur 3 ans = moins cher. Audit annuel = suivi continu.'
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
            Processus de certification
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                num: 1,
                titre: 'Audit de structure (1-2 jours)',
                desc: 'Vos formations, vos processus, vos équipes. Quoi faire, quoi améliorer.'
              },
              {
                num: 2,
                titre: 'Plan d\'amélioration (2-4 semaines)',
                desc: 'Si besoin : restructuration, documentations, formation équipe.'
              },
              {
                num: 3,
                titre: 'Dossier Qualiopi complet (3-4 semaines)',
                desc: 'Preuves, justificatifs, descriptions, processus. Rien ne manque.'
              },
              {
                num: 4,
                titre: 'Sélection auditeur externe agréé (1 semaine)',
                desc: 'Audit tiers obligatoire. On choisit auditeur qualifié.'
              },
              {
                num: 5,
                titre: 'Audit Qualiopi (1-2 jours sur place)',
                desc: 'L\'auditeur vient, vérifie tout, évalue en direct.'
              },
              {
                num: 6,
                titre: 'Correction si besoin (1-2 semaines)',
                desc: 'Rarement refus. Plutôt petites corrections. On gère.'
              },
              {
                num: 7,
                titre: 'Certification (1 jour)',
                desc: 'EDOF valide, certificat délivré. Vous êtes Qualiopi officiel.'
              }
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-lg p-6 border-l-4 border-red-600 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-600 text-white font-bold">
                      {step.num}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600 mb-1">{step.titre}</h3>
                    <p className="text-gray-700 text-sm">{step.desc}</p>
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
            Durée + Budget
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <h3 className="font-bold text-red-600 text-lg mb-4">Durée totale</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">1-2 jours :</span>
                  <span>Audit interne</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">2-4 sem :</span>
                  <span>Améliorations</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">3-4 sem :</span>
                  <span>Dossier</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">1-2 jours :</span>
                  <span>Audit externe</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">1-2 sem :</span>
                  <span>Corrections</span>
                </li>
                <li className="border-t border-amber-200 pt-3 font-bold text-red-600">
                  Total : 3-6 mois
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <h3 className="font-bold text-red-600 text-lg mb-4">Budget</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>Accompagnement complet</span>
                  <span className="font-semibold">3000-5000€</span>
                </li>
                <li className="flex justify-between">
                  <span>Audit externe (tiers agréé)</span>
                  <span className="font-semibold">2000-3500€</span>
                </li>
                <li className="flex justify-between">
                  <span>Frais EDOF validation</span>
                  <span className="font-semibold">0€</span>
                </li>
                <li className="border-t border-amber-200 pt-3 font-bold text-red-600 flex justify-between">
                  <span>Total :</span>
                  <span>5000-8500€</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            FAQ Qualiopi organismes
          </h2>

          <div className="space-y-4">
            {[
              { q: 'Et si je ne suis pas prêt pour Qualiopi ?', a: 'Plan d\'amélioration = on remet à niveau progressivement. Pas d\'urgence. Mais coût final sera plus bas si vous avez déjà bases.' },
              { q: 'L\'auditeur externe peut refuser ?', a: 'Rarement. Plutôt demandes de correction. Refus = cas exceptionnel (fraude, évidentes non-conformités). On prévient avant.' },
              { q: 'C\'est quoi la différence entre audit interne et externe ?', a: 'Interne (nous) = diagnostic + amélioration. Externe (tiers agréé) = évaluation officielle, c\'est lui qui dit oui/non.' },
              { q: 'Après certification, c\'est fini ?', a: 'Audit annuel obligatoire. On propose suivi continu (inclus) ou vous le faites seul. Qualiopi 3 ans, puis renouvellement.' }
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
          <h2 className="text-4xl font-bold mb-4">Qualiopi garantie pour votre organisme</h2>
          <p className="text-xl text-amber-100 mb-10">Audit interne gratuit et sans engagement.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const message = encodeURIComponent('Audit interne Qualiopi gratuit ?');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-lg"
            >
              Audit gratuit
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
