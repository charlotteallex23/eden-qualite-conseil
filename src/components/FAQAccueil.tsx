import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Combien coûte un accompagnement RS ?',
    answer: 'Le tarif dépend du niveau d\'accompagnement et du dossier. Contactez-nous pour un devis personnalisé.'
  },
  {
    question: 'Comment obtenir Qualiopi du premier coup ?',
    answer: 'Nous vous guidons étape par étape, audit, préparation et suivi pour maximiser vos chances de réussite.'
  },
  {
    question: 'Peut-on rendre une formation CPF rapidement ?',
    answer: 'Oui, nous optimisons le dépôt EDOF et le référencement pour accélérer l\'éligibilité CPF.'
  },
  {
    question: 'Aidez-vous à la création d\'un CFA ?',
    answer: 'Oui, nous accompagnons la structuration, le NDA, l\'UAI et l\'ouverture de CFA.'
  },
  {
    question: 'Externalisez-vous la gestion Qualiopi ?',
    answer: 'Nous proposons des solutions d\'externalisation pour la conformité et la gestion continue.'
  },
  {
    question: 'Quels résultats puis-je espérer ?',
    answer: '+150 OF accompagnés, satisfaction client maximale.'
  }
];

interface FAQItemProps {
  faq: FAQ;
}

function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-violet-300 transition-colors duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300"
      >
        <h3 className="text-left font-bold text-gray-900 text-lg">
          {faq.question}
        </h3>
        <ChevronDown
          size={24}
          className={`text-red-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="bg-gray-50 border-t-2 border-gray-200 px-6 py-4">
          <p className="text-gray-700 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQAccueil() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Les réponses à vos interrogations sur nos services et accompagnement
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
