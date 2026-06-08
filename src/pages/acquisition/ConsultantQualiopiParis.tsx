import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { config } from '../../config/company';
import { useState } from 'react';

const faqs = [
  {
    q: 'Pourquoi choisir un consultant Qualiopi basé à Paris ?',
    a: 'Un consultant parisien connaît le tissu économique local, les OPCO et certificateurs actifs en Île-de-France, et peut intervenir rapidement en présentiel si nécessaire. Pour les organismes de formation franciliens, la proximité facilite les réunions de cadrage, les audits blancs sur site et les échanges informels qui font avancer un dossier.'
  },
  {
    q: 'Intervenez-vous uniquement à Paris ?',
    a: 'Non. Notre cabinet est basé à Paris (75008) mais nous accompagnons des organismes dans toute la France, principalement en distanciel (visio, outils collaboratifs, échanges email). Nous intervenons en présentiel sur Paris et Île-de-France sans supplément de déplacement.'
  },
  {
    q: 'Quels secteurs maîtrisez-vous en Île-de-France ?',
    a: 'Nos clients franciliens sont principalement dans : la formation professionnelle généraliste, les langues, le bilan de compétences, le digital, le management, le sanitaire et social, et le secteur juridique. Nous accompagnons aussi des CFA et centres de formation en alternance.'
  },
  {
    q: 'Combien de temps prend un accompagnement Qualiopi pour un OF parisien ?',
    a: 'La durée standard est de 3 à 5 mois. Pour les organismes bien structurés (procédures existantes, équipe réactive), nous avons déjà bouclé des dossiers complets en 10 semaines. Tout dépend de votre maturité documentaire au départ.'
  },
  {
    q: 'Puis-je obtenir un premier rendez-vous rapide ?',
    a: 'Oui. Nous proposons un appel diagnostic gratuit de 30 minutes sous 48h. Lors de cet échange, nous évaluons votre situation, estimons le périmètre de travail et vous remettons un devis. Aucun engagement de votre côté.'
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

export default function ConsultantQualiopiParis() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Bonjour, je suis un organisme de formation en Île-de-France et je cherche un consultant Qualiopi. Pouvez-vous me rappeler ?');
    window.open(`https://wa.me/${config.company.whatsapp.replace(/[^\d]/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Consultant Qualiopi Paris & Île-de-France | Eden Conseil Qualité</title>
        <meta name="description" content="Cabinet de conseil Qualiopi basé à Paris 8e. Accompagnement sur mesure pour organismes de formation en Île-de-France. Devis gratuit en 24h." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/consultant-qualiopi-paris" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/consultant-qualiopi-paris" />
        <meta property="og:image" content="https://edenconseilqualite.fr/og-image.webp" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://edenconseilqualite.fr/' },
            { '@type': 'ListItem', position: 2, name: 'Consultant Qualiopi Paris', item: 'https://edenconseilqualite.fr/acquisition/consultant-qualiopi-paris' }
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
          '@type': 'LocalBusiness',
          name: 'Eden Conseil Qualité',
          description: 'Consultant Qualiopi Paris et Île-de-France — Cabinet de conseil pour organismes de formation',
          url: 'https://edenconseilqualite.fr',
          telephone: '+33767058187',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1 Avenue François 1er',
            postalCode: '75008',
            addressLocality: 'Paris',
            addressRegion: 'Île-de-France',
            addressCountry: 'FR'
          },
          areaServed: [
            { '@type': 'City', name: 'Paris' },
            { '@type': 'AdministrativeArea', name: 'Île-de-France' }
          ]
        })}</script>
      </Helmet>

      {/* HERO */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-800 via-red-700 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <MapPin size={16} /> Paris 8e — Île-de-France
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Consultant Qualiopi à Paris
            <span className="block text-amber-100 text-2xl md:text-3xl font-medium mt-4">
              Accompagnement expert pour organismes de formation franciliens
            </span>
          </h1>
          <p className="text-xl text-amber-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Eden Conseil Qualité est un cabinet de conseil basé à Paris (75008), spécialisé
            dans l'obtention de la certification Qualiopi pour les organismes de formation
            d'Île-de-France et de toute la France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle size={20} /> Appel diagnostic gratuit
            </button>
            <Link
              to="/contact"
              className="bg-white text-red-700 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-amber-50 transition-all"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: '+150', label: 'OF accompagnés' },
            { val: '98%', label: 'Taux de réussite' },
            { val: '< 24h', label: 'Délai de réponse' },
            { val: '10 ans', label: 'D\'expertise formation' }
          ].map((s, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-red-600 mb-1">{s.val}</p>
              <p className="text-gray-600 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POURQUOI PARIS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">Pourquoi un consultant Qualiopi local à Paris ?</h2>
          <p className="text-gray-600 text-center mb-12 text-lg max-w-2xl mx-auto">
            La certification Qualiopi demande une connaissance fine du contexte réglementaire, des certificateurs actifs
            dans votre secteur et des spécificités du marché francilien.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🏢',
                titre: 'Réseau de certificateurs parisiens',
                desc: 'Nous collaborons avec les principaux organismes certificateurs actifs en Île-de-France (Bureau Veritas, Dekra, AFNOR, Icpf). Nous vous orientons vers le certificateur le plus adapté à votre secteur et budget.'
              },
              {
                icon: '📍',
                titre: 'Intervention en présentiel',
                desc: 'Pour les audits blancs, réunions de cadrage ou accompagnements intensifs, nous pouvons intervenir directement dans vos locaux parisiens ou franciliens sans frais supplémentaires.'
              },
              {
                icon: '🔗',
                titre: 'Connaissance des OPCO régionaux',
                desc: 'OPCO EP, AFDAS, OPCO Santé, Uniformation… Nous connaissons les dispositifs de financement disponibles pour les organismes de formation d\'Île-de-France et vous aidons à les mobiliser.'
              },
              {
                icon: '⚡',
                titre: 'Réactivité maximale',
                desc: 'Basés à Paris, nous répondons sous 24h à toute demande. Notre disponibilité sur des créneaux horaires élargis (8h–19h, lundi–samedi) s\'adapte aux agendas chargés des directeurs d\'OF.'
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
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

      {/* SECTEURS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-10 text-center">Secteurs accompagnés en Île-de-France</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Formation professionnelle continue', 'Bilan de compétences', 'Langues étrangères',
              'Management & Leadership', 'Digital & Numérique', 'Sanitaire et social',
              'Droit & Juridique', 'Finance & Comptabilité', 'Commerce & Vente',
              'Alternance & CFA', 'Coaching professionnel', 'Ressources humaines',
              'Sécurité & Prévention', 'Bureautique & Informatique', 'Marketing & Communication'
            ].map((s, i) => (
              <span key={i} className="bg-red-50 text-red-700 border border-red-200 rounded-full px-4 py-2 text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ÉTAPES */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">Notre accompagnement, étape par étape</h2>
          <div className="space-y-6">
            {[
              { num: '1', titre: 'Appel diagnostic (gratuit, 30 min)', desc: 'Nous analysons votre situation actuelle, identifions les points forts et les manques par rapport au référentiel Qualiopi. Vous repartez avec une vision claire du travail à accomplir.' },
              { num: '2', titre: 'Devis personnalisé sous 24h', desc: 'Tarif fixe, périmètre défini, délai annoncé. Pas de mauvaise surprise en cours de mission.' },
              { num: '3', titre: 'Préparation documentaire (2–4 mois)', desc: 'Nous construisons avec vous tous les documents requis : règlement intérieur, procédures qualité, outils d\'évaluation, registre des réclamations… Chaque document est personnalisé à votre activité.' },
              { num: '4', titre: 'Audit blanc sur site ou distanciel', desc: 'Simulation complète de l\'audit réel. Nous jouons le rôle de l\'auditeur pour identifier les dernières lacunes avant l\'échéance officielle.' },
              { num: '5', titre: 'Audit officiel + accompagnement post-audit', desc: 'Vous passez l\'audit avec confiance. En cas de demande de correction (rare), nous vous assistons dans le délai imparti. Taux de réussite : 98%.' }
            ].map((step, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.num}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-red-600 text-lg mb-1">{step.titre}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COORDONNÉES */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <MapPin size={24} className="text-red-600" />
              <p className="font-semibold text-red-600">Adresse</p>
              <p className="text-gray-600 text-sm">1 Avenue François 1er<br />75008 Paris</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone size={24} className="text-red-600" />
              <p className="font-semibold text-red-600">Téléphone</p>
              <a href={`tel:+33${config.company.phone}`} className="text-red-600 font-medium hover:underline">
                {config.company.phone.replace(/(\d{2})(?=\d)/g, '$1 ').trim()}
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock size={24} className="text-red-600" />
              <p className="font-semibold text-red-600">Horaires</p>
              <p className="text-gray-600 text-sm">Lun–Sam · 9h–18h</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-10 text-center">Vos questions sur l'accompagnement Qualiopi à Paris</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Vous êtes en Île-de-France ? Parlons-nous.</h2>
          <p className="text-amber-100 mb-8 text-lg">
            Un appel de 30 minutes suffit pour faire le point sur votre situation et savoir si Qualiopi est à portée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle size={20} /> WhatsApp
            </button>
            <Link
              to="/contact"
              className="bg-white text-red-700 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-amber-50 transition-all"
            >
              Formulaire de contact
            </Link>
          </div>
          <p className="text-sm text-amber-200 mt-6">
            Voir aussi :{' '}
            <Link to="/acquisition/prix-certification-qualiopi" className="underline hover:text-white">Prix Qualiopi</Link>
            {' '}·{' '}
            <Link to="/acquisition/creer-organisme-formation" className="underline hover:text-white">Créer un OF</Link>
            {' '}·{' '}
            <Link to="/acquisition/audit-qualiopi" className="underline hover:text-white">Préparer l'audit</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
