import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAmRWWDRkPYanSQeBrRaYdJ7tdWHx-rjUI",
  authDomain: "womensemp.firebaseapp.com",
  projectId: "womensemp",
  storageBucket: "womensemp.firebasestorage.app",
  messagingSenderId: "927560868525",
  appId: "1:927560868525:web:79dc24ebe0adfedcb45c24"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login form handler
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  // Simple input validation
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Firebase login
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "dashmain.html"; // Redirect to dashboard
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
