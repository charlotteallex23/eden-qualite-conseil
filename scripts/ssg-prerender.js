#!/usr/bin/env node
/**
 * Script de pré-rendu SSG avec Playwright
 * Génère des fichiers HTML statiques pour toutes les routes
 * Utilise le dev server local pour le rendu React
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const outputDir = path.join(projectRoot, 'dist-ssg');

// Créer output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const DEV_URL = 'http://localhost:5173';
const PROD_URL = 'https://edenconseilqualite.fr';

const routes = [
  { path: '/', file: 'index.html' },
  { path: '/services', file: 'services/index.html' },
  { path: '/tarifs', file: 'tarifs/index.html' },
  { path: '/about', file: 'about/index.html' },
  { path: '/contact', file: 'contact/index.html' },
  { path: '/qualiopi', file: 'qualiopi/index.html' },
  { path: '/blog', file: 'blog/index.html' },
  { path: '/case-studies', file: 'case-studies/index.html' },
  { path: '/cpf-eligibilite', file: 'cpf-eligibilite/index.html' },
  { path: '/edof-referencement', file: 'edof-referencement/index.html' },
  { path: '/ressources', file: 'ressources/index.html' },
  { path: '/qui-suis-je', file: 'qui-suis-je/index.html' },
  { path: '/mentions-legales', file: 'mentions-legales/index.html' },
  { path: '/politique-confidentialite', file: 'politique-confidentialite/index.html' },
  { path: '/acquisition/obtenir-qualiopi', file: 'acquisition/obtenir-qualiopi/index.html' },
  { path: '/acquisition/etre-certifie-qualiopi', file: 'acquisition/etre-certifie-qualiopi/index.html' },
  { path: '/acquisition/qualiopi-rapidement', file: 'acquisition/qualiopi-rapidement/index.html' },
  { path: '/acquisition/qualiopi-formateur', file: 'acquisition/qualiopi-formateur/index.html' },
  { path: '/acquisition/pack-qualiopi-edof', file: 'acquisition/pack-qualiopi-edof/index.html' },
  { path: '/acquisition/pack-rs-rncp-cpf', file: 'acquisition/pack-rs-rncp-cpf/index.html' },
  { path: '/acquisition/pack-surveillance-renouvellement', file: 'acquisition/pack-surveillance-renouvellement/index.html' },
  { path: '/acquisition/pre-audit-qualiopi', file: 'acquisition/pre-audit-qualiopi/index.html' },
  { path: '/acquisition/audit-initial-qualiopi', file: 'acquisition/audit-initial-qualiopi/index.html' },
  { path: '/acquisition/documents-qualiopi', file: 'acquisition/documents-qualiopi/index.html' },
  { path: '/acquisition/creer-organisme-formation', file: 'acquisition/creer-organisme-formation/index.html' },
  { path: '/acquisition/creer-cfa', file: 'acquisition/creer-cfa/index.html' },
  { path: '/acquisition/audit-qualiopi', file: 'acquisition/audit-qualiopi/index.html' },
  { path: '/acquisition/consultant-qualiopi-paris', file: 'acquisition/consultant-qualiopi-paris/index.html' },
  { path: '/acquisition/inscrire-formation-cpf', file: 'acquisition/inscrire-formation-cpf/index.html' },
  { path: '/acquisition/referencer-formation-cpf', file: 'acquisition/referencer-formation-cpf/index.html' },
  { path: '/acquisition/publier-offre-cpf', file: 'acquisition/publier-offre-cpf/index.html' },
  { path: '/acquisition/acceder-edof', file: 'acquisition/acceder-edof/index.html' },
  { path: '/acquisition/conformite-cpf', file: 'acquisition/conformite-cpf/index.html' },
  { path: '/acquisition/prix-certification-qualiopi', file: 'acquisition/prix-certification-qualiopi/index.html' },
];

// Vérifier si le dev server est accessible
async function checkServerReady(maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      await new Promise((resolve, reject) => {
        http.get(`${DEV_URL}/`, (res) => {
          if (res.statusCode === 200 || res.statusCode === 304) {
            resolve();
          } else {
            reject();
          }
        }).on('error', reject);
      });
      console.log('✓ Dev server prêt');
      return true;
    } catch {
      process.stdout.write('.');
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  throw new Error('Dev server n\'a pas démarré après 30 secondes');
}

async function prerenderPage(browser, route) {
  try {
    const page = await browser.newPage();
    const devUrl = `${DEV_URL}${route.path}`;
    
    process.stdout.write(`📄 ${route.path.padEnd(50)} `);
    
    // Navigate and wait for network idle
    await page.goto(devUrl, { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // Wait for React hydration
    await page.waitForTimeout(1500);
    
    // Get rendered HTML
    let html = await page.content();
    
    // Replace localhost URLs with production URLs
    html = html.replace(new RegExp(`http://localhost:5173`, 'g'), PROD_URL);
    
    // Create directory
    const filePath = path.join(outputDir, route.file);
    const fileDir = path.dirname(filePath);
    if (!fs.existsSync(fileDir)) {
      fs.mkdirSync(fileDir, { recursive: true });
    }
    
    // Save HTML
    fs.writeFileSync(filePath, html);
    console.log('✓');
    
    await page.close();
  } catch (error) {
    console.error(`✗ Erreur: ${error.message}`);
  }
}

async function main() {
  console.log('🎨 SSG Pre-render avec Playwright\n');
  console.log(`📁 Output: ${outputDir}`);
  console.log(`📊 Routes: ${routes.length}\n`);
  
  // Vérifier que le dev server est accessible
  try {
    await checkServerReady();
  } catch (err) {
    console.error('\n❌ Le dev server n\'est pas accessible à http://localhost:5173');
    console.error('Assurez-vous que le dev server est démarré avec: npm run dev');
    process.exit(1);
  }
  
  const browser = await chromium.launch();
  
  try {
    // Pré-rendre chaque route
    for (const route of routes) {
      await prerenderPage(browser, route);
    }
    
    console.log(`\n✅ Pré-rendu SSG terminé!`);
    console.log(`📊 Total: ${routes.length} pages générées`);
    console.log(`📁 Fichiers prêts à uploader: ${outputDir}\n`);
  } finally {
    await browser.close();
  }
}

main().catch(err => {
  console.error('❌ Erreur SSG:', err.message);
  process.exit(1);
});
