import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC1bmoX0Cb-zrS5WgxkNumWNG0aekIYdhI",
  authDomain: "synchro-dnd.firebaseapp.com",
  databaseURL: "https://synchro-dnd-default-rtdb.firebaseio.com",
  projectId: "synchro-dnd",
  storageBucket: "synchro-dnd.appspot.com",
  messagingSenderId: "727558888314",
  appId: "1:727558888314:web:0039251d3a28b9526954c3",
  measurementId: "G-3HJB78ZY6L"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDb = getDatabase(firebaseApp);


/* export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const firebaseDb = firebase.database(); */