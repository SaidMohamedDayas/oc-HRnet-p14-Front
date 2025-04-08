# HRnet

Bienvenue sur **HRnet** ! Cette application interne permet de créer et de consulter les dossiers des employés de votre entreprise.

## Table des matières

- [HRnet](#hrnet)
  - [Table des matières](#table-des-matières)
  - [Installation](#installation)
  - [Utilisation](#utilisation)
  - [Technologies utilisées](#technologies-utilisées)
  - [Structure du projet](#structure-du-projet)
  - [Tests et performances](#tests-et-performances)
    - [Tests Lighthouse](#tests-lighthouse)
  - [Contributeurs](#contributeurs)

---

## Installation

1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone https://github.com/SaidMohamedDayas/oc-HRnet-p14-Front.git
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd hrnet
   ```
3. Basculez sur la branche react-conversion
   ```bash
   git chekout react-conversion
   ```
4. Installez les dépendances :
   ```bash
   npm install
   ```
5. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
6. Ouvrez votre navigateur et accédez à l'URL affichée (par défaut : `http://localhost:5173`).

---

## Utilisation

- **Créer un employé** : Remplissez le formulaire sur la page d'accueil pour ajouter un nouvel employé.
- **Consulter les employés** : Accédez à la liste des employés via le lien "View Current Employees".

---

## Technologies utilisées

- **Frontend** : React 18
- **Routing** : React Router DOM
- **Formulaires** : React Hook Form
- **Tableau de données** : React Data Table Component
- **Build Tool** : Vite
- **Linting** : ESLint

---

## Structure du projet

Voici un aperçu de l'arborescence du projet :

```
├── public/
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CreateEmployeeForm.jsx
│   │   └── EmployeeList.jsx
│   ├── context/
│   │   ├── EmployeeContext.jsx
│   │   └── EmployeeProvider.jsx
│   ├── data/
│   │   └── states.js
│   ├── pages/
│   │   └── HomePage.jsx
│   ├── styles/
│   │   ├── CreateEmployeeForm.css
│   │   └── EmployeeList.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── package.json
├── README.md
└── vite.config.js
```

---

## Tests et performances

### Tests Lighthouse

Pour tester les performances de l'application, effectuez un build de production et analysez-le avec Lighthouse :

1. Construisez le projet :
   ```bash
   npm run build
   ```
2. Prévisualisez le build :
   ```bash
   npm run preview
   ```
3. Ouvrez Lighthouse dans Chrome DevTools et générez un rapport.

---

## Contributeurs

- **Said Mohamed** - Développeur principal
