const message = document.querySelector('.message')
const username = document.querySelector('.username')
const room = document.querySelector('.chatroom-button')
import {format, differenceInMinutes, formatDistanceToNow} from 'date-fns'
import {initializeApp} from 'firebase/app'
import {getFirestore, collection, onSnapshot,
    doc, docs, serverTimestamp,
    addDoc,query, where, orderBy
} from 'firebase/firestore'
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth' 
// import Logout from './login.js';

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
const db = getFirestore();
const collectionRef = collection(db, 'userInfo')
const auth = getAuth()

export default class Chatroom{

    constructor(room, username){
        this.room = room,
        this.username = username,
        this.chats = collectionRef,
        this.unsub,
        this.auth = auth
    }

    //ADDS TO DATABASE
    async addChat(message){
        const now = new Date()
        const chat = {
            message: message,
            username: this.username,
            chatRoom: this.room,
            createdAt: now
        }
        const response = await addDoc(this.chats, chat)
        return response
    }

    //RETRIEVES FROM DATABASE
    getChat(callbac){
        const q = query(this.chats, where("chatRoom", "==", this.room), orderBy('createdAt'))
        this.unsub = onSnapshot(q, snapshot=>{
            snapshot.docChanges().forEach(change =>{
                if(change.type === "added"){
                    callbac(change.doc.data())
                }
            })
        })

    }


    //UPDATES NAME
    updateName(username){
        this.username = username
        localStorage.setItem('username', username)
    }

    //UPDATES ROOM
    updateRoom(room){
        this.room = room
        if(this.unsub){
            this.unsub()
        }
    }

    //LOGOUT
    logout(){
        const logoutbtn = document.querySelector('.logoutbutton')
        logoutbtn.addEventListener('click', ()=>{
            signOut(this.auth)
                .then(()=>{
                    setTimeout(()=>{
                        window.location.href = '/dist/login.html'
                    },1000)
                })
                .catch(err => err.message)
        })
    }
}

