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
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Eden Conseil Qualité',
          description: 'Cabinet de conseil expert en certification Qualiopi, CPF et EDOF pour organismes de formation',
          url: 'https://edenconseilqualite.fr',
          telephone: '+33767058187',
          email: 'contact@eden-conseil-qualite.fr',
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
          areaServed: { '@type': 'Country', name: 'FR' },
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
      </Helmet>
      {/* Section 1 — Hero (accroche) */}
      <HeroAccueil />

      {/* Section 2 — Services phares */}
      <ServicesHighlights />

      {/* Section 3 — Chiffres clés / résultats */}
      <StatsSection />

      {/* Section 4 — Nos expertises */}
      <ServicesGrid />

      {/* Section 5 — Témoignages clients */}
      <TemoignagesCarousel />

      {/* Section 6 — FAQ rapide */}
      <FAQAccueil />

      {/* Section 7 — Appel à l’action final */}
      <CallToActionAccueil />

    </main>
  );
}
