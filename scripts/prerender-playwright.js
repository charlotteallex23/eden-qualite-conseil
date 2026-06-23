#!/usr/bin/env node
/**
 * Pré-rend les pages avec Playwright pour SEO audit
 * Génère du HTML statique que les crawlers peuvent parser correctement
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const outputDir = path.join(projectRoot, 'dist-prerendered');

// Créer le dossier output
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const siteUrl = 'http://localhost:5173'; // Dev server URL
const baseUrl = 'https://edenconseilqualite.fr'; // Production URL

const routesToPrerender = [
  { path: '/', file: 'index.html' },
  { path: '/services', file: 'services.html' },
  { path: '/tarifs', file: 'tarifs.html' },
  { path: '/about', file: 'about.html' },
  { path: '/contact', file: 'contact.html' },
  { path: '/qualiopi', file: 'qualiopi.html' },
  { path: '/blog', file: 'blog.html' },
  { path: '/qui-suis-je', file: 'qui-suis-je.html' },
];

async function prerenderPage(browser, path, outputFile) {
  try {
    const page = await browser.newPage();
    const url = `${siteUrl}${path}`;
    
    console.log(`Prérendu: ${path}`);
    
    await page.goto(url, { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // Wait for content to load
    await page.waitForTimeout(2000);
    
    // Get the full HTML with rendered content
    const html = await page.content();
    
    // Update canonical and OG URLs to production
    const updatedHtml = html
      .replace(new RegExp(siteUrl, 'g'), baseUrl)
      .replace(/localhost:5173/g, 'edenconseilqualite.fr');
    
    // Save to file
    const filePath = path.join(outputDir, outputFile);
    fs.writeFileSync(filePath, updatedHtml);
    
    console.log(`  ✓ Saved: ${filePath}`);
    
    await page.close();
  } catch (error) {
    console.error(`  ✗ Error: ${error.message}`);
  }
}

async function main() {
  console.log('🎨 Prérendu des pages avec Playwright...\n');
  
  const browser = await chromium.launch();
  
  try {
    for (const route of routesToPrerender) {
      await prerenderPage(browser, route.path, route.file);
    }
  } finally {
    await browser.close();
  }
  
  console.log(`\n✓ Prérendu terminé! Pages disponibles dans: ${outputDir}`);
  console.log('💡 Conseil: Upload ces fichiers HTML sur le serveur pour le crawl SEO');
}

main().catch(console.error);
