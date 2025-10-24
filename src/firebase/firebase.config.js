// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOX94kx6yHroNLDTotZLp2XZxqjLhdyL4",
  authDomain: "dragon-news-7fc7b.firebaseapp.com",
  projectId: "dragon-news-7fc7b",
  storageBucket: "dragon-news-7fc7b.firebasestorage.app",
  messagingSenderId: "324863623285",
  appId: "1:324863623285:web:b1eab381801c2cacc4383c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;