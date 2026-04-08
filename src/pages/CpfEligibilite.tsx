import { MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { config } from '../config/company';

export function CpfEligibilite() {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Bonjour, je souhaite rendre mes formations éligibles au CPF. Pouvez-vous m'expliquer le processus ?"
    );
    window.open(`https://wa.me/${config.company.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-red-900 mb-6">
            CPF Éligibilité : Guide complet pour les organismes de formation
          </h1>
          <p className="text-xl text-amber-800 mb-8">
            Comment accéder au marché du CPF et augmenter significativement votre chiffre d'affaires
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
          <h2 className="text-3xl font-bold text-red-900 mb-6">Pourquoi le CPF est crucial pour votre croissance</h2>
          <p className="text-lg text-gray-700 mb-8">
            Le CPF (Compte Personnel de Formation) représente une opportunité majeure : des millions de salariés 
            disposent de droits de formation non utilisés. Rendre vos formations éligibles au CPF multiplie vos canaux de vente 
            et augmente drastiquement votre visibilité.
          </p>

          <div className="bg-amber-50 border-l-4 border-red-600 p-6 mb-8">
            <h3 className="text-xl font-bold text-red-900 mb-4">Données clés</h3>
            <ul className="space-y-2 text-gray-700">
              <li>📊 6,5 milliards d'euros disponibles par an sur le CPF</li>
              <li>👥 Plus de 30 millions de salariés avec droits CPF</li>
              <li>💰 Taux de financement : jusqu'à 100% de la formation</li>
              <li>🚀 Source de revenu croissante pour 70% des organismes</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-red-900 mb-6">Les 3 prérequis essentiels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg transition">
              <CheckCircle className="text-red-600 mb-3" size={32} />
              <h3 className="font-bold text-gray-900 mb-2 text-lg">1. Certification Qualiopi</h3>
              <p className="text-gray-700">
                Obligatoire pour accéder à MonCompteFormation et recevoir des financements CPF.
              </p>
            </div>

            <div className="border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg transition">
              <CheckCircle className="text-red-600 mb-3" size={32} />
              <h3 className="font-bold text-gray-900 mb-2 text-lg">2. Formation certifiée</h3>
              <p className="text-gray-700">
                Une certification RNCP/RS officielle ou équivalente reconnu par l'État.
              </p>
            </div>

            <div className="border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg transition">
              <CheckCircle className="text-red-600 mb-3" size={32} />
              <h3 className="font-bold text-gray-900 mb-2 text-lg">3. Déclaration DREETS</h3>
              <p className="text-gray-700">
                Enregistrement activité formation auprès de l'autorité régionale.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-red-900 mb-6">Types de formations éligibles au CPF</h2>
          <div className="space-y-4 mb-8">
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">✅ Formations certifiantes RNCP</h4>
              <p className="text-gray-700">
                Diplômes, titres professionnels enregistrés au Répertoire National des Certifications Professionnelles.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">✅ Certifications de Qualification Professionnelle (CQP)</h4>
              <p className="text-gray-700">
                Certifications sectorielles créées par les branches professionnelles.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">✅ Titres à registre obligatoire</h4>
              <p className="text-gray-700">
                Certifications inscrites au Répertoire Spécifique (anciennement RS) de France Compétences.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">✅ Formations certifiantes publiques</h4>
              <p className="text-gray-700">
                Permis de conduire, bilan de compétences, VAE (validation d'acquis expérience).
              </p>
            </div>

            <div className="border rounded-lg p-4 bg-red-50">
              <h4 className="font-bold text-gray-900 mb-2">❌ Non-éligibles : Formations qualifiantes</h4>
              <p className="text-gray-700">
                Formations sans certification officielle (ex: formations internes, sensibilisations générales).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-red-900 mb-6">Les 4 étapes vers l'éligibilité CPF</h2>
          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-600 text-white font-bold text-lg">1</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Créer ou certifier votre formation</h4>
                <p className="text-gray-700 mb-2">
                  Si vous n'avez pas encore de certification :
                </p>
                <ul className="text-gray-700 ml-4">
                  <li>• Déposer dossier RNCP (6-9 mois avant homologation)</li>
                  <li>• Ou créer RS auprès France Compétences (3-6 mois)</li>
                  <li>• Durée min: 25h pour RNCP, 120h pour CQP</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-600 text-white font-bold text-lg">2</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Obtenir certification Qualiopi</h4>
                <p className="text-gray-700">
                  Si pas encore Qualiopi certifiée : audit blanc, corrections, puis audit initial (3-5 mois).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-600 text-white font-bold text-lg">3</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">S'inscrire sur EDOF et MonCompteFormation</h4>
                <p className="text-gray-700 mb-2">
                  Deux étapes critiques pour la visibilité :
                </p>
                <ul className="text-gray-700 ml-4">
                  <li>• EDOF : plateforme gouvernementale (gratuite)</li>
                  <li>• MonCompteFormation : où les apprenants cherchent</li>
                  <li>• Tarif horaire justifié et transparent</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-600 text-white font-bold text-lg">4</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Respecter la charte CPF</h4>
                <p className="text-gray-700">
                  Délai de confirmation court, gestion des abandons, remboursement si nécessaire, support client réactif.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-red-900 mb-6">La stratégie tarifaire CPF</h2>
          <div className="bg-gray-50 border rounded-lg p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Tarification moyenne par secteur (tarif horaire)</h3>
            <table className="w-full mb-4">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 text-gray-900 font-bold">Secteur / Type de formation</th>
                  <th className="text-right py-2 text-gray-900 font-bold">Tarif horaire moyen</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 text-gray-700">Bureautique / Digital</td>
                  <td className="text-right text-gray-700">15-25€/h</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 text-gray-700">Langues étrangères</td>
                  <td className="text-right text-gray-700">20-35€/h</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 text-gray-700">Management / Soft skills</td>
                  <td className="text-right text-gray-700">25-40€/h</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 text-gray-700">Techniques métier</td>
                  <td className="text-right text-gray-700">30-50€/h</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 text-gray-700">Certifications professionnelles</td>
                  <td className="text-right text-gray-700">40-70€/h</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600 italic">
              Note : Ces tarifs varient selon la région, la durée et la renommée de l'organisme.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-red-900 mb-6">Erreurs courantes et comment les éviter</h2>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-gray-900">Tarif trop bas = problèmes de financement</p>
                <p className="text-sm text-gray-700">
                  Un prix anormalement bas suscite des soupçons et peut mener à des investigations.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-gray-900">Délai de confirmation long = apprenants perdus</p>
                <p className="text-sm text-gray-700">
                  48-72h max. Au-delà, les candidats CPF abandonnent et vont voir la concurrence.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-gray-900">Description incomplète = visibilité réduite</p>
                <p className="text-sm text-gray-700">
                  Les apprenants CPF veulent tous les détails. Une description vague = pas de candidatures.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-gray-900">Absence EDOF = perte de 80% des candidats</p>
                <p className="text-sm text-gray-700">
                  EDOF est la porte d'entrée. Sans présence, vous êtes invisible pour les financeurs.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-red-900 mb-6">Impact financier : Avant/Après CPF</h2>
          <div className="bg-amber-50 rounded-lg p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-amber-100">
                  <th className="text-left py-3 px-3 text-gray-900 font-bold">Métrique</th>
                  <th className="text-center py-3 px-3 text-gray-900 font-bold">Avant CPF</th>
                  <th className="text-center py-3 px-3 text-gray-900 font-bold">Après CPF (1 an)</th>
                  <th className="text-center py-3 px-3 text-gray-900 font-bold">Gains</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-3 text-gray-700 font-semibold">Apprenants/an</td>
                  <td className="text-center py-3 px-3 text-gray-700">50-100</td>
                  <td className="text-center py-3 px-3 text-gray-700 font-bold text-red-600">150-300</td>
                  <td className="text-center py-3 px-3 text-red-600 font-bold">+150-200%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3 text-gray-700 font-semibold">Chiffre d'affaires</td>
                  <td className="text-center py-3 px-3 text-gray-700">50k-100k€</td>
                  <td className="text-center py-3 px-3 text-gray-700 font-bold text-red-600">150k-300k€</td>
                  <td className="text-center py-3 px-3 text-red-600 font-bold">+150-200%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3 text-gray-700 font-semibold">Coût acquisition apprenant</td>
                  <td className="text-center py-3 px-3 text-gray-700">500-1000€</td>
                  <td className="text-center py-3 px-3 text-gray-700 font-bold text-red-600">50-100€</td>
                  <td className="text-center py-3 px-3 text-red-600 font-bold">-80-90%</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-gray-700 font-semibold">Marge nette</td>
                  <td className="text-center py-3 px-3 text-gray-700">15-20%</td>
                  <td className="text-center py-3 px-3 text-gray-700 font-bold text-red-600">30-40%</td>
                  <td className="text-center py-3 px-3 text-red-600 font-bold">+100%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-red-900 mb-6">Ressources et articles connexes</h2>
          <div className="bg-amber-50 rounded-lg p-6 mb-8">
            <p className="mb-4 text-gray-700 font-semibold">Pour approfondir votre stratégie CPF :</p>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/cpf-eligibilite-formations" className="text-red-600 hover:underline font-semibold">
                  → Article : CPF Éligibilité - Guide complet
                </Link>
              </li>
              <li>
                <Link to="/blog/edof-guide-complet" className="text-red-600 hover:underline font-semibold">
                  → Article : EDOF - Guide complet de l'enregistrement
                </Link>
              </li>
              <li>
                <Link to="/qualiopi" className="text-red-600 hover:underline font-semibold">
                  → Page : Qualiopi - La certification qualité incontournable
                </Link>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-red-900 mb-6">Passons à l'action ensemble</h2>
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8 mb-8">
            <p className="mb-6 text-lg">
              Eden Conseil Qualité a aidé plus de 200 organismes à devenir éligibles CPF et à multiplier leur chiffre d'affaires. 
              Nous gérons tout : certification Qualiopi, création formations, inscription EDOF, optimisation descriptions, suivi post-publication.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
              >
                Planifier un audit CPF
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
