import { useCallback, useState, useEffect } from 'react';

// Hook pour scroll automatique vers le haut
export function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

// Hook pour capture email (newsletter/devis)
export function useCaptureEmail() {
  const captureEmail = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    // Ici, envoyer l'email à votre backend ou service
    alert(`Merci ! Nous avons bien reçu votre email : ${email}`);
  }, []);
  return { captureEmail };
}

// Hook pour bouton RDV Calendly
export function useRDVCalendly() {
  const openCalendly = useCallback(() => {
    window.open('https://calendly.com/votre-lien', '_blank');
  }, []);
  return { openCalendly };
}

// Hook pour rotation des avis
export function useAvisRotation(length: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = useCallback(() => setCurrentIndex(i => (i + 1) % length), [length]);
  const prev = useCallback(() => setCurrentIndex(i => (i - 1 + length) % length), [length]);
  return { currentIndex, next, prev };
}

// Hook pour scroll fluide vers CTA final
export function useScrollToCTA() {
  const scrollToCTA = useCallback(() => {
    const el = document.getElementById('cta-email');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return { scrollToCTA };
}
