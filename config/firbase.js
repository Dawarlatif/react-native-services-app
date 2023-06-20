// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDL9NMP50y2TEAkPye6QuDF08srUXJWwSo",
   authDomain: "services-app-c4c51.firebaseapp.com",
   projectId: "services-app-c4c51",
   storageBucket: "services-app-c4c51.appspot.com",
   messagingSenderId: "647539488783",
   appId: "1:647539488783:web:885bb8f8ddb3a5b219cb7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;