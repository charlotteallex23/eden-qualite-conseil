import { MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { config } from '../config/company';

export function Qualiopi() {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Bonjour, je souhaite en savoir plus sur la certification Qualiopi pour mon organisme de formation."
    );
    window.open(`https://wa.me/${config.company.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-red-600 mb-6">
            Qualiopi : La certification qualité des organismes de formation
          </h1>
          <p className="text-xl text-amber-800 mb-8">
            Tout ce que vous devez savoir sur cette certification désormais incontournable en France.
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
          <h2 className="text-3xl font-bold text-red-600 mb-6">Qu'est-ce que Qualiopi ?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Qualiopi est une certification qualité instaurée en 2019 par décret gouvernemental. 
            Elle remplace les anciennes certifications sectorielles (Datadock, ISQ, etc.) pour unifier les standards de qualité 
            auprès de tous les organismes de formation professionnelle en France.
          </p>

          <h2 className="text-3xl font-bold text-red-600 mb-6">Qui est obligatoirement concerné ?</h2>
          <div className="bg-amber-50 border-l-4 border-red-600 p-6 mb-8">
            <p className="text-gray-700 mb-4"><strong>Tous les organismes de formation qui :</strong></p>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Ont une déclaration d'activité auprès de la DREETS</li>
              <li>✅ Reçoivent des apprenants en financement public (CPF, OPCO, Région, État)</li>
              <li>✅ Proposent des formations professionnelles continues</li>
              <li>✅ Emploient des formateurs salariés ou vacataires</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-red-600 mb-6">Les 6 domaines de Qualiopi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Domaine 1 : Conditions générales</h3>
                  <p className="text-gray-700">Gouvernance, accessibilité aux personnes handicapées, inclusivité, transparence tarifaire.</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Domaine 2 : Ressources</h3>
                  <p className="text-gray-700">Formateurs qualifiés, outils pédagogiques, moyens techniques, environnement adaptés.</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Domaine 3 : Pédagogie</h3>
                  <p className="text-gray-700">Adaptation au public, multimodalité, flexibilité pédagogique, méthodes innovantes.</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Domaine 4 : Suivi apprenant</h3>
                  <p className="text-gray-700">Évaluations, accompagnement personnalisé, gestion des ruptures, bilan de fin.</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Domaine 5 : Gestion</h3>
                  <p className="text-gray-700">Processus documentés, gestion financière, conformité administrative, amélioration continue.</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Domaine 6 : Parcours apprenant</h3>
                  <p className="text-gray-700">Insertion professionnelle mesurée, suivi post-formation, impact du parcours validé.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-red-600 mb-6">Les étapes pour obtenir Qualiopi</h2>
          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white font-bold">1</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Audit blanc interne (1-2 mois)</h4>
                <p className="text-gray-700">Faire un diagnostic complet de votre conformité avant l'audit officiel.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white font-bold">2</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Correction et ajustements (1-2 mois)</h4>
                <p className="text-gray-700">Mettre en place les correctifs nécessaires et documenter tout.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white font-bold">3</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Audit initial Qualiopi (1 jour)</h4>
                <p className="text-gray-700">Auditeur officiel vérifie la conformité selon le référentiel national.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white font-bold">4</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Décision d'octroi (2-4 semaines)</h4>
                <p className="text-gray-700">Commission examiner le rapport et délivre la certification (3 ans de validité).</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-red-600 mb-6">Durée et coûts de certification</h2>
          <div className="bg-gray-50 border rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Durée totale</p>
                <p className="text-2xl font-bold text-red-600">3-5 mois</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Coût audit initial</p>
                <p className="text-2xl font-bold text-red-600">€1.200-3.000</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Validité certificat</p>
                <p className="text-2xl font-bold text-red-600">3 années</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              <strong>Note :</strong> Frais d'auditeur + frais d'instruction + accompagnement interne. 
              Eden Conseil Qualité propose des forfaits d'accompagnement complets.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-red-600 mb-6">Avantages de la certification Qualiopi</h2>
          <ul className="space-y-4 mb-8 text-gray-700">
            <li className="flex gap-3">
              <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
              <span><strong>Accès aux financements publics :</strong> CPF, OPCO, Région, État</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
              <span><strong>Crédibilité renforcée :</strong> Vous êtes un organisme de référence</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
              <span><strong>Visibilité sur MonCompteFormation :</strong> Touchez plus d'apprenants</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
              <span><strong>Amélioration continue :</strong> Processus structurés et documentés</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
              <span><strong>Compétitivité accrue :</strong> Vous gagnez des appels d'offres</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-red-600 mb-6">Erreurs courantes à éviter</h2>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-gray-900">Formateurs sans qualifications à jour</p>
                <p className="text-sm text-gray-700">Tous vos formateurs doivent avoir CV et certifications validés</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-gray-900">Documentation incomplète</p>
                <p className="text-sm text-gray-700">Toute action pédagogique ou administrative doit laisser une trace écrite</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-gray-900">Pas d'accessibilité pour handicapés</p>
                <p className="text-sm text-gray-700">Un référent handicap et des mesures concrètes sont obligatoires</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-gray-900">Tarification non-justifiée</p>
                <p className="text-sm text-gray-700">Vous devez pouvoir expliquer pourquoi vos formations coûtent ce prix</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-red-600 mb-6">Ressources et articles connexes</h2>
          <div className="bg-amber-50 rounded-lg p-6 mb-8">
            <p className="mb-4 text-gray-700">Pour approfondir votre connaissance de Qualiopi :</p>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/qualiopi-2025-exigences" className="text-red-600 hover:underline font-semibold">
                  → Article : Qualiopi 2025 - Les nouvelles exigences
                </Link>
              </li>
              <li>
                <Link to="/blog/cpf-eligibilite-formations" className="text-red-600 hover:underline font-semibold">
                  → Article : Comment rendre vos formations éligibles au CPF
                </Link>
              </li>
              <li>
                <Link to="/blog/edof-guide-complet" className="text-red-600 hover:underline font-semibold">
                  → Article : EDOF - Guide complet de l'enregistrement
                </Link>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-red-600 mb-6">Prêt à obtenir Qualiopi ?</h2>
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8 mb-8">
            <p className="mb-6 text-lg">
              Eden Conseil Qualité accompagne depuis 10 ans les organismes de formation vers la certification Qualiopi. 
              Nous gérons tout : de l'audit blanc à la préparation de l'audit officiel, en passant par la mise en conformité complète.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
              >
                Prendre rendez-vous
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] px-8 py-3 rounded-lg font-semibold transition"
              >
                <MessageCircle size={20} />
                Nous envoyer un message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
