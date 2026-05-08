import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { Mail, Phone, Clock, MapPin, Send } from 'lucide-react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useScrollToTop } from '../hooks/userHooks';

export default function Contact() {
  useScrollToTop();
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    // Component mounted
  }, []);

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    besoin: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const besoins = [
    'Création OF',
    'Création CFA',
    'Certification Qualiopi',
    'Dossier RS',
    'Référencement CPF / EDOF',
    'Gestion & conformité',
    'Audit de surveillance',
    'Autre'
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Exécuter reCAPTCHA
      if (!executeRecaptcha) {
        throw new Error('reCAPTCHA non disponible');
      }

      const token = await executeRecaptcha('contact_form');

      // Appeler le serveur backend pour envoyer l'email
      const response = await fetch('http://localhost:3001/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          besoin: formData.besoin,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Erreur lors de l\'envoi');
      }

      setSubmitStatus('success');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        besoin: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
      setErrorMessage('Une erreur s\'est produite. Veuillez vérifier votre connexion ou contacter directement.');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prenez rendez-vous pour un premier échange gratuit et sans engagement
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-red-600 mb-6">
                Envoyez-nous un message
              </h2>

              {submitStatus === 'success' && (
                <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg p-4 mb-6">
                  <p className="font-semibold">Message envoyé avec succès !</p>
                  <p className="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
                  <p className="font-semibold">Erreur lors de l'envoi</p>
                  <p className="text-sm">{errorMessage || 'Veuillez réessayer ou nous contacter directement.'}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="prenom" className="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                      placeholder="votre@email.fr"
                    />
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      required
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                      placeholder="07 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="besoin" className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre besoin *
                  </label>
                  <select
                    id="besoin"
                    name="besoin"
                    required
                    value={formData.besoin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Sélectionnez votre besoin</option>
                    {besoins.map((besoin, index) => (
                      <option key={index} value={besoin}>
                        {besoin}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Décrivez-nous votre projet..."
                  />
                </div>

                <p className="text-xs text-gray-500 text-center">
                  This site is protected by reCAPTCHA and the Google
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1"> Privacy Policy</a> and
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1"> Terms of Service</a> apply.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Champs obligatoires
                </p>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-red-600 mb-6">
                Informations
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:edenconseilqualite@gmail.com"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      edenconseilqualite@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <a
                      href="tel:0767058187"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      07 67 05 81 87
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                    <p className="text-gray-600">
                      Lundi - Samedi<br />
                      9h00 - 18h00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      1 Avenue François 1er<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Zone d'intervention</h3>
                    <p className="text-gray-600">
                      France entière<br />
                      Accompagnement à distance ou sur site
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-600 text-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Premier rendez-vous gratuit</h3>
              <p className="text-amber-100 mb-4">
                Échangeons sur votre projet lors d'un premier rendez-vous téléphonique ou visio, sans engagement.
              </p>
              <p className="text-sm text-amber-200">
                Nous vous recontactons sous 24h ouvrées maximum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
