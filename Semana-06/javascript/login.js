let email = document.getElementById("email");
let password = document.getElementById("password");

// validacion de email

email.addEventListener("focus", emailFocus);
email.addEventListener("blur", emailBlur);
password.addEventListener("blur", passwordBlur);

// area de trabajo

function passwordBlur () {
    let passwordValue = password.value;
    var letritaPwLogin = 0;
    var numPwLogin = 0

    if (passwordValue.length > 7){
        for (let i = 0; i < passwordValue.length; i++) {
            letra = passwordValue.substring(i,i+1);
            let ascii = letra.charCodeAt();
            if (letra == Number(letra) && ascii != 32){
                numPwLogin += 1;
            }
            if (!((ascii < 65) || (ascii > 90 && ascii < 97) || (ascii > 122) && (ascii != 209 && ascii != 241))) {
                letritaPwLogin += 1;
            }
        } 
        if (letritaPwLogin + numPwLogin === passwordValue.length){
            console.log("bien solo caracteres y numeros");
        } else {
            console.log("solo permitidos caracteres alfanumericos");
        }
    } else {
        console.log("debe ingresar al menos 8 caracteres");
        
    }
}


// funtions events
function emailFocus (){
    email.style.backgroundColor = "blue";
}

function emailBlur (){
    let emailValue = email.value;
    var expRegg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var respuestaExpRegg = expRegg.test(emailValue);
    if(respuestaExpRegg){
        console.log("buen email");
    } else {
        console.log("mal email :c");
    }
}

