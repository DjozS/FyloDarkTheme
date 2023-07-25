const button = document.querySelector('.getStartedFree')
const input = document.querySelector('input')
const errorMsg = document.querySelector('.errorMsg')
var validationEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
button.addEventListener("click", function(){
    if(input.value.match(validationEmail)){
       input.style.color = "green";
    }else{
        errorMsg.style.display = "flex";
    }
})