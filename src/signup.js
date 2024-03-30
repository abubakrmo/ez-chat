import {initializeApp} from 'firebase/app'
import {getAuth, onAuthStateChanged, createUserWithEmailAndPassword} from 'firebase/auth' 

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




const makeVisible = document.querySelector('.passwordVisibility')
makeVisible.addEventListener('click', () =>{
    const password = document.querySelector('.pwd')
    if(password.type === "password"){
        password.type = "text";
    }else{
        password.type = "password"
    }
})


const auth = getAuth()
const signupform = document.querySelector('.signupform')
signupform.addEventListener('submit', e=>{
    e.preventDefault();
    
    const email = signupform.useremail.value;
    const password = signupform.userpassword.value;

   
    createUserWithEmailAndPassword(auth, email, password)
        .then(cred =>{
            console.log(cred.user)
            alert('User created succesfully')
            window.open('/dist/login.html')
        })
        .catch(err=>{
            console.log(err.message)
        })
})
