import { MessageCircle, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { config } from '../config/company';

export function EdofReferencement() {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Bonjour, j'ai besoin d'aide pour enregistrer mon organisme sur EDOF. Pouvez-vous m'assister ?"
    );
    window.open(`https://wa.me/${config.company.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-red-900 mb-6">
            EDOF : Enregistrer et optimiser votre présence
          </h1>
          <p className="text-xl text-amber-800 mb-8">
            La plateforme gouvernementale qui centralise votre offre de formations en France
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Demander une consultation
            </Link>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              <MessageCircle size={20} />
              Nous contacter via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose pviolet-lg max-w-none">
          <h2 className="text-3xl font-bold text-red-900 mb-6">EDOF : L'infrastructure nationale des formations</h2>
          <p className="text-lg text-gray-700 mb-8">
            EDOF (Espace Des Organismes de Formation) est la plateforme officielle gouvernementale gérée par France Compétences. 
            C'est la base de données centralisée qui alimente MonCompteFormation, les portails régionaux et tous les systèmes 
            d'information des financeurs publics.
          </p>

          <h2 className="text-3xl font-bold text-red-900 mb-6">Pourquoi EDOF est critique pour vous</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">🎯 Visibilité maximale</h3>
              <p className="text-gray-700">Vos formations visibles auprès de tous les apprenants et financeurs en France</p>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">💰 Accès aux financements</h3>
              <p className="text-gray-700">CPF, OPCO, Région, État = impossibilité sans présence EDOF</p>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">📊 Données exploitables</h3>
              <p className="text-gray-700">Analytics, statistiques de taux de remplissage, analyses compétitives</p>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">✅ Conformité réglementaire</h3>
              <p className="text-gray-700">Obligation légale pour les organismes ayant déclenchement une activité</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-red-900 mb-6">Qui doit s'enregistrer sur EDOF ?</h2>
          <div className="bg-amber-50 border-l-4 border-red-600 p-6 mb-8">
            <p className="text-gray-700 mb-4"><strong>Tous les organismes ayant :</strong></p>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Une déclaration d'activité auprès de la DREETS (obligatoire)</li>
              <li>✅ Une certification Qualiopi (fortement recommandée)</li>
              <li>✅ Des formations professionnelles (initial, continue, alternance)</li>
              <li>✅ Des apprenants financés totalement ou partiellement par des fonds publics</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-red-900 mb-6">Les 5 étapes d'enregistrement EDOF</h2>
          <div className="space-y-6 mb-8">
            <div className="flex gap-4 p-4 border rounded-lg hover:shadow-lg transition">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white font-bold">1</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Créer un compte avec FranceConnect</h4>
                <p className="text-gray-700">Accès sécurisé via ID.gouv, LaPoste, MSA ou Impôts</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border rounded-lg hover:shadow-lg transition">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white font-bold">2</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Remplir le profil organisme</h4>
                <p className="text-gray-700">
                  Description, logo, zones géographiques, domaines de formation, modalités (présentiel/distanciel/hybride)
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border rounded-lg hover:shadow-lg transition">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white font-bold">3</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Importer votre catalogue</h4>
                <p className="text-gray-700">
                  Via fichier Excel template (bulk) ou saisie manuelle. 
                  Chaque formation : titre, durée, tarif, certification, public cible, modalité.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border rounded-lg hover:shadow-lg transition">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white font-bold">4</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Passez le contrôle qualité</h4>
                <p className="text-gray-700">
                  EDOF valide les données (2-3 jours). Corrections mineures rapidement traitées.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border rounded-lg hover:shadow-lg transition">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white font-bold">5</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Publication et synchronisation</h4>
                <p className="text-gray-700">
                  Données publiées sur EDOF et automatiquement exportées vers MonCompteFormation (24-48h).
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-red-900 mb-6">Bonnes pratiques pour optimiser votre visibilité EDOF</h2>
          <div className="space-y-6 mb-8">
            <div className="bg-amber-50 border-l-4 border-red-600 p-4">
              <h3 className="font-bold text-gray-900 mb-2">📝 Descriptions qui convertissent</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Titre clair : "Titre de la formation + objectif final" (ex: "Certification CQP E-Commerce")</li>
                <li>• Description courte : 50-100 mots compréhensibles</li>
                <li>• Description longue : 200-300 mots incluant objectifs, prérequis, débouchés</li>
                <li>• Mots-clés métier stratégiques pour l'indexation</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-red-600 p-4">
              <h3 className="font-bold text-gray-900 mb-2">💰 Tarification transparente</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Tarif horaire clair ET prix total (durée × tarif horaire)</li>
                <li>• Justification du tarif visible (ressources, formateurs, certifications)</li>
                <li>• Mentionner les tarifs réduits ou promotions</li>
                <li>• Indiquer modes de financement acceptés</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-4">
              <h3 className="font-bold text-gray-900 mb-2">📅 Calendrier à jour</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Mettre à jour chaque mois les sessions programmées</li>
                <li>• Indiquer les prochaines dates de démarrage (6-12 mois)</li>
                <li>• Signaler les places disponibles actualisées</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-red-600 p-4">
              <h3 className="font-bold text-gray-900 mb-2">🎯 Indexation et découvrabilité</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Sélectionner les bons secteurs d'activité ROME</li>
                <li>• Indiquer la certification visée (RNCP/RS code)</li>
                <li>• Associer les compétences professionnelles pertinentes</li>
                <li>• Utiliser les filtres EDOF pour maximiser les correspondances</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-red-900 mb-6">Erreurs courantes à éviter</h2>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-gray-900">Données incomplètes</p>
                <p className="text-sm text-gray-700">Formation sans tarif, sans certification, sans durée = rejet ou visibilité réduite</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-gray-900">Calendrier figé</p>
                <p className="text-sm text-gray-700">Pas de mise à jour = apparence abandonnée + apprenants se détournent</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-gray-900">Formation sans certification</p>
                <p className="text-sm text-gray-700">Impossibilité d'être finançable CPF = pas d'intérêt financeur</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-gray-900">Doublon de comptes</p>
                <p className="text-sm text-gray-700">Plusieurs enregistrements = confusion apprenants et données dispersées</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-red-900 mb-6">Ressources et articles connexes</h2>
          <div className="bg-amber-50 rounded-lg p-6 mb-8">
            <p className="mb-4 text-gray-700 font-semibold">Approfondir votre compréhension :</p>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/edof-guide-complet" className="text-red-600 hover:underline font-semibold">
                  → Article : EDOF - Guide complet de l'enregistrement
                </Link>
              </li>
              <li>
                <Link to="/cpf-eligibilite" className="text-red-600 hover:underline font-semibold">
                  → Page : CPF Éligibilité - Comment rendre vos formations finançables
                </Link>
              </li>
              <li>
                <Link to="/qualiopi" className="text-red-600 hover:underline font-semibold">
                  → Page : Qualiopi - La certification prérequis pour EDOF
                </Link>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-red-900 mb-6">Faisons fonctionner EDOF pour vous</h2>
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8 mb-8">
            <p className="mb-6 text-lg">
              Eden Conseil Qualité propose un accompagnement clé en main pour votre présence EDOF : 
              création compte, import catalogue, optimisation descriptions, suivi synchronisation, 
              et formation de votre équipe aux mises à jour régulières.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
              >
                Planifier un accompagnement
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] px-8 py-3 rounded-lg font-semibold transition"
              >
                <MessageCircle size={20} />
                Discuter par WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
