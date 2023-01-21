import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHmrJqG9PGpX7MM_hjYa41GJtXyBne0SA",
  authDomain: "quiz-app-94e5b.firebaseapp.com",
  projectId: "quiz-app-94e5b",
  storageBucket: "quiz-app-94e5b.appspot.com",
  messagingSenderId: "750467254874",
  appId: "1:750467254874:web:cb31555582baf71241a663",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
