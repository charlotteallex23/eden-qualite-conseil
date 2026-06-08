import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './hooks/userHooks';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactBar from './components/FloatingContactBar';

const Accueil = lazy(() => import('./pages/Accueil'));
const Services = lazy(() => import('./pages/Services'));
const Tarifs = lazy(() => import('./pages/Tarifs'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const ArticleDetail = lazy(() => import('./pages/Blog').then(m => ({ default: m.ArticleDetail })));
const About = lazy(() => import('./pages/About'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Qualiopi = lazy(() => import('./pages/Qualiopi').then(m => ({ default: m.Qualiopi })));
const CpfEligibilite = lazy(() => import('./pages/CpfEligibilite').then(m => ({ default: m.CpfEligibilite })));
const EdofReferencement = lazy(() => import('./pages/EdofReferencement').then(m => ({ default: m.EdofReferencement })));
const Ressources = lazy(() => import('./pages/Ressources').then(m => ({ default: m.Ressources })));
const ObtenerQualiopi = lazy(() => import('./pages/acquisition/ObtenerQualiopi'));
const EtreCertifieQualiopi = lazy(() => import('./pages/acquisition/EtreCertifieQualiopi'));
const QuialiopiRapidement = lazy(() => import('./pages/acquisition/QuialiopiRapidement'));
const QuialiopiFormateur = lazy(() => import('./pages/acquisition/QuialiopiFormateur'));
const PackQualiopiEdof = lazy(() => import('./pages/acquisition/PackQualiopiEdof'));
const ReferencerFormationCpf = lazy(() => import('./pages/acquisition/ReferencerFormationCpf'));
const AccederEdof = lazy(() => import('./pages/acquisition/AccederEdof'));
const PackCreationOfQualiopi = lazy(() => import('./pages/acquisition/PackCreationOfQualiopi'));
const QualiopiOrganismeFormation = lazy(() => import('./pages/acquisition/QualiopiOrganismeFormation'));
const PrixCertificationQualiopi = lazy(() => import('./pages/acquisition/PrixCertificationQualiopi'));
const ConsultantQualiopiParis = lazy(() => import('./pages/acquisition/ConsultantQualiopiParis'));
const CreerOrganismeFormation = lazy(() => import('./pages/acquisition/CreerOrganismeFormation'));
const AuditQualiopi = lazy(() => import('./pages/acquisition/AuditQualiopi'));
const PreAuditQualiopi = lazy(() => import('./pages/acquisition/PreAuditQualiopi'));
const AuditInitialQualiopi = lazy(() => import('./pages/acquisition/AuditInitialQualiopi'));
const DocumentsQualiopi = lazy(() => import('./pages/acquisition/DocumentsQualiopi'));
const PackOFCPF = lazy(() => import('./pages/acquisition/PackOFCPF'));
const PackRSRNCPCPF = lazy(() => import('./pages/acquisition/PackRSRNCPCPF'));
const PackSurveillanceRenouvellement = lazy(() => import('./pages/acquisition/PackSurveillanceRenouvellement'));
const InscriptionEDOF = lazy(() => import('./pages/acquisition/InscriptionEDOF'));
const PublierOffreCPF = lazy(() => import('./pages/acquisition/PublierOffreCPF'));
const ConformiteCPF = lazy(() => import('./pages/acquisition/ConformiteCPF'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-16 flex-grow">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" /></div>}>
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
            <Route path="/acquisition/prix-certification-qualiopi" element={<PrixCertificationQualiopi />} />
            <Route path="/acquisition/consultant-qualiopi-paris" element={<ConsultantQualiopiParis />} />
            <Route path="/acquisition/creer-organisme-formation" element={<CreerOrganismeFormation />} />
            <Route path="/acquisition/audit-qualiopi" element={<AuditQualiopi />} />
            <Route path="/acquisition/preaudit-qualiopi" element={<PreAuditQualiopi />} />
            <Route path="/acquisition/audit-initial-qualiopi" element={<AuditInitialQualiopi />} />
            <Route path="/acquisition/documents-qualiopi" element={<DocumentsQualiopi />} />
            <Route path="/acquisition/pack-of-cpf" element={<PackOFCPF />} />
            <Route path="/acquisition/pack-rs-rncp-cpf" element={<PackRSRNCPCPF />} />
            <Route path="/acquisition/pack-surveillance-renouvellement" element={<PackSurveillanceRenouvellement />} />
            <Route path="/acquisition/inscription-edof" element={<InscriptionEDOF />} />
            <Route path="/acquisition/publier-offre-cpf" element={<PublierOffreCPF />} />
            <Route path="/acquisition/conformite-cpf" element={<ConformiteCPF />} />
            <Route path="/ressources" element={<Ressources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<ArticleDetail />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <FloatingContactBar />
      <Footer />
    </div>
  );
}

export default App;
