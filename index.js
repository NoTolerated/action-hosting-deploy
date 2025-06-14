// src/index.js

/* eslint-env browser */
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import * as firebaseui from 'firebaseui';
import { firebaseConfig } from "./firebaseConfig";

// Initialize Firebase app and services
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Utility function to handle form submissions
const handleFormSubmit = (formId, submitHandler) => {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await submitHandler();
    });
  }
};

// Sign-up functionality
const handleSignUp = async () => {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert('Sign-up successful!');
  } catch (error) {
    alert(error.message);
  }
};

// Login functionality
const handleLogin = async () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert('Login successful!');
  } catch (error) {
    alert(error.message);
  }
};

// Fetch and display data
const fetchDataAndDisplay = async (url, elementId, renderContent) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.statusText}`);
    }
    const data = await response.json();
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = renderContent(data);
    }
  } catch (error) {
    console.error(`There was a problem with the fetch operation: ${error}`);
  }
};

// Render divisions content
const renderDivisionsContent = (data) => {
  let content = '<h2>Divisions</h2>';
  data.divisions.forEach(division => {
    content += `
      <div class="division-item">
        <h3>${division.name}</h3>
        <p>${division.description}</p>
      </div>
    `;
  });
  return content;
};

// Render ladder content
const renderLadderContent = (data) => {
  let content = '<h2>Ladder</h2>';
  data.ladder.forEach(player => {
    content += `
      <div class="player-item">
        <h3>${player.name}</h3>
        <p>Score: ${player.score}</p>
      </div>
    `;
  });
  return content;
};

// FirebaseUI config
const uiConfig = {
  signInSuccessUrl: '/', // URL to redirect to after sign-in
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '/terms-of-service', // URL of your Terms of Service
  privacyPolicyUrl: '/privacy-policy' // URL of your Privacy Policy
};

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(auth);

// Initialize event listeners and fetch data on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  handleFormSubmit('signup-form', handleSignUp);
  handleFormSubmit('login-form', handleLogin);
  fetchDataAndDisplay('/assets/Data/divisions.json', 'divisions', renderDivisionsContent);
  fetchDataAndDisplay('/assets/Data/ladder.json', 'ladder', renderLadderContent);

  // Start FirebaseUI
  ui.start('#firebaseui-auth-container', uiConfig);
});
