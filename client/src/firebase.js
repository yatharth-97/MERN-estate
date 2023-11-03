// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA8NJ0Zw-3tcnBPFQjgpLGB1gJtIgFTlX0',
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-94d3a.firebaseapp.com',
  projectId: 'mern-estate-94d3a',
  storageBucket: 'mern-estate-94d3a.appspot.com',
  messagingSenderId: '796186518545',
  appId: '1:796186518545:web:53a6997e93d77280783db0',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
