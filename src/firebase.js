// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-clone-next-app.firebaseapp.com",
  projectId: "insta-clone-next-app",
  storageBucket: "insta-clone-next-app.appspot.com",
  messagingSenderId: "982921323740",
  appId: "1:982921323740:web:5b0392ba131acec881c019",
  measurementId: "G-9LQHGJJM60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



// firebase rules for storage

// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read;
//         allow write : if request.resource.size < 2 * 1024 * 1024 && 
//         request.resource.contentType.matches('image/.*')
        
//       }
//     }
//   }