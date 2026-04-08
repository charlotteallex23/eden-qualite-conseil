import { useAvisRotation } from '../hooks/userHooks';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const temoignages = [
  {
    nom: 'Sophie L.',
    role: 'Directrice CFA langues',
    citation:
      'Grâce à Maîtrise & Stratégie, notre CFA a obtenu Qualiopi du premier coup. Accompagnement ultra pro et humain.',
    rating: 5
  },
  {
    nom: 'Julien M.',
    role: 'Responsable bilan de compétences',
    citation:
      'Un vrai partenaire pour structurer notre offre, obtenir le CPF et réussir l\'audit Qualiopi. Je recommande à 100 %.',
    rating: 5
  },
  {
    nom: 'Fatima B.',
    role: 'Fondatrice OF secteur social',
    citation:
      'L\'équipe a tout géré pour la création de notre OF et le dépôt RS. Réactivité, expertise et résultats concrets.',
    rating: 5
  }
];

export default function TemoignagesCarousel() {
  const { currentIndex, next, prev } = useAvisRotation(temoignages.length);
  const t = temoignages[currentIndex];

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les succès de nos partenaires et clients
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-xl border-2 border-gray-200 shadow-lg p-8 md:p-12 mb-8">
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(t.rating)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl font-bold text-gray-900 mb-8 leading-relaxed">
            "{t.citation}"
          </blockquote>

          {/* Author */}
          <div className="border-t-2 border-gray-200 pt-6">
            <p className="font-bold text-lg text-gray-900">
              {t.nom}
            </p>
            <p className="text-gray-600">
              {t.role}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 text-gray-900 hover:bg-gray-100 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {temoignages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  // Navigate to specific testimonial
                  const diff = idx - currentIndex;
                  if (diff > 0) {
                    for (let i = 0; i < diff; i++) next();
                  } else if (diff < 0) {
                    for (let i = 0; i < Math.abs(diff); i++) prev();
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-red-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 text-gray-900 hover:bg-gray-100 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Counter */}
        <p className="text-center text-gray-600 mt-6">
          {currentIndex + 1} / {temoignages.length}
        </p>
      </div>
    </section>
  );
}
