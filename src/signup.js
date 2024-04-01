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
class Snackbar{
    constructor(){
        this.snackbar = document.createElement('div')
    }
    createSnackbar(){
        this.snackbar.classList.add('snackBar')
        document.querySelector('body').appendChild(this.snackbar)
    }
    displaySnackbar(message){
        this.snackbar.textContent = message;
        this.snackbar.classList.add('active')
        setTimeout(()=>{
            this.snackbar.classList.remove('active')
        }, 3000)
    }
}

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

//Toggles password visibility for confirm password input field
const ctogglevisibility = document.querySelector('.cvisibilitytoggler')
const confirmPasswordVisibility = document.querySelector('.cpasswordVisible')
const confirmPasswordHidden = document.querySelector('.cpasswordHidden')
ctogglevisibility.addEventListener('click', () =>{
    const password = document.querySelector('.cpwd')
    if(password.type === "password"){
        password.type = "text";
        confirmPasswordVisibility.classList.add('d-none')
        confirmPasswordHidden.classList.remove('d-none')
    }else{
        password.type = "password"
        confirmPasswordVisibility.classList.remove('d-none')
        confirmPasswordHidden.classList.add('d-none')
    }
})

const auth = getAuth()
const signupform = document.querySelector('.signupform')
signupform.addEventListener('submit', e=>{
    e.preventDefault();
    
    const email = signupform.useremail.value;
    const password = signupform.userpassword.value;
    const cpassword = signupform.confirmpassword.value

    if(password === cpassword){
        createUserWithEmailAndPassword(auth, email, password)
        .then(cred =>{
            console.log(cred.user)
            const snackbar = new Snackbar();
            snackbar.createSnackbar();
            snackbar.displaySnackbar("User created succesfully!")
            
            // window.open('/dist/login.html')
        })
        .catch(err=>{
            const passwordStrength = document.querySelector('.pwdStrengthFeedback')
            const strength = new Error("Password should be at least 6 characters.")
            passwordStrength.textContent = strength
            setTimeout(()=>{
                passwordStrength.classList.add('d-none')
            }, 1000)
        })
    }else{
        const pwdfeedback = document.querySelector('.error-feedback')
        pwdfeedback.classList.remove('d-none')
        setTimeout(()=>{
            pwdfeedback.classList.add('d-none')
        }, 1000)
    }

})





