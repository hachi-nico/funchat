// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBkzhfYSj2uvkbB8hRJZMaGBa9G7v8gNCQ',
  authDomain: 'chat-n-chill.firebaseapp.com',
  projectId: 'chat-n-chill',
  storageBucket: 'chat-n-chill.appspot.com',
  messagingSenderId: '925061732679',
  appId: '1:925061732679:web:62a5c864eb41e3bebe9462',
};

// Initialize Firebase Auth
export const appAuth = initializeApp(firebaseConfig).auth();

export const handleGoogleLogin = () => {
  appAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
};

export const handleFacebookLogin = () => {
  appAuth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
};
