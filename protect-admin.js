import { auth } from './src/firebaseConfig.js';
import { onAuthStateChanged } from 'firebase/auth';

onAuthStateChanged(auth, user => {
  if (!user || user.email !== 'admin@example.com') {
    window.location.href = '/login.html';
  }
});
