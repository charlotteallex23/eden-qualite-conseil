import { useCallback, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_3o7wsxl';
const EMAILJS_TEMPLATE_ID = 'template_31vea09';
const EMAILJS_PUBLIC_KEY = 'w0GiVe8V5k_sHZYwU';

// Hook pour scroll automatique vers le haut
export function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

// Hook pour capture email (newsletter/devis)
export function useCaptureEmail() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const captureEmail = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    if (!email) return;

    setStatus('loading');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: 'Demande de devis (page d\'accueil)',
          from_email: email,
          reply_to: email,
          telephone: '',
          besoin: 'Devis personnalisé',
          message: `Une personne souhaite recevoir un devis personnalisé.\nEmail : ${email}`,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      (form.elements.namedItem('email') as HTMLInputElement).value = '';
    } catch {
      setStatus('error');
    }
  }, []);

  return { captureEmail, status };
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
