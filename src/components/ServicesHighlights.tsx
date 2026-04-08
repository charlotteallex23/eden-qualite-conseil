import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Qualiopi',
    description: 'Audit, préparation, conformité et accompagnement pour obtenir et maintenir la certification Qualiopi.',
    link: '/qualiopi',
    icon: CheckCircle2
  },
  {
    id: 2,
    title: 'RS',
    description: 'Montage et dépôt de dossiers RS, suivi, optimisation et validation du premier coup.',
    link: '/services',
    icon: CheckCircle2
  },
  {
    id: 3,
    title: 'CPF',
    description: 'Rendre vos formations éligibles CPF, dépôt EDOF, gestion et suivi des référencements.',
    link: '/cpf-eligibilite',
    icon: CheckCircle2
  },
  {
    id: 4,
    title: 'Externalisation',
    description: 'Gestion administrative, conformité, audits et suivi externalisés pour votre OF.',
    link: '/services',
    icon: CheckCircle2
  },
  {
    id: 5,
    title: 'Création OF',
    description: 'Accompagnement complet pour créer votre organisme de formation ou CFA, NDA, UAI, cadrage.',
    link: '/services',
    icon: CheckCircle2
  },
  {
    id: 6,
    title: 'EDOF',
    description: 'Dépôt, gestion et optimisation de votre catalogue sur EDOF pour maximiser la visibilité.',
    link: '/edof-referencement',
    icon: CheckCircle2
  }
];

export default function ServicesHighlights() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Nos services phares</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une expertise complète pour structurer, certifier et développer votre organisme
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={service.link}
                className="group bg-white rounded-lg border-2 border-gray-200 shadow-md hover:shadow-lg hover:border-violet-400 transition-all duration-300 overflow-hidden p-8"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-violet-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div className="relative">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-lg bg-amber-100 mb-4">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <div className="flex items-center gap-2 text-red-600 font-bold group-hover:text-red-700 transition-colors duration-300">
                    Découvrir
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
