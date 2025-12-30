import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCDsnnLdynGIYiAWIk6mYP33z6Q-gqzcSw",
  authDomain: "team-anti-edge-existence.firebaseapp.com",
  projectId: "team-anti-edge-existence",
  storageBucket: "team-anti-edge-existence.firebasestorage.app",
  messagingSenderId: "29240033178",
  appId: "1:29240033178:web:a3b89dbf0bc7600c734423"
  measurementId: "G-NQ7J1JZTZN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // 他のファイルで使えるように export する