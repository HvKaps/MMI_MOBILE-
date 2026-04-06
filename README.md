# 📱 Annuaire Mobile des SAé MMI

Bienvenue sur le projet d'Annuaire Mobile des SAé (Situations d'Apprentissage et d'Évaluation) pour le département MMI. Cette application permet de recenser les différentes UE, de consulter leurs détails, et de répartir les étudiants au sein de groupes de projets de manière simple et intuitive.

---

## 👨‍💻 L'Équipe

Ce projet a été réalisé en binôme avec une séparation claire des rôles :
- **Hugo** : Conception et développement du **Backend** (architecture serveur, base de données, API REST).
- **Ruben** : Conception et développement du **Frontend** (interface utilisateur mobile, navigation, intégration API).

---

## 🛠️ Technologies Utilisées

**Côté Backend (Hugo) :**
- **Java Spring Boot** : Création de l'API REST robuste permettant de communiquer avec le mobile.
- **Docker** : Conteneurisation de l'application et de son environnement de données pour assurer un déploiement simple, uniforme et rapide.

**Côté Frontend (Ruben) :**
- **React Native & Expo** : Développement de l'application mobile multi-plateforme.
- **Axios** : Requêtes HTTP pour dialoguer dynamiquement avec l'API Sprint Boot.
- **StyleSheet pur** : Design moderne, clair et natif sans utilisation de frameworks lourds.

---

## ✨ Fonctionnalités Principales

- **Consulter les SAé** : Vue d'ensemble depuis l'accueil des différentes SAé triées, par domaine (Développement, Communication, etc.) et moyenne globale de l'UE.
- **Création de SAé** : Formulaire permettant de générer une nouvelle SAé via des menus déroulants pré-définis pour éviter les erreurs de saisie.
- **Détails de Projet** : Affichage complet des informations d'une SAé et de tous ses groupes associés.
- **Création de Groupes** : Affectation des étudiants au sein d'une SAé (jusqu'à 4 étudiants). L'étudiant numéro 1 est automatiquement nommé "Chef de projet", et le formulaire gère les notes individuelles grâce à un système ergonomique de listes déroulantes de 0 à 20. L'application met à jour les données du serveur instantanément.

---

## 🚀 Comment exécuter l'application ?

### Étape 1 : Le Backend (Java / Docker)
1. Ouvrez le dossier du projet Backend.
2. Démarrez le serveur et la base de données via Docker en exécutant la commande :
   ```bash
   docker-compose up --build
   ```
   *(Ou les commandes docker équivalentes selon la configuration du projet).*
3. Le serveur de l'API tournera sur le port local `8080`.

### Étape 2 : Le Frontend (React Native)
1. Ouvrez le dossier principal du projet mobile dans un terminal.
2. Si c'est votre premier lancement, installez les modules nécessaires :
   ```bash
   npm install
   ```
3. (Si vous testez sur un vrai téléphone, assurez-vous de renseigner l'adresse IP de l'ordinateur dans le fichier `apiConfig.ts`).
4. Lancez l'outil Expo :
   ```bash
   npx expo start
   ```
5. Appuyez sur `w` pour ouvrir la version Web, ou utilisez votre téléphone via l'application **Expo Go** en flashant le QR Code.
