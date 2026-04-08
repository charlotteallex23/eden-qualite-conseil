import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/eden-conseil-qualite-logo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/tarifs', label: 'Tarifs' },
    { path: '/case-studies', label: 'Cas de réussite' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'À propos' },
  ];

  const resourceItems = [
    { path: '/qualiopi', label: 'Guide Qualiopi' },
    { path: '/cpf-eligibilite', label: 'CPF Éligibilité' },
    { path: '/edof-referencement', label: 'EDOF' },
    { path: '/ressources', label: 'Ressources' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-auto sm:h-20 md:h-24 py-3 sm:py-4">
          <Link to="/" className="flex items-center gap-1 sm:gap-2 md:gap-3 cursor-pointer flex-shrink-0">
            <img src={logo} alt="Eden Conseil Qualité" className="h-20 sm:h-24 md:h-28 w-auto transition-all duration-300" />
            <span className="text-xs sm:text-sm md:text-base font-bold text-red-600 hidden sm:inline">Eden Conseil Qualité</span>
          </Link>

          <div className="hidden lg:flex items-center gap-2 xl:gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm md:text-base font-semibold transition-colors px-2 py-1 rounded-md ${
                  location.pathname === item.path
                    ? 'text-red-600 bg-amber-50 border-b-2 border-red-600'
                    : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-sm md:text-base font-semibold text-gray-600 hover:text-red-600 transition-colors flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-50">
                Ressources <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {resourceItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-3 text-sm md:text-base text-gray-600 hover:bg-amber-50 hover:text-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-red-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold text-sm md:text-base ml-2"
            >
              Contact
            </Link>
          </div>

          <button
            className="lg:hidden p-2 ml-auto flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 space-y-1 bg-gray-50 border-t border-gray-200">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 text-base font-semibold transition-colors ${
                  location.pathname === item.path
                    ? 'text-red-600 bg-amber-50 border-l-4 border-red-600'
                    : 'text-gray-600 hover:text-red-600 hover:bg-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Resources */}
            <button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="w-full text-left px-4 py-3 text-base font-semibold text-gray-600 hover:text-red-600 flex items-center justify-between hover:bg-white transition-colors"
            >
              Ressources <ChevronDown size={18} className={`transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isResourcesOpen && (
              <div className="bg-white space-y-1 border-l-4 border-red-600">
                {resourceItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsResourcesOpen(false);
                    }}
                    className="block w-full text-left px-8 py-3 text-base font-medium text-gray-600 hover:text-red-600 hover:bg-amber-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold text-center mt-6 text-base"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
