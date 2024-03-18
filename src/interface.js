import {formatDistanceToNow} from "date-fns";

export default class ChatInterface{
    constructor(list){
        this.list = list
    }
    //DISPLAYS DATA
    displayChat(data){
        const chatDate = data.createdAt.toDate()
        const when = formatDistanceToNow(chatDate, {addSuffix: true})
        const username = data.username.charAt(0).toUpperCase() + data.username.slice(1)
        let html = 
        `
            <li class= 'list-group-item'>
                <span class='username fw-bold'>${username}</span>
                <span class='message'>${data.message}</span>
                <div class='time'>${when}</div>
            </li>
        `;
        this.list.innerHTML += html
    }
    //CLEAR DATA
    clearChat(){
        this.list.innerHTML = ''
    }
}

