# Configuration EmailJS - Template RDV

## Créer un template pour les réservations de RDV

### 1️⃣ Aller dans EmailJS
- Connecté à https://www.emailjs.com/dashboard
- Allez à **Email Templates**
- Cliquez sur **Create New Template**

### 2️⃣ Configuration du template
**Données du template:**
- **Template ID:** `template_booking_rdv`
- **Template Name:** Booking RDV

### 3️⃣ Contenu du template

Utilisez ce contenu pour le corps de l'email :

```
Subject: Confirmation de rendez-vous - {{from_name}}

Bonjour {{from_name}},

Votre rendez-vous a été confirmé !

**Détails de votre rendez-vous:**
- Date: {{date_rdv}}
- Heure: {{time_rdv}}
- Objet: {{besoin}}
- Téléphone: {{telephone}}

Nous vous recontacterons à {{telephone}} quelques minutes avant l'heure prévue.

Cordialement,
Eden Conseil Qualité
edenconseilqualite@gmail.com
07 67 05 81 87

---
Cet email a été généré automatiquement depuis https://edenconseilqualite.fr
```

### 4️⃣ Variables utilisées
- `{{from_name}}` - Nom du client
- `{{from_email}}` - Email du client
- `{{telephone}}` - Téléphone du client
- `{{besoin}}` - Objet de la demande
- `{{date_rdv}}` - Date du RDV (format: lundi 3 juillet 2026)
- `{{time_rdv}}` - Heure du RDV (format: HH:MM)
- `{{reply_to}}` - Email de réponse

### 5️⃣ Test du template
- Cliquez sur **Test** dans EmailJS
- Remplacez les variables par des données de test
- Vérifiez que l'email s'envoie correctement
