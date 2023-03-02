import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWXq-c4V4Ws6qqvgQrm711zHDGNylPmH4",
  authDomain: "photo-gallery-ab8b5.firebaseapp.com",
  projectId: "photo-gallery-ab8b5",
  storageBucket: "photo-gallery-ab8b5.appspot.com",
  messagingSenderId: "972650187641",
  appId: "1:972650187641:web:1d27b84dc5ac2695447da8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
