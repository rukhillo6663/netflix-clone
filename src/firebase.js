import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCzrpTKug8Keyb5HyeuXvq-K74nZXTiWJs',
  authDomain: 'netflix-clone-6abd9.firebaseapp.com',
  projectId: 'netflix-clone-6abd9',
  storageBucket: 'netflix-clone-6abd9.appspot.com',
  messagingSenderId: '337349693620',
  appId: '1:337349693620:web:e74be348d545ca1967c7e1',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
