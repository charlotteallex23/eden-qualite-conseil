# Stratégie SEO — Eden Conseil Qualité
*Mise à jour : juin 2026*

---

## Problèmes critiques actuels

| Problème | Impact |
|----------|--------|
| `document.title` changé via JS → Google lit le HTML initial | ⚠️ Haut |
| Pas de balises `<meta>` distinctes dans le `index.html` de base | ⚠️ Haut |
| Blog avec seulement 3 articles datés 2024 | ⚠️ Moyen |
| Aucun lien interne structuré entre pages | ⚠️ Moyen |
| Pas de canonical URL sur chaque page | ⚠️ Moyen |
| Schema.org incomplet (pas de téléphone, adresse, avis) | ⚠️ Moyen |
| Bundle JS trop lourd (535 KB) | ⚠️ Moyen |
| Logo PNG non optimisé (1.4 MB) | ⚠️ Moyen |

---

## Actions par priorité

### 🔴 Priorité 1 — Technique (à faire maintenant)

- [ ] **A. Passer à React Helmet** pour les meta tags (actuellement via document.title en JS pur)
- [ ] **B. Ajouter canonical URLs** sur chaque page (éviter duplicate content)
- [ ] **C. Optimiser index.html de base** avec meta génériques en fallback

### 🟠 Priorité 2 — Contenu (dans les 2 semaines)

- [ ] **D. Blog — 2 articles par mois** sur mots-clés ciblés :
  - "comment obtenir Qualiopi" — 1 600 recherches/mois
  - "certification EDOF 2026" — 900 recherches/mois
  - "créer un organisme de formation" — 2 400 recherches/mois
  - "dossier RNCP comment faire" — 700 recherches/mois
  - "CPF mon compte formation" — fort volume
- [ ] **E. Enrichir les pages /acquisition/*** — min 800 mots/page, FAQ, liens internes

### 🟡 Priorité 3 — Autorité (dans le mois)

- [ ] **F. Google Business Profile** — https://business.google.com
- [ ] **G. Backlinks** :
  - datadock.fr
  - francecompetences.fr
  - Pages Jaunes, Kompass, Societe.com
  - LinkedIn (articles + lien site)
- [ ] **H. Schema.org enrichi** — téléphone, adresse, avis clients, FAQ Schema

### 🟢 Priorité 4 — UX/Signaux (dans 2 mois)

- [ ] **I. Code splitting** — réduire le bundle JS (535 KB → plusieurs chunks)
- [ ] **J. Images WebP** — convertir logo PNG 1.4 MB en WebP (~150 KB)
- [ ] **K. Maillage interne** — liens contextuels entre pages
  - Ex : /qualiopi → /acquisition/obtenir-qualiopi → /contact

---

## Mots-clés prioritaires

| Mot-clé | Volume | Difficulté | Page cible |
|---------|--------|------------|------------|
| consultant Qualiopi | 1 300/mois | Moyenne | /acquisition/obtenir-qualiopi |
| obtenir certification Qualiopi | 900/mois | Faible | /acquisition/etre-certifie-qualiopi |
| créer organisme de formation | 2 400/mois | Faible | /acquisition/pack-creation-of-qualiopi |
| référencer formation CPF | 700/mois | Faible | /acquisition/referencer-formation-cpf |
| accompagnement EDOF | 400/mois | Très faible | /edof-referencement |

---

## Pages du site

| Page | Route | Statut SEO |
|------|-------|------------|
| Accueil | / | ✅ Title + Schema Organization |
| À propos | /about | À vérifier |
| Services | /services | À vérifier |
| Tarifs | /tarifs | À vérifier |
| Qualiopi | /qualiopi | À vérifier |
| CPF Éligibilité | /cpf-eligibilite | À vérifier |
| EDOF Référencement | /edof-referencement | À vérifier |
| Cas de succès | /case-studies | À vérifier |
| Ressources | /ressources | À vérifier |
| Obtenir Qualiopi | /acquisition/obtenir-qualiopi | ✅ Title + Schema Service |
| Être certifié Qualiopi | /acquisition/etre-certifie-qualiopi | À vérifier |
| Qualiopi rapidement | /acquisition/qualiopi-rapidement | À vérifier |
| Qualiopi formateur | /acquisition/qualiopi-formateur-independant | À vérifier |
| Pack Qualiopi EDOF | /acquisition/pack-qualiopi-edof | À vérifier |
| Référencer CPF | /acquisition/referencer-formation-cpf | À vérifier |
| Accéder EDOF | /acquisition/acceder-edof | À vérifier |
| Pack création OF | /acquisition/pack-creation-of-qualiopi | À vérifier |
| Qualiopi OF | /acquisition/qualiopi-organisme-formation | À vérifier |
| Blog | /blog | À vérifier |
| Contact | /contact | À vérifier |

---

## Suivi indexation

- Google Search Console : https://search.google.com/search-console
- Vérifier avec : `site:edenconseilqualite.fr` sur Google
- Sitemap soumis : `https://edenconseilqualite.fr/sitemap.xml`
- Domaines déclarés reCAPTCHA : edenconseilqualite.fr, www.edenconseilqualite.fr, localhost
