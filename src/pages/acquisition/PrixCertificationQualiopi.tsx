import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, Euro, Clock, FileText, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { config } from '../../config/company';
import { useState } from 'react';

const faqs = [
  {
    q: 'Quel est le prix moyen d\'un accompagnement Qualiopi ?',
    a: 'Entre 2 000 € et 8 000 € HT selon la taille de votre structure. Pour un micro-organisme ou un formateur indépendant, comptez 2 000 à 4 000 €. Pour un organisme structuré avec plusieurs salariés et un large catalogue, entre 5 000 et 8 000 €. Ces tarifs incluent diagnostic, préparation documentaire, audit blanc et suivi jusqu\'à l\'obtention.'
  },
  {
    q: 'Combien coûte l\'auditeur (organisme certificateur) ?',
    a: 'L\'audit officiel réalisé par un organisme certificateur accrédité (Bureau Veritas, Dekra, AFNOR, Icpf...) coûte entre 800 € et 2 500 € HT selon la taille de votre structure et le nombre de journées d\'audit. Ce coût est distinct des honoraires du consultant qui vous prépare.'
  },
  {
    q: 'La certification Qualiopi est-elle finançable ?',
    a: 'Oui, partiellement. Certains OPCO (comme l\'OPCO EP) financent une partie des coûts de préparation à la certification. Les frais d\'audit eux-mêmes peuvent également être pris en charge. Nous vous guidons dans les démarches de financement pour réduire votre reste à charge.'
  },
  {
    q: 'Y a-t-il des coûts cachés ?',
    a: 'Aucun chez Eden Conseil Qualité. Avant de démarrer, vous recevez un devis détaillé avec le périmètre exact : nombre d\'heures, livrables, suivi post-audit. Les seuls coûts supplémentaires possibles sont liés à des formations internes que vous souhaiteriez suivre en parallèle.'
  },
  {
    q: 'Peut-on obtenir Qualiopi sans consultant ?',
    a: 'C\'est techniquement possible mais représente un risque élevé. Le taux d\'échec au premier audit sans accompagnement dépasse 40 %. Le coût d\'un second audit, du temps perdu et du manque à gagner (formations non éligibles CPF) dépasse souvent largement le coût d\'un accompagnement.'
  },
  {
    q: 'Combien de temps prend la certification ?',
    a: 'En moyenne 3 à 6 mois. Avec notre accompagnement intensif, certains dossiers sont bouclés en 10 semaines. Cela dépend de votre niveau de maturité documentaire au départ et de votre réactivité.'
  }
];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 font-semibold text-gray-700"
      >
        <span>{faq.q}</span>
        <span className="ml-4 text-red-600 text-xl flex-shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-6 py-4 bg-amber-50 text-gray-700 leading-relaxed border-t border-gray-200">
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function PrixCertificationQualiopi() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Bonjour, je souhaite connaître le prix d\'un accompagnement Qualiopi pour mon organisme de formation.');
    window.open(`https://wa.me/${config.company.whatsapp.replace(/[^\d]/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Prix Certification Qualiopi 2026 : Coûts réels et transparents | Eden Conseil Qualité</title>
        <meta name="description" content="Combien coûte la certification Qualiopi en 2026 ? Tarifs consultant, frais auditeur, financement OPCO. Tout savoir sur le prix de Qualiopi avant de vous lancer." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/prix-certification-qualiopi" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/prix-certification-qualiopi" />
        <meta property="og:image" content="https://edenconseilqualite.fr/og-image.webp" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://edenconseilqualite.fr/' },
            { '@type': 'ListItem', position: 2, name: 'Prix Certification Qualiopi', item: 'https://edenconseilqualite.fr/acquisition/prix-certification-qualiopi' }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a }
          }))
        })}</script>
      </Helmet>

      {/* HERO */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-700 via-red-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-200 font-semibold uppercase tracking-widest text-sm mb-4">Transparence tarifaire</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Prix de la certification Qualiopi en 2026
            <span className="block text-amber-100 text-2xl md:text-3xl font-medium mt-4">
              Tout ce que vous devez savoir avant de vous lancer
            </span>
          </h1>
          <p className="text-xl text-amber-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Consultant, auditeur, formation interne, financement OPCO… Le coût de Qualiopi est rarement ce qu'on croit.
            Voici les vrais chiffres, sans tabou.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle size={20} /> Obtenir mon devis gratuit
            </button>
            <Link
              to="/tarifs"
              className="bg-white text-red-700 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-amber-50 transition-all"
            >
              Voir nos tarifs détaillés
            </Link>
          </div>
        </div>
      </section>

      {/* RÉSUMÉ CHIFFRES CLÉS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-12">Les 3 coûts à prévoir pour Qualiopi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-red-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro size={28} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Consultant / cabinet</h3>
              <p className="text-3xl font-bold text-red-600 mb-3">2 000 – 8 000 €</p>
              <p className="text-gray-600 text-sm leading-relaxed">Préparation documentaire, audit blanc, accompagnement complet jusqu'à l'obtention. Le plus variable selon votre contexte.</p>
            </div>
            <div className="border-2 border-amber-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText size={28} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Organisme certificateur</h3>
              <p className="text-3xl font-bold text-amber-600 mb-3">800 – 2 500 €</p>
              <p className="text-gray-600 text-sm leading-relaxed">Frais d'audit réglementaire (Bureau Veritas, Dekra, AFNOR…). Obligatoire. Fixé par le certificateur, non négociable.</p>
            </div>
            <div className="border-2 border-green-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Temps interne</h3>
              <p className="text-3xl font-bold text-green-600 mb-3">2 – 4 h/semaine</p>
              <p className="text-gray-600 text-sm leading-relaxed">Votre temps (ou celui de votre équipe) pour fournir les documents et valider les procédures. Réduit au minimum avec notre méthode.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DÉTAIL PAR PROFIL */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">Quel budget selon votre profil ?</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Le coût de Qualiopi dépend principalement de 3 facteurs : taille de la structure, maturité documentaire, délai souhaité.</p>

          <div className="space-y-6">
            {[
              {
                profil: 'Formateur indépendant / micro-OF',
                budget: '2 000 – 3 500 €',
                detail: 'Processus simplifié, peu de procédures, dossier léger. Accompagnement concentré sur 2 à 3 mois. Idéal pour les OF qui débutent ou ont moins de 5 formations au catalogue.',
                couleur: 'border-amber-400 bg-amber-50'
              },
              {
                profil: 'Organisme de formation structuré (3–20 salariés)',
                budget: '3 500 – 6 000 €',
                detail: 'Structuration complète : procédures RH, suivi pédagogique, évaluations, satisfaction apprenants. Préparation sur 3 à 5 mois. La majorité de nos clients sont dans cette catégorie.',
                couleur: 'border-red-400 bg-red-50'
              },
              {
                profil: 'CFA ou OF multi-sites (+20 salariés)',
                budget: '5 000 – 10 000 €',
                detail: 'Périmètre élargi, plusieurs référentiels, indicateurs spécifiques CFA. Coordination de plusieurs équipes, harmonisation des pratiques. Délai : 4 à 7 mois.',
                couleur: 'border-amber-400 bg-amber-50'
              }
            ].map((item, i) => (
              <div key={i} className={`border-l-4 rounded-xl p-6 ${item.couleur}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-600 mb-2">{item.profil}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.detail}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-2xl font-bold text-red-600">{item.budget}</span>
                    <p className="text-sm text-gray-500">HT tout compris</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCEMENT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">Réduire le coût : les financements disponibles</h2>
          <p className="text-gray-600 text-center mb-10 text-lg">La certification Qualiopi n'est pas toujours à 100 % à votre charge. Voici les leviers à activer.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                titre: 'OPCO EP (Entreprises de Proximité)',
                desc: 'Prend en charge les frais de préparation à la certification pour les organismes de formation adhérents. Jusqu\'à 3 000 € pris en charge selon votre convention collective.',
                icon: '💰'
              },
              {
                titre: 'Conseil Régional',
                desc: 'Certaines régions (Île-de-France, Auvergne-Rhône-Alpes...) proposent des aides à la certification qualité pour les TPE/PME. Variable selon votre région et le moment.',
                icon: '🏛️'
              },
              {
                titre: 'Déduction fiscale',
                desc: 'Les honoraires de consultant sont déductibles du résultat imposable en tant que charges d\'exploitation. Impact réel sur votre coût net après fiscalité.',
                icon: '📋'
              },
              {
                titre: 'Paiement échelonné',
                desc: 'Chez Eden Conseil Qualité, nous proposons un paiement en 3 fois sans frais pour les accompagnements complets. Demandez-nous les modalités.',
                icon: '📅'
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 border border-gray-200 rounded-xl">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-red-600 mb-2">{item.titre}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COÛT DE NE PAS FAIRE QUALIOPI */}
      <section className="py-16 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AlertCircle size={48} className="mx-auto mb-6 text-amber-300" />
          <h2 className="text-3xl font-bold mb-6">Le vrai coût : ne pas avoir Qualiopi</h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Sans Qualiopi, vos formations ne sont pas éligibles au CPF, vous ne pouvez pas signer avec les OPCO,
            et vous perdez des marchés publics. Le manque à gagner dépasse largement le coût de la certification.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { label: 'CPF inaccessible', desc: 'Marché de plusieurs milliards d\'euros fermé sans Qualiopi' },
              { label: 'OPCO refusés', desc: 'Les financements salariés via OPCO nécessitent Qualiopi' },
              { label: 'Marchés publics perdus', desc: 'La majorité des appels d\'offres exigent la certification' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-5">
                <CheckCircle size={20} className="text-amber-300 mb-2" />
                <h3 className="font-bold mb-1">{item.label}</h3>
                <p className="text-amber-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-10 text-center">Questions sur le prix de Qualiopi</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-amber-50 border-t border-amber-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Obtenez votre devis personnalisé en 24h</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Chaque structure est unique. Dites-nous en quelques mots où vous en êtes,
            et nous vous proposons un devis transparent adapté à votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle size={20} /> WhatsApp — Réponse rapide
            </button>
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all"
            >
              Formulaire de contact
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Devis gratuit · Sans engagement · Réponse sous 24h ouvrées ·{' '}
            <Link to="/acquisition/obtenir-qualiopi" className="text-red-600 hover:underline">Comment obtenir Qualiopi ?</Link>
            {' '}·{' '}
            <Link to="/acquisition/qualiopi-rapidement" className="text-red-600 hover:underline">Qualiopi rapidement</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
