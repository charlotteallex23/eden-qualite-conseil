import { Link } from 'react-router-dom';
import { AlertCircle, Home, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-red-600 text-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="w-20 h-20 text-yellow-300" />
        </div>
        
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page non trouvée</h2>
        
        <p className="text-xl text-amber-100 mb-12 max-w-xl">
          Oups ! La page que vous cherchez n'existe pas ou a été déplacée. 
          Pas de panique, nous allons vous aider à retrouver ce que vous cherchez.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-white text-red-600 font-semibold py-3 px-8 rounded-lg hover:bg-amber-50 transition-colors"
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5" />
            Nous contacter
          </Link>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Link to="/" className="text-amber-200 hover:text-white">
            Accueil
          </Link>
          <Link to="/services" className="text-amber-200 hover:text-white">
            Services
          </Link>
          <Link to="/blog" className="text-amber-200 hover:text-white">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
