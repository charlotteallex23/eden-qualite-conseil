import { Link } from 'react-router-dom';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { config } from '../config/company';

export default function HeroAccueil() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Bonjour, je suis intéressé par les services de Maîtrise & Stratégie pour mon organisme de formation. Pouvez-vous me fournir plus d\'informations ?'
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
    <section className="relative bg-gradient-to-br from-red-600 via-amber-800 to-violet-950 text-white overflow-hidden">
      {/* Texture subtile background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Text + CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Eden Conseil Qualité — Conseil expert pour OF & CFA
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 leading-relaxed">
                Accompagnement complet pour créer, développer et sécuriser votre organisme de formation. Qualiopi, CPF, EDOF, RS/RNCP : nous maîtrisons tous les domaines.
              </p>
            </div>

            {/* CTA: Primaire + Secondaire */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Discuter sur WhatsApp
              </button>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg transition-all duration-200 text-center flex items-center justify-center"
              >
                Prendre RDV gratuit
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Trust Badges */}
          <div className="space-y-6 md:pl-8">
            <div className="text-sm font-semibold text-amber-200 uppercase tracking-wider">
              Pourquoi nous faire confiance
            </div>
            <div className="space-y-4">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all">
                  <CheckCircle className="w-6 h-6 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span className="text-base font-medium text-white">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-10" />
    </section>
  );
}
