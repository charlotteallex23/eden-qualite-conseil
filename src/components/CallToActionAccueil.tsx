import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useCaptureEmail } from '../hooks/userHooks';
import { config } from '../config/company';

export default function CallToActionAccueil() {
  const { captureEmail } = useCaptureEmail();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Bonjour, je suis intéressé par les services de Eden Conseil Qualité pour mon organisme de formation. Pouvez-vous me fournir plus d\'informations ?'
    );
    window.open(
      `https://wa.me/${config.company.whatsapp.replace(/[^\d]/g, '')}?text=${message}`,
      '_blank'
    );
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative gradient circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full -mr-48 -mt-48 opacity-30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-100 rounded-full -ml-36 -mb-36 opacity-20 blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Prêt à structurer votre organisme ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Réservez une consultation gratuite avec nos experts. Découvrez comment Eden Conseil Qualite  peut accélérer votre développement.
          </p>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <MessageCircle size={20} />
            Discuter sur WhatsApp
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-900 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            Réserver une consultation
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Email Form Section */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 md:p-12 shadow-lg">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Recevez un devis personnalisé
            </h3>
            <p className="text-gray-600">
              Remplissez le formulaire ci-dessous. Nous vous répondrons sous 24h.
            </p>
          </div>

          <form
            id="cta-email"
            className="max-w-md mx-auto flex flex-col gap-4"
            onSubmit={captureEmail}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Votre email professionnel"
              className="py-3 px-4 rounded-lg border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            >
              Recevoir mon devis
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
