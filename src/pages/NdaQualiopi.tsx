import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, AlertCircle } from 'lucide-react';

export default function NdaQualiopi() {
  return (
    <div className="py-20 bg-gray-50">
      <Helmet>
        <title>NDA Qualiopi | Confidentialité Dossiers | Eden Conseil</title>
        <meta name="description" content="Accord de confidentialité pour accompagnement Qualiopi. Protection des données et dossiers confidentiels garantis." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://edenconseilqualite.fr/nda-qualiopi" />
        <meta property="og:title" content="NDA Qualiopi | Confidentialité" />
        <meta property="og:url" content="https://edenconseilqualite.fr/nda-qualiopi" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Shield className="w-10 h-10 text-red-600" />
          <h1 className="text-4xl font-bold text-red-600">
            Accord de Confidentialité Qualiopi
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Avertissement */}
          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 flex gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-semibold text-amber-900 mb-2">Accord de Confidentialité Signé</h2>
              <p className="text-sm text-amber-800">
                Les données confidentielles partagées dans le cadre de votre accompagnement Qualiopi sont protégées par un accord de confidentialité mutuel.
              </p>
            </div>
          </div>

          {/* 1. Objet de l'accord */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">1. Objet de l'accord</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Cet accord de confidentialité (NDA) régit les relations entre <strong>Eden Conseil Qualité</strong> et votre organisme de formation dans le cadre de :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accompagnement vers la certification Qualiopi</li>
                <li>Audit blanc (pré-audit) Qualiopi</li>
                <li>Audit de surveillance Qualiopi</li>
                <li>Audit blanc annuel de renouvellement</li>
                <li>Recommandations structurelles et processus</li>
              </ul>
            </div>
          </section>

          {/* 2. Informations confidentielles */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">2. Informations Confidentielles</h2>
            <div className="text-gray-700 space-y-4">
              <p>Sont considérées comme confidentielles les informations suivantes partagées lors de notre accompagnement :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dossier d'accréditation Qualiopi (préparation, structure)</li>
                <li>Audits blancs et rapports d'écarts</li>
                <li>Stratégie de conformité Qualiopi</li>
                <li>Documents structurants (BPF, processus qualité)</li>
                <li>Données financières et chiffres de votre organisme</li>
                <li>Noms et données personnelles des apprenants</li>
                <li>Stratégie commerciale et objectifs non publics</li>
              </ul>
            </div>
          </section>

          {/* 3. Obligations de confidentialité */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">3. Obligations de Confidentialité</h2>
            <div className="text-gray-700 space-y-4">
              <p><strong>Eden Conseil Qualité s'engage à :</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintenir la confidentialité de tous les éléments partagés</li>
                <li>N'utiliser les données que pour l'accompagnement convenu</li>
                <li>Ne pas divulguer à des tiers sans autorisation écrite</li>
                <li>Sécuriser les données (documents numériques chiffrés, stockage sécurisé)</li>
                <li>Détruire ou restituer les documents à la fin de la mission</li>
                <li>Respecter la RGPD et la loi informatique et libertés</li>
              </ul>
            </div>
          </section>

          {/* 4. Exceptions */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">4. Exceptions à la Confidentialité</h2>
            <div className="text-gray-700 space-y-4">
              <p>La confidentialité ne s'applique pas aux informations :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Déjà publiques ou devenues publiques sans rupture de ce NDA</li>
                <li>Divulgation requise par la loi ou autorité légale</li>
                <li>Connaissance antérieure avant ce NDA (preuve requise)</li>
                <li>Développées indépendamment sans utiliser l'information confidentielle</li>
              </ul>
            </div>
          </section>

          {/* 5. Cas client anonyme */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">5. Utilisation de Cas d'Étude</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Eden Conseil Qualité peut utiliser des résultats anonymisés de votre accompagnement à titre de <strong>témoignage ou cas d'étude</strong>, uniquement :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Avec consentement écrit préalable</li>
                <li>Sans révéler l'identité de votre organisme</li>
                <li>Limité aux résultats positifs (ex: "98% de réussite")</li>
                <li>À usage marketing/site uniquement</li>
              </ul>
            </div>
          </section>

          {/* 6. Durée */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">6. Durée de l'Accord</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Cet accord s'applique <strong>pendant la durée du contrat et 3 ans après la fin</strong> de l'accompagnement. Certains éléments (dossiers audit) restent confidentiels indéfiniment.
              </p>
            </div>
          </section>

          {/* 7. Sécurité données */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">7. Sécurité des Données</h2>
            <div className="text-gray-700 space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accès restreint au personnel Eden Conseil autorisé</li>
                <li>Stockage chiffré en cloud sécurisé</li>
                <li>Authentification forte (identifiants + 2FA)</li>
                <li>Audit annuel de conformité RGPD</li>
                <li>Incident notification en cas de fuite (24h)</li>
              </ul>
            </div>
          </section>

          {/* 8. Résiliation */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">8. Fin de la Relation</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                À la fin de l'accompagnement, vous pouvez demander :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>La restitution de tous vos documents</li>
                <li>La destruction sécurisée des données</li>
                <li>Une attestation de destruction (sur demande)</li>
              </ul>
            </div>
          </section>

          {/* 9. Contact */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">9. Contact & Signalement</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Pour toute question sur ce NDA ou signaler une potentielle violation :
              </p>
              <div className="bg-gray-50 border border-gray-300 p-4 rounded">
                <p><strong>Email :</strong> edenconseilqualite@gmail.com</p>
                <p><strong>Téléphone :</strong> 07 67 05 81 87</p>
                <p><strong>Adresse :</strong> 1 Avenue François 1er, 75008 Paris</p>
              </div>
            </div>
          </section>

          {/* 10. Acceptation */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">10. Acceptation</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Votre engagement avec Eden Conseil Qualité implique l'acceptation de cet accord de confidentialité. Cet accord est <strong>signé lors de chaque mission</strong> et reste actif après sa conclusion.
              </p>
              <p className="italic text-sm">
                Dernière mise à jour : juillet 2026
              </p>
            </div>
          </section>
        </div>

        {/* Liens utiles */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-red-600 mb-6">Accords Complémentaires</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/nda-edof"
              className="p-4 border-l-4 border-red-600 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-semibold text-gray-900 mb-2">NDA EDOF</h4>
              <p className="text-sm text-gray-600">Confidentialité dossiers EDOF & CPF</p>
            </Link>
            <Link
              to="/politique-confidentialite"
              className="p-4 border-l-4 border-red-600 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Politique Confidentialité</h4>
              <p className="text-sm text-gray-600">Données personnelles & cookies</p>
            </Link>
            <Link
              to="/mentions-legales"
              className="p-4 border-l-4 border-red-600 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Mentions Légales</h4>
              <p className="text-sm text-gray-600">Informations légales du site</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
