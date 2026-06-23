#!/usr/bin/env node
/**
 * Générateur HTML statique simple (sans Playwright)
 * Crée des fichiers HTML purs avec le contenu qu'on a ajouté
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const outputDir = path.join(projectRoot, 'dist-static');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const pages = [
  {
    path: '/',
    filename: 'index.html',
    title: 'Consultant Qualiopi Paris | Accompagnement CPF EDOF | Eden Conseil Qualité',
    description: 'Expert en certification Qualiopi, CPF et EDOF. Accompagnement personnalisé pour organismes de formation avec résultats prouvés.',
    content: `
<section class="bg-gradient-to-b from-white via-amber-50 to-white py-16 md:py-20">
  <div class="max-w-4xl mx-auto px-4 md:px-6">
    <h1 class="text-4xl md:text-5xl font-bold text-red-600 mb-4">
      Certification Qualiopi, CPF & EDOF : Réussir du Premier Coup
    </h1>
    
    <p class="text-lg text-gray-800 leading-relaxed mb-6">
      Depuis 2015, <strong>Charlotte Allexandre</strong>, consultante & auditrice Qualiopi, accompagne des <strong>organismes de formation, CFA et centres de compétences</strong> pour obtenir et maintenir leurs certifications Qualiopi, CPF et EDOF. Avec plus de <strong>200+ dossiers réussis et un taux de réussite de 98%</strong>, Eden Conseil Qualité est devenu le partenaire de confiance pour structurer votre offre de formation.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nos Solutions pour Vous</h2>
    <ul class="space-y-3 mb-8">
      <li><strong>Création d'organisme de formation & CFA</strong> - Structuration juridique, UAI, NDA, SIRET</li>
      <li><strong>Certification Qualiopi</strong> - Audit initial, préparation dossier, accompagnement audit CNEFOP</li>
      <li><strong>CPF et EDOF</strong> - Référencement formation CPF, publication EDOF, optimisation taux de financement</li>
      <li><strong>Conformité continue</strong> - Audit maintenance Qualiopi, mise à jour RNCP/RS, dossier évaluation interne</li>
    </ul>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">Pourquoi nous choisir ?</h2>
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div class="border-l-4 border-red-600 p-4">
        <strong>Expertise prouvée</strong>
        <p>Charlotte audit depuis 10+ ans et connaît chaque critère Qualiopi par cœur.</p>
      </div>
      <div class="border-l-4 border-red-600 p-4">
        <strong>Taux de réussite 98%</strong>
        <p>Plus de 200 dossiers réussis. Vos résultats sont notre priorité.</p>
      </div>
      <div class="border-l-4 border-red-600 p-4">
        <strong>Accompagnement humanisé</strong>
        <p>Pas de prestataire distant — nous sommes vos partenaires à Paris.</p>
      </div>
    </div>
  </div>
</section>
    `
  }
];

function generateHTML(page) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://edenconseilqualite.fr',
    name: 'Eden Conseil Qualité',
    description: 'Cabinet de conseil expert en certification Qualiopi, CPF et EDOF pour organismes de formation',
    url: 'https://edenconseilqualite.fr',
    founder: {
      '@type': 'Person',
      name: 'Charlotte Allexandre',
      jobTitle: 'Consultante & Auditrice Qualiopi'
    },
    telephone: '+33767058187',
    email: 'edenconseilqualite@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 Avenue François 1er',
      postalCode: '75008',
      addressLocality: 'Paris',
      addressCountry: 'FR'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      reviewCount: '3'
    }
  };

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <link rel="canonical" href="https://edenconseilqualite.fr${page.path}">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="https://edenconseilqualite.fr${page.path}">
  <meta property="og:type" content="website">
  <meta name="robots" content="index, follow">
  <script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
</head>
<body>
  <main>
    ${page.content}
  </main>
</body>
</html>`;

  return html;
}

console.log('📄 Génération HTML statique simple\n');

for (const page of pages) {
  try {
    const html = generateHTML(page);
    const filePath = path.join(outputDir, page.filename);
    const dir = path.dirname(filePath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, html);
    console.log(`✓ ${page.path} → ${filePath}`);
  } catch (error) {
    console.error(`✗ Erreur: ${error.message}`);
  }
}

console.log('\n✅ Pages HTML statiques générées!');
console.log(`📁 Fichiers: ${outputDir}`);
