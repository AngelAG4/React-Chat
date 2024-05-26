import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage as firebaseGetStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-aae4e.firebaseapp.com",
  projectId: "reactchat-aae4e",
  storageBucket: "reactchat-aae4e.appspot.com",
  messagingSenderId: "511473949548",
  appId: "1:511473949548:web:7e136321e406a84d5cb149"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = firebaseGetStorage(app);
