import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD6nFTRJV1152Z4il1qCmgTtygCmebd8Aw',
  authDomain: 'imoney-5dfc8.firebaseapp.com',
  projectId: 'imoney-5dfc8',
  storageBucket: 'imoney-5dfc8.appspot.com',
  messagingSenderId: '801495106591',
  appId: '1:801495106591:web:9cef89ce4929d8dea8412a',
  measurementId: 'G-N297LLFL0G'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore();

export { app, auth, firestore };
