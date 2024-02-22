

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCjGpprw-IWeA1XOeR06heYRIgD813bdHo",
  authDomain: 'coffeeshop-1da78.firebaseapp.com',
  projectId: 'coffeeshop-1da78',
  storageBucket: 'coffeeshop-1da78.appspot.com',
  messagingSenderId: '202591671945',
  appId: '1:202591671945:web:dc61d7a0c3d95ff1ff9858',
  measurementId: "G-JE1Y62QWE9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; 