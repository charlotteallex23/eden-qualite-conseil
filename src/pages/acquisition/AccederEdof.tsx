import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users } from 'lucide-react';
import { useEffect } from 'react';
import { config } from '../../config/company';

export default function AccederEdofPage() {
  useEffect(() => {
    document.title = 'Accéder à EDOF : Inscription pour organismes formation | Eden Conseil Qualité';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Inscription EDOF complet. Accès MonCompteFormation, CPF, financement public. Dossier conforme, validation garantie.');
  }, []);

  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Accéder à EDOF en tant qu'organisme
            <span className="block text-amber-100 text-3xl md:text-4xl font-semibold mt-3">
              CPF, financement public & visibilité
            </span>
          </h1>
          
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            EDOF c'est l'accès à MonCompteFormation, CPF, Transitions Pro, financements régionaux.
            Zéro apprenants sans EDOF. Mais l'inscription complète ? C'est technique et réglementaire.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Award size={24} className="text-violet-300" />
                <span className="font-semibold">Accès CPF</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Users size={24} className="text-amber-200" />
                <span className="font-semibold">Financement public</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <CheckCircle size={24} className="text-amber-200" />
                <span className="font-semibold">Visibilité maximale</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => {
                const message = encodeURIComponent('Je veux accéder à EDOF. Qu\'est-ce qu\'il faut faire ?');
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
            Inscription complète • Validation EDOF garantie • Zéro attente administrative
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">
            Pourquoi EDOF
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Sans EDOF, zéro apprenants. Avec EDOF, tous les financements.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                titre: 'CPF (Compte Personnel Formation)',
                desc: 'Apprenants financent avec leurs crédits CPF (5000€ base). EDOF = accès obligatoire.'
              },
              {
                titre: 'MonCompteFormation',
                desc: 'Plateforme où 30+ millions d\'apprenants cherchent. Sans EDOF : invisible.'
              },
              {
                titre: 'Transitions Pro',
                desc: 'Salariés en transition professionnelle. Financement jusqu\'à 100% via EDOF.'
              },
              {
                titre: 'Financements régionaux',
                desc: 'Conseil régional, Pôle emploi, Opco. Tous demandent numéro EDOF.'
              },
              {
                titre: 'Financements publics',
                desc: 'FNE-Formation, chômage indemnisé, appels à projets. EDOF indispensable.'
              },
              {
                titre: 'Contrôle qualité',
                desc: 'EDOF impose contrôles annuels. Gagner confiance + crédibilité = taux d\'abandon ↓.'
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
            Processus d'inscription EDOF
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                num: 1,
                titre: 'Diagnostic complet (1 jour)',
                desc: 'Structure, statut, certifications, formations. Quoi mettre sur EDOF ?'
              },
              {
                num: 2,
                titre: 'Constitution dossier (3-5 jours)',
                desc: 'Pièces justificatives, descriptions formations, tarifs, calendrier. Zéro manque.'
              },
              {
                num: 3,
                titre: 'Dépôt EDOF (1 jour)',
                desc: 'Nous gérons la plateforme EDOF. Dépôt formel du dossier.'
              },
              {
                num: 4,
                titre: 'Vérification EDOF (3-7 jours)',
                desc: 'EDOF valide conformité et pièces. Échanges avec nous si manques.'
              },
              {
                num: 5,
                titre: 'Activation MonCompteFormation (24h)',
                desc: 'Dès validation EDOF, vos formations apparaissent publiquement.'
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
              <h3 className="font-bold text-red-600 text-lg mb-4">Durée</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">1 jour :</span>
                  <span>Diagnostic</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">3-5 jours :</span>
                  <span>Dossier complet</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">1 jour :</span>
                  <span>Dépôt</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">3-7 jours :</span>
                  <span>Vérification EDOF</span>
                </li>
                <li className="border-t border-amber-200 pt-3 font-bold text-red-600">
                  Total : 2-3 semaines
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <h3 className="font-bold text-red-600 text-lg mb-4">Budget</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>Accompagnement EDOF (complet)</span>
                  <span className="font-semibold">1500-3000€</span>
                </li>
                <li className="flex justify-between">
                  <span>Frais EDOF (gouvernance)</span>
                  <span className="font-semibold">300-700€/an</span>
                </li>
                <li className="flex justify-between">
                  <span>Frais MonCompteFormation</span>
                  <span className="font-semibold">Gratuit</span>
                </li>
                <li className="border-t border-amber-200 pt-3 text-sm text-gray-600">
                  ROI : Première année, plusieurs apprenants CPF = 5-10x investissement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Questions EDOF
          </h2>

          <div className="space-y-4">
            {[
              { q: 'C\'est quoi la différence EDOF et MonCompteFormation ?', a: 'EDOF est la base de données officielle. MonCompteFormation est la plateforme apprenants. Une flux à l\'autre : EDOF = données officielles, MonCompteFormation = interface visuelle.' },
              { q: 'Ma structure est trop petite pour EDOF ?', a: 'Faux. Toute structure avec certifications/formations éligibles peut s\'inscrire. Aucun minimum de taille.' },
              { q: 'Et si je change formations ou tarif ?', a: 'Déclaration annuelle + modifications possibles dans l\'année. EDOF, c\'est souple.' },
              { q: 'Le coût EDOF en vaut vraiment la peine ?', a: 'Oui. Un seul apprenant CPF ramène 3-5k€. Le coût 1500-3k€ est récupéré en 1-2 apprenants.' }
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
          <h2 className="text-4xl font-bold mb-4">Inscription EDOF complète</h2>
          <p className="text-xl text-amber-100 mb-10">Diagnostic gratuit de votre accès EDOF possible.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const message = encodeURIComponent('Diagnostic EDOF gratuit pour mon organisme ?');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-lg"
            >
              Diagnostic gratuit
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
