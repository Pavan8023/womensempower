// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// TODO: Replace the following with your own Firebase project config 👇
const firebaseConfig = {
  apiKey: "AIzaSyAmRWWDRkPYanSQeBrRaYdJ7tdWHx-rjUI",
  authDomain: "womensemp.firebaseapp.com",
  projectId: "womensemp",
  storageBucket: "womensemp.firebasestorage.app",
  messagingSenderId: "927560868525",
  appId: "1:927560868525:web:79dc24ebe0adfedcb45c24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
