# 🔍 Configuration Google Indexing API

**Automatise la notification des mises à jour de pages à Google**

---

## 📋 Prérequis

- ✅ Propriété Google Search Console: `edenconseilqualite.fr`
- ✅ Accès à Google Cloud Console
- ✅ Repository GitHub avec accès administrateur

---

## 🎯 ÉTAPE 1: Créer un Service Account Google

### 1.1 Aller sur Google Cloud Console

1. Ouvrir [Google Cloud Console](https://console.cloud.google.com/)
2. Créer un nouveau projet ou sélectionner un existant
3. Entrer le nom: `Eden Conseil - Indexing`

### 1.2 Créer le Service Account

1. Aller à **"APIs et services"** → **"Identifiants"**
2. Cliquer **"Créer des identifiants"** → **"Compte de service"**
3. Remplir:
   - **Nom du service account:** `google-indexing`
   - **ID:** `google-indexing@PROJECT_ID.iam.gserviceaccount.com`
4. Cliquer **"Créer et continuer"**

### 1.3 Créer une clé JSON

1. Après création, aller à l'onglet **"Clés"**
2. Cliquer **"Ajouter une clé"** → **"Créer une nouvelle clé"**
3. Sélectionner **"JSON"** et télécharger
4. **IMPORTANT:** Sauvegarder le fichier JSON en lieu sûr

---

## 🔐 ÉTAPE 2: Activer l'API Indexing

1. Aller à **"APIs et services"** → **"Bibliothèque"**
2. Rechercher **"Indexing API"**
3. Cliquer dessus et **"Activer"**

---

## 🔗 ÉTAPE 3: Autoriser le Service Account dans GSC

1. Aller à [Google Search Console](https://search.google.com/search-console)
2. Sélectionner la propriété `edenconseilqualite.fr`
3. Cliquer ⚙️ **"Paramètres"** → **"Utilisateurs et autorisations"**
4. Cliquer **"Ajouter un utilisateur"**
5. Entrer l'email du service account: `google-indexing@PROJECT_ID.iam.gserviceaccount.com`
6. Sélectionner **"Propriétaire"** ou **"Éditeur"**
7. Envoyer l'invitation

---

## 🚀 ÉTAPE 4: Configurer GitHub Secrets

### Local (pour tests)

1. Placer le fichier JSON téléchargé:
   ```bash
   cp ~/Downloads/PROJECT_ID-XXX.json ./service-account.json
   ```

2. Ajouter à `.gitignore` (si pas déjà):
   ```
   service-account.json
   ```

3. Tester localement:
   ```bash
   npm install google-auth-library
   node scripts/notify-google.js
   ```

### GitHub Actions (Automatisé)

1. Convertir le JSON en une seule ligne:
   ```bash
   cat service-account.json | tr '\n' ' ' | sed 's/  */ /g'
   ```

2. Copier le résultat

3. Sur GitHub (Repository):
   - Aller à **Settings** → **Secrets and variables** → **Actions**
   - Cliquer **"New repository secret"**
   - **Name:** `GOOGLE_SERVICE_ACCOUNT`
   - **Value:** Coller le JSON de l'étape 1
   - Cliquer **"Add secret"**

### (Optionnel) Slack Notifications

Pour recevoir une notification Slack après chaque indexation:

1. Créer un Slack Webhook: [Incoming Webhooks](https://api.slack.com/messaging/webhooks)
2. Aller à Settings → Secrets and variables → Actions
3. Ajouter `SLACK_WEBHOOK_URL` avec l'URL du webhook

---

## ✅ ÉTAPE 5: Tester le Script

### Test Local

```bash
npm install google-auth-library
node scripts/notify-google.js
```

**Résultat attendu:**
```
✅ Credentials chargées depuis service-account.json
📡 Notification de 47 URLs à Google...

✅ https://edenconseilqualite.fr/
✅ https://edenconseilqualite.fr/about
✅ https://edenconseilqualite.fr/services
... (47 URLs)

📊 Résultats:
   ✅ Réussies: 47/47
   
✨ Indexation complétée. Google crawlera les pages dans 24-48h.
```

### Test GitHub Actions

1. Sur GitHub, aller à **Actions**
2. Sélectionner **"🔍 Auto-Index to Google"**
3. Cliquer **"Run workflow"** → **"Run workflow"**
4. Attendre la completion (2-5 min)
5. Vérifier les logs

---

## 🔄 Automatisation Planifiée

Le workflow exécute automatiquement:

| Événement | Timing | URLs indexées |
|-----------|--------|---------------|
| **Push** | Après chaque commit sur `main` | Seulement les fichiers modifiés |
| **Schedule** | Chaque dimanche 0h UTC | Toutes les 47 URLs |
| **Manuel** | À la demande via Actions tab | Toutes les 47 URLs |

---

## 🛠️ Dépannage

### ❌ "service-account.json not found"

```bash
# Local: Télécharger et placer le fichier
cp ~/Downloads/PROJECT_ID-XXX.json ./service-account.json
```

### ❌ "Invalid credentials"

1. Vérifier que l'API Indexing est **activée**
2. Vérifier que le service account est **autorisé dans GSC**
3. Attendre 5-10 minutes après l'ajout de l'utilisateur GSC

### ❌ "Quota exceeded"

Google limite à **200 URLs/jour** via l'API. Le script respecte le rate limit.
Pour indexer les 47 URLs: ~24 secondes.

### ❌ "HTTP 401 Unauthorized"

Le secret GitHub est mal configuré:
1. Vérifier le nom du secret: `GOOGLE_SERVICE_ACCOUNT`
2. Vérifier que c'est du JSON valide (pas de sauts de ligne)
3. Vérifier que le service account a les bonnes permissions

---

## 📊 Vérifier l'Indexation

### Via Google Search Console

1. Aller à **"Couverture"**
2. Vérifier que le nombre d'URL augmente (actuellement ~7, devrait être 47+)
3. Aller à **"Inspections d'URL"** pour tester des pages individuelles

### Via Terminal

```bash
# Voir les 10 dernières URLs indexées
curl "https://www.google.com/search?q=site:edenconseilqualite.fr" 2>/dev/null | grep -o "edenconseilqualite.fr[^\"]*" | sort -u | tail -10
```

---

## 🎓 Comment Ça Marche

```
1. Push code sur GitHub
        ↓
2. Workflow "index.yml" déclenché
        ↓
3. Node.js installe google-auth-library
        ↓
4. Script lit URLS_TO_INDEX.txt
        ↓
5. Chaque URL envoyée via Google Indexing API
        ↓
6. Google reçoit la notification
        ↓
7. Google ajoute à queue de crawl (24-48h)
        ↓
8. Pages apparaissent dans GSC "Coverage"
```

---

## 📈 Résultats Attendus

**Avant:**
- Google indexé: ~7 pages
- Temps de crawl: 1-2 semaines

**Après indexation API:**
- Google indexé: 47+ pages
- Temps de crawl: 24-48 heures
- Impressions: ~103 → 300-500+

---

## 🔒 Sécurité

- ✅ Credentials stockées en tant que **secret GitHub** (chiffré)
- ✅ `service-account.json` **dans `.gitignore`** (pas commité)
- ✅ API restreinte à **API Indexing uniquement**
- ✅ Service account avec **permissions minimales**

---

## 📝 Notes

- Chaque URL notifiée coûte **0,01 crédit Google** (gratuit jusqu'à 200/jour)
- Le script respecte automatiquement les rate limits
- Pas de duplicates: Google déduplique automatiquement

---

## ❓ FAQ

**Q: Combien de temps pour indexer les 47 URLs?**
A: 24-48 heures après notification. Le script prend ~30 secondes.

**Q: Faut-il autoriser chaque URL individuellement?**
A: Non, une autorisation du service account suffit pour toute la propriété.

**Q: Peut-on indexer les pages d'erreur (404, legal)?**
A: Oui, mais Google les désindexera automatiquement si elles le demandent.

**Q: Quelle différence avec sitemap.xml?**
A: Sitemap = découverte passive. API = notification active (beaucoup plus rapide).

---

**🎉 Prêt? Commencer par ÉTAPE 1!**
