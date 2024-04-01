import {initializeApp} from 'firebase/app'
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth' 

const firebaseConfig = {
    apiKey: "AIzaSyAWhUhO0gg65-WcBHovTdPa3MAQcEorNcU",
    authDomain: "ezchat-e864e.firebaseapp.com",
    projectId: "ezchat-e864e",
    storageBucket: "ezchat-e864e.appspot.com",
    messagingSenderId: "1030820271963",
    appId: "1:1030820271963:web:9522162bea79c525552c7e",
    measurementId: "G-HL9ZR0WSKV"
  };

initializeApp(firebaseConfig);

const auth = getAuth()


// const loginform = document.querySelector('.signupform')
// loginform.addEventListener('submit', e=>{
//     e.preventDefault();
    
//     const email = signupform.useremail.value;
//     const password = signupform.userpassword.value;
//     const cpassword = signupform.confirmpassword.value
// }
// )


