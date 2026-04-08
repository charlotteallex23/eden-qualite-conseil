import { useEffect } from 'react';
import HeroAccueil from '../components/HeroAccueil';
import ServicesGrid from '../components/ServicesGrid';
import StatsSection from '../components/StatsSection';
import ServicesHighlights from '../components/ServicesHighlights';
import TemoignagesCarousel from '../components/TemoignagesCarousel';
import FAQAccueil from '../components/FAQAccueil';
import CallToActionAccueil from '../components/CallToActionAccueil';

export default function Accueil() {
  useEffect(() => {
    // Meta tags
    document.title = 'Consultant Qualiopi Paris | Accompagnement CPF EDOF | Eden Conseil Qualité';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Expert en certification Qualiopi, CPF et EDOF. Accompagnement personnalisé pour organismes de formation avec résultats prouvés.');
    
    // Schema markup - Organization
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Eden Conseil Qualité',
      description: 'Cabinet de conseil expert en certification Qualiopi, CPF et EDOF',
      url: 'https://eden-conseil-qualite.fr',
      areaServed: { '@type': 'Country', name: 'FR' }
    };
    
    let schemaScript = document.querySelector('script[data-page="accueil"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      (schemaScript as HTMLScriptElement).type = 'application/ld+json';
      schemaScript.setAttribute('data-page', 'accueil');
      schemaScript.innerHTML = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }
  }, []);

  return (
    <main>
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
