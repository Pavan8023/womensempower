// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmRWWDRkPYanSQeBrRaYdJ7tdWHx-rjUI",
  authDomain: "womensemp.firebaseapp.com",
  projectId: "womensemp",
  storageBucket: "womensemp.firebasestorage.app",
  messagingSenderId: "927560868525",
  appId: "1:927560868525:web:79dc24ebe0adfedcb45c24"
};

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  