import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDXYGi_AHkqP7Ry75EfF2UTe7kV9dUFPU8',
  authDomain: 'nextjs-53f1c.firebaseapp.com',
  projectId: 'nextjs-53f1c',
  storageBucket: 'nextjs-53f1c.appspot.com',
  messagingSenderId: '405658026216',
  appId: '1:405658026216:web:3fc08b8ed8df61d21f895d',
  measurementId: 'G-G2C6LHDQMT',
};

const app = !firebase.app.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
