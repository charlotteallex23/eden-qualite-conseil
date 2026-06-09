# Scripts d'Automatisation

## notify-google.js

Script Node.js qui notifie Google Indexing API des mises à jour de pages.

### Utilisation

**Localement:**
```bash
npm install google-auth-library
npm run index
```

**GitHub Actions:**
Automatiquement déclenché après chaque push sur `main`.

### Configuration

Voir [GOOGLE_INDEXING_SETUP.md](../GOOGLE_INDEXING_SETUP.md) pour la configuration complète.

### Variables d'Environnement

- `GOOGLE_SERVICE_ACCOUNT` (GitHub Actions) - JSON credentials du service account
- Ou `service-account.json` (local) - Fichier de credentials

---

**📖 Documentation complète:** [GOOGLE_INDEXING_SETUP.md](../GOOGLE_INDEXING_SETUP.md)
