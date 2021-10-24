import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCPWhOjy4gqISt9jW-q2byPicYQg8bAU0s",
    authDomain: "shopping-f06f2.firebaseapp.com",
    projectId: "shopping-f06f2",
    storageBucket: "shopping-f06f2.appspot.com",
    messagingSenderId: "512233700541",
    appId: "1:512233700541:web:1845bf7ec67e8af7a44bd4"
  };
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }