import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './hooks/userHooks';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactBar from './components/FloatingContactBar';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import Tarifs from './pages/Tarifs';
import Contact from './pages/Contact';
import Blog, { ArticleDetail } from './pages/Blog';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import { Qualiopi } from './pages/Qualiopi';
import { CpfEligibilite } from './pages/CpfEligibilite';
import { EdofReferencement } from './pages/EdofReferencement';
import { Ressources } from './pages/Ressources';
import ObtenerQualiopi from './pages/acquisition/ObtenerQualiopi';
import EtreCertifieQualiopi from './pages/acquisition/EtreCertifieQualiopi';
import QuialiopiRapidement from './pages/acquisition/QuialiopiRapidement';
import QuialiopiFormateur from './pages/acquisition/QuialiopiFormateur';
import PackQualiopiEdof from './pages/acquisition/PackQualiopiEdof';
import ReferencerFormationCpf from './pages/acquisition/ReferencerFormationCpf';
import AccederEdof from './pages/acquisition/AccederEdof';
import PackCreationOfQualiopi from './pages/acquisition/PackCreationOfQualiopi';
import QualiopiOrganismeFormation from './pages/acquisition/QualiopiOrganismeFormation';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import NotFound from './pages/NotFound';

function App() {
  useScrollToTop();

  // Forcer HTTPS en production
  useEffect(() => {
    if (window.location.protocol !== 'https:' && !window.location.hostname.includes('localhost')) {
      window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-16 flex-grow">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/qualiopi" element={<Qualiopi />} />
          <Route path="/cpf-eligibilite" element={<CpfEligibilite />} />
          <Route path="/edof-referencement" element={<EdofReferencement />} />
          <Route path="/acquisition/obtenir-qualiopi" element={<ObtenerQualiopi />} />
          <Route path="/acquisition/etre-certifie-qualiopi" element={<EtreCertifieQualiopi />} />
          <Route path="/acquisition/qualiopi-rapidement" element={<QuialiopiRapidement />} />
          <Route path="/acquisition/qualiopi-formateur-independant" element={<QuialiopiFormateur />} />
          <Route path="/acquisition/pack-qualiopi-edof" element={<PackQualiopiEdof />} />
          <Route path="/acquisition/referencer-formation-cpf" element={<ReferencerFormationCpf />} />
          <Route path="/acquisition/acceder-edof" element={<AccederEdof />} />
          <Route path="/acquisition/pack-creation-of-qualiopi" element={<PackCreationOfQualiopi />} />
          <Route path="/acquisition/qualiopi-organisme-formation" element={<QualiopiOrganismeFormation />} />
          <Route path="/ressources" element={<Ressources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<ArticleDetail />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <FloatingContactBar />
      <Footer />
    </div>
  );
}

export default App;
