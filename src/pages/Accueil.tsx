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
          name: 'Eden Conseil Qualité',
          description: 'Cabinet de conseil expert en certification Qualiopi, CPF et EDOF pour organismes de formation',
          url: 'https://edenconseilqualite.fr',
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
      </Helmet>
      {/* Section 1 — Hero (accroche) */}
      <HeroAccueil />

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
