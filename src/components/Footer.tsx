import { Mail, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { config } from '../config/company';

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Maîtrise et Stratégie</h3>
            <p className="text-amber-100">
              Cabinet de conseil expert pour organismes de formation et CFA
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Ressources</h3>
            <div className="space-y-2 text-amber-100">
              <Link to="/qualiopi" className="block hover:text-white">Guide Qualiopi</Link>
              <Link to="/cpf-eligibilite" className="block hover:text-white">CPF Éligibilité</Link>
              <Link to="/edof-referencement" className="block hover:text-white">EDOF</Link>
              <Link to="/ressources" className="block hover:text-white">Tous les guides</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Liens utiles</h3>
            <div className="space-y-2 text-amber-100">
              <Link to="/services" className="block hover:text-white">Services</Link>
              <Link to="/blog" className="block hover:text-white">Blog</Link>
              <Link to="/case-studies" className="block hover:text-white">Cas de réussite</Link>
              <Link to="/contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-amber-100">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${config.company.email}`} className="hover:text-white">
                  {config.company.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${config.company.phone.replace(/\s/g, '')}`} className="hover:text-white">
                  {config.company.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{config.company.hours.days}, {config.company.hours.start}–{config.company.hours.end}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-amber-100 mb-4">
            <div>
              <h4 className="font-semibold mb-2">Informations légales</h4>
              <div className="space-y-1">
                <Link to="/mentions-legales" className="block hover:text-white">Mentions légales</Link>
                <Link to="/politique-confidentialite" className="block hover:text-white">Politique de confidentialité</Link>
              </div>
            </div>
          </div>
          <div className="text-center text-amber-100 border-t border-amber-800 pt-4">
            <p>&copy; {new Date().getFullYear()} Maîtrise et Stratégie. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
