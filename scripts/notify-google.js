/**
 * Google Indexing API Notification Script
 * Notifie Google des mises à jour de pages
 * Usage: node scripts/notify-google.js
 */

const { GoogleAuth } = require("google-auth-library");
const fs = require("fs");
const path = require("path");

// URLs à indexer (lues depuis URLS_TO_INDEX.txt)
const URLS_FILE = path.join(__dirname, "../URLS_TO_INDEX.txt");

const INDEXING_API_URL =
  "https://indexing.googleapis.com/v3/urlNotifications:publish";

async function getUrls() {
  try {
    const content = fs.readFileSync(URLS_FILE, "utf-8");
    return content.split("\n").filter((url) => url.trim().length > 0);
  } catch (error) {
    console.error("❌ Erreur lecture URLS_TO_INDEX.txt:", error.message);
    process.exit(1);
  }
}

async function notifyGoogle(urls) {
  let credentials;

  // Lire les credentials depuis la variable d'environnement (GitHub Actions)
  // ou depuis le fichier service-account.json (local)
  if (process.env.GOOGLE_SERVICE_ACCOUNT) {
    try {
      credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
      console.log("✅ Credentials chargées depuis les variables d'environnement");
    } catch (error) {
      console.error(
        "❌ Erreur parsing des credentials d'environnement:",
        error.message
      );
      process.exit(1);
    }
  } else {
    const credPath = path.join(__dirname, "../service-account.json");
    if (!fs.existsSync(credPath)) {
      console.error(
        "❌ service-account.json non trouvé. Voir: GOOGLE_INDEXING_SETUP.md"
      );
      process.exit(1);
    }
    try {
      credentials = JSON.parse(fs.readFileSync(credPath, "utf-8"));
      console.log("✅ Credentials chargées depuis service-account.json");
    } catch (error) {
      console.error("❌ Erreur parsing service-account.json:", error.message);
      process.exit(1);
    }
  }

  // Créer client d'authentification
  const auth = new GoogleAuth({
    credentials: credentials,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });

  const client = await auth.getClient();

  let successCount = 0;
  let errorCount = 0;

  console.log(`\n📡 Notification de ${urls.length} URLs à Google...\n`);

  for (const url of urls) {
    try {
      const response = await client.request({
        url: INDEXING_API_URL,
        method: "POST",
        data: {
          url: url,
          type: "URL_UPDATED", // URL_UPDATED pour les mises à jour, MOBILE_FRIENDLY pour les tests
        },
      });

      console.log(`✅ ${url}`);
      successCount++;

      // Respecter le rate limit de Google (100 req/sec)
      await new Promise((resolve) => setTimeout(resolve, 10));
    } catch (error) {
      console.error(
        `❌ ${url} - ${error.message || "Erreur inconnue"}`
      );
      errorCount++;
    }
  }

  console.log(`\n📊 Résultats:`);
  console.log(`   ✅ Réussies: ${successCount}/${urls.length}`);
  if (errorCount > 0) {
    console.log(`   ❌ Erreurs: ${errorCount}/${urls.length}`);
  }

  if (errorCount > 0) {
    process.exit(1);
  }
}

// Exécution
(async () => {
  try {
    const urls = await getUrls();
    await notifyGoogle(urls);
    console.log(
      "\n✨ Indexation complétée. Google crawlera les pages dans 24-48h.\n"
    );
  } catch (error) {
    console.error("❌ Erreur:", error.message);
    process.exit(1);
  }
})();
