Réalisé par Ruben et Hugo 

Technologies Utilisées

Côté Backend :
Création de l'API REST robuste permettant de communiquer avec le mobile.
Conteneurisation de l'application et de son environnement de données pour assurer un déploiement simple, uniforme et rapide.

Côté Frontend :
Développement de l'application mobile multi-plateforme.
Requêtes HTTP pour dialoguer dynamiquement avec l'API Sprint Boot.


---

Fonctionnalités Principales

Vue d'ensemble depuis l'accueil des différentes SAé triées, par domaine (Développement, Communication, etc.) et moyenne globale de l'UE.
Formulaire permettant de générer une nouvelle SAé via des menus déroulants pré-définis pour éviter les erreurs de saisie.
Affichage complet des informations d'une SAé et de tous ses groupes associés.
Affectation des étudiants au sein d'une SAé (jusqu'à 4 étudiants). L'étudiant numéro 1 est automatiquement nommé "Chef de projet", et le formulaire gère les notes individuelles grâce à un système ergonomique de listes déroulantes de 0 à 20. L'application met à jour les données du serveur instantanément.

Comment exécuter l'application ?

Étape 1 : Le Backend (Java / Docker)
1. Ouvrez le dossier du projet Backend.
2. Démarrez le serveur et la base de données via Docker en exécutant la commande :
   ```bash
   docker-compose up --build
   ```
3. Le serveur de l'API tournera sur le port local `8080`.

Étape 2 : Le Frontend (React Native)
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
