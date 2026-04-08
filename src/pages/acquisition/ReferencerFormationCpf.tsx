import { Link } from 'react-router-dom';
import { CheckCircle, Briefcase, FileText } from 'lucide-react';
import { useEffect } from 'react';
import { config } from '../../config/company';

export default function ReferencerFormationCpfPage() {
  useEffect(() => {
    document.title = 'Référencer formations CPF : Mise en ligne conforme & éligibilité | Eden Conseil Qualité';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Référencer vos formations CPF sans refus. Dossier conforme, éligibilité validée, publication EDOF/MonCompteFormation.');
  }, []);

  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Référencer vos formations CPF
            <span className="block text-amber-100 text-3xl md:text-4xl font-semibold mt-3">
              Sans refus, sans attente
            </span>
          </h1>
          
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vous avez les formations. Mais comment les mettre sur EDOF et MonCompteFormation correctement ?
            Dossier conforme, éligibilité CPF validée, publication rapide. C'est notre spécialité.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <CheckCircle size={24} className="text-violet-300" />
                <span className="font-semibold">Dossier conforme</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Briefcase size={24} className="text-amber-200" />
                <span className="font-semibold">Éligibilité garantie</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <FileText size={24} className="text-amber-200" />
                <span className="font-semibold">Publication rapide</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => {
                const message = encodeURIComponent('Je veux référencer mes formations CPF. Comment vous faites ?');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Consulter expert CPF
            </button>
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors border-2 border-red-600"
            >
              Prise de RDV
            </Link>
          </div>

          <p className="text-amber-50 text-sm">
            Réponse sous 24h • Pas de dossier rejeté • Succès garanti
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">
            Pourquoi les formations sont refusées
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Erreurs fréquentes qui vous coûtent du temps.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                titre: 'Certification non éligible CPF',
                desc: 'Vous avez une certification mais elle n\'est pas au RNCP/RS. Elle ne peut pas être CPF.'
              },
              {
                titre: 'Dossier incomplet',
                desc: 'Pièces manquantes, justificatifs insuffisants. EDOF rejette car dossier non conforme.'
              },
              {
                titre: 'Description formations mauvaise',
                desc: 'Trop vague, pas assez SEO, objectifs flous. MonCompteFormation refuse ou ne montre pas votre formation.'
              },
              {
                titre: 'Tarif non cohérent',
                desc: 'Prix trop élevé par rapport à la durée, ou dépassement plafond CPF (3000€).'
              },
              {
                titre: 'Horaires/sessions non publiés',
                desc: 'EDOF exige les dates. Zéro session = refus de publication.'
              },
              {
                titre: 'Informations organismes manquantes',
                desc: 'Adresse, contact, structure SIRET non à jour. Blocage.'
              }
            ].map((item) => (
              <div key={item.titre} className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange-500">
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
            Notre processus de référencement
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                num: 1,
                titre: 'Audit d\'éligibilité (1-2 jours)',
                desc: 'Votre formation peut-elle être CPF ? Certification éligible ? On valide avant d\'engager.'
              },
              {
                num: 2,
                titre: 'Préparation dossier complet (3-5 jours)',
                desc: 'Tous les justificatifs, descriptions SEO, preuves d\'existence. Zéro manque.'
              },
              {
                num: 3,
                titre: 'Dépôt EDOF (1 jour)',
                desc: 'Formellement, on monte votre dossier et le dépose. Nous, pas vous.'
              },
              {
                num: 4,
                titre: 'Suivi & corrections (7-14 jours)',
                desc: 'EDOF peut demander détails. On gère les échanges. Aucune traîne.'
              },
              {
                num: 5,
                titre: 'Publication MonCompteFormation (24-48h après validation EDOF)',
                desc: 'Votre formation est maintenant visible aux apprenants. C\'est gagné.'
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
              <h3 className="font-bold text-red-600 text-lg mb-4">Durée typique</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">1-2 jours :</span>
                  <span>Audit d'éligibilité</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">3-5 jours :</span>
                  <span>Dossier complet</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">7-14 jours :</span>
                  <span>Validation EDOF</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-red-600">24-48h :</span>
                  <span>Pub MonCompteFormation</span>
                </li>
                <li className="border-t border-amber-200 pt-3 font-bold text-red-600">
                  Total : 2-3 semaines environ
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <h3 className="font-bold text-red-600 text-lg mb-4">Budget</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>Par formation</span>
                  <span className="font-semibold">300-600€</span>
                </li>
                <li className="flex justify-between">
                  <span>2-3 formations</span>
                  <span className="font-semibold">800-1500€</span>
                </li>
                <li className="flex justify-between">
                  <span>4-5 formations</span>
                  <span className="font-semibold">1200-2500€</span>
                </li>
                <li className="border-t border-amber-200 pt-3 text-sm text-gray-600">
                  Plus : inscription/modification EDOF (0-200€ selon organisme)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Questions CPF/EDOF
          </h2>

          <div className="space-y-4">
            {[
              { q: 'Ma certification est éligible CPF ?', a: 'Elle doit être inscrite au RNCP (titres pros) ou RS (certifications métier). On vérifie gratuitement en 24h.' },
              { q: 'Peux-tu gérer la demande EDOF à ma place ?', a: 'Oui, c\'est inclus. Dépôt du dossier, interactions avec EDOF, tout.' },
              { q: 'Et si EDOF refuse ?', a: 'On identifie pourquoi et on corrige. Rarement un refus définitif ; plutôt besoin de détails supplémentaires.' },
              { q: 'Combien de formations peut-on référencer en même temps ?', a: 'Autant que vous voulez. Plus cher en prix total (300€/formation) mais encore plus avantageux que une par une.' }
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
          <h2 className="text-4xl font-bold mb-4">Vos formations sur CPF dès aujourd'hui</h2>
          <p className="text-xl text-amber-100 mb-10">Audit d'éligibilité gratuit et sans engagement.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const message = encodeURIComponent('Mes formations sur CPF : audit d\'éligibilité gratuit ?');
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
