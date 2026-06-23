import { Helmet } from 'react-helmet-async';
import HeroAccueil from '../components/HeroAccueil';
import ServicesGrid from '../components/ServicesGrid';
import StatsSection from '../components/StatsSection';
import ServicesHighlights from '../components/ServicesHighlights';
import TemoignagesCarousel from '../components/TemoignagesCarousel';
import FAQAccueil from '../components/FAQAccueil';
import CallToActionAccueil from '../components/CallToActionAccueil';

export default function Accueil() {
  return (
    <main>
      <Helmet>
        <title>Consultant Qualiopi Paris | Accompagnement CPF EDOF | Eden Conseil Qualité</title>
        <meta name="description" content="Expert en certification Qualiopi, CPF et EDOF. Accompagnement personnalisé pour organismes de formation avec résultats prouvés." />
        <link rel="canonical" href="https://edenconseilqualite.fr/" />
        <meta property="og:title" content="Consultant Qualiopi Paris | Accompagnement CPF EDOF | Eden Conseil Qualité" />
        <meta property="og:description" content="Expert en certification Qualiopi, CPF et EDOF. Accompagnement personnalisé pour organismes de formation avec résultats prouvés." />
        <meta property="og:url" content="https://edenconseilqualite.fr/" />
        <meta property="og:image" content="https://edenconseilqualite.fr/og-image.webp" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://edenconseilqualite.fr',
          name: 'Eden Conseil Qualité',
          description: 'Cabinet de conseil expert en certification Qualiopi, CPF et EDOF pour organismes de formation. Accompagnement personnalisé par Charlotte Allexandre, consultante & auditrice Qualiopi.',
          url: 'https://edenconseilqualite.fr',
          founder: {
            '@type': 'Person',
            name: 'Charlotte Allexandre',
            jobTitle: 'Consultante & Auditrice Qualiopi',
            sameAs: 'https://edenconseilqualite.fr/qui-suis-je'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            telephone: '+33767058187',
            email: 'edenconseilqualite@gmail.com',
            availableLanguage: ['fr', 'en']
          },
          telephone: '+33767058187',
          email: 'edenconseilqualite@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1 Avenue François 1er',
            postalCode: '75008',
            addressLocality: 'Paris',
            addressCountry: 'FR'
          },
          openingHoursSpecification: [{
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            opens: '09:00',
            closes: '18:00'
          }],
          areaServed: [
            { '@type': 'Country', name: 'FR' },
            { '@type': 'Country', name: 'BE' },
            { '@type': 'Country', name: 'CH' }
          ],
          priceRange: '€€',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            bestRating: '5',
            reviewCount: '3'
          },
          review: [
            {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Sophie L.' },
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              reviewBody: 'Grâce à Eden Conseil Qualité, notre CFA a obtenu Qualiopi du premier coup. Accompagnement ultra pro et humain.'
            },
            {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Julien M.' },
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              reviewBody: 'Un vrai partenaire pour structurer notre offre, obtenir le CPF et réussir l\'audit Qualiopi. Je recommande à 100 %.'
            },
            {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Fatima B.' },
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              reviewBody: 'L\'équipe a tout géré pour la création de notre OF et le dépôt RS. Réactivité, expertise et résultats concrets.'
            }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Combien coûte un accompagnement RS ?',
              acceptedAnswer: { '@type': 'Answer', text: 'Le tarif dépend du niveau d\'accompagnement et du dossier. Contactez-nous pour un devis personnalisé.' }
            },
            {
              '@type': 'Question',
              name: 'Comment obtenir Qualiopi du premier coup ?',
              acceptedAnswer: { '@type': 'Answer', text: 'Nous vous guidons étape par étape, audit, préparation et suivi pour maximiser vos chances de réussite.' }
            },
            {
              '@type': 'Question',
              name: 'Peut-on rendre une formation CPF rapidement ?',
              acceptedAnswer: { '@type': 'Answer', text: 'Oui, nous optimisons le dépôt EDOF et le référencement pour accélérer l\'éligibilité CPF.' }
            },
            {
              '@type': 'Question',
              name: 'Aidez-vous à la création d\'un CFA ?',
              acceptedAnswer: { '@type': 'Answer', text: 'Oui, nous accompagnons la structuration, le NDA, l\'UAI et l\'ouverture de CFA.' }
            },
            {
              '@type': 'Question',
              name: 'Externalisez-vous la gestion Qualiopi ?',
              acceptedAnswer: { '@type': 'Answer', text: 'Nous proposons des solutions d\'externalisation pour la conformité et la gestion continue.' }
            }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://edenconseilqualite.fr/qui-suis-je',
          name: 'Charlotte Allexandre',
          jobTitle: 'Consultante & Auditrice Qualiopi',
          email: 'edenconseilqualite@gmail.com',
          telephone: '+33767058187',
          worksFor: {
            '@type': 'Organization',
            name: 'Eden Conseil Qualité',
            url: 'https://edenconseilqualite.fr'
          },
          knows: ['Certification Qualiopi', 'CPF EDOF', 'Organismes de formation', 'CFA', 'RNCP', 'Audit formation'],
          areaServed: [
            { '@type': 'Country', name: 'FR' },
            { '@type': 'Country', name: 'BE' },
            { '@type': 'Country', name: 'CH' }
          ],
          description: 'Consultante & Auditrice Qualiopi avec 10+ ans d\'expérience. Spécialiste en certification Qualiopi, CPF et EDOF pour organismes de formation et CFA.'
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': 'https://edenconseilqualite.fr',
          name: 'Consultant Qualiopi Paris | Accompagnement CPF EDOF | Eden Conseil Qualité',
          description: 'Expert en certification Qualiopi, CPF et EDOF. Accompagnement personnalisé pour organismes de formation avec résultats prouvés.',
          isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://edenconseilqualite.fr',
            name: 'Eden Conseil Qualité',
            url: 'https://edenconseilqualite.fr'
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: 'https://edenconseilqualite.fr/og-image.webp',
            width: 2128,
            height: 900
          },
          datePublished: '2025-01-01',
          author: {
            '@type': 'Person',
            name: 'Charlotte Allexandre',
            url: 'https://edenconseilqualite.fr/qui-suis-je'
          }
        })}</script>
      </Helmet>
      {/* Section 1 — Hero (accroche) */}
      <HeroAccueil />

      {/* Section 2 — Introduction riche avec attribution auteur */}
      <section className="bg-gradient-to-b from-white via-amber-50 to-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
              Certification Qualiopi, CPF & EDOF : Réussir du Premier Coup
            </h1>
            
            <div className="prose max-w-none text-lg text-gray-800 space-y-6">
              <p className="leading-relaxed">
                Depuis 2015, <strong className="text-gray-900 font-bold">Charlotte Allexandre</strong>, consultante & auditrice Qualiopi, accompagne des <strong className="text-gray-900 font-bold">organismes de formation, CFA et centres de compétences</strong> pour obtenir et maintenir leurs certifications Qualiopi, CPF et EDOF. Avec plus de <strong className="text-gray-900 font-bold">200+ dossiers réussis et un taux de réussite de 98%</strong>, Eden Conseil Qualité est devenu le partenaire de confiance pour structurer votre offre de formation.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Nos Solutions pour Vous</h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <span><strong className="text-gray-900">Création d'organisme de formation & CFA</strong> - Structuration juridique, UAI, NDA, SIRET</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <span><strong className="text-gray-900">Certification Qualiopi</strong> - Audit initial, préparation dossier, accompagnement audit CNEFOP</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <span><strong className="text-gray-900">CPF et EDOF</strong> - Référencement formation CPF, publication EDOF, optimisation taux de financement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <span><strong className="text-gray-900">Conformité continue</strong> - Audit maintenance Qualiopi, mise à jour RNCP/RS, dossier évaluation interne</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pourquoi nous choisir ?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border-l-4 border-red-600 p-4">
                  <strong className="text-gray-900 block mb-2">Expertise prouvée</strong>
                  <p className="text-sm">Charlotte audit depuis 10+ ans et connaît chaque critère Qualiopi par cœur.</p>
                </div>
                <div className="bg-white border-l-4 border-red-600 p-4">
                  <strong className="text-gray-900 block mb-2">Taux de réussite 98%</strong>
                  <p className="text-sm">Plus de 200 dossiers réussis. Vos résultats sont notre priorité.</p>
                </div>
                <div className="bg-white border-l-4 border-red-600 p-4">
                  <strong className="text-gray-900 block mb-2">Accompagnement humanisé</strong>
                  <p className="text-sm">Pas de prestataire distant — nous sommes vos partenaires à Paris.</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mt-8">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">Par Charlotte Allexandre</strong> | Consultante & Auditrice Qualiopi | Eden Conseil Qualité
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Services phares */}
      <ServicesHighlights />

      {/* Section 4 — Chiffres clés / résultats */}
      <StatsSection />

      {/* Section 5 — Nos expertises */}
      <ServicesGrid />

      {/* Section 6 — Témoignages clients */}
      <TemoignagesCarousel />

      {/* Section 7 — FAQ rapide */}
      <FAQAccueil />

      {/* Section 8 — Appel à l'action final */}
      <CallToActionAccueil />

    </main>
  );
}
