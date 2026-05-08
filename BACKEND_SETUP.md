# 🚀 Eden Conseil Qualité - Configuration Backend

## Démarrage Local

### Option 1: Lancer le frontend et backend séparément

**Terminal 1 - Backend:**
```bash
npm run server
```
Accédez à: http://localhost:3001/api/health

**Terminal 2 - Frontend:**
```bash
npm run dev
```
Accédez à: http://localhost:5173

### Option 2: Lancer les deux ensemble
```bash
npm run dev:all
```
(Nécessite `concurrently`)

---

## Architecture

```
Frontend (React)
    ↓ POST /api/send-contact-email
Backend (Node.js/Express)
    ↓ Vérifier reCAPTCHA Score
    ↓ Si score > 0.5: Envoyer email
EmailJS
    ↓
Gmail (edenconseilqualite@gmail.com)
```

---

## Variables d'Environnement

Copier `.env.example` vers `.env` et remplir:

```bash
cp .env.example .env
```

### Frontend (src/main.tsx)
- `VITE_RECAPTCHA_SITE_KEY` - Clé publique Google reCAPTCHA v3

### Backend (server.js)
- `RECAPTCHA_SECRET_KEY` - Clé secrète Google reCAPTCHA v3
- `PORT` - Port serveur (défaut: 3001)

---

## Déploiement IONOS

### 1. Backend
L'hébergement mutualisé IONOS ne supporte pas Node.js nativement.

**Solutions:**
- A) Utiliser un service Node.js externe (Heroku, Railway, Render)
- B) Utiliser une fonction serverless (Vercel, Netlify)
- C) Upgrade vers un hébergement VPS

**Recommandé:** Vercel ou Render (gratuit)

### 2. Frontend
Uploadez le dossier `dist/` sur IONOS comme d'habitude.

### 3. Configuration URL API
Mettez à jour `Contact.tsx` avec l'URL de production:
```typescript
// Pour production IONOS
const API_URL = 'https://votre-backend.vercel.app' // ou votre URL
```

---

## Vérification reCAPTCHA

Le serveur rejette les validations si:
- ❌ `score < 0.5` - Probablement un bot
- ❌ `success = false` - Erreur Google

---

## Logs

Vérifiez les logs serveur pour debugger:
```bash
npm run server
# Cherchez: "reCAPTCHA Score: X.XX"
```

---

## Sécurité

✅ Clé secrète reCAPTCHA stockée côté serveur seulement
✅ Vérification bot avant envoi email
✅ CORS configuré pour production
✅ Validation formulaire frontend + backend

---

**Questions?** Consultez le code source: `server.js`
