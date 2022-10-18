// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZKyoLSpH1QuIY8fYMPuUR4E2mXYOvLt0",
  authDomain: "dragon-news-client-4d82f.firebaseapp.com",
  projectId: "dragon-news-client-4d82f",
  storageBucket: "dragon-news-client-4d82f.appspot.com",
  messagingSenderId: "378024137146",
  appId: "1:378024137146:web:952fe7f9d5a3ebafe50d83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;