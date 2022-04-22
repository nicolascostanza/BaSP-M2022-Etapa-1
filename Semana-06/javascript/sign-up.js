var nombre = document.getElementById("name");
var surname = document.getElementById("surname");
var dni = document.getElementById("dni");
var date = document.getElementById("date");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var locationsingup = document.getElementById("location");
var postal = document.getElementById("postal");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordRepeat = document.getElementById("passwordRepeat");
var checkedPW;
// prueba

// events
nombre.addEventListener("blur", nameBlur);
nombre.addEventListener("focus", nameFocus);
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
// var validation = {
//     name: false,
//     surname: false,
// }


// area de trabajo para las funciones 


// functions blur 
function nameBlur (){
    var nameValue = nombre.value;
    if (nameValue.length < 4){
        var p = document.getElementById("nameErrorLength");
        p.classList.replace("hidden", "active")
        nombre.classList.add("borderWarning");
    } else{
        var p = document.getElementById("nameErrorLength");
        p.classList.replace("active", "hidden");
        var cont = false
        for (var i = 0; i < nameValue.length; i++) {
            var letterName = nameValue.substring(i,i+1);
            let ascii = letterName.charCodeAt();
            if ((ascii < 65) || (ascii > 90 && ascii < 97) || (ascii > 122) && (ascii != 32 && ascii != 209 && ascii != 241)) {
                cont = true;
            }
        }
        if(cont){
            var p = document.getElementById("nameErrorCaracter");
            p.classList.replace("hidden", "active")
            nombre.classList.add("borderWarning");
        } else {
            nombre.classList.remove("borderWarning");
            nombre.classList.add("borderSuccess");
        }
    }
}

function surnameBlur (){
    var surnameValue = surname.value;
    if (surnameValue.length < 4){
        console.log("Error. Debe contener mas de 3 caracteres");
    } else {
        var validateSurname = false
        for (var i = 0; i < surnameValue.length; i++) {
            var letraSurname = surnameValue.substring(i,i+1);
            var asciiSurname = letraSurname.charCodeAt();
            if ((asciiSurname < 65) || (asciiSurname > 90 && asciiSurname < 97) || (asciiSurname > 122) && (asciiSurname != 32 && asciiSurname != 209 && asciiSurname != 241)) {
                validateSurname = true;
            }
        }
        if(validateSurname){
            console.log("Error. Debe ingresar solo Letras");
        } else{
            console.log("Surname correcto");
        }
    }
}

function dniBlur () {
    dniValue = document.getElementById("dni").value;
    if(dniValue.length < 8){
        console.log("dni debe tener al menos 8 numeros");
    }else {
        var validateDni = false
        for (let i = 0; i < dniValue.length; i++) {
            var numDni = dniValue.substring(i,i+1);
            var asciiDni = numDni.charCodeAt();
            if (numDni != Number(numDni) || asciiDni == 32) {
                validateDni = true;
            }
        }
        if (validateDni){
            console.log("hay letras");
        } else {
            console.log("bien ingresado el dni");
        }
    }
}

function dateBlur () {
    var dateValue = date.value;
    var day = dateValue.substring(0,2);
    var check1 = dateValue.substring(2,3);
    var month = dateValue.substring(3,5);
    var check2 = dateValue.substring(5,6);
    var year = dateValue.substring(6);
    day = Number(day);
    month = Number(month);
    year = Number(year);
    if(day < 1 || day > 31){
        console.log("mal el dia");
    } else if (month < 1 || month > 12) {
        console.log("mal el mes");
    } else if (year < 1900 || year > 2022 || year != Number(year)) {
        console.log("mal el año");
    } else if(check1 != '/' || check2 != '/'){
        console.log("MAL. formato dd/mm/yyyy");
    } else {
        console.log("bien papaaaa");
    }
}

function phoneBlur () {
    var phoneValue = phone.value;
    if(phoneValue.length == 10){
        var validatePhone = false
        for (var i = 0; i < phoneValue.length; i++) {
            var numberPhone = phoneValue.substring(i,i+1);
            var asciiPhone = numberPhone.charCodeAt();
            if (numberPhone != Number(numberPhone) || asciiPhone == 32) {
                validatePhone = true;
            }
        }
        if (validatePhone){
            console.log("Error, debe contener solo numeros");
        } else {
            console.log("telefono ingresado bien");
        }
    }else {
        console.log("mal, debe contener 10 numeros");
    }
}

function addressBlur () {
    var addressValue = address.value;
    if (addressValue.length < 5){
        console.log("error se requieren mas caracteres");
    } else {
        if (addressValue.indexOf(" ") === -1){
            console.log("no hay espacios");
        } else {
            var letterAddress = 0;
            var numberAddress = 0;
            var spacesAddress = 0;
            for (let i = 0; i < addressValue.length; i++) {
                letra = addressValue.substring(i,i+1);
                let ascii = letra.charCodeAt();
                if (letra == Number(letra) && ascii != 32){
                    numberAddress += 1;
                } else if (!((ascii < 65) || (ascii > 90 && ascii < 97) || (ascii > 122) && (ascii != 209 && ascii != 241))){
                    letterAddress += 1;
                } else if (ascii == 32 ){
                    spacesAddress += 1
                }
            }
            if(letterAddress == 0 || numberAddress == 0){
                console.log("Error. Debe contener letras y numeros");
            } else if(letterAddress + numberAddress + spacesAddress == addressValue.length){
                console.log("bien ingresado");
            } else {
                console.log("Error. Contiene caracteres especiales");
            }
        }
    }
}

function locationBlur () {
    var locationValue = locationsingup.value;
    if (locationValue.length < 4) {
        console.log("mal, debe tener mas de 3 letras");
    } else {
        var spacesLocation = 0
        var lettersLocation = 0;
        var numberLocation = 0;
        for (let i = 0; i < locationValue.length; i++) {
            var letter = locationValue.substring(i,i+1);
            var asciiLocation = letter.charCodeAt();
            if (asciiLocation === 32) {
                spacesLocation += 1;
            } else if (letter == Number(letter)){
                numberLocation += 1;
            } else if (!((asciiLocation < 65) || (asciiLocation > 90 && asciiLocation < 97) || (asciiLocation > 122) && (asciiLocation != 209 && asciiLocation != 241))){
                lettersLocation += 1;
            }
        }
        if(spacesLocation + numberLocation + lettersLocation != locationValue.length) {
            console.log("Error. No debe contener espacio, solo caracteres alfanumericos");
        } else {
            console.log("bien ingresado correctamente");
        }
    }
}

function postalBlur () {
    var postalValue = postal.value;
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
    var emailValue = email.value;
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var respuestaExpReg = expReg.test(emailValue);
    if(respuestaExpReg){
        console.log("buen email");
    } else {
        console.log("mal email :c");
    }
}

function passwordBlur () {
    var passwordValue = password.value;
    var letterPassword = 0;
    var numberPasdword = 0
    if (passwordValue.length > 7){
        for (let i = 0; i < passwordValue.length; i++) {
            var letterPass = passwordValue.substring(i,i+1);
            let ascii = letterPass.charCodeAt();
            if (letterPass == Number(letterPass) && ascii != 32){
                numberPasdword += 1;
            }
            if (!((ascii < 65) || (ascii > 90 && ascii < 97) || (ascii > 122) && (ascii != 209 && ascii != 241))) {
                letterPassword += 1;
            }
        } 
        if (letterPassword + numberPasdword === passwordValue.length){
            console.log("BIEN");
            // return checkedPW = password.value;
        } else {
            console.log("solo permitidos caracteres alfanumericos");
        }
    } else {
        console.log("debe ingresar al menos 8 caracteres");
    }
}

function passwordRepeatBlur () {
    var passwordRepeatValue = passwordRepeat.value;
    var lettersPasswordRepeat = 0;
    var numberPasswordRepeat = 0;
    if (passwordRepeatValue.length > 7){
        for (let i = 0; i < passwordRepeatValue.length; i++) {
            var letterPasswordRepeat = passwordRepeatValue.substring(i,i+1);
            var asciiPR = letterPasswordRepeat.charCodeAt();
            if (letterPasswordRepeat == Number(letterPasswordRepeat) && asciiPR != 32){
                numberPasswordRepeat += 1;
            }
            if (!((asciiPR < 65) || (asciiPR > 90 && asciiPR < 97) || (asciiPR > 122) && (asciiPR != 209 && asciiPR != 241))) {
                lettersPasswordRepeat += 1;
            }
        } 
        if (lettersPasswordRepeat + numberPasswordRepeat == passwordRepeatValue.length){
            console.log("bien solo caracteres y numeros");
        } else {
            console.log("solo permitidos caracteres alfanumericos");
        }
    } else {
        console.log("debe ingresar al menos 8 caracteres");
    }
    // if (passwordRepeatValue != checkedPW){
    //     console.log("MAL las contraseñas coinciden  ");
    // } else {
    //     console.log("bien rey coinciden ");
    // }
}

// funcion pintar msj
function nameFocus () {
    var p = document.getElementById("nameErrorCaracter");
    // var p = document.getElementById("nameError");
    p.classList.replace("active", "hidden");

}
