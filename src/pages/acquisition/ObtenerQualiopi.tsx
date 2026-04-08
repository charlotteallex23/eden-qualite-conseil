import { Link } from 'react-router-dom';
import { CheckCircle, Clock, FileText, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';
import { config } from '../../config/company';

export default function ObtenerQualiopiPage() {
  useEffect(() => {
    document.title = 'Obtenir Qualiopi : Accompagnement pas à pas | Eden Conseil Qualité';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Obtenir votre certification Qualiopi simplement. Plan étape par étape, documents prêts, accompagnement jusqu\'au succès. Démarrez votre conformité dès aujourd\'hui.');
    
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Obtenir Qualiopi',
      description: 'Service d\'accompagnement complet vers la certification Qualiopi',
      provider: { '@type': 'Organization', name: 'Eden Conseil Qualité' },
      areaServed: 'FR',
      serviceType: 'Conformité et Certification'
    };
    
    let schemaScript = document.querySelector('script[data-page="obtenir-qualiopi"]');
    if (schemaScript) schemaScript.remove();
    
    schemaScript = document.createElement('script');
    (schemaScript as HTMLScriptElement).type = 'application/ld+json';
    schemaScript.setAttribute('data-page', 'obtenir-qualiopi');
    schemaScript.innerHTML = JSON.stringify(schema);
    document.head.appendChild(schemaScript);
  }, []);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600 via-amber-800 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Obtenir votre certification Qualiopi
            <span className="block text-amber-100 text-3xl md:text-4xl font-semibold mt-3">
              sans stress, étape par étape
            </span>
          </h1>
          
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vous souhaitez certifier votre organisme de formation ou vos actions de formation ? 
            Eden Conseil Qualité vous accompagne depuis le diagnostic jusqu'à l'audit, avec un plan clair et des documents prêts.
          </p>

          {/* Preuves rapides */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <CheckCircle size={24} className="text-amber-200" />
                <span className="font-semibold">Accompagnement complet</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <FileText size={24} className="text-amber-200" />
                <span className="font-semibold">Documents et modèles</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5 border border-amber-200/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Clock size={24} className="text-amber-200" />
                <span className="font-semibold">Délais clairs et réalistes</span>
              </div>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => {
                const message = encodeURIComponent('Bonjour, je souhaite obtenir ma certification Qualiopi. Pouvez-vous me proposer un diagnostic gratuit ?');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Obtenir mon diagnostic gratuit
            </button>
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors border-2 border-red-600"
            >
              Prendre rendez-vous
            </Link>
          </div>

          <p className="text-amber-50 text-sm">
            Réponse sous 24h • Pas d'engagement
          </p>
        </div>
      </section>

      {/* LE PROBLÈME */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">
            Pourquoi certifier son organisme seul est difficile ?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Vous avez sûrement remarqué ces défis :
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-600 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-red-600 mb-3 flex items-start gap-3">
                <AlertCircle size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                Comprendre les 6 domaines
              </h3>
              <p className="text-gray-700">
                Qualiopi évalue 6 domaines avec des critères pointus et imbriqués. Comment savoir si vous êtes vraiment conforme ?
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-red-600 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-red-600 mb-3 flex items-start gap-3">
                <AlertCircle size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                Préparer les documents
              </h3>
              <p className="text-gray-700">
                Nombreux dossiers à constituer : manuel qualité, procédures, BPF, preuves d'évaluation. Quelle est la liste complète ?
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-red-600 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-red-600 mb-3 flex items-start gap-3">
                <AlertCircle size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                Collecter les preuves
              </h3>
              <p className="text-gray-700">
                Feuilles de présence, évaluations, satisfaction apprenant, insertion professionnel... Comment justifier efficacement ?
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-red-600 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-red-600 mb-3 flex items-start gap-3">
                <AlertCircle size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                Choisir le bon certificateur
              </h3>
              <p className="text-gray-700">
                Des dizaines d'organismes certificateurs. Lequel maîtrise vraiment votre domaine d'activité ?
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-red-600 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-red-600 mb-3 flex items-start gap-3">
                <AlertCircle size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                Respecter les délais
              </h3>
              <p className="text-gray-700">
                Le processus s'étire sur plusieurs mois. Comment rester organisé et ne rien oublier en route ?
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-red-600 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-red-600 mb-3 flex items-start gap-3">
                <AlertCircle size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                Gérer la charge interne
              </h3>
              <p className="text-gray-700">
                Impliquer l'équipe, harmoniser les processus, documenter. C'est chronophage et peut détourner votre cœur de métier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LA SOLUTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-2 text-center">
            Notre méthode : 5 étapes pour obtenir Qualiopi
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Un parcours clair, sans improvisation, avec un support constant.
          </p>

          <div className="space-y-8">
            {/* Étape 1 */}
            <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-lg p-8 border-l-4 border-red-600">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-red-600 mb-3">
                    Audit diagnostique complet
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Nous analysons vos processus actuels, vos documents, votre organisation. On vous restitue un diagnostic clair : où vous êtes, ce qu'il manque, par où commencer. Pas de surprise lors de l'audit réel.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Évaluation des 6 domaines Qualiopi</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Identification des écarts et priorités</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Rapport écrit + recommandations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-lg p-8 border-l-4 border-red-600">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-red-600 mb-3">
                    Plan d'action personnalisé (30-60-90 jours)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    On élabore une roadmap détaillée : quoi faire, dans quel ordre, sous quel délai, avec quel impact. Vous saurez exactement où vous allez, étape par étape.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Roadmap 30-60-90 jours détaillée</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Hiérarchisation des actions (critical path)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Allocation des responsabilités et délais</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-lg p-8 border-l-4 border-red-600">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-red-600 mb-3">
                    Documentation et modèles
                  </h3>
                  <p className="text-gray-700 mb-4">
                    On vous fournit les modèles éprouvés : manuel qualité, procédures, politique, checklists. Vous adaptez à votre contexte, pas besoin de tout inventer. Gain de temps et cohérence garantis.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Manuel qualité structuré et complet</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>5+ procédures clés (RH, pédagogie, qualité, etc.)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Modèles d'évaluation, satisfaction, BPF</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-lg p-8 border-l-4 border-red-600">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-red-600 mb-3">
                    Mise en œuvre et accompagnement
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Vous n'êtes pas seul. On vous aide à déployer : formation d'équipe, harmonisation interne, collecte de preuves, gestion des incidents. Nous sommes vos eyes &amp; ears.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Ateliers de formation interne avec votre équipe</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Suivi régulier (check-ins hebdos/bihebdos)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Support sur les blocages et questions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Étape 5 */}
            <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-lg p-8 border-l-4 border-red-600">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold text-lg">
                    5
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-red-600 mb-3">
                    Pré-audit, correction, puis audit final
                  </h3>
                  <p className="text-gray-700 mb-4">
                    On joue l'auditeur avant le certificateur. Audit blanc, on vous dit exactement ce qui pose problème, vous corrigez. Puis vous êtes prêt(e) pour l'audit réel, sereinement.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Audit blanc complet (simulation d'audit)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Plan correctif sur les non-conformités identifiées</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Préparation des auditeurs, simulation entretiens</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVRABLES */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-2 text-center">
            Ce que vous recevez concrètement
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Pas juste du conseil : des documents actionnables, des modèles, des checklists.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex gap-3 mb-4">
                <FileText className="text-red-600 flex-shrink-0" size={24} />
                <h3 className="font-bold text-red-600 text-lg">Rapport diagnostic</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Document écrit de 15-20 pages : analyse de chaque domaine, écarts identifiés, forces, faiblesses, recommandations chiffrées.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex gap-3 mb-4">
                <FileText className="text-red-600 flex-shrink-0" size={24} />
                <h3 className="font-bold text-red-600 text-lg">Roadmap 30-60-90</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Planning détaillé avec étapes, responsables, délais, dépendances. Priorisé par impact et urgence.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex gap-3 mb-4">
                <FileText className="text-red-600 flex-shrink-0" size={24} />
                <h3 className="font-bold text-red-600 text-lg">Manuel qualité (trame + accompagnement)</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Structure complète avec sections pré-rédigées. Vous adaptez au contexte, on valide la cohérence.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex gap-3 mb-4">
                <FileText className="text-red-600 flex-shrink-0" size={24} />
                <h3 className="font-bold text-red-600 text-lg">5+ procédures clés</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Procédures de recrutement, pédagogie, évaluation, réclamations, qualité. Adaptables à votre taille.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex gap-3 mb-4">
                <FileText className="text-red-600 flex-shrink-0" size={24} />
                <h3 className="font-bold text-red-600 text-lg">Modèles d'outils</h3>
              </div>
              <p className="text-gray-700 text-sm">
                BPF, questionnaires satisfaction, feuilles de présence, grilles d'évaluation, suivi insertion.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex gap-3 mb-4">
                <FileText className="text-red-600 flex-shrink-0" size={24} />
                <h3 className="font-bold text-red-600 text-lg">Checklist de conformité</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Checklist actionnable, domaine par domaine. Suivi de la progression, rien ne sera oublié.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex gap-3 mb-4">
                <FileText className="text-red-600 flex-shrink-0" size={24} />
                <h3 className="font-bold text-red-600 text-lg">Audit blanc (pré-audit)</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Simulation complète de l'audit par notre expert. Rapport d'audit blanc + plan de correction.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex gap-3 mb-4">
                <FileText className="text-red-600 flex-shrink-0" size={24} />
                <h3 className="font-bold text-red-600 text-lg">Ateliers + accompagnement</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Formation d'équipe, sessions Q&amp;A, support sur la mise en place. Pas de blocage silencieux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREUVES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-2 text-center">
            Pourquoi nous faire confiance ?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Nos clients réussissent parce que nous appliquons une méthode éprouvée.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="font-bold text-red-600 text-lg mb-4">
                Expertise Qualiopi reconnue
              </h3>
              <p className="text-gray-700 mb-4">
                Notre équipe a accompagné 50+ organismes vers la certification. 
                Nous connaissons les pièges, les erreurs fréquentes, comment les certificateurs évaluent vraiment.
              </p>
              <p className="text-gray-600 text-sm">
                • Experts reconnus dans l'écosystème formation
                <br />
                • Suivi continu de l'évolution des critères Qualiopi
                <br />
                • Partenariat avec certificateurs majeurs
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="font-bold text-red-600 text-lg mb-4">
                Méthode structurée, pas d'improvisation
              </h3>
              <p className="text-gray-700 mb-4">
                Chaque accompagnement suit un process défini : diagnostic, roadmap, documentation, suivi, audit blanc. 
                Zéro risque d'oublier une étape ou de dériver.
              </p>
              <p className="text-gray-600 text-sm">
                • Processus calibré et documenté
                <br />
                • Outils et modèles éprouvés
                <br />
                • Jalons et livrables clairs
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="font-bold text-red-600 text-lg mb-4">
                Transparence sur les délais réalistes
              </h3>
              <p className="text-gray-700 mb-4">
                On ne vous vend pas "Qualiopi en 2 mois" ou de fausses promesses. 
                Nous planifions selon votre contexte : 3-6 mois typiquement, avec des étapes claires.
              </p>
              <p className="text-gray-600 text-sm">
                • Diagnostique → Planification : 2-3 semaines
                <br />
                • Mise en œuvre & docs : 4-8 semaines
                <br />
                • Audit blanc & corrections : 2-4 semaines
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="font-bold text-red-600 text-lg mb-4">
                Engagement sur le succès
              </h3>
              <p className="text-gray-700 mb-4">
                Nous gagnons à votre succès. Si l'audit blanc révèle des problèmes, on les fixe ensemble avant le vrai audit. 
                Votre certif, c'est notre certification à nous aussi.
              </p>
              <p className="text-gray-600 text-sm">
                • Soutien jusqu'au succès
                <br />
                • Correctifs inclus si besoin
                <br />
                • Post-audit : conseils améliorations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIONS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-2 text-center">
            Vos questions, nos réponses
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Les objections les plus fréquentes. Soyons honnêtes.
          </p>

          <div className="space-y-6">
            <details className="bg-white rounded-lg border border-gray-200 p-6 open:bg-amber-50 cursor-pointer group">
              <summary className="font-bold text-red-600 text-lg flex justify-between items-center">
                Quel est le coût exactement ?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 space-y-3">
                <p>
                  Le coût dépend de votre contexte : taille, maturité actuelle, urgence. 
                  Un micro-organisme : ~2-5k€. Un organisme structuré : ~5-12k€. 
                </p>
                <p>
                  Ce devis couvre : audit, roadmap, docs, accompagnement, audit blanc, suivi. 
                  N'est pas inclus : formation continue post-audit ou certificateur (payé directement au certificateur).
                </p>
                <p className="font-semibold">
                  → Demandez un devis gratuit, sans engagement.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg border border-gray-200 p-6 open:bg-amber-50 cursor-pointer group">
              <summary className="font-bold text-red-600 text-lg flex justify-between items-center">
                Combien de temps, vraiment ?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 space-y-3">
                <p>
                  <strong>Diagnostic + Roadmap :</strong> 2-3 semaines
                  <br />
                  <strong>Mise en œuvre :</strong> 4-12 semaines selon votre charge interne
                  <br />
                  <strong>Audit blanc + corrections :</strong> 2-4 semaines
                  <br />
                  <strong>Total typique :</strong> 3-6 mois
                </p>
                <p>
                  Si vous êtes très matures : 2-3 mois. Si vous partez de zéro : 6-9 mois. 
                  On adapte au réel, pas à une promesse marketing.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg border border-gray-200 p-6 open:bg-amber-50 cursor-pointer group">
              <summary className="font-bold text-red-600 text-lg flex justify-between items-center">
                Et si l'audit se passe mal ?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 space-y-3">
                <p>
                  C'est exactement pour ça qu'on fait un audit blanc avant. 
                  Si des problèmes apparaissent en pré-audit, on les identifie, on planifie les corrections ensemble, vous les mettez en place, puis on re-teste.
                </p>
                <p>
                  L'audit blanc élimine les surprises. Vous arrivez à l'audit réel avec la certitude que vous êtes conforme.
                </p>
                <p className="text-sm text-gray-600">
                  Note : La certification n'est jamais "garantie" (c'est l'auditeur qui décide). 
                  Mais avec une bonne préparation, le risque est minimisé.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg border border-gray-200 p-6 open:bg-amber-50 cursor-pointer group">
              <summary className="font-bold text-red-600 text-lg flex justify-between items-center">
                Ça charge beaucoup mon équipe ?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 space-y-3">
                <p>
                  Oui, un peu : il faut mobiliser du temps pour les ateliers, la documentation, la collecte de preuves. 
                  Mais on l'étalonne pour minimiser la perturbation.
                </p>
                <p>
                  Typiquement : 2-4h par semaine d'implication clé. On vous aide à prioriser pour que ce soit sans surcharge.
                </p>
                <p>
                  Et après le 1er audit, les processus sont en place : la charge décroît rapidement.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg border border-gray-200 p-6 open:bg-amber-50 cursor-pointer group">
              <summary className="font-bold text-red-600 text-lg flex justify-between items-center">
                Comment choisissez-vous le certificateur ?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 space-y-3">
                <p>
                  On vous propose des certificateurs qualifiés, proches de votre domaine (exemple : CNEFOP, Dekra, Bureau Veritas...). 
                  Vous restez maître du choix. On vous aide à comparer sur : prix, délais, expertise, réputation.
                </p>
                <p>
                  C'est important : le certificateur doit connaître votre secteur pour vraiment évaluer votre pertinence.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg border border-gray-200 p-6 open:bg-amber-50 cursor-pointer group">
              <summary className="font-bold text-red-600 text-lg flex justify-between items-center">
                Et après l'audit ? Support continu ?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 space-y-3">
                <p>
                  Après l'audit initial, on vous accompagne sur : audits de surveillance (tous les ans), 
                  amélioration continue des processus, adaptation aux évolutions réglementaires.
                </p>
                <p>
                  Vous pouvez nous solliciter pour des packs "maintenance" annuels : veille, audits internes, pré-audits, formation équipe.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-2 text-center">
            Questions fréquentes sur Qualiopi
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Pour vous éclairer avant de vous engager.
          </p>

          <div className="space-y-4">
            {[
              {
                q: 'Qualiopi est obligatoire ?',
                a: 'Oui, si vous dispenserez des formations et êtes soumis à la contribution unique de formation (CUF) ou vous souhaitez accéder aux fonds publics (CPF, apprentissage, plan de formation...).'
              },
              {
                q: 'Quels sont les 6 domaines Qualiopi ?',
                a: 'Domaine 1 : Conditions générales | Domaine 2 : Ressources pédagogiques | Domaine 3 : Ingénierie pédagogique | Domaine 4 : Suivi et évaluation | Domaine 5 : Gestion et administration | Domaine 6 : Adéquation parcours professionnel.'
              },
              {
                q: 'Combien coûte Qualiopi ?',
                a: 'Il y a deux coûts : (1) Notre accompagnement : 2-12k€ selon votre contexte. (2) Le certificateur : 1-5k€ en moyenne. Au total : 3-17k€ environ.'
              },
              {
                q: 'Qui peut être auditeur Qualiopi ?',
                a: 'Les organismes certificateurs accrédités (Dekra, Bureau Veritas, CNEFOP, etc.). Ils sont formés et tiers à votre organisme pour assurer l\'impartialité.'
              },
              {
                q: 'Audit sur site ou à distance ?',
                a: 'Les deux sont possibles. Audit sur site : plus complet, présence physique. À distance : plus flexible. Les deux sont valides pour Qualiopi.'
              },
              {
                q: 'Si on échoue l\'audit ?',
                a: 'Vous recevez un rapport avec les non-conformités. Vous avez un délai (généralement 3-6 mois) pour les corriger, puis un audit de suivi. Rarement un "échec définitif" ; plutôt une correction à apporter.'
              },
              {
                q: 'Qualiopi est valide combien de temps ?',
                a: '3 ans. Après, audit de renouvellement. Entre les deux : audits de surveillance (annuels) si applicable.'
              },
              {
                q: 'Comment mettre en place les indicateurs d\'insertion professionnelle ?',
                a: 'Suivi de vos apprenants 6 mois après fin de formation : sont-ils en emploi, en formation, autre ? On vous propose des outils pour tracker sans surcharge.'
              },
              {
                q: 'Peut-on certifier partiellement (ex : une seule formation) ?',
                a: 'Oui, Qualiopi couvre un "périmètre de certification" que vous définissez. Peut être une formation, plusieurs, ou tout votre catalogue.'
              },
              {
                q: 'Qui doit être impliqué dans la préparation ?',
                a: 'Au minimum : dirigeant, responsable pédagogique, responsable administratif. Idéalement : formateurs aussi pour qu\'ils vivent le processus.'
              }
            ].map((item, idx) => (
              <details key={idx} className="bg-gray-50 rounded-lg border border-gray-200 p-6 open:bg-amber-50 cursor-pointer group">
                <summary className="font-semibold text-red-600 flex justify-between items-center">
                  {item.q}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-b from-red-600 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Prêt à obtenir votre Qualiopi ?
          </h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            Nous avons aidé 50+ organismes. Votre tour. Commencez par un diagnostic gratuit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => {
                const message = encodeURIComponent('Bonjour, je souhaite un diagnostic gratuit pour ma certification Qualiopi.');
                window.location.href = `https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${message}`;
              }}
              className="inline-block bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Diagnostic gratuit (WhatsApp)
            </button>
            <Link
              to="/contact"
              className="inline-block bg-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-500 transition-colors border-2 border-white"
            >
              Ou prendre RDV
            </Link>
          </div>

          <p className="text-amber-100 text-sm">
            Réponse sous 24h • Sans engagement • Gratuit
          </p>
        </div>
      </section>

      {/* RESSOURCES */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-red-600 mb-6">Ressources complémentaires</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/blog/qualiopi-2025"
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-red-600 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-red-600 text-sm">
                Qualiopi 2025 : Nouvelles exigences
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Préparez-vous aux évolutions 2025
              </p>
            </Link>
            <Link
              to="/blog/checklist-qualiopi"
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-red-600 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-red-600 text-sm">
                Checklist Qualiopi
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Liste actionnable, domaine par domaine
              </p>
            </Link>
            <Link
              to="/contact"
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-red-600 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-red-600 text-sm">
                Discuter de votre cas
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Échange directe avec un expert
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
