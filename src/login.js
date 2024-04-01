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
//Toggles password visibility for password input field
const togglevisibility = document.querySelector('.visibilitytoggler')
const passwordVisibility = document.querySelector('.passwordVisible')
const passwordHidden = document.querySelector('.passwordHidden')
togglevisibility.addEventListener('click', () =>{
    const password = document.querySelector('.pwd')
    if(password.type === "password"){
        password.type = "text";
        passwordVisibility.classList.add('d-none')
        passwordHidden.classList.remove('d-none')
    }else{
        password.type = "password"
        passwordVisibility.classList.remove('d-none')
        passwordHidden.classList.add('d-none')
    }
})

const loginform = document.querySelector('.loginform')
loginform.addEventListener('submit', e=>{
    e.preventDefault();
    
    const email = loginform.useremail.value;
    const password = loginform.userpassword.value;
    signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
            console.log("signed in")
        })
        .catch((err)=>{
            console.log(err.message)
        })
   
}
)

//Firebase: Error (auth/invalid-credential).
//Firebase: Error (auth/invalid-credential).
