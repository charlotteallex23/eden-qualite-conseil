import { MessageCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import teamPhoto from '../assets/eden-conseil-qualite-logo.png';
import { config } from '../config/company';

export default function TeamContact() {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${config.company.whatsapp.replace(/[^0-9]/g, '')}?text=Bonjour, je suis intéressé par vos services`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLaunchProject = () => {
    navigate('/contact');
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-red-900 to-[#2d4a73] rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Photo et titre à gauche */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6">
                <img
                  src={teamPhoto}
                  alt="Équipe Eden Conseil Qualité"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-white"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Équipe Eden Conseil Qualité
              </h2>
              <p className="text-lg text-amber-100 leading-relaxed">
                Des questions sur votre projet ? Contactez-nous directement <span className="text-2xl">😊</span>
              </p>
            </div>

            {/* Boutons à droite */}
            <div className="flex flex-col gap-4 items-center md:items-end">
              {/* Bouton WhatsApp */}
              <button
                onClick={handleWhatsApp}
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-amber-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <MessageCircle size={20} />
                <span>Écrivez-nous sur WhatsApp</span>
              </button>

              {/* Bouton Lancer mon projet */}
              <button
                onClick={handleLaunchProject}
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-white hover:bg-amber-50 text-red-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md border-2 border-white"
              >
                <span>Lancer mon projet</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
