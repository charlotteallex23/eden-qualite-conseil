# Règles de codage — Eden Conseil Qualité

## Stack technique
- React 19, TypeScript, Vite, Tailwind CSS
- React Router v7 (`react-router-dom`)
- `react-helmet-async` pour les meta tags SEO
- EmailJS (`@emailjs/browser`) — appels directs navigateur, pas de backend
- `react-google-recaptcha` v2 checkbox

---

## 1. Chaque nouvelle page DOIT avoir un bloc `<Helmet>`

**Règle absolue** : ne jamais utiliser `document.title` ni `document.querySelector('meta[...]')` dans un `useEffect`.

```tsx
// ✅ CORRECT — toujours utiliser Helmet
import { Helmet } from 'react-helmet-async';

export default function MaPage() {
  return (
    <div>
      <Helmet>
        <title>Titre Page | Eden Conseil Qualité</title>
        <meta name="description" content="Description de 150-160 caractères max." />
        <link rel="canonical" href="https://edenconseilqualite.fr/ma-page" />
      </Helmet>
      {/* contenu */}
    </div>
  );
}
```

```tsx
// ❌ INTERDIT — ancienne méthode
useEffect(() => {
  document.title = 'Titre';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', '...');
}, []);
```

## 2. Placement du `<Helmet>`

- **Toujours en premier enfant** dans le `return()`, avant tout autre JSX.
- Le `HelmetProvider` est déjà en place dans `main.tsx` — ne pas le rajouter.

## 3. URL canonique

Chaque page doit avoir son `<link rel="canonical">` avec le domaine **sans www** :
```
https://edenconseilqualite.fr/chemin-de-la-page
```

## 4. Schema.org (JSON-LD)

Injecter via Helmet, pas via `document.createElement` :

```tsx
<Helmet>
  <script type="application/ld+json">{JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Nom du service',
    provider: { '@type': 'Organization', name: 'Eden Conseil Qualité' }
  })}</script>
</Helmet>
```

## 5. Imports React — ne pas importer `useEffect` pour les meta

Si `useEffect` n'est utilisé que pour les meta tags (ancienne méthode), il faut le supprimer de l'import :

```tsx
// ✅ Si plus de useEffect dans la page
import { useState } from 'react';

// ✅ Si d'autres hooks sont nécessaires
import { useState, useEffect } from 'react';
```

## 6. Déploiement après chaque modification

```bash
npm run build          # compile TypeScript + bundle Vite
# uploader dist/ complet sur IONOS via FileZilla
git add -A && git commit -m "Description" && git push origin main
```

> **Important** : toujours uploader **tout** le dossier `dist/` car les noms de fichiers JS/CSS changent à chaque build (hash).

## 7. Formulaire de contact

- EmailJS init dans `useEffect` dans `Contact.tsx` → **conserver**, c'est légitime
- reCAPTCHA v2 checkbox obligatoire — le bouton submit doit être désactivé tant que `recaptchaToken` est null

## 8. Structure des pages acquisition

Toutes les pages dans `src/pages/acquisition/` suivent ce squelette :

```tsx
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { config } from '../../config/company';

export default function NomPage() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Titre SEO | Eden Conseil Qualité</title>
        <meta name="description" content="..." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/chemin" />
      </Helmet>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        ...
      </section>
    </div>
  );
}
```

## 9. Longueurs SEO recommandées

| Champ | Longueur idéale |
|-------|----------------|
| `<title>` | 50–60 caractères |
| `<meta description>` | 140–160 caractères |
| URL canonique | Chemin exact, sans trailing slash sauf racine `/` |
