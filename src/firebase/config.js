import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB71jDG_tZItfm0uZAIgBDA7Rk_dEiFH24",
    authDomain: "movies-app-51a7f.firebaseapp.com",
    projectId: "movies-app-51a7f",
    storageBucket: "movies-app-51a7f.appspot.com",
    messagingSenderId: "6062962145",
    appId: "1:6062962145:web:d2e4a01bcc1c23bcac8ea0"
  };

  //inicializační fáze

  firebase.initializeApp(firebaseConfig)

  //počáteční nastavení služeb (servises)

  const projectFirestore = firebase.firestore()

  export{projectFirestore}