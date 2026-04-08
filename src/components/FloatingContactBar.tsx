import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { config } from '../config/company';

export default function FloatingContactBar() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher après un petit scroll (50px)
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Afficher si on a scrollé au moins 50px
      const shouldShow = scrollTop > 50;
      // Cacher si on est tout en bas (moins de 200px avant la fin)
      const isNearBottom = scrollTop + windowHeight >= docHeight - 200;
      
      setIsVisible(shouldShow && !isNearBottom && !isClosed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClosed]);

  if (!isVisible) return null;

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${config.company.whatsapp.replace(/[^0-9]/g, '')}?text=Bonjour, je suis intéressé par vos services`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-slideUp">
      <div className="bg-gradient-to-r from-red-900 to-[#2d4a73] text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
            {/* Texte + photo */}
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-full border-2 border-white flex-shrink-0 bg-white/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base">Des questions sur votre projet ?</h3>
                <p className="text-xs sm:text-sm text-amber-100">Contactez-nous directement</p>
              </div>
            </div>

            {/* Boutons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 bg-amber-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all text-sm whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-white hover:bg-amber-50 text-red-600 font-semibold py-2 px-4 rounded-lg transition-all text-sm whitespace-nowrap"
              >
                Nous contacter
              </button>
              <button
                onClick={() => setIsClosed(true)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
