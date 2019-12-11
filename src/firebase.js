import firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTmHa1dLaeDqm6kds9ORj7_EvigV80ZvE",
  authDomain: "loft-82248.firebaseapp.com",
  databaseURL: "https://loft-82248.firebaseio.com",
  projectId: "loft-82248",
  storageBucket: "loft-82248.appspot.com",
  messagingSenderId: "167437538099",
  appId: "1:167437538099:web:9ca23d9f99fe7390f9a446"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();

