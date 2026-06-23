#!/usr/bin/env node
/**
 * Pré-rend les pages principales en HTML statique pour le SEO
 * Utilisé pour générer des versions statiques des pages React
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const publicDir = path.join(projectRoot, 'public');

// Pages à pré-rendre
const routesToPrerender = [
  '/',
  '/services',
  '/tarifs',
  '/about',
  '/contact',
  '/qualiopi',
  '/blog',
  '/qui-suis-je',
  '/acquisition/obtenir-qualiopi',
  '/acquisition/etre-certifie-qualiopi',
  '/acquisition/qualiopi-rapidement',
  '/acquisition/qualiopi-formateur',
  '/acquisition/pack-qualiopi-edof',
  '/acquisition/referencer-formation-cpf',
];

console.log('📦 Prérendu des pages pour SEO...');
console.log(`Routes à prérender: ${routesToPrerender.length}`);

// Les routes seront pré-rendues lors du déploiement
// Pour maintenant, documenter les routes dans un fichier JSON
const prerenderConfig = {
  routes: routesToPrerender,
  timestamp: new Date().toISOString(),
  note: 'Ces routes devraient être pré-rendues avec Playwright pour le crawl SEO'
};

const configPath = path.join(publicDir, '.prerender-routes.json');
fs.writeFileSync(configPath, JSON.stringify(prerenderConfig, null, 2));
console.log(`✓ Configuration pré-render écrite: ${configPath}`);
