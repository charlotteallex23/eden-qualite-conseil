import { Building2, TrendingUp, Shield } from 'lucide-react';

const expertises = [
  {
    id: 1,
    title: 'Création d\'OF/CFA',
    description:
      'De l\'idée au NDA, cadrage, UAI et ouverture de CFA. Structuration complète et accompagnement personnalisé pour démarrer sereinement.',
    icon: Building2,
    featured: true,
  },
  {
    id: 2,
    title: 'Développement',
    description:
      'RS, CPF, EDOF : conception de dossiers, dépôt, suivi et optimisation pour rendre vos formations éligibles et référencées.',
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'Gestion & conformité',
    description:
      'Certification Qualiopi, BPF, audits, conformité continue. Sécurisez votre activité et pérennisez votre organisme.',
    icon: Shield,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Nos expertises</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trois piliers pour structurer et pérenniser votre organisme de formation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertises.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.id}
                className={`group rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                  exp.featured
                    ? 'bg-white border-red-600 shadow-xl md:col-span-1 flex flex-col'
                    : 'bg-white border-gray-200 shadow-md hover:shadow-lg hover:border-gray-300'
                }`}
              >
                {/* Top bar accent */}
                <div className={`h-1 ${
                  exp.featured ? 'bg-red-600' : 'bg-amber-200'
                }`} />

                <div className="p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`inline-flex w-fit p-3 rounded-lg mb-6 ${
                    exp.featured ? 'bg-amber-100' : 'bg-amber-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      exp.featured ? 'text-red-600' : 'text-red-600'
                    }`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {exp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 flex-grow">
                    {exp.description}
                  </p>

                  {/* CTA Link (featured only) */}
                  {exp.featured && (
                    <a href="/services" className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700">
                      En savoir plus →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
