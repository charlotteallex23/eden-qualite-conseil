# Plan d'action SEO — edenconseilqualite.fr
Basé sur l'audit Codex SEO (score 62/100 au 2026-06-23)

---

## ÉTAPE 1 — Sitemap : Supprimer priority/changefreq (dépréciés)
- **Problème** : 102 tags dépréciés détectés, canonical mismatch
- **Fichier** : `public/sitemap.xml`
- **Action** : Supprimer toutes les lignes `<priority>` et `<changefreq>`
- **Status** : ✅ FAIT (2026-06-23)

---

## ÉTAPE 2 — Schema.org : Ajouter WebSite + Organization dans index.html
- **Problème** : Seul `LocalBusiness` présent, `WebSite` et `Organization` manquants
- **Fichier** : `index.html` (head statique)
- **Action** : Ajouter 2 blocs JSON-LD `WebSite` et `Organization`
- **Status** : ✅ FAIT (2026-06-23)

---

## ÉTAPE 3 — Headers de sécurité : Ajouter .htaccess
- **Problème** : CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy manquants
- **Fichier** : `public/.htaccess` (nouveau fichier)
- **Action** : Créer `.htaccess` avec headers de sécurité + règles SPA React
- **Status** : ✅ FAIT (2026-06-23)

---

## ÉTAPE 4 — Build production
- **Action** : `npm run build` → génère `dist/`
- **Status** : ✅ FAIT (2026-06-23 — 0 erreurs, 1790 modules)

---

## ÉTAPE 5 — Git commit + push
- **Action** : Commit des fichiers modifiés + push GitHub
- **Status** : ⏳ EN ATTENTE

---

## ÉTAPE 6 — Upload FTP IONOS
- **Action** : Uploader `dist/` + `public/.htaccess` sur le serveur
- **Fichiers clés** : `dist/index.html`, `public/sitemap.xml`, `.htaccess`
- **Status** : ⏳ EN ATTENTE (manuel par l'utilisateur)

---

## ÉTAPE 7 — Relancer audit Codex SEO
- **Action** : `python scripts/run_headless_audit.py https://edenconseilqualite.fr`
- **Objectif** : Score schema 41 → 85+, Technique 79 → 85+
- **Status** : ⏳ EN ATTENTE (après FTP)

---

## Score cible
| Catégorie | Avant | Après |
|-----------|-------|-------|
| Technique | 79 | 85+ |
| Schema | 41 | 80+ |
| Performance | 100 | 100 |
| Images | 100 | 100 |
| **Total** | **62** | **75+** |
