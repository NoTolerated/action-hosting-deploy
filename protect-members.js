import { auth } from './src/firebaseConfig.js';
import { onAuthStateChanged } from 'firebase/auth';

onAuthStateChanged(auth, user => {
  const paid = localStorage.getItem('paidUser') === 'true';
  if (!user) {
    window.location.href = '/login.html';
  } else if (!paid) {
    window.location.href = '/subscribe.html';
  }
});
