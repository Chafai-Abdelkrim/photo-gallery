import * as firebase from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDWXq-c4V4Ws6qqvgQrm711zHDGNylPmH4",
  authDomain: "photo-gallery-ab8b5.firebaseapp.com",
  projectId: "photo-gallery-ab8b5",
  storageBucket: "photo-gallery-ab8b5.appspot.com",
  messagingSenderId: "972650187641",
  appId: "1:972650187641:web:1d27b84dc5ac2695447da8",
};

const app = firebase.initializeApp(config);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export { projectStorage, projectFirestore};