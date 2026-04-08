# Configuration EmailJS - Guide Setup

## Étapes pour activer l'envoi de mails sur votre site

### 1️⃣ Créer un compte EmailJS (gratuit)
- Allez sur : https://www.emailjs.com/
- Cliquez sur "Sign Up Free"
- Créez votre compte avec email

### 2️⃣ Récupérer votre clé publique
- Une fois connecté, allez dans le dashboard
- Cliquez sur "Account" (en haut à droite)
- Copiez votre "Public Key" (à gauche)

### 3️⃣ Créer un service email
- Dans le dashboard, allez à "Email Services"
- Cliquez sur "Add Service"
- Choisissez votre fournisseur email (Gmail recommandé)
  - Connectez-vous à Gmail
  - Autorisez EmailJS
- Une fois connecté, vous aurez un "Service ID" : `service_contact`

### 4️⃣ Créer un template d'email
- Allez à "Email Templates"
- Cliquez sur "Create New Template"
- Donnez-lui l'ID : `template_contact`
- Utilisez ce contenu :

```
Subject: Nouveau demande de contact - {{from_name}}

De: {{from_name}} ({{from_email}})
Téléphone: {{telephone}}
Besoin: {{besoin}}

Message:
{{message}}

---
Cet email a été envoyé depuis votre site eden-conseil-qualite.fr
```

### 5️⃣ Configurer Contact.tsx
Dans le fichier `src/pages/Contact.tsx`, remplacez la ligne :
```typescript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
```

Par votre clé publique récupérée à l'étape 2.

### 6️⃣ Tester l'envoi
- Lancez votre site en développement : `npm run dev`
- Allez à la page Contact
- Remplissez le formulaire
- Cliquez sur "Envoyer"
- Vérifiez que l'email arrive à `contact@eden-conseil-qualite.fr`

## 🎯 C'est tout !

Une fois configuré, tous les formulaires de contact enverront les mails automatiquement.

## 📝 Notes
- EmailJS est gratuit jusqu'à 200 emails/mois
- Pas besoin de backend
- Fonctionne directement du navigateur
- Les données ne passent pas par vos serveurs
