import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from './src/firebaseConfig.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up
export const handleSignUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Sign-up successful:', userCredential.user);
    // Additional sign-up success handling
  } catch (error) {
    console.error('Sign-up error:', error.message);
    // Additional sign-up error handling
  }
};

// Sign In
export const handleSignIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('Sign-in successful:', userCredential.user);
    // Additional sign-in success handling
  } catch (error) {
    console.error('Sign-in error:', error.message);
    // Additional sign-in error handling
  }
};
