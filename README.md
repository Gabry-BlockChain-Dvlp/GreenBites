# 🥗 GreenBites

**GreenBites** is a modern vegetarian recipe app built with React. Browse hundreds of plant-based recipes, search by ingredient or name, and save your favorites — all synced in real time to your personal account.

![GreenBitesScreenshoot](./assets/GrrenBitesScreenù.png)

> 🌐 **Live Demo:** [your-deployment-url.web.app](https://greenbites-8ea40.web.app/)


## ✨ Features

- 🔍 **Recipe Search** — Find vegetarian recipes by name or ingredient using the Spoonacular API
- 📄 **Recipe Detail** — View full recipe information including ingredients, instructions, and nutritional data
- ❤️ **Favorites** — Save recipes to your personal favorites list, synced in real time with Firestore
- 🔐 **Google Authentication** — Sign in with your Google account via Firebase Auth
- 📱 **Responsive Design** — Fully usable on desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Routing | React Router v6 |
| Auth | Firebase Authentication (Google) |
| Database | Cloud Firestore |
| Recipes API | Spoonacular API |
| Hosting | Firebase Hosting |

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- A [Spoonacular API key](https://spoonacular.com/food-api)
- A Firebase project with Authentication and Firestore enabled

### Installation

```bash
git clone https://github.com/your-username/greenbites.git
cd greenbites
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```env
VITE_SPOONACULAR_API_KEY=your_spoonacular_api_key

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Run Locally

```bash
npm run dev
```

### Build & Deploy

```bash
npm run build
firebase deploy
```

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Route-level page components
├── firebase.js       # Firebase initialization
├── App.jsx           # Root component with routing
└── main.jsx          # Entry point
```

---

## 📌 Notes

- Recipes are fetched from the Spoonacular API — a free API key allows up to 150 requests/day.
- Favorites are stored per user in Firestore and update in real time across sessions.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
