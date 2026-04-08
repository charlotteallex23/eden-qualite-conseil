export default function PolitiqueConfidentialite() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-red-600 mb-12">Politique de Confidentialité</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Introduction</h2>
            <p className="text-gray-700">
              Eden Conseil Qualité s'engage à protéger votre vie privée et à assurer la transparence 
              dans le traitement de vos données personnelles. Cette politique explique comment nous 
              collectons, utilisons et protégeons vos informations.
            </p>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">1. Données collectées</h2>
            <p className="text-gray-700 mb-4">Nous collectons les données personnelles suivantes :</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Via le formulaire de contact :</strong> Nom, Prénom, Email, Téléphone, Besoin, Message</li>
              <li><strong>Cookies et données de navigation :</strong> Adresse IP, type de navigateur, pages visitées</li>
              <li><strong>Données analytiques :</strong> Comportement de navigation (optionnel)</li>
            </ul>
          </section>

          {/* Finalité du traitement */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">2. Finalité du traitement des données</h2>
            <p className="text-gray-700 mb-4">Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Répondre à vos demandes de contact et d'information</li>
              <li>Vous adresser des offres personnalisées (si consentement)</li>
              <li>Améliorer notre site et nos services</li>
              <li>Respecter nos obligations légales</li>
              <li>Prévenir les fraudes et garantir la sécurité du site</li>
            </ul>
          </section>

          {/* Base légale */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">3. Base légale du traitement</h2>
            <p className="text-gray-700 mb-4">Le traitement de vos données est basé sur :</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Votre consentement :</strong> Pour les données collectées via le formulaire de contact</li>
              <li><strong>Notre intérêt légitime :</strong> Pour améliorer notre site et nos services</li>
              <li><strong>Obligations légales :</strong> Pour respecter la réglementation en vigueur</li>
            </ul>
          </section>

          {/* Durée de conservation */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">4. Durée de conservation des données</h2>
            <div className="bg-amber-50 p-4 rounded-lg space-y-2 text-gray-700">
              <p><strong>Données de contact :</strong> Conservées 3 ans après le dernier contact</p>
              <p><strong>Cookies :</strong> Conservés 13 mois maximum</p>
              <p><strong>Données analytiques :</strong> Supprimées après 26 mois</p>
            </div>
          </section>

          {/* Destinataires */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">5. Destinataires de vos données</h2>
            <p className="text-gray-700 mb-4">Vos données peuvent être communiquées à :</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Notre équipe interne</li>
              <li>Nos prestataires techniques (hébergeur, service d'email)</li>
              <li>Les autorités compétentes si obligation légale</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Nous garantissons que vos données ne seront jamais vendues à des tiers sans votre consentement.
            </p>
          </section>

          {/* Vos droits RGPD */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">6. Vos droits (RGPD)</h2>
            <p className="text-gray-700 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Droit d'accès :</strong> Consulter les données que nous détenons sur vous</li>
              <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données (droit à l'oubli)</li>
              <li><strong>Droit à la limitation du traitement :</strong> Demander de suspendre le traitement</li>
              <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer à certains traitements</li>
              <li><strong>Droit de retirer le consentement :</strong> À tout moment, sans impact rétroactif</li>
            </ul>
          </section>

          {/* Exercer vos droits */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">7. Comment exercer vos droits</h2>
            <p className="text-gray-700 mb-4">
              Pour exercer l'un de vos droits, contactez-nous à :
            </p>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p><strong>Email :</strong> contact@eden-conseil-qualite.fr</p>
              <p><strong>Téléphone :</strong> 07 67 05 81 87</p>
            </div>
            <p className="text-gray-700 mt-4">
              Vous pouvez également contacter la Commission Nationale Informatique et Libertés (CNIL) 
              si vous estimez que vos droits ne sont pas respectés.
            </p>
          </section>

          {/* Sécurité des données */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">8. Sécurité des données</h2>
            <p className="text-gray-700">
              Nous mettons en place les mesures de sécurité techniques et organisationnelles appropriées 
              pour protéger vos données contre l'accès non autorisé, la modification, la suppression ou la divulgation. 
              Cependant, aucun système de sécurité n'est absolument invulnérable.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">9. Gestion des cookies</h2>
            <p className="text-gray-700 mb-4">
              Nous utilisons des cookies pour améliorer votre expérience. Les cookies non essentiels nécessitent 
              votre consentement.
            </p>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong className="block">Types de cookies :</strong>
                <ul className="list-disc list-inside ml-2">
                  <li>Cookies essentiels (authentification, sécurité)</li>
                  <li>Cookies d'analyse (comportement utilisateur)</li>
                  <li>Cookies de marketing (personnalisation)</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Vous pouvez gérer vos préférences de cookies depuis les paramètres de votre navigateur.
            </p>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">10. Modifications de cette politique</h2>
            <p className="text-gray-700">
              Nous pouvons mettre à jour cette politique à tout moment. Les modifications significatives 
              vous seront notifiées par email ou via une annonce sur le site.
            </p>
          </section>

          {/* Contact DPO */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">11. Délégué à la Protection des Données</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant le traitement de vos données, vous pouvez contacter notre 
              Délégué à la Protection des Données (DPO) :
            </p>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p><strong>Email :</strong> dpo@eden-conseil-qualite.fr</p>
              <p className="text-sm mt-2">Si absent, contactez : contact@eden-conseil-qualite.fr</p>
            </div>
          </section>

          {/* Dernière mise à jour */}
          <div className="border-t pt-8 text-sm text-gray-500">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
