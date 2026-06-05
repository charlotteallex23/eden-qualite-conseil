import { Link } from 'react-router-dom';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { config } from '../config/company';
import logoAccueil from '../assets/logo-eden-conseil-copy.webp';

export default function HeroAccueil() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Bonjour, je suis intéressé par les services de Eden Conseil Qualité pour mon organisme de formation. Pouvez-vous me fournir plus d\'informations ?'
    );
    window.open(
      `https://wa.me/${config.company.whatsapp.replace(/[^\d]/g, '')}?text=${message}`,
      '_blank'
    );
  };

  const trustBadges = [
    { text: '+150 organismes accompagnés', icon: CheckCircle },
    { text: '100% obtention Qualiopi', icon: CheckCircle },
    { text: '98% clients satisfaits', icon: CheckCircle },
  ];

  return (
    <section className="relative text-white overflow-hidden" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
      {/* BACKGROUND: Vidéo sur desktop, image sur mobile */}
      <div className="absolute inset-0">
        {isMobile ? (
          // Mobile: Image optimisée — WebP + JPG fallback
          <picture className="absolute inset-0 w-full h-full">
            <source srcSet="/fond-hero-mobile.webp" type="image/webp" />
            <img
              src="/fond-hero-mobile.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center' }}
            />
          </picture>
        ) : (
          // Desktop: Vidéo animée
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.9, objectPosition: 'center' }}
          >
            <source src="/video-hero.webm" type="video/webm" />
            <source src="/video-hero.mp4" type="video/mp4" />
            {/* Fallback */}
            <img
              src="/fond-hero-1.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>
        )}

        {/* Overlay gradient — opacité uniforme */}
        <div 
          className="absolute inset-0 opacity-40 bg-gradient-to-br from-red-600 via-amber-800 to-violet-950"
        />
        
        {/* Texture subtile background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        
        {/* H1 invisible pour le SEO */}
        <h1 className="sr-only">
          Eden Conseil Qualité — Conseil expert pour OF & CFA
        </h1>

        {/* LOGO + TITRE — centrés au-dessus de tout */}
        <div className="flex flex-col items-center mb-12">
          <img
            src={logoAccueil}
            alt="Eden Conseil Qualité logo"
            className="h-24 w-auto drop-shadow-lg mb-6"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-3" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
            Eden Conseil Qualité
          </h2>
          <p className="text-xl md:text-2xl text-white text-center font-light" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
            Votre conseiller en formation professionnelle
          </p>
        </div>

        {/* 2 COLONNES : texte gauche | trust badges droite */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          
          {/* GAUCHE : description */}
          <p className="text-xl md:text-2xl text-amber-100 leading-relaxed text-center font-light" style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
            Accompagnement complet pour créer, développer et sécuriser votre organisme de formation. Qualiopi, CPF, EDOF, RS/RNCP : nous maîtrisons tous les domaines.
          </p>

          {/* DROITE : Pourquoi nous faire confiance */}
          <div className="space-y-4">
            <div className="text-sm font-semibold text-amber-200 uppercase tracking-wider" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
              Pourquoi nous faire confiance
            </div>
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all">
                <CheckCircle className="w-6 h-6 text-violet-400 flex-shrink-0 mt-0.5" />
                <span className="text-base font-medium text-white" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BOUTONS — centrés en bas */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleWhatsApp}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
            style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)' }}
          >
            <MessageCircle size={20} />
            Discuter sur WhatsApp
          </button>
          <Link
            to="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg transition-all duration-200 text-center flex items-center justify-center"
            style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)' }}
          >
            Prendre RDV gratuit
          </Link>
        </div>
      </div>

      {/* Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-10" />
    </section>
  );
}
