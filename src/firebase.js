import firebase from 'firebase';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCTR3_9rsroGeDzVzRH8UpWhaBdAAnQYXI",
    authDomain: "twitter-clone-react-63fcc.firebaseapp.com",
    projectId: "twitter-clone-react-63fcc",
    storageBucket: "twitter-clone-react-63fcc.appspot.com",
    messagingSenderId: "765510269640",
    appId: "1:765510269640:web:187b0a9736a2bf86fc83fd",
    measurementId: "G-VH20Q7CZWC"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = firebase.firestore();
  export default db;