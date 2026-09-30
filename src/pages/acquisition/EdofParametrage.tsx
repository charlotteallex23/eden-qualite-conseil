import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Settings, AlertCircle, CheckCircle } from 'lucide-react';

export default function EdofParametrage() {
  return (
    <div className="py-20 bg-gray-50">
      <Helmet>
        <title>Paramétrage EDOF | Configuration Compte | Rôles Utilisateurs | Eden Conseil</title>
        <meta name="description" content="Paramétrage complet compte EDOF: configuration, rôles, permissions, gestion utilisateurs, erreurs à éviter." />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/edof-parametrage" />
        <meta property="og:title" content="Paramétrage EDOF | Configuration Complète" />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/edof-parametrage" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Paramétrage Compte EDOF',
          description: 'Guide technique: configuration EDOF, rôles, droits, sessions CPF',
          author: { '@type': 'Organization', name: 'Eden Conseil Qualité' }
        })}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
          Paramétrage Compte EDOF
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Configuration technique complète: rôles, permissions, gestion utilisateurs, sessions CPF
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
            <Settings className="w-6 h-6" />
            Configuration EDOF étape par étape
          </h2>

          <div className="space-y-6">
            {/* Profils/rôles */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Profils et permissions EDOF</h3>
              <div className="space-y-3">
                {[
                  { role: "Administrateur", perms: "Accès complet compte + gestion utilisateurs + sessions + facturation", icon: "👑" },
                  { role: "Responsable formation", perms: "Création/modification offres + sessions + suivi apprenants", icon: "📋" },
                  { role: "Coordinateur CPF", perms: "Gestion sessions + inscriptions + remboursement", icon: "💼" },
                  { role: "Responsable qualité", perms: "Suivi indicateurs + contrôles conformité (lecture seule)", icon: "✓" },
                  { role: "Consultant externe", perms: "Accès limité diagnostic + propositions (si droit délégué)", icon: "🔍" }
                ].map((r, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{r.icon}</span>
                      <div>
                        <p className="font-bold text-gray-900">{r.role}</p>
                        <p className="text-sm text-gray-600">{r.perms}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Paramètres critiques */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Paramétrages critiques
              </h3>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded border-l-4 border-green-600">
                  <p className="font-bold text-green-900">1. Délai 11 jours ouvrés</p>
                  <p className="text-sm text-green-800">Configurer dans EDOF: délai min avant démarrage formation CPF = 11 jours ouvrés (réglementaire)</p>
                </div>
                <div className="bg-green-50 p-4 rounded border-l-4 border-green-600">
                  <p className="font-bold text-green-900">2. Authentification sécurisée</p>
                  <p className="text-sm text-green-800">Activer 2FA pour admin. Mots de passe forts (12+ car). Rotation trimestrielle.</p>
                </div>
                <div className="bg-green-50 p-4 rounded border-l-4 border-green-600">
                  <p className="font-bold text-green-900">3. Délégation habilitations</p>
                  <p className="text-sm text-green-800">Si sous-traitance: déléguer droits avec contrats clairs + audits trimestriels</p>
                </div>
                <div className="bg-green-50 p-4 rounded border-l-4 border-green-600">
                  <p className="font-bold text-green-900">4. Traçabilité actions</p>
                  <p className="text-sm text-green-800">Activer logs EDOF. Conserver 2 ans minimum. Audit semestriel.</p>
                </div>
              </div>
            </div>

            {/* Erreurs couantes */}
            <div className="bg-red-50 border-l-4 border-red-600 p-6">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Erreurs courantes = blocage compte
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3">
                  <span className="font-bold">✗</span>
                  <span><strong>Délai 11 jours non configuré</strong> → Sessions créées refusées Caisse Dépôts</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">✗</span>
                  <span><strong>Droits incorrects utilisateurs</strong> → Impossible créer offres/sessions</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">✗</span>
                  <span><strong>Pas de coordinateur CPF</strong> → Refus remboursements Caisse</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">✗</span>
                  <span><strong>SIRET/ROMEN manquants</strong> → Blocage inscription EDOF</span>
                </li>
              </ul>
            </div>

            {/* Checklist */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
              <h3 className="font-bold text-blue-900 mb-3">Checklist paramétrage</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Administrateur assigné + infos correctes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Délai 11 jours configuré</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Coordonnées SIRET/ROMEN validées</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Rôles utilisateurs créés + assignés</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>2FA activé admin</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Logs accessibilité testés</span>
                </label>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Audit paramétrage EDOF</h4>
              <p className="text-gray-700 mb-4">
                Notre équipe audit votre configuration EDOF: droits, délais, traçabilité, conformité Caisse Dépôts.
              </p>
              <Link to="/contact" className="inline-block bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700">
                Demander audit paramétrage
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/acquisition/inscription-edof" className="p-4 border-l-4 border-red-600 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="font-bold text-gray-900">Inscription EDOF</h4>
            <p className="text-sm text-gray-600">Parcours ouverture compte</p>
          </Link>
          <Link to="/acquisition/conformite-cpf" className="p-4 border-l-4 border-red-600 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="font-bold text-gray-900">Audit conformité CPF</h4>
            <p className="text-sm text-gray-600">Vérification complète droits</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
