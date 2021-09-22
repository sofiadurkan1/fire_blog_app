import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDVpsWr9kzAF9CRozYv1ebwj1IgDT4MZ4M",
    authDomain: "fire-blog-sofia.firebaseapp.com",
    projectId: "fire-blog-sofia",
    databaseURL:"https://fire-blog-sofia-default-rtdb.firebaseio.com/",
    storageBucket: "fire-blog-sofia.appspot.com",
    messagingSenderId: "911695231639",
    appId: "1:911695231639:web:34aab830345c34586d07d2"
  });



export const createUser = async (email, password, displayName) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          console.log('REGISTER user', user)
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });

        const currentUser = firebase.auth().currentUser;
        await currentUser.updateProfile({
            displayName: displayName
          })

    } catch (error) {
        
    }

}

export const SignIn = async (email, password) => {
   await firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log('SIGNIN user', user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

export const userObserver = async (setCurrentUser) => {
    await firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('OBSERVER: ', user)
          setCurrentUser(user);
        } else {
          // User is signed out
          // ...
          setCurrentUser(null);
        }
      });
}

export const Logout = async () => {
    await firebase.auth().signOut();
    
}


export const SignUpProvider = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        promt : 'select_account'
      });

    firebase.auth()
      .signInWithPopup(provider)
}




export const auth = firebaseApp.auth()
export default firebaseApp;