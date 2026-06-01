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
          description: 'Cabinet de conseil expert en certification Qualiopi, CPF et EDOF',
          url: 'https://edenconseilqualite.fr',
          areaServed: { '@type': 'Country', name: 'FR' }
        })}</script>
      </Helmet>
      {/* Section 1 — Hero (accroche) */}
      <HeroAccueil />

      {/* Section 2 — Nos expertises */}
      <ServicesGrid />

      {/* Section 3 — Chiffres clés / résultats */}
      <StatsSection />

      {/* Section 4 — Services phares */}
      <ServicesHighlights />

      {/* Section 5 — Témoignages clients */}
      <TemoignagesCarousel />

      {/* Section 6 — FAQ rapide */}
      <FAQAccueil />

      {/* Section 7 — Appel à l’action final */}
      <CallToActionAccueil />

    </main>
  );
}
