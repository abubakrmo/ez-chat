const makeVisible = document.querySelector('.passwordVisibility')
makeVisible.addEventListener('click', () =>{
    const password = document.querySelector('.pwd')
    if(password.type === "password"){
        password.type = "text";
    }else{
        password.type = "password"
    }
})