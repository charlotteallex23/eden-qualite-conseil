import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { config } from '../../config/company';
import { useState } from 'react';

const faqs = [
  {
    q: 'Quel est le délai pour créer un organisme de formation ?',
    a: 'La déclaration d\'activité (NDA) auprès de la DRIEETS est obtenue en 4 à 6 semaines après dépôt du dossier complet. En parallèle, la préparation à Qualiopi prend 3 à 5 mois. Comptez donc 4 à 7 mois au total pour avoir un OF opérationnel, certifié et éligible au CPF.'
  },
  {
    q: 'Peut-on créer un organisme de formation sans statut particulier ?',
    a: 'Oui. Vous pouvez créer un OF sous forme de micro-entreprise, SASU, SARL, association ou tout autre statut juridique. La forme juridique n\'est pas imposée par la loi, mais elle a des implications fiscales importantes. Nous vous orientons vers le statut le plus adapté à votre projet.'
  },
  {
    q: 'Faut-il obligatoirement Qualiopi pour ouvrir un OF ?',
    a: 'Non, Qualiopi n\'est pas obligatoire pour ouvrir un OF. Elle devient indispensable si vous souhaitez : percevoir des financements publics (OPCO, CPF, Pôle Emploi, collectivités). Sans Qualiopi, vous pouvez exercer, mais uniquement avec des financements privés (paiement direct des apprenants ou des entreprises).'
  },
  {
    q: 'Combien coûte la création d\'un organisme de formation ?',
    a: 'Les coûts directs sont faibles : création de la structure juridique (100–1000 € selon le statut), dépôt NDA (gratuit), éventuel expert-comptable (500–2000 €/an). Le vrai coût est l\'accompagnement vers Qualiopi (2000–6000 €) et les frais d\'audit (800–2500 €). Au total, un budget de 5 000 à 10 000 € est réaliste pour un OF certifié opérationnel.'
  },
  {
    q: 'Quelle est la différence entre NDA, Qualiopi et EDOF ?',
    a: 'Ce sont trois étapes distinctes. Le NDA (Numéro de Déclaration d\'Activité) est l\'enregistrement auprès de l\'État — obligatoire pour exercer. Qualiopi est la certification qualité — obligatoire pour les financements publics. EDOF est la plateforme sur laquelle vous inscrivez vos formations pour les rendre éligibles au CPF. On les obtient dans cet ordre : NDA → Qualiopi → EDOF.'
  },
  {
    q: 'Eden Conseil Qualité peut-il gérer toute la création de mon OF ?',
    a: 'Oui. Nous proposons un pack complet de création : aide au choix du statut juridique, rédaction du premier programme de formation conforme, dépôt NDA, accompagnement Qualiopi complet, inscription EDOF. Vous avez un interlocuteur unique du début à la fin.'
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

const etapes = [
  {
    num: '1',
    titre: 'Choisir son statut juridique',
    duree: 'Semaine 1',
    desc: 'Micro-entreprise si vous démarrez seul avec peu de revenus. SASU ou SARL si vous anticipez une croissance rapide ou souhaitez vous associer. Association si votre projet est à but non lucratif. Le choix du statut détermine votre fiscalité, vos charges sociales et vos capacités de financement.',
    warning: false
  },
  {
    num: '2',
    titre: 'Rédiger son premier programme de formation',
    duree: 'Semaine 1–2',
    desc: 'La DRIEETS exige au moins un programme de formation conforme pour accepter votre dossier NDA. Ce programme doit détailler : objectifs pédagogiques, public cible, prérequis, contenu, méthodes d\'évaluation, durée. Nous rédigeons ce document pour vous.',
    warning: false
  },
  {
    num: '3',
    titre: 'Déposer la déclaration d\'activité (NDA)',
    duree: 'Semaine 2–4',
    desc: 'La déclaration d\'activité se fait en ligne sur le portail de la DRIEETS (ex-DIRECCTE). Elle est gratuite. L\'administration dispose de 30 jours pour vous attribuer votre numéro de déclaration ou vous demander des pièces complémentaires.',
    warning: false
  },
  {
    num: '4',
    titre: 'Préparer la certification Qualiopi',
    duree: 'Mois 2–5',
    desc: 'C\'est l\'étape la plus longue. Mise en place des 7 indicateurs qualité, rédaction des procédures, création des outils d\'évaluation apprenants, formalisation du suivi des réclamations. Nous structurons ce travail pour que vous ayez exactement ce qu\'il faut — rien de plus, rien de moins.',
    warning: false
  },
  {
    num: '5',
    titre: 'Passer l\'audit Qualiopi',
    duree: 'Mois 5–7',
    desc: 'L\'audit officiel dure 1 à 2 jours selon votre catalogue. L\'auditeur vérifie que vos pratiques correspondent à vos procédures écrites. Avec notre préparation, vous arrivez à l\'audit avec un dossier solide et un retour d\'expérience sur les points de vigilance.',
    warning: false
  },
  {
    num: '6',
    titre: 'S\'inscrire sur EDOF (si CPF visé)',
    duree: 'Après Qualiopi',
    desc: 'Une fois Qualiopi obtenu, vous pouvez déposer vos formations sur la plateforme EDOF (géré par la Caisse des Dépôts). Chaque formation doit respecter un cahier des charges précis (description, objectifs, prix, modalités). Nous gérons ce dépôt et l\'optimisation de vos fiches.',
    warning: false
  }
];

export default function CreerOrganismeFormation() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Bonjour, je souhaite créer un organisme de formation et j\'ai besoin d\'aide. Pouvez-vous me contacter ?');
    window.open(`https://wa.me/${config.company.whatsapp.replace(/[^\d]/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Créer un Organisme de Formation en 2026 : Guide complet étape par étape | Eden Conseil Qualité</title>
        <meta name="description" content="Comment créer un organisme de formation en France ? NDA, Qualiopi, EDOF : toutes les étapes expliquées clairement. Accompagnement clé en main disponible." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/creer-organisme-formation" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/creer-organisme-formation" />
        <meta property="og:image" content="https://edenconseilqualite.fr/og-image.webp" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://edenconseilqualite.fr/' },
            { '@type': 'ListItem', position: 2, name: 'Créer un organisme de formation', item: 'https://edenconseilqualite.fr/acquisition/creer-organisme-formation' }
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
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'Comment créer un organisme de formation en France',
          description: 'Guide étape par étape pour créer un organisme de formation, obtenir le NDA, la certification Qualiopi et accéder à EDOF.',
          totalTime: 'P7M',
          step: etapes.map(e => ({
            '@type': 'HowToStep',
            name: e.titre,
            text: e.desc
          }))
        })}</script>
      </Helmet>

      {/* HERO */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-900 via-red-700 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-200 font-semibold uppercase tracking-widest text-sm mb-4">Guide 2026</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Créer un organisme de formation
            <span className="block text-amber-100 text-2xl md:text-3xl font-medium mt-4">
              De l'idée à l'OF certifié Qualiopi : le guide complet
            </span>
          </h1>
          <p className="text-xl text-amber-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            NDA, Qualiopi, EDOF, CPF… Ouvrir un organisme de formation implique plusieurs étapes réglementaires.
            Voici le chemin exact, sans langue de bois.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            {[
              { val: '4–7 mois', label: 'Durée totale' },
              { val: '3 étapes', label: 'NDA → Qualiopi → EDOF' },
              { val: '< 10 000 €', label: 'Budget réaliste' }
            ].map((s, i) => (
              <div key={i} className="bg-white/15 rounded-xl p-4 text-white">
                <p className="text-2xl font-bold">{s.val}</p>
                <p className="text-amber-100 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle size={20} /> Être accompagné
            </button>
            <Link
              to="/acquisition/pack-creation-of-qualiopi"
              className="bg-white text-red-700 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-amber-50 transition-all"
            >
              Voir notre pack création OF
            </Link>
          </div>
        </div>
      </section>

      {/* PRÉREQUIS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">Ce qu'il faut pour ouvrir un OF</h2>
          <p className="text-gray-600 text-center mb-10 text-lg">Pas de diplôme obligatoire, pas de capital minimum. Mais des règles précises à respecter.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-green-700 mb-4 text-lg flex items-center gap-2"><CheckCircle size={20} /> Ce qui est obligatoire</h3>
              <ul className="space-y-3">
                {[
                  'Disposer d\'une structure juridique (entreprise ou association)',
                  'Déclarer votre activité auprès de la DRIEETS (NDA)',
                  'Avoir au moins un programme de formation formalisé',
                  'Posséder un lieu de formation ou justifier d\'un accord pour en utiliser un',
                  'Respecter les règles du Code du travail sur la formation professionnelle'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-amber-700 mb-4 text-lg flex items-center gap-2"><AlertCircle size={20} /> Ce qui est fortement recommandé</h3>
              <ul className="space-y-3">
                {[
                  'Obtenir Qualiopi (indispensable pour les financements publics et CPF)',
                  'S\'inscrire sur EDOF pour rendre vos formations éligibles au CPF',
                  'Souscrire une assurance responsabilité civile professionnelle',
                  'Ouvrir un compte bancaire professionnel dédié',
                  'Tenir un Bilan Pédagogique et Financier (BPF) annuel dès la première année'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <AlertCircle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LES 6 ÉTAPES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">Les 6 étapes pour créer votre OF</h2>
          <div className="space-y-6">
            {etapes.map((step, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="font-bold text-red-600 text-xl">{step.titre}</h3>
                      <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full self-start">{step.duree}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERREURS À ÉVITER */}
      <section className="py-16 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Les 4 erreurs qui font échouer les créateurs d'OF</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                erreur: 'Sous-estimer les délais administratifs',
                detail: 'Beaucoup pensent ouvrir en quelques semaines. Entre le NDA, l\'audit Qualiopi et l\'inscription EDOF, comptez 4 à 7 mois. Anticipez dès le début.'
              },
              {
                erreur: 'Négliger la formalisation documentaire',
                detail: 'Qualiopi exige des preuves écrites. Sans procédures, sans traçabilité, sans outils d\'évaluation formalisés, l\'audit est raté. Ce n\'est pas du remplissage : c\'est le cœur du référentiel.'
              },
              {
                erreur: 'Croire que le NDA suffit pour le CPF',
                detail: 'Le NDA permet d\'exercer légalement. Pour accéder au CPF, il faut en plus Qualiopi (certification qualité) ET l\'inscription sur EDOF. Ce sont trois démarches distinctes.'
              },
              {
                erreur: 'Copier les documents d\'un autre OF',
                detail: 'Les auditeurs détectent immédiatement les documents génériques non adaptés à votre activité. Chaque procédure doit refléter VOS pratiques réelles, pas celles d\'un autre organisme.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2 text-amber-200">❌ {item.erreur}</h3>
                <p className="text-amber-50 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-10 text-center">Questions fréquentes sur la création d'OF</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
          </div>
        </div>
      </section>

      {/* LIENS INTERNES + CTA */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Prêt à créer votre organisme de formation ?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Nous gérons toute la partie administrative et qualité pendant que vous vous concentrez
            sur votre expertise pédagogique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle size={20} /> Démarrer maintenant
            </button>
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all"
            >
              Demander un devis
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link to="/acquisition/pack-creation-of-qualiopi" className="text-red-600 hover:underline">Pack Création OF + Qualiopi</Link>
            <span className="text-gray-300">·</span>
            <Link to="/acquisition/prix-certification-qualiopi" className="text-red-600 hover:underline">Prix de la certification</Link>
            <span className="text-gray-300">·</span>
            <Link to="/acquisition/acceder-edof" className="text-red-600 hover:underline">Accéder à EDOF</Link>
            <span className="text-gray-300">·</span>
            <Link to="/acquisition/audit-qualiopi" className="text-red-600 hover:underline">Préparer l'audit Qualiopi</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
