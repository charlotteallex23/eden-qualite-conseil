export default function MentionsLegales() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-red-600 mb-12">Mentions Légales</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Éditeur du site */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">1. Éditeur du site</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Raison sociale :</strong> Eden Conseil Qualité</p>
              <p><strong>Forme juridique :</strong> MICRO-ENTREPRISE</p>
              <p><strong>Numéro SIRET :</strong> 91243151700016</p>
              <p><strong>Numéro de TVA intracommunautaire :</strong> Non applicable</p>
              <p><strong>Adresse du siège social :</strong> 1 Avenue François 1er, 75008, Paris</p>
              <p><strong>Téléphone :</strong> 07 67 05 81 87</p>
              <p><strong>Email :</strong> contact@eden-conseil-qualite.fr</p>
              <p><strong>Responsable de la publication :</strong> Charlotte Allexandre</p>
            </div>
          </section>

          {/* Directeur de la publication */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">2. Directeur de la publication</h2>
            <p className="text-gray-700">Le site est édité et dirigé par Eden Conseil Qualité.</p>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">3. Hébergement</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Hébergeur :</strong> Ionos</p>
              <p><strong>Adresse de l'hébergeur :</strong> 7 PLACE DE LA GARE 57200 SARREGUEMINES, FRANCE</p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">4. Propriété Intellectuelle</h2>
            <p className="text-gray-700 mb-4">
              L'ensemble du contenu du site (textes, images, logo, graphismes) est la propriété de Eden Conseil Qualité. 
              Toute reproduction est strictement interdite sans autorisation préalable.
            </p>
            <p className="text-gray-700">
              Les icônes sont fournies par Lucide React sous licence MIT.
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">5. Responsabilité</h2>
            <p className="text-gray-700 mb-4">
              Eden Conseil Qualité s'efforce de maintenir à jour les informations sur ce site. 
              Cependant, elle ne peut en aucun cas être tenue responsable des inexactitudes, des omissions ou des 
              retards dans la mise à jour du site.
            </p>
            <p className="text-gray-700">
              Les utilisateurs du site sont responsables de l'usage qu'ils font des informations qui y sont 
              présentées. L'accès au site ne confère aucun droit.
            </p>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">6. Traitement des données personnelles</h2>
            <p className="text-gray-700 mb-4">
              Les données collectées via le formulaire de contact sont traitées conformément au Règlement Général 
              sur la Protection des Données (RGPD) et à la Loi Informatique et Libertés (LIL).
            </p>
            <p className="text-gray-700">
              Pour plus d'informations sur le traitement de vos données, veuillez consulter notre 
              <a href="/politique-confidentialite" className="text-red-600 hover:text-amber-800 ml-1">
                politique de confidentialité
              </a>.
            </p>
          </section>

          {/* Liens externes */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">7. Liens externes</h2>
            <p className="text-gray-700">
              Le site peut contenir des liens vers d'autres sites. Eden Conseil Qualité n'est pas responsable du 
              contenu de ces sites externes. L'accès à ces sites se fait aux risques et périls de l'utilisateur.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">8. Cookies</h2>
            <p className="text-gray-700 mb-4">
              Ce site utilise des cookies pour améliorer votre expérience utilisateur. En continuant à utiliser 
              ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
            </p>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">9. Droit applicable</h2>
            <p className="text-gray-700">
              Ces mentions légales sont soumises à la loi française. Tout litige sera du ressort des tribunaux 
              français.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">10. Contact</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant ce site ou ces mentions légales, vous pouvez nous contacter à :
            </p>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p><strong>Email :</strong> contact@eden-conseil-qualite.fr</p>
              <p><strong>Téléphone :</strong> 07 67 05 81 87</p>
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
