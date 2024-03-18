//IMPORT CLASS FROM OTHER JS FILES
import Chatroom from './chat.js'
import ChatInterface from './interface.js'


// ADD MESSAGE
const chatList = document.querySelector('.chat-list');
const messageForm = document.querySelector('.addMessage')
messageForm.addEventListener('submit', e =>{
    e.preventDefault();
    const message = messageForm.message.value.trim()
    chatroom.addChat(message)
    messageForm.reset()
})

//UPDATE USERNAME
const updateForm = document.querySelector('.updateUsername')
const updateSuccess = document.querySelector('.success')
updateForm.addEventListener('submit', e=>{
    e.preventDefault()
    const newUsername = updateForm.username.value.trim()
    chatroom.updateName(newUsername)
    updateForm.reset()

    updateSuccess.textContent = `Your username is now ${newUsername}`

    setTimeout(()=>{
        updateSuccess.textContent = ''
    }, 2000)

})

//UPDATE ROOM
const updateBtn = document.querySelector(".chatroom-buttons")
updateBtn.addEventListener('click', e=>{
    if(e.target.tagName === "BUTTON"){
        chatUI.clearChat()
        chatroom.updateRoom(e.target.getAttribute('id'))
        chatroom.getChat(chat=>{chatUI.displayChat(chat)})
    }
})
const checkUsername = localStorage.username ? localStorage.username : "anon"
const chatroom = new Chatroom('science', checkUsername)

const chatUI = new ChatInterface(chatList)
chatroom.getChat( data => {
    chatUI.displayChat(data)
    
})

