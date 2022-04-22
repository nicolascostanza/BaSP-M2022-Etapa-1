let nombre = document.getElementById("name");
let surname = document.getElementById("surname");
let dni = document.getElementById("dni");
let date = document.getElementById("date");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let locationsingup = document.getElementById("location");
let postal = document.getElementById("postal");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passwordRepeat = document.getElementById("passwordRepeat");
var checkedPW;
// events
nombre.addEventListener("blur", nameBlur);
surname.addEventListener("blur", surnameBlur);
dni.addEventListener("blur", dniBlur);
date.addEventListener("blur", dateBlur);
phone.addEventListener("blur", phoneBlur);
address.addEventListener("blur", addressBlur);
locationsingup.addEventListener("blur", locationBlur);
postal.addEventListener("blur", postalBlur);
email.addEventListener("blur", emailBlur);
password.addEventListener("blur", passwordBlur);
passwordRepeat.addEventListener("blur", passwordRepeatBlur);
// objeto
var validation = {
    name: false,
    surname: false,
}


// area de trabajo para las funciones 

function passwordRepeatBlur (checkedPW) {
    let passwordRepeatValue = passwordRepeat.value;
    var letritaPWR = 0;
    var numPWR = 0

    if (passwordRepeatValue.length > 7){
        for (let i = 0; i < passwordRepeatValue.length; i++) {
            letra = passwordRepeatValue.substring(i,i+1);
            let ascii = letra.charCodeAt();
            if (letra == Number(letra) && ascii != 32){
                numPWR += 1;
            }
            if (!((ascii < 65) || (ascii > 90 && ascii < 97) || (ascii > 122) && (ascii != 209 && ascii != 241))) {
                // console.log("caracter que no es letra: " + ascii);
                letritaPWR += 1;
            }
        } 
        
        if (letritaPWR + numPWR === passwordRepeatValue.length){
            console.log("bien solo caracteres y numeros");
        } else {
            console.log("solo permitidos caracteres alfanumericos");
        }
    } else {
        console.log("debe ingresar al menos 8 caracteres");
        
    }

    if (passwordRepeatValue === checkedPW){
        console.log("las contraseñas coinciden :D ");
        
    } else {
        console.log("las contraseñas NO COINCIDEN :c ");
        
    }
}



function passwordBlur () {
    let passwordValue = password.value;
    var letritaPW = 0;
    var numPW = 0

    if (passwordValue.length > 7){
        for (let i = 0; i < passwordValue.length; i++) {
            letra = passwordValue.substring(i,i+1);
            let ascii = letra.charCodeAt();
            if (letra == Number(letra) && ascii != 32){
                numPW += 1;
            }
            if (!((ascii < 65) || (ascii > 90 && ascii < 97) || (ascii > 122) && (ascii != 209 && ascii != 241))) {
                // console.log("caracter que no es letra: " + ascii);
                letritaPW += 1;
            }
        } 
        
        if (letritaPW + numPW === passwordValue.length){
            console.log("bien solo caracteres y numeros");
            return checkedPW = passwordValue;
        } else {
            console.log("solo permitidos caracteres alfanumericos");
        }
    } else {
        console.log("debe ingresar al menos 8 caracteres");
        
    }

    
}

// terminados y para limpiar codigo


function nameBlur (){
    let nameValue = nombre.value;
    // console.log(typeof(nameValue));
    if (nameValue.length < 4){
        console.log("error");
    }
    let cont = 0
    for (let i = 0; i < nameValue.length; i++) {
        letra = nameValue.substring(i,i+1);
        let ascii = letra.charCodeAt();

        if ((ascii < 65) || (ascii > 90 && ascii < 97) || (ascii > 122) && (ascii != 32 && ascii != 209 && ascii != 241)) {
            // console.log("caracter que no es letra: " + ascii);
            cont += 1;
        }
    }
    if(cont != 0){
        console.log("no son solo caracteres :C ");
        
    }

}

function surnameBlur (){
    let surnameValue = surname.value;
    // console.log(typeof(nameValue));
    if (surnameValue.length < 4){
        console.log("error");
    }
    let cont = 0
    for (let i = 0; i < surnameValue.length; i++) {
        letra = surnameValue.substring(i,i+1);
        let ascii = letra.charCodeAt();

        if ((ascii < 65) || (ascii > 90 && ascii < 97) || (ascii > 122) && (ascii != 32 && ascii != 209 && ascii != 241)) {
            // console.log("caracter que no es letra: " + ascii);
            cont += 1;
        }
    }
    if(cont != 0){
        console.log("no son solo caracteres :C ");
        
    }

}

function dniBlur () {
    // HACER UN IF ADENTRO DEL OTRO IF si es menor a 8 o mayor a 8 por afuera
    dniValue = document.getElementById("dni").value;
    if(dniValue.length < 8){
        console.log("numero menor a 8");
    }else {
        console.log("bien el dni");
    }
    let cont = 0
    for (let i = 0; i < dniValue.length; i++) {
        let numero = dniValue.substring(i,i+1);
        if (numero != Number(numero)) {
            console.log("es una letra");
            cont += 1;
        } else {
            // console.log("es un numero");
        }
    }
    if (cont != 0){
        console.log("hay " + cont + "letras");
    }
}


function dateBlur () {
    let dateValue = date.value;
    let day = dateValue.substring(0,2);
    let check1 = dateValue.substring(2,3);
    let month = dateValue.substring(3,5);
    let check2 = dateValue.substring(5,6);
    let year = dateValue.substring(6,10);

    day = Number(day);
    month = Number(month);
    year = Number(year);

    console.log("dia " + day + " mes " + month + " year " + year);
    

    if(day < 1 || day > 31){
        console.log("mal el dia");
    }
    if (month < 1 || month > 12) {
        console.log("mal el mes");
    }
    if(year < 1900 || year > 2022 || year != Number(year)){
        console.log("mal el año");
    }
    if(check1 != '/' && check2 != '/'){
        console.log("MAL. formato dd/mm/yyyy");
    }
}

function phoneBlur () {
    let phoneValue = phone.value;
    if(phoneValue.length == 10){
        console.log("bien 10 numeros");
    }else {
        console.log("mal, debe contener 10 numeros");
    }
    let cont = 0
    for (let i = 0; i < phoneValue.length; i++) {
        let numberPhone = phoneValue.substring(i,i+1);
        if (numberPhone != Number(numberPhone)) {
            console.log("no es un numero");
            cont += 1;
        }
    }
    if (cont != 0){
        console.log("hay " + cont + "letras");
    }
}

function addressBlur () {
    let addressValue = address.value;
    if (addressValue.length < 5){
        console.log("error se requieren mas caracteres");
    }
    if (addressValue.indexOf(" ") === -1){
        console.log("no hay espacios");
    }
    let letrita = 0;
    let contNumber = 0;
    for (let i = 0; i < addressValue.length; i++) {
        letra = addressValue.substring(i,i+1);
        let ascii = letra.charCodeAt();
        if (letra == Number(letra) && ascii != 32){
            contNumber += 1;
        }
        if (!((ascii < 65) || (ascii > 90 && ascii < 97) || (ascii > 122) && (ascii != 209 && ascii != 241))) {
            // console.log("caracter que no es letra: " + ascii);
            letrita += 1;
            
        }
    }
    console.log("letras: " + letrita);
    console.log("numeros: " + contNumber);
    
}

function locationBlur () {
    let locationValue = locationsingup.value;
    if (locationValue.length < 4) {
        console.log("mal, debe tener mas de 3 letras");
    }
    let espaces = 0
    for (let i = 0; i < locationValue.length; i++) {
        letra = locationValue.substring(i,i+1);
        let ascii = letra.charCodeAt();

        if (ascii === 32) {
            // console.log("caracter que no es letra: " + ascii);
            espaces += 1;
        }
    }
    if(espaces > 0) {
        console.log("Error. No debe contener espacio, solo caracteres alfanumericos");
    }
}

function postalBlur () {
    let postalValue = postal.value;
    console.log(postalValue.length);
    
    if(postalValue == Number(postalValue)){
        if( postalValue.length == 4 || postalValue.length == 5 ){
            console.log("bien ingresado los numeros");
        } else {
            console.log("ingrese entre 4 o 5 numero");
        }
    }else {
        console.log("ingrese solo numeros");
    }
}

function emailBlur () {
    let emailValue = email.value;
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var respuestaExpReg = expReg.test(emailValue);
    if(respuestaExpReg){
        console.log("buen email");
    } else {
        console.log("mal email :c");
    }
}