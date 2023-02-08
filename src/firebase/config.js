import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDrax_pH0jqbkvPBAdf-NSDelQXWOmrLZw",
    authDomain: "projectmanagement-react-v2.firebaseapp.com",
    projectId: "projectmanagement-react-v2",
    storageBucket: "projectmanagement-react-v2.appspot.com",
    messagingSenderId: "714941650454",
    appId: "1:714941650454:web:604c11253b0f14b6774737"
  };

  //init firebase app
  firebase.initializeApp(firebaseConfig);

  //init firestore service
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();

  export {projectAuth , projectFirestore}