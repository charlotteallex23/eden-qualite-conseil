import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Lock, AlertCircle } from 'lucide-react';

export default function NdaEdof() {
  return (
    <div className="py-20 bg-gray-50">
      <Helmet>
        <title>NDA EDOF | Confidentialité CPF | Eden Conseil</title>
        <meta name="description" content="Accord de confidentialité pour accompagnement EDOF et CPF. Sécurité des dossiers CPF garantie." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://edenconseilqualite.fr/nda-edof" />
        <meta property="og:title" content="NDA EDOF | Confidentialité CPF" />
        <meta property="og:url" content="https://edenconseilqualite.fr/nda-edof" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Lock className="w-10 h-10 text-red-600" />
          <h1 className="text-4xl font-bold text-red-600">
            Accord de Confidentialité EDOF & CPF
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Avertissement */}
          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 flex gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-semibold text-amber-900 mb-2">Données Sensibles CPF</h2>
              <p className="text-sm text-amber-800">
                Les dossiers CPF et EDOF contiennent des données sensibles. Cet accord garantit leur protection stricte conformément à la réglementation CPF.
              </p>
            </div>
          </div>

          {/* 1. Objet */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">1. Objet de l'accord</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Cet accord de confidentialité concerne les données relatives à :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Inscription EDOF (Éducation Permanente Ouverte À Distance)</li>
                <li>Publication offres CPF (Compte Personnel de Formation)</li>
                <li>Gestion MCF (Moncompteformation)</li>
                <li>Audit conformité CPF</li>
                <li>Mise en conformité réglementaire CPF</li>
                <li>Données apprenant & suivi de formation</li>
              </ul>
            </div>
          </section>

          {/* 2. Données confidentielles */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">2. Données Confidentielles</h2>
            <div className="text-gray-700 space-y-4">
              <p>Données protégées dans le cadre de ce NDA :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                  <h4 className="font-semibold text-gray-900 mb-2">Données Organisme</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Numéro SIRET/ROMEN</li>
                    <li>Identifiants EDOF & MCF</li>
                    <li>Offres de formation</li>
                    <li>Tarifs & conditions financières</li>
                    <li>Stratégie CPF</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                  <h4 className="font-semibold text-gray-900 mb-2">Données Apprenants</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Nom & prénom</li>
                    <li>Email & téléphone</li>
                    <li>Données inscription</li>
                    <li>Bilans de compétences</li>
                    <li>Traces de suivi formation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Obligations légales CPF */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">3. Obligations de Confidentialité CPF</h2>
            <div className="text-gray-700 space-y-4">
              <p><strong>Eden Conseil Qualité s'engage à :</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respecter les règles EDOF d'accès aux données</li>
                <li>Maintenir l'intégrité des données apprenant</li>
                <li>Ne pas commercialiser ou revendre données</li>
                <li>Sécuriser données selon norme ISO 27001</li>
                <li>Accès restreint au personnel habilité uniquement</li>
                <li>Audit de sécurité annuel minimum</li>
                <li>Conformité RGPD & loi informatique libertés</li>
              </ul>
            </div>
          </section>

          {/* 4. Traitement des données apprenants */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">4. Traitement des Données Apprenants</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Les données personnelles d'apprenants ne seront utilisées que pour :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accompagnement pédagogique de la formation</li>
                <li>Suivi administratif CPF (traçabilité légale)</li>
                <li>Vérifications conformité EDOF</li>
                <li>Communication essentiellement liée au CPF</li>
              </ul>
              <p className="mt-4 text-sm font-semibold">
                Aucune commercialisation, partage avec tiers, ou usage marketing autorisé.
              </p>
            </div>
          </section>

          {/* 5. Sécurité technique */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">5. Mesures de Sécurité Technique</h2>
            <div className="text-gray-700 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-semibold text-green-900 mb-2">Infrastructure</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ Serveurs sécurisés certifiés</li>
                    <li>✓ Chiffrement TLS 1.3+</li>
                    <li>✓ Pare-feu avancé</li>
                    <li>✓ Sauvegardes quotidiennes</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-semibold text-green-900 mb-2">Accès & Authentification</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ Identifiant + mot de passe fort</li>
                    <li>✓ Authentification 2FA si sensitive</li>
                    <li>✓ Logs audit de chaque accès</li>
                    <li>✓ Révocation immédiate fin mission</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Incident & violation */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">6. Gestion des Incidents de Sécurité</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                En cas de violation ou suspicion de fuite de données :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Notification immédiate (24h maximum)</li>
                <li>Investigation complète & rapport</li>
                <li>Signalement CNIL si obligatoire</li>
                <li>Plan d'action corrective</li>
                <li>Documentation de l'incident</li>
              </ul>
            </div>
          </section>

          {/* 7. Sous-traitants */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">7. Sous-traitants & Prestataires</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Tous les sous-traitants ayant accès à vos données signent un accord de traitement de données (DPA) conforme RGPD. Liste des prestataires sur demande.
              </p>
              <p className="text-sm">
                <strong>Prestataires actuels :</strong> Hébergeur Ionos (France), EmailJS (email)
              </p>
            </div>
          </section>

          {/* 8. Durée & résiliation */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">8. Durée & Résiliation</h2>
            <div className="text-gray-700 space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Durée : pendant la mission + 3 ans après (sauf obligations légales)</li>
                <li>À la fin : restitution ou destruction sécurisée sur demande</li>
                <li>Destruction : certification de destruction physique & numérique</li>
                <li>Conservation requise : documents légaux conservés 6 ans minimum</li>
              </ul>
            </div>
          </section>

          {/* 9. Droits apprenant */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">9. Droits des Apprenants (RGPD)</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Les apprenants bénéficient de droits RGPD :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Droit d'accès à leurs données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'oubli (sous conditions)</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
              <p className="text-sm mt-4">
                Contact DPO : edenconseilqualite@gmail.com
              </p>
            </div>
          </section>

          {/* 10. Contact & plainte */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">10. Contact & Signalement</h2>
            <div className="text-gray-700 space-y-4">
              <div className="bg-gray-50 border border-gray-300 p-4 rounded mb-4">
                <p><strong>Support Confidentialité :</strong></p>
                <p>Email : edenconseilqualite@gmail.com</p>
                <p>Téléphone : 07 67 05 81 87</p>
              </div>
              <p>
                <strong>Plainte CNIL :</strong> Vous pouvez déposer une plainte auprès de la Commission Nationale de l'Informatique et des Libertés : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">www.cnil.fr</a>
              </p>
            </div>
          </section>

          {/* 11. Acceptation */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">11. Acceptation</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Cet accord est <strong>obligatoire pour tout accompagnement EDOF/CPF</strong>. Sa signature marque l'acceptation de ces conditions.
              </p>
              <p className="italic text-sm">
                Dernière mise à jour : juillet 2026
              </p>
            </div>
          </section>
        </div>

        {/* Liens */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-red-600 mb-6">Accords Complémentaires</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/nda-qualiopi"
              className="p-4 border-l-4 border-red-600 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-semibold text-gray-900 mb-2">NDA Qualiopi</h4>
              <p className="text-sm text-gray-600">Confidentialité dossiers Qualiopi</p>
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
