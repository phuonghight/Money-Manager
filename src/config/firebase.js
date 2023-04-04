import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_fIREBASE_CONFIG_API_KEY,
  // authDomain: import.meta.env.VITE_fIREBASE_CONFIG_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_fIREBASE_CONFIG_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_fIREBASE_CONFIG_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_fIREBASE_CONFIG__MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_fIREBASE_CONFIG_APP_ID,
  // measurementId: import.meta.env.VITE_fIREBASE_CONFIG_MEASUREMNT_ID
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
const firestore = getFirestore(app);

export { auth, firestore };
