/**
 * Routes à pré-rendre avec vite-ssg
 * Chaque route sera convertie en fichier HTML statique
 */

export const prerenderRoutes = [
  // Pages principales
  '/',
  '/services',
  '/tarifs',
  '/about',
  '/contact',
  '/qualiopi',
  '/blog',
  '/case-studies',
  '/cpf-eligibilite',
  '/edof-referencement',
  '/ressources',
  '/qui-suis-je',

  // Pages légales
  '/mentions-legales',
  '/politique-confidentialite',

  // Pages acquisition - Qualiopi
  '/acquisition/obtenir-qualiopi',
  '/acquisition/etre-certifie-qualiopi',
  '/acquisition/qualiopi-rapidement',
  '/acquisition/qualiopi-formateur',
  '/acquisition/pack-qualiopi-edof',
  '/acquisition/pack-rs-rncp-cpf',
  '/acquisition/pack-surveillance-renouvellement',
  '/acquisition/pre-audit-qualiopi',
  '/acquisition/audit-initial-qualiopi',
  '/acquisition/documents-qualiopi',

  // Pages acquisition - Création OF/CFA
  '/acquisition/creer-organisme-formation',
  '/acquisition/creer-cfa',
  '/acquisition/audit-qualiopi',
  '/acquisition/consultant-qualiopi-paris',

  // Pages acquisition - CPF/EDOF
  '/acquisition/inscrire-formation-cpf',
  '/acquisition/referencer-formation-cpf',
  '/acquisition/publier-offre-cpf',
  '/acquisition/acceder-edof',
  '/acquisition/conformite-cpf',
  '/acquisition/prix-certification-qualiopi',

  // Pages blog (si applicable)
  '/blog/certification-qualiopi-2025',
  '/blog/cpf-formations-professionnelles',
];

export default prerenderRoutes;
