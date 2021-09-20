import firebase from 'firebase/app';
import 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyDVpsWr9kzAF9CRozYv1ebwj1IgDT4MZ4M",
    authDomain: "fire-blog-sofia.firebaseapp.com",
    projectId: "fire-blog-sofia",
    databaseURL:"https://fire-blog-sofia-default-rtdb.firebaseio.com/",
    storageBucket: "fire-blog-sofia.appspot.com",
    messagingSenderId: "911695231639",
    appId: "1:911695231639:web:34aab830345c34586d07d2"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;