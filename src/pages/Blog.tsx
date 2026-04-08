import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
import { config } from '../config/company';

interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const articles: { [key: string]: BlogArticle } = {
  'qualiopi-2024': {
    id: 'qualiopi-2024',
    title: 'Qualiopi 2024 : Les nouveaux critères à connaître',
    excerpt: 'Découvrez les évolutions majeures de la certification Qualiopi et comment vous préparer aux nouveaux critères d\'audit.',
    author: 'Équipe Eden Conseil Qualité',
    date: '15 juin 2024',
    category: 'Certification',
    readTime: '8 min',
    content: `
      <h2>Introduction aux nouveaux critères Qualiopi</h2>
      <p>La certification Qualiopi continue d'évoluer pour mieux répondre aux enjeux de la formation professionnelle. En 2024, de nouveaux critères ont été introduits pour renforcer la qualité des organismes de formation.</p>
      <h3>Les 6 domaines clés</h3>
      <p>Qualiopi s'articule toujours autour de 6 domaines, mais avec un focus renforcé sur :</p>
      <ul>
        <li><strong>Domaine 1 :</strong> Conditions générales — avec une attention particulière à l'accessibilité</li>
        <li><strong>Domaine 2 :</strong> Ressources pédagogiques — qualification des formateurs et outils modernes</li>
        <li><strong>Domaine 3 :</strong> Ingénierie pédagogique — personnalisation des parcours</li>
        <li><strong>Domaine 4 :</strong> Suivi et évaluation — méthodes innovantes d'évaluation</li>
        <li><strong>Domaine 5 :</strong> Gestion administrative et financière — transparence tarifaire</li>
        <li><strong>Domaine 6 :</strong> Complémentarité avec le parcours professionnel</li>
      </ul>
      <h3>Points clés à retenir</h3>
      <p>Les organismes doivent particulièrement porter attention à : la digitalisation des preuves et des processus, l'accessibilité pour les personnes en situation de handicap, la traçabilité des actions de formation, et la satisfaction et l'insertion professionnelle des apprenants.</p>
      <h3>Nos recommandations</h3>
      <p>Chez Eden Conseil Qualité, nous recommandons de : réaliser un audit blanc complet au moins 6 mois avant votre audit initial, mettre en place une démarche continue d'amélioration, former votre équipe aux nouveaux critères, et documenter tous vos processus et résultats.</p>
      <p>N'hésitez pas à nous contacter pour un diagnostic gratuit de votre conformité Qualiopi.</p>
    `
  },
  'cpf-guide': {
    id: 'cpf-guide',
    title: 'CPF et EDOF : Guide complet pour les organismes de formation',
    excerpt: 'Un guide détaillé sur le CPF et EDOF pour maximiser votre visibilité et vos opportunités de financement.',
    author: 'Équipe Eden Conseil Qualité',
    date: '3 mai 2024',
    category: 'Financement',
    readTime: '10 min',
    content: `
      <h2>Comprendre le CPF et EDOF</h2>
      <p>Le Compte Personnel de Formation (CPF) et l'Édition EDOF (Édition Électronique des Offres de Formation) sont deux éléments clés pour assurer la visibilité et le succès de votre organisme de formation.</p>
      <h3>Qu'est-ce que le CPF ?</h3>
      <p>Le CPF est un droit financier dont dispose chaque actif (salarié, travailleur indépendant, demandeur d'emploi) en France pour suivre une formation professionnelle. Depuis 2023, les droits sont crédités en euros (500 €/an).</p>
      <h3>L'importance du référencement CPF</h3>
      <p>Pour les organismes de formation, être référencé au CPF est essentiel pour : attirer une nouvelle clientèle, développer votre activité, et augmenter votre chiffre d'affaires avec des financements directs.</p>
    `
  },
  'edof-referencing': {
    id: 'edof-referencing',
    title: 'EDOF : Comment bien enregistrer vos formations',
    excerpt: 'Enregistrement sur EDOF, publication de vos offres et optimisation pour MonCompteFormation.',
    author: 'Équipe Eden Conseil Qualité',
    date: '12 avril 2024',
    category: 'EDOF',
    readTime: '7 min',
    content: `
      <h2>EDOF : Le guide essentiel</h2>
      <p>EDOF est la plateforme officielle où les organismes de formation enregistrent leurs offres. C'est aussi le lien direct vers MonCompteFormation, la plateforme visible aux apprenants CPF.</p>
      <h3>Étapes d'enregistrement</h3>
      <p>Vous devez : créer un compte sur edof.gouv.fr, remplir le formulaire de déclaration, attendre validation DREETS, puis publier vos offres de formation.</p>
    `
  },
  'bilan-pedagogique': {
    id: 'bilan-pedagogique',
    title: 'Bilan Pédagogique et Financier : Optimiser votre BPF',
    excerpt: 'Le Bilan Pédagogique et Financier est un document clé pour votre Qualiopi. Comment le structurer et l\'optimiser ?',
    author: 'Équipe Eden Conseil Qualité',
    date: '25 mars 2024',
    category: 'Documentation',
    readTime: '9 min',
    content: `
      <h2>Le Bilan Pédagogique et Financier</h2>
      <p>Le BPF est un document obligatoire pour tous les organismes de formation assujettis à la contribution unique de formation. Il doit être publié avant le 30 avril de chaque année.</p>
      <h3>Contenu obligatoire</h3>
      <p>Votre BPF doit inclure : les moyens mis en œuvre, les formations dispensées, les résultats pédagogiques, le contenu du bilan financier, et les actions à venir.</p>
    `
  },
  'qualiopi-2025': {
    id: 'qualiopi-2025',
    title: 'Qualiopi 2025 : Les nouvelles exigences à connaître',
    excerpt: 'Les critères Qualiopi évoluent en 2025. Découvrez les changements majeurs et comment adapter votre organisme.',
    author: 'Équipe Eden Conseil Qualité',
    date: '15 janvier 2025',
    category: 'Certification',
    readTime: '10 min',
    content: `
      <h2>Les évolutions majeures de Qualiopi en 2025</h2>
      <p>La certification Qualiopi continue d'évoluer pour mieux encadrer la qualité des formations professionnelles. En 2025, plusieurs changements importants entrent en vigueur.</p>
      <h3>1. Renforcement de la traçabilité numérique</h3>
      <p>À partir de 2025, tous les organismes doivent disposer d'une plateforme permettant la traçabilité complète des apprenants. Cela inclut : dématérialisation obligatoire des dossiers, archivage conforme RGPD, reporting automatisé, et audit des logs.</p>
      <h3>2. Accessibilité renforcée</h3>
      <p>L'accessibilité devient un critère prioritaire. Les organismes doivent justifier comment ils rendent leurs formations accessibles aux personnes handicapées.</p>
      <h3>3. Qualité pédagogique mesurée</h3>
      <p>La satisfaction et l'insertion professionnelle des apprenants deviennent des critères d'audit. Vous devez justifier les résultats avec enquêtes et suivi à 6 mois.</p>
      <h3>4. Transparence tarifaire</h3>
      <p>Les tarifs doivent être clairement affichés et justifiés. Plus de tarifs opaques.</p>
    `
  },
  'cpf-2025': {
    id: 'cpf-2025',
    title: 'CPF 2025 : Les changements majeurs pour les formations',
    excerpt: 'Le CPF change en 2025. Quoi de nouveau pour les organismes de formation et les apprenants ?',
    author: 'Équipe Eden Conseil Qualité',
    date: '20 janvier 2025',
    category: 'CPF',
    readTime: '8 min',
    content: `
      <h2>CPF 2025 : Ce qui change pour vous</h2>
      <p>Le Compte Personnel de Formation (CPF) subit plusieurs modifications en 2025. Voici ce que vous devez savoir.</p>
      <h3>1. Ticket modérateur augmenté</h3>
      <p>Le ticket modérateur (reste à charge apprenant) augmente en 2025 : minimum 100€ par formation, pourcentage de 50% du coût jusqu'à 3000€.</p>
      <h3>2. Certifications prioritaires</h3>
      <p>Seules les certifications inscrites au RNCP ou équivalentes sont éligibles CPF. Les formations qualifiantes ne sont plus finançables.</p>
      <h3>3. Inscription obligatoire EDOF</h3>
      <p>Toute formation CPF doit être inscrite sur EDOF et visible dans MonCompteFormation.</p>
      <h3>4. Contrôle renforcé</h3>
      <p>Les audits CPF/EDOF se multiplient. Les organismes doivent respecter scrupuleusement les règles.</p>
    `
  },
  'edof-guide': {
    id: 'edof-guide',
    title: 'EDOF 2025 : Guide complet d\'enregistrement et de publication',
    excerpt: 'Comment bien enregistrer vos formations sur EDOF et maximiser votre visibilité en 2025 ?',
    author: 'Équipe Eden Conseil Qualité',
    date: '25 janvier 2025',
    category: 'EDOF',
    readTime: '12 min',
    content: `
      <h2>EDOF 2025 : Le guide complet</h2>
      <p>EDOF est la plateforme centrale pour publier vos formations. Bien comprendre les exigences 2025 est crucial.</p>
      <h3>Qu'est-ce qu'EDOF exactement ?</h3>
      <p>EDOF est la plateforme officielle où vous enregistrez et publiez vos offres. C'est le lien vers MonCompteFormation.</p>
      <h3>Étapes d'enregistrement</h3>
      <p><strong>Étape 1 : Déclaration initiale</strong> - Créer un compte sur edof.gouv.fr, remplir le formulaire de déclaration, attendre validation DREETS.</p>
      <p><strong>Étape 2 : Publication d'offres</strong> - Créer une offre par formation, remplir les champs obligatoires, ajouter dates et tarifs.</p>
      <p><strong>Étape 3 : Mise à jour régulière</strong> - Mettre à jour places disponibles, ajouter dates, modifier tarifs, archiver formations terminées.</p>
      <h3>Champs importants dans EDOF</h3>
      <p>Intitulé formation (clair et SEO), Description (200+ caractères), Domaine (cohérent), Certification (RNCP si CPF), Durée (exacte), Tarif (transparent), Modalité (présentiel/distanciel), Accessibilité.</p>
    `
  },
  'methodologie-ms': {
    id: 'methodologie-ms',
    title: 'Notre méthodologie : Comment Eden Conseil Qualité vous accompagne',
    excerpt: 'Découvrez notre approche unique pour transformer votre organisme de formation et garantir le succès.',
    author: 'Équipe Eden Conseil Qualité',
    date: '30 janvier 2025',
    category: 'Expertise',
    readTime: '9 min',
    content: `
      <h2>Notre approche : Expertise + Résultats</h2>
      <p>Eden Conseil Qualité n'est pas un cabinet de conseil traditionnel. Nous nous engageons sur les résultats et accompagnons chaque organisme personnalisé.</p>
      <h3>Phase 1 : Audit & Diagnostic (Semaine 1-2)</h3>
      <p>Nous commençons par comprendre votre situation réelle : Analyse complète, Évaluation conformité Qualiopi/CPF/EDOF, Benchmark vs concurrents, Identification opportunités, Rapport diagnostic détaillé.</p>
      <h3>Phase 2 : Planification stratégique (Semaine 3-4)</h3>
      <p>Nous élaborons un plan d'action adapté : Roadmap personnalisée, Priorisation des actions, Budget estimé et ROI, KPIs et métriques, Calendrier des jalons.</p>
      <h3>Phase 3 : Mise en œuvre (Mois 2-6)</h3>
      <p>Notre équipe travaille à vos côtés : Accompagnement quotidien, Mise en place processus, Formation équipe, Documentation, Ajustements.</p>
      <h3>Phase 4 : Audit & Certification (Mois 7+)</h3>
      <p>Nous vous préparons aux audits : Pré-audit complet, Corrections non-conformités, Préparation auditeurs, Suivi post-audit.</p>
      <h3>Cas d'usage : Exemple réel</h3>
      <p>Situation initiale : Petit organisme 5 personnes, Qualiopi expirée, 0 formations CPF. Après accompagnement M&S : Qualiopi re-certifié en 4 mois, 3 formations certifiées RNCP + CPF, Chiffre d'affaires +60%, Équipe autonome, Plan croissance en place.</p>
    `
  }
};

export function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = id ? articles[id] : null;

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Blog Eden Conseil Qualité`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', article.excerpt);
      
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.excerpt,
        author: { '@type': 'Organization', name: article.author },
        datePublished: article.date,
        image: 'https://eden-conseil-qualite.fr/blog-image.jpg'
      };
      
      let schemaScript: Element | null = document.querySelector('script[data-page="blog-article"]');
      if (schemaScript) schemaScript.remove();
      
      schemaScript = document.createElement('script');
      (schemaScript as HTMLScriptElement).type = 'application/ld+json';
      schemaScript.setAttribute('data-page', 'blog-article');
      schemaScript.innerHTML = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }
  }, [article]);

  if (!article) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Article non trouvé</h1>
            <Link to="/blog" className="text-red-600 hover:text-amber-800">
              Retour au blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-red-600 hover:text-amber-800 mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour au blog
        </Link>

        <article className="prose max-w-none">
          <h1 className="text-4xl font-bold text-red-600 mb-4">{article.title}</h1>
          
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{article.author}</span>
            </div>
            <span className="px-3 py-1 bg-amber-100 text-red-600 rounded-full text-sm font-medium">{article.category}</span>
            <span className="text-sm">{article.readTime} de lecture</span>
          </div>

          <div 
            className="text-gray-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-amber-50 rounded-lg p-8">
              <h3 className="text-lg font-bold text-red-600 mb-2">Besoin d'aide ?</h3>
              <p className="text-gray-600 mb-4">
                Eden Conseil Qualité accompagne les organismes de formation pour optimiser leur Qualiopi, CPF, EDOF et bien plus encore.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default function BlogPage() {
  useEffect(() => {
    document.title = 'Blog | Eden Conseil Qualité';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Découvrez nos articles sur Qualiopi, CPF, EDOF et la formation professionnelle.');
    
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Blog Eden Conseil Qualité',
      description: 'Articles experts sur la certification Qualiopi et le financement des formations'
    };
    
    let schemaScript: Element | null = document.querySelector('script[data-page="blog"]');
    if (schemaScript) schemaScript.remove();
    
    schemaScript = document.createElement('script');
    (schemaScript as HTMLScriptElement).type = 'application/ld+json';
    schemaScript.setAttribute('data-page', 'blog');
    schemaScript.innerHTML = JSON.stringify(schema);
    document.head.appendChild(schemaScript);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-amber-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Blog Eden Conseil Qualité
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Articles experts sur la certification Qualiopi, le CPF, EDOF et la gestion des organismes de formation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(articles).map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 group"
            >
              <div className="bg-gradient-to-r from-red-600 to-amber-800 p-6 h-32 flex items-start">
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-600 mb-3 group-hover:text-amber-800">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-red-600 group-hover:text-amber-800 font-medium">
                  Lire l'article →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-amber-800 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Vous avez une question spécifique ?</h2>
          <p className="text-amber-100 mb-6">
            Notre équipe est disponible pour discuter de votre projet ou de vos préoccupations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              Prendre rendez-vous
            </Link>
            <a
              href={`https://wa.me/33${config.company.phone.replace(/\D/g, '').slice(-9)}?text=${encodeURIComponent('Bonjour, j\'aimerais discuter de mes besoins en formation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
