# 📖 Guide : Modifier le site avec GitHub Copilot

**Pour les débutants - Aucune connaissance en programmation requise !**

---

## 📋 Table des matières
1. [Installation des outils](#-installation)
2. [Démarrage du projet](#-démarrage-du-projet)
3. [Où sont les contenus du site](#-structure-du-site)
4. [Comment modifier du contenu](#-comment-modifier-du-contenu)
5. [Tester vos changements](#-tester-vos-changements)
6. [Sauvegarder vos changements](#-sauvegarder-vos-changements)

---

## 🛠 Installation

### Étape 1 : Installer VS Code

1. Allez sur https://code.visualstudio.com/
2. Cliquez sur "Download" 
3. Choisissez votre système (Windows, Mac, Linux)
4. Lancez l'installateur et suivez les instructions

### Étape 2 : Installer GitHub Copilot

1. Ouvrez VS Code
2. Cliquez sur l'icône **Extensions** (à gauche, ressemble à des blocs)
3. Tapez "GitHub Copilot" dans la barre de recherche
4. Cliquez sur "Install" (l'extension officielle de GitHub)
5. Une fenêtre s'ouvre pour vous connecter à GitHub → cliquez "Autoriser"
6. Si vous n'avez pas de compte GitHub, créez-en un (gratuit) sur https://github.com/signup

### Étape 3 : Installer Git (pour sauvegarder)

1. Allez sur https://git-scm.com/download
2. Téléchargez et installez (acceptez les paramètres par défaut)

### Étape 4 : Installer Node.js

1. Allez sur https://nodejs.org
2. Téléchargez la version **LTS** (Long Term Support)
3. Installez (acceptez les paramètres par défaut)

---

## 🚀 Démarrage du projet

### 1. Cloner le projet

Dans VS Code :
1. **Ctrl + `** (ou Cmd + ` sur Mac) pour ouvrir le terminal
2. Tapez cette commande et appuyez sur **Entrée** :
```bash
git clone https://github.com/VOTREUSERNAME/eden-conseil-qualite.git
```
*(Remplacez VOTREUSERNAME par votre nom GitHub)*

3. Attendez que le projet se télécharge
4. Dans VS Code, cliquez **File → Open Folder** et sélectionnez le dossier `eden-conseil-qualite`

### 2. Installer les dépendances

1. Ouvrez le terminal : **Ctrl + `**
2. Tapez :
```bash
npm install
```
3. Attendez que tout se termine (ça peut prendre 2-3 minutes)

### 3. Lancer le site

1. Dans le terminal, tapez :
```bash
npm run dev
```
2. Attendez que le message s'affiche : `VITE v... ✨  ready in XXX ms`
3. Vous verrez une URL du style : `http://localhost:5176`
4. Ouvrez cette URL dans votre navigateur → le site s'affiche !

---

## 📁 Structure du site

### Où sont les contenus ?

```
eden-conseil-qualite/
├── src/
│   ├── pages/              ← Les pages du site
│   │   ├── Accueil.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   ├── Blog.tsx
│   │   ├── MentionsLegales.tsx
│   │   ├── PolitiqueConfidentialite.tsx
│   │   └── acquisition/    ← Pages landing (leads generation)
│   ├── components/         ← Éléments réutilisables
│   │   ├── Header.tsx      (la barre du haut)
│   │   ├── Footer.tsx      (le pied de page)
│   │   └── ...
│   └── config/
│       └── company.ts      ← COORDONNÉES (téléphone, email, adresse)
├── package.json            ← Les dépendances du projet
├── vite.config.ts          ← Configuration du serveur
└── INFOS_A_COMPLETER.txt   ← Infos de l'entreprise
```

### Les fichiers à modifier selon votre besoin

| Je veux changer... | Fichier à modifier |
|---|---|
| Coordonnées (téléphone, email, adresse) | `src/config/company.ts` |
| Le texte sur la page d'accueil | `src/pages/Accueil.tsx` |
| Le texte sur la page Services | `src/pages/Services.tsx` |
| Le texte sur la page Contact | `src/pages/Contact.tsx` |
| Articles du blog | `src/pages/Blog.tsx` |
| Mentions légales | `src/pages/MentionsLegales.tsx` |
| Pages landing acquire clients | `src/pages/acquisition/` |
| Header (barre du haut) | `src/components/Header.tsx` |
| Footer (pied de page) | `src/components/Footer.tsx` |

---

## ✏️ Comment modifier du contenu

### Meilleure approche : Utiliser le Chat de Copilot directement

**C'est la méthode la plus efficace !**

1. **Ouvrez le Chat Copilot** :
   - Appuyez sur **Ctrl + Maj + I** (ou **Cmd + Shift + I** sur Mac)
   - Ou cliquez sur l'icône **Chat** dans la barre latérale
   - Une fenêtre chat s'ouvre à droite

2. **Demandez directement à Copilot de modifier** :
   - Écrivez votre demande en langage naturel
   - Exemples :
     ```
     Dans le fichier src/pages/Services.tsx, 
     change le titre principal en "Nos nouveaux services"
     ```
     ```
     Modifie le numéro de téléphone dans src/config/company.ts 
     de 0767058187 à 0612345678
     ```
     ```
     Ajoute une nouvelle section dans la page Accueil avec un titre,
     3 points à puces et un bouton bleu
     ```

3. **Copilot propose les modifications** :
   - Il vous montre un aperçu du code modifié
   - Cliquez **Accept** pour valider
   - Ou **Reject** si ce n'est pas bon

4. **Vérifiez le résultat** (le site se met à jour automatiquement)

### Variantes selon votre besoin

**Si vous avez un fichier spécifique** :
- Cliquez droit sur le fichier dans l'explorateur
- Choisissez "Ask Copilot" (ou équivalent)
- Décrivez ce que vous voulez modifier

**Si vous avez du texte sélectionné** :
- Sélectionnez le texte à remplacer
- Appuyez **Ctrl + I** pour l'édition inline
- Ou utilisez le chat pour plus de contexte

### Exemples de demandes efficaces

**Simples :**
- "Change le titre en 'Nos nouveaux services'"
- "Remplace le prix par 5000€"
- "Ajoute un lien vers la page Tarifs"

**Avec plus de détails :**
- "Ajoute une nouvelle section avec un titre, 3 points à puces et un bouton"
- "Crée un formulaire avec 4 champs : nom, email, téléphone, message"
- "Change la couleur du bouton en bleu et ajoute une ombre"

**Explicites :**
- "Dans le fichier [chemin], remplace [ancien texte] par [nouveau texte]"
- "Modifie la page Contact pour ajouter un champ 'Entreprise'"

**Conseil :** Plus votre demande est claire et spécifique, mieux Copilot comprendra !

---

## 🔍 Tester vos changements

### Le site se met à jour automatiquement

Quand vous modifiez un fichier et que vous le **sauvegardez** (Ctrl + S) :
- ✅ Le site se rafraîchit automatiquement dans le navigateur
- ✅ Vous voyez le changement en temps réel

### Si ça ne marche pas

1. **Vérifiez qu'il n'y a pas d'erreurs** : regardez le terminal
2. **Si vous voyez une erreur** :
   - Lisez le message d'erreur
   - Ouvrez Copilot (Ctrl + I)
   - Dites : "Corrige cette erreur : [copiez le message d'erreur]"
   - Copilot trouve et corrige généralement le problème

---

## 💾 Sauvegarder vos changements

### Option 1 : Sauvegarder sur GitHub (recommandé)

1. Dans VS Code, cliquez sur l'icône **Source Control** (à gauche, ressemble à des branches)
2. Vous verrez vos fichiers modifiés
3. Cliquez sur **+** à côté de chaque fichier pour les "stager" (les préparer)
4. En haut, écrivez un message explicatif (ex. "Modification du téléphone")
5. Cliquez **Commit** 
6. Cliquez **Sync Changes** pour envoyer sur GitHub

### Option 2 : Sauvegarder localement seulement

- Appuyez sur **Ctrl + S** sur chaque fichier modifié
- Les changements sont sauvegardés sur votre ordinateur

### ⚠️ Important

Les changements **ne sont visibles sur le site en ligne que si vous** :
1. Que les changements soient "pushés" sur GitHub
2. Que quelqu'un (ou un système automatique) redéploie le site

---

## 🎯 Checklist pour vos premières modifs

- [ ] VS Code installé
- [ ] GitHub Copilot installé et connecté
- [ ] Git installé
- [ ] Node.js installé
- [ ] Projet cloné en local
- [ ] `npm install` exécuté
- [ ] `npm run dev` lancé
- [ ] Site visible dans le navigateur
- [ ] J'ai modifié un fichier simple (ex. une coordonnée)
- [ ] J'ai sauvegardé le fichier avec Ctrl + S
- [ ] J'ai vu le changement dans le navigateur (actualiser si besoin)

---

## 🆘 Besoin d'aide ?

### Problème courant : "npm : Le terme 'npm' n'est pas reconnu"

**Solution** : Node.js n'est pas bien installé
1. Redémarrez VS Code
2. Redémarrez votre ordinateur
3. Réinstallez Node.js

### Problème courant : "GitHub Copilot ne fonctionne pas"

**Solution** :
1. Vérifiez que vous êtes connecté à GitHub (bas de VS Code)
2. Essayez de vous reconnecter : cliquez sur le compte → "Sign Out" → "Sign In"
3. Redémarrez VS Code

### Problème courant : Le site ne se met pas à jour

**Solution** :
1. Appuyez sur **Ctrl + S** pour sauvegarder
2. Attendez 1-2 secondes que le fichier soit recompilé
3. Actualisez la page du navigateur (F5)

---

## 📞 Questions fréquentes

**Q : Je peux casser quelque chose ?**
A : Pas vraiment ! Si vous faites une erreur, Git peut tout restaurer. Et Copilot corrige les erreurs.

**Q : C'est long l'installation ?**
A : ~15 minutes la première fois, puis c'est rapide.

**Q : Je peux modifier le code de styles (couleurs, etc.) ?**
A : Oui ! Demandez à Copilot : "Change la couleur du bouton en bleu"

**Q : Et si je fais une grosse erreur ?**
A : Pas de panique ! Vous pouvez :
- Faire Ctrl + Z plusieurs fois pour annuler
- Ou utiliser Git pour revenir à la version précédente

---

## 🎓 Prochaines étapes

Une fois à l'aise :
1. Essayez de modifier une page entière
2. Utilisez Copilot pour générer du contenu
3. Testez les changements localement avant de les "pousser" sur GitHub
4. Lisez la structure du code avec Copilot : "Explique-moi cette fonction"

**Bonne chance ! 🚀**
