import { useState, useEffect, useRef } from 'react';
import type { FormEvent } from 'react';
import { DayPicker } from 'react-day-picker';
import emailjs from '@emailjs/browser';
import { Calendar, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import 'react-day-picker/dist/style.css';

const EMAILJS_PUBLIC_KEY = 'w0GiVe8V5k_sHZYwU';
const EMAILJS_SERVICE_ID = 'service_3o7wsxl';
const EMAILJS_TEMPLATE_ID_BOOKING = 'template_booking_rdv';
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_31vea09';
const RECAPTCHA_SITE_KEY = '6LcgcuosAAAAAATBUqa0aTfI81oLaJO1qXkBb2F4';

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00'
];

const BESOINS = [
  'Création OF',
  'Création CFA',
  'Certification Qualiopi',
  'Dossier RS',
  'Référencement CPF / EDOF',
  'Gestion & conformité',
  'Audit de surveillance',
  'Autre'
];

interface BookingCalendarProps {
  title?: string;
  subtitle?: string;
}

export default function BookingCalendar({ title = 'Réservez votre créneau', subtitle = 'Sélectionnez une date et une heure pour prendre rendez-vous' }: BookingCalendarProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookingData, setBookingData] = useState({
    nom: '',
    email: '',
    telephone: '',
    besoin: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmationEmail, setConfirmationEmail] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  const handleDateChange = (date: Date | undefined) => {
    if (date && !isWeekend(date)) {
      setSelectedDate(date);
    }
  };

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime || !bookingData.nom || !bookingData.email || !bookingData.telephone || !bookingData.besoin) {
      setSubmitStatus('error');
      setErrorMessage('Veuillez remplir tous les champs et sélectionner une date et heure.');
      return;
    }

    if (!recaptchaToken) {
      setSubmitStatus('error');
      setErrorMessage('Veuillez cocher la case "Je ne suis pas un robot".');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const dateStr = selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      const templateParams = {
        from_name: bookingData.nom,
        from_email: bookingData.email,
        telephone: bookingData.telephone,
        besoin: bookingData.besoin,
        date_rdv: dateStr,
        time_rdv: selectedTime,
        message: `Demande de rendez-vous\nDate: ${dateStr}\nHeure: ${selectedTime}\nObjet: ${bookingData.besoin}`,
        reply_to: bookingData.email
      };

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_BOOKING,
          templateParams
        );
      } catch {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_CONTACT,
          templateParams
        );
      }

      setSubmitStatus('success');
      setConfirmationEmail(bookingData.email);
      setBookingData({
        nom: '',
        email: '',
        telephone: '',
        besoin: ''
      });
      setSelectedDate(undefined);
      setSelectedTime('');
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Erreur lors de la réservation:', error);
      setSubmitStatus('error');
      setErrorMessage('Envoi impossible pour le moment. Réessayez dans 1 minute ou contactez-nous directement.');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedDateStr = selectedDate?.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-red-600 mb-2">
        {title}
      </h2>
      <p className="text-gray-600 mb-8">
        {subtitle}
      </p>

      {submitStatus === 'success' && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg p-4 mb-6 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Rendez-vous confirmé !</p>
            <p className="text-sm">Un email de confirmation a été envoyé à {confirmationEmail}</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Erreur</p>
            <p className="text-sm">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calendrier */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-50 rounded-lg p-4 w-full max-w-md">
            <style>{`
              .rdp {
                --rdp-cell-size: 40px;
                --rdp-accent-color: #dc2626;
                --rdp-background-color: #fef2f2;
                margin: 0 auto;
              }
              .rdp-head_cell {
                color: #666;
                font-weight: 600;
                text-transform: uppercase;
                font-size: 0.75rem;
              }
              .rdp-cell {
                text-align: center;
              }
              .rdp-day_selected:not([disabled]) {
                background-color: #dc2626;
                color: white;
              }
              .rdp-day_today {
                font-weight: bold;
                color: #dc2626;
              }
              .rdp-day_disabled {
                color: #ccc;
              }
            `}</style>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={handleDateChange}
              disabled={isWeekend}
            />
          </div>
          {selectedDate && (
            <div className="mt-4 text-center">
              <Calendar className="w-5 h-5 inline mr-2 text-red-600" />
              <span className="text-sm font-semibold text-gray-700">
                {selectedDateStr}
              </span>
            </div>
          )}
        </div>

        {/* Formulaire + Créneaux */}
        <form onSubmit={handleBookingSubmit} className="space-y-6">
          {/* Créneaux horaires */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-600" />
              Choisir un créneau *
            </label>
            <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto bg-gray-50 p-3 rounded-lg">
              {TIME_SLOTS.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  disabled={!selectedDate}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                    selectedTime === time
                      ? 'bg-red-600 text-white'
                      : selectedDate
                        ? 'bg-white border border-gray-300 text-gray-700 hover:border-red-600'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Champs formulaire */}
          <div>
            <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
              Nom *
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              value={bookingData.nom}
              onChange={handleBookingChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={bookingData.email}
              onChange={handleBookingChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
              placeholder="votre.email@exemple.com"
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
              value={bookingData.telephone}
              onChange={handleBookingChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
              placeholder="+33 6 __ __ __ __"
            />
          </div>

          <div>
            <label htmlFor="besoin" className="block text-sm font-semibold text-gray-700 mb-2">
              Objet de la demande *
            </label>
            <select
              id="besoin"
              name="besoin"
              required
              value={bookingData.besoin}
              onChange={handleBookingChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="">Sélectionnez...</option>
              {BESOINS.map((besoin) => (
                <option key={besoin} value={besoin}>
                  {besoin}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !selectedDate || !selectedTime || !recaptchaToken}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? 'Confirmation en cours...' : 'Confirmer le rendez-vous'}
          </button>

          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={(token) => setRecaptchaToken(token)}
              onExpired={() => setRecaptchaToken(null)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
