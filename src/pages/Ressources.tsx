import { Download, ExternalLink, FileText, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { config } from '../config/company';

export function Ressources() {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Bonjour, je suis intéressé par les ressources et guides de Eden Conseil Qualité."
    );
    window.open(`https://wa.me/${config.company.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-red-900 mb-6">
            Ressources et guides pour votre organisme de formation
          </h1>
          <p className="text-xl text-amber-800 mb-8">
            Téléchargez gratuitement nos modèles, guides et checklist pour réussir votre développement
          </p>
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            <MessageCircle size={20} />
            Nous envoyer un message WhatsApp
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        {/* Guides Téléchargeables */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-red-900 mb-8">📥 Guides téléchargeables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Guide 1 */}
            <div className="border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Checklist Qualiopi complète</h3>
                  <p className="text-sm text-gray-600 mt-1">Modèle Excel complet avec tous les critères</p>
                </div>
                <Download className="text-red-600" size={24} />
              </div>
              <p className="text-gray-700 text-sm mb-4">
                116 points de vérification couvrant tous les 6 domaines Qualiopi. 
                Outil d'auto-diagnostic avant audit.
              </p>
              <button className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2">
                <Download size={16} />
                Télécharger (PDF, 2.4 MB)
              </button>
            </div>

            {/* Guide 2 */}
            <div className="border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Plan d'action Qualiopi</h3>
                  <p className="text-sm text-gray-600 mt-1">Modèle de plan d'action avec timeline</p>
                </div>
                <Download className="text-red-600" size={24} />
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Template pour organiser vos corrections. Incluent tâches, responsables, 
                délais et suivi de conformité.
              </p>
              <button className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2">
                <Download size={16} />
                Télécharger (Excel, 850 KB)
              </button>
            </div>

            {/* Guide 3 */}
            <div className="border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Guide EDOF et MonCompteFormation</h3>
                  <p className="text-sm text-gray-600 mt-1">Guide complet d'enregistrement étape par étape</p>
                </div>
                <Download className="text-red-600" size={24} />
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Instructions détaillées pour créer compte EDOF, importer formations, 
                optimiser descriptions pour la visibilité.
              </p>
              <button className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2">
                <Download size={16} />
                Télécharger (PDF, 3.2 MB)
              </button>
            </div>

            {/* Guide 4 */}
            <div className="border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Modèle BPF - Bilan Pédagogique</h3>
                  <p className="text-sm text-gray-600 mt-1">Template pour remplir votre BPF annuel</p>
                </div>
                <Download className="text-red-600" size={24} />
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Guide complet du BPF avec explication de chaque section. 
                Épargnez du temps dans la préparation de votre déclaration annuelle.
              </p>
              <button className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2">
                <Download size={16} />
                Télécharger (Excel, 1.1 MB)
              </button>
            </div>

            {/* Guide 5 */}
            <div className="border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Stratégie tarifaire CPF</h3>
                  <p className="text-sm text-gray-600 mt-1">Analyse comparative et recommandations prix</p>
                </div>
                <Download className="text-red-600" size={24} />
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Benchmarking des tarifs CPF par secteur. 
                Incluent analyses compétitives et stratégies de positionnement prix.
              </p>
              <button className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2">
                <Download size={16} />
                Télécharger (PDF, 1.8 MB)
              </button>
            </div>

            {/* Guide 6 */}
            <div className="border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Processus internes formation</h3>
                  <p className="text-sm text-gray-600 mt-1">Templates de processus documentés</p>
                </div>
                <Download className="text-red-600" size={24} />
              </div>
              <p className="text-gray-700 text-sm mb-4">
                6 modèles : accueil apprenant, suivi pédagogique, évaluation, gestion absentéisme, 
                rupture contrat, insertion post-formation.
              </p>
              <button className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2">
                <Download size={16} />
                Télécharger (ZIP, 4.5 MB)
              </button>
            </div>
          </div>
        </div>

        {/* Articles et Contenus */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-red-900 mb-8">📚 Articles et contenus du blog</h2>
          <div className="space-y-4">
            <a href="/blog/qualiopi-2025-exigences" className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-lg hover:border-violet-300 transition">
              <FileText className="text-red-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 hover:text-red-600">Qualiopi 2025 : Les nouvelles exigences</h3>
                <p className="text-sm text-gray-600">Anticiper les changements réglementaires et vous préparer dès maintenant</p>
                <span className="text-xs text-gray-500 mt-2 inline-block">12 min de lecture</span>
              </div>
            </a>

            <a href="/blog/cpf-eligibilite-formations" className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-lg hover:border-violet-300 transition">
              <FileText className="text-red-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 hover:text-red-600">Comment rendre vos formations éligibles au CPF</h3>
                <p className="text-sm text-gray-600">Guide complet pour accéder au marché CPF et multiplier votre chiffre d'affaires</p>
                <span className="text-xs text-gray-500 mt-2 inline-block">11 min de lecture</span>
              </div>
            </a>

            <a href="/blog/edof-guide-complet" className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-lg hover:border-violet-300 transition">
              <FileText className="text-red-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 hover:text-red-600">EDOF : Guide complet de l'enregistrement</h3>
                <p className="text-sm text-gray-600">Comprendre EDOF et maximiser votre visibilité auprès des apprenants</p>
                <span className="text-xs text-gray-500 mt-2 inline-block">12 min de lecture</span>
              </div>
            </a>

            <a href="/blog/audit-organisme-cfa" className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-lg hover:border-violet-300 transition">
              <FileText className="text-red-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 hover:text-red-600">Audit de faisabilité CFA : Comment bien préparer votre organisme</h3>
                <p className="text-sm text-gray-600">Les étapes clés pour transformer votre formation en centre d'apprentissage</p>
                <span className="text-xs text-gray-500 mt-2 inline-block">10 min de lecture</span>
              </div>
            </a>

            <a href="/blog/bpf-mode-emploi" className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-lg hover:border-violet-300 transition">
              <FileText className="text-red-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 hover:text-red-600">BPF 2025 : Mode d'emploi du Bilan Pédagogique Financier</h3>
                <p className="text-sm text-gray-600">Comprendre le BPF et remplir votre déclaration annuelle correctement</p>
                <span className="text-xs text-gray-500 mt-2 inline-block">8 min de lecture</span>
              </div>
            </a>
          </div>
        </div>

        {/* Pages Détaillées */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-red-900 mb-8">🎯 Pages et guides détaillés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/qualiopi" className="border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg hover:border-violet-400 transition">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Qualiopi - La certification qualité</h3>
              <p className="text-gray-700 text-sm mb-4">
                Tout ce qu'il faut savoir sur la certification : domaines, étapes, coûts, avantages et pièges à éviter.
              </p>
              <ExternalLink className="text-red-600" size={18} />
            </a>

            <a href="/cpf-eligibilite" className="border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg hover:border-violet-400 transition">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">CPF Éligibilité - Guide complet</h3>
              <p className="text-gray-700 text-sm mb-4">
                Guide exhaustif pour rendre vos formations finançables par le CPF et atteindre le marché des salariés.
              </p>
              <ExternalLink className="text-red-600" size={18} />
            </a>

            <a href="/edof-referencement" className="border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg hover:border-violet-400 transition">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">EDOF - Enregistrement et optimisation</h3>
              <p className="text-gray-700 text-sm mb-4">
                Guide pour enregistrer votre organisme sur EDOF, importer formations et optimiser votre visibilité.
              </p>
              <ExternalLink className="text-red-600" size={18} />
            </a>

            <a href="/contact" className="border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg hover:border-violet-400 transition bg-amber-50">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Nous contacter pour accompagnement</h3>
              <p className="text-gray-700 text-sm mb-4">
                Besoin d'aide pour mettre en place ou optimiser ces ressources ? Contactez notre équipe d'experts.
              </p>
              <ExternalLink className="text-red-600" size={18} />
            </a>
          </div>
        </div>

        {/* Webinaires et Formations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-red-900 mb-8">🎥 Webinaires et formations en ligne</h2>
          <div className="bg-amber-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <p className="text-gray-700 mb-4">
              Eden Conseil Qualité organise régulièrement des webinaires gratuits sur :
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• <strong>Qualiopi</strong> : Les dernières évolutions et critères 2025</li>
              <li>• <strong>CPF</strong> : Stratégies d'optimisation et benchmarking</li>
              <li>• <strong>EDOF</strong> : Enregistrement et amélioration de visibilité</li>
              <li>• <strong>BPF</strong> : Préparation et remplissage</li>
              <li>• <strong>CFA</strong> : Transformation et audit faisabilité</li>
            </ul>
            <button
              onClick={() => navigate('/contact')}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              S'inscrire aux prochains webinaires
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-red-900 mb-8">❓ Questions fréquentes</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Les guides sont-ils gratuits ?
              </summary>
              <p className="text-gray-700 mt-3">
                Oui ! Tous nos guides téléchargeables sont gratuits. Aucune inscription ni email nécessaire.
              </p>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Quels formats pour les fichiers ?
              </summary>
              <p className="text-gray-700 mt-3">
                PDF pour les guides et checklist de lecture, Excel/Sheets pour les templates éditables. 
                Tous les formats sont compatibles Windows et Mac.
              </p>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Puis-je personnaliser les templates ?
              </summary>
              <p className="text-gray-700 mt-3">
                Absolument ! Les fichiers Excel sont conçus pour être adaptés. 
                Consultez notre équipe si vous avez besoin d'aide pour la personnalisation.
              </p>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Comment rester à jour des nouvelles ressources ?
              </summary>
              <p className="text-gray-700 mt-3">
                Consultez cette page régulièrement ou contactez-nous pour être notifié des nouveaux guides.
              </p>
            </details>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Besoin d'un accompagnement sur-mesure ?</h2>
          <p className="mb-6 text-lg">
            Nos guides et templates vous donnent les fondations. Notre équipe d'experts peut aller plus loin 
            avec un accompagnement complètement personnalisé à votre organisme.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
            >
              Demander une consultation
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] px-8 py-3 rounded-lg font-semibold transition"
            >
              <MessageCircle size={20} />
              Nous écrire sur WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
