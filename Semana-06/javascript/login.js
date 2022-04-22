let email = document.getElementById("email");
let password = document.getElementById("password");

// validacion de email

email.addEventListener("focus", emailFocus);
email.addEventListener("blur", emailBlur);
password.addEventListener("blur", passwordBlur);
password.addEventListener("focus", passwordBlur);
// area de trabajo

function passwordBlur () {
    
}

// funtions events
function emailFocus (){
    email.style.backgroundColor = "blue";
}

function emailBlur (){
    var emailValueLogin = email.value;
    var expRegg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var respuestaExpRegg = expRegg.test(emailValueLogin);
    if(respuestaExpRegg){
        console.log("buen email");
    } else {
        console.log("mal email :c");
    }
}

function passwordBlur () {
    var passwordValueLogin = password.value;
    var lettersPWLogin = 0;
    var numPwLogin = 0

    if (passwordValueLogin.length > 7){
        for (var i = 0; i < passwordValueLogin.length; i++) {
            var letterPWLogin = passwordValueLogin.substring(i,i+1);
            var asciiPWLogin = letterPWLogin.charCodeAt();
            if (letterPWLogin == Number(letterPWLogin) && asciiPWLogin != 32){
                numPwLogin += 1;
            }
            if (!((asciiPWLogin < 65) || (asciiPWLogin > 90 && asciiPWLogin < 97) || (asciiPWLogin > 122) && (asciiPWLogin != 209 && asciiPWLogin != 241))) {
                lettersPWLogin += 1;
            }
        } 
        if (lettersPWLogin + numPwLogin === passwordValueLogin.length){
            console.log("bien solo caracteres y numeros");
        } else {
            console.log("solo permitidos caracteres alfanumericos");
        }
    } else {
        console.log("debe ingresar al menos 8 caracteres");
        
    }
}