 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyB49EXrRZXwvlGbuga0f9w-wvboy9SKqdk",
  authDomain: "jul-lista.firebaseapp.com",
  databaseURL: "https://jul-lista.firebaseio.com",
  projectId: "jul-lista",
  storageBucket: "jul-lista.appspot.com",
  messagingSenderId: "59298696458"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase