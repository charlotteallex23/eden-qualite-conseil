import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileSignature, ShieldCheck, CheckCircle2, Clock3 } from 'lucide-react';

export default function ObtenirSonNda() {
  return (
    <div className="py-20 bg-gray-50">
      <Helmet>
        <title>Obtenir son NDA | Modele + Accompagnement | Eden Conseil</title>
        <meta
          name="description"
          content="Comment obtenir son NDA rapidement: clauses essentielles, etapes, checklist et accompagnement sur mesure pour OF, CFA, Qualiopi et CPF."
        />
        <link rel="canonical" href="https://edenconseilqualite.fr/acquisition/obtenir-son-nda" />
        <meta property="og:title" content="Obtenir son NDA | Modele + Accompagnement" />
        <meta property="og:description" content="Guide pratique pour obtenir un NDA conforme et le deployer dans votre process Qualiopi/CPF." />
        <meta property="og:url" content="https://edenconseilqualite.fr/acquisition/obtenir-son-nda" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Obtenir son NDA: methode et accompagnement',
          description: 'Guide pour obtenir un NDA adapte a un organisme de formation et le mettre en application.',
          author: { '@type': 'Organization', name: 'Eden Conseil Qualite' },
          mainEntityOfPage: 'https://edenconseilqualite.fr/acquisition/obtenir-son-nda',
          datePublished: '2026-07-03'
        })}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">Obtenir son NDA</h1>
        <p className="text-xl text-gray-600 mb-8">
          Vous voulez un NDA clair, conforme et exploitable rapidement pour vos projets Qualiopi et CPF.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
              <FileSignature className="w-6 h-6" />
              Comment obtenir son NDA en 4 etapes
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">1. Cadrer le perimetre</p>
                <p className="text-sm">Lister les donnees sensibles: preuves d'audit, process, donnees apprenants, pieces CPF/EDOF.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">2. Definir les clauses</p>
                <p className="text-sm">Confidentialite, duree, habilitations, sous-traitance, restitution/suppression des documents.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">3. Valider la conformite</p>
                <p className="text-sm">Aligner le NDA avec RGPD, obligations CPF et organisation interne.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">4. Deployer dans vos process</p>
                <p className="text-sm">Signature, gestion des acces, suivi des versions et preuves en cas de controle.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" />
              Comment on vous accompagne
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">Diagnostic express</p>
                <p className="text-sm text-gray-600">Audit de vos besoins et de votre niveau de risque en 30 minutes.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">Redaction sur mesure</p>
                <p className="text-sm text-gray-600">NDA adapte a votre activite: OF, CFA, Qualiopi, CPF, sous-traitance.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">Mise en oeuvre operationnelle</p>
                <p className="text-sm text-gray-600">Mode d'emploi interne: qui signe, quand, comment archiver et prouver.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-red-600">
                <p className="font-semibold text-gray-900">Suivi et mise a jour</p>
                <p className="text-sm text-gray-600">Ajustements lors d'evolution d'offres, d'outils ou de partenaires.</p>
              </div>
            </div>
          </section>

          <section className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
            <h2 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
              <Clock3 className="w-5 h-5" />
              Delais typiques
            </h2>
            <ul className="text-sm text-amber-900 space-y-2">
              <li>NDA standard adapte: 24 a 48h</li>
              <li>NDA complexe multi-acteurs: 3 a 5 jours</li>
              <li>Deploiement process interne: 1 semaine</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              Resultat attendu
            </h2>
            <p className="text-gray-700 mb-4">
              Vous repartez avec un NDA pret a signer, une methode d'application claire et une trame de preuves utile pour vos audits.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Demander un accompagnement NDA
            </Link>
          </section>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link to="/acquisition/nda-qualiopi" className="bg-white rounded-lg shadow p-4 border-l-4 border-red-600 hover:shadow-lg transition">
            <h3 className="font-bold text-gray-900">NDA Qualiopi</h3>
            <p className="text-sm text-gray-600">Protection des preuves audit.</p>
          </Link>
          <Link to="/acquisition/nda-et-cpf" className="bg-white rounded-lg shadow p-4 border-l-4 border-red-600 hover:shadow-lg transition">
            <h3 className="font-bold text-gray-900">NDA et CPF</h3>
            <p className="text-sm text-gray-600">Confidentialite EDOF et apprenants.</p>
          </Link>
          <Link to="/acquisition/conformite-cpf" className="bg-white rounded-lg shadow p-4 border-l-4 border-red-600 hover:shadow-lg transition">
            <h3 className="font-bold text-gray-900">Conformite CPF</h3>
            <p className="text-sm text-gray-600">Audit des risques et preuves.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
