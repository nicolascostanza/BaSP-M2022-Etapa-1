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
// variables para validacion
var nameValidateModal = false;
var surnameValidateModal = false;
var dniValidateModal = false;
var dateValidateModal = false;
var phoneValidateModal = false;
var addressValidateModal = false;
var locationValidateModal = false;
var postalValidateModal = false;
var emailValidateModal = false;
var passwordValidateModal = false;
var passwordRepeatValidateModal = false;


// prueba
// sacar los var p
// events
nombre.addEventListener("blur", nameBlur);
nombre.addEventListener("focus", nameFocus);
surname.addEventListener("blur", surnameBlur);
surname.addEventListener("focus", surnameFocus);
dni.addEventListener("blur", dniBlur);
dni.addEventListener("focus", dniFocus);
date.addEventListener("blur", dateBlur);
date.addEventListener("focus", dateFocus);
phone.addEventListener("blur", phoneBlur);
phone.addEventListener("focus", phoneFocus);
address.addEventListener("blur", addressBlur);
address.addEventListener("focus", addressFocus);
locationsingup.addEventListener("blur", locationBlur);
locationsingup.addEventListener("focus", locationFocus);
postal.addEventListener("blur", postalBlur);
postal.addEventListener("focus", postalFocus);
email.addEventListener("blur", emailBlur);
email.addEventListener("focus", emailFocus);
password.addEventListener("blur", passwordBlur);
password.addEventListener("focus", passwordFocus);
passwordRepeat.addEventListener("blur", passwordRepeatBlur);
passwordRepeat.addEventListener("blur", passwordRepeatFocus);


// area de trabajo para las funciones 
// modales variables
var modalOk = document.getElementById("modal-ok");
var modalError = document.getElementById("modal-bad");
var btnExit = document.getElementsByClassName("btn-close");
var btnCreate = document.getElementById("btn-create");


btnCreate.onclick = function(e) {
    e.preventDefault();
    if (nameValidateModal 
        && surnameValidateModal 
        && dniValidateModal 
        && dateValidateModal 
        && phoneValidateModal 
        && addressValidateModal
        && locationValidateModal
        && postalValidateModal
        && emailValidateModal
        && passwordValidateModal
        && passwordRepeatValidateModal) {
        modalOk.style.display = "block";
        var pintar = document.getElementById("create-employy");
        pintar.innerHTML = `<p>Name: ` + nombre.value + `</p>
        <p>Surname: ` + surname.value + `</p>
        <p>Dni: ` + dni.value + `</p>
        <p>Date: ` + date.value + `</p>
        <p>Phone: ` + phone.value + `</p>
        <p>Address: ` + address.value + `</p>
        <p>Location: ` + locationsingup.value + `</p>
        <p>Postal: ` + postal.value + `</p>
        <p>Email: ` + email.value + `</p>
        <p>Password: ` + password.value + `</p>`
        ;
    } else {
        modalError.style.display = "block";
        var pintarError = document.getElementById("error-create-employy");
        pintarError.innerHTML = `<h3>Name: </h3>`;
    }
}


// if (nameValue == ""){
//     nameValidateModal = false;
//     var p = document.getElementById("nameError");
//     p.classList.replace("hidden", "active");
//     nombre.classList.add("borderWarning");
// } else {
//     var p = document.getElementById("nameError");
//     p.classList.replace("active", "hidden");
// }
// btnCreate2.onclik = function(e) {}

// functions blur 
function nameBlur (e){
    var nameValue = e.target.value;
    if (nameValue == ""){
        nameValidateModal = false;
        var p = document.getElementById("nameError");
        p.classList.replace("hidden", "active");
        nombre.classList.add("borderWarning");
    } else {
        var p = document.getElementById("nameError");
        p.classList.replace("active", "hidden");
        if (nameValue.length < 4){
            nameValidateModal = false;
            var p = document.getElementById("nameErrorLength");
            p.classList.replace("hidden", "active");
            nombre.classList.add("borderWarning");
        } else{
            var p = document.getElementById("nameErrorLength");
            p.classList.replace("active", "hidden");
            var cont = false;
            for (var i = 0; i < nameValue.length; i++) {
                var letterName = nameValue.substring(i,i+1);
                let ascii = letterName.charCodeAt();
                if ((ascii < 65) || (ascii > 90 && ascii < 97) || (ascii > 122) && (ascii != 32 && ascii != 209 && ascii != 241)) {
                    cont = true;
                }
            }
            if(cont){
                var p = document.getElementById("nameErrorCaracter");
                p.classList.replace("hidden", "active");
                nombre.classList.add("borderWarning");
                nameValidateModal = false;
            } else {
                nombre.classList.remove("borderWarning");
                nombre.classList.add("borderSuccess");
                nameValidateModal = true;
            }
        }
    }
}

function surnameBlur (e){
    var surnameValue = e.target.value;
    if (surnameValue == ""){
        surnameValidateModal = false;
        var p = document.getElementById("surname-error");
        p.classList.replace("hidden", "active");
        surname.classList.add("borderWarning");
    } else {
        var px = document.getElementById("surname-error");
        px.classList.replace("active", "hidden");
        if (surnameValue.length < 4){
            var p = document.getElementById("surnameErrorLength");
            p.classList.replace("hidden", "active");
            surname.classList.add("borderWarning");
            surnameValidateModal = false;
        } else {
            var p = document.getElementById("surnameErrorLength");
            p.classList.replace("active", "hidden");
            var validateSurname = false
            for (var i = 0; i < surnameValue.length; i++) {
                var letraSurname = surnameValue.substring(i,i+1);
                var asciiSurname = letraSurname.charCodeAt();
                if ((asciiSurname < 65) || (asciiSurname > 90 && asciiSurname < 97) || (asciiSurname > 122) && (asciiSurname != 32 && asciiSurname != 209 && asciiSurname != 241)) {
                    validateSurname = true;
                }
            }
            if(validateSurname){
                var p = document.getElementById("surnameErrorCaracter");
                p.classList.replace("hidden", "active");
                surname.classList.add("borderWarning");
                surnameValidateModal = false;
            } else{
                surname.classList.remove("borderWarning");
                surname.classList.add("borderSuccess");
                surnameValidateModal = true;
            }
        }
    }
   
}

function dniBlur (e) {
    dniValue = e.target.value;
    if (dniValue == ""){
        dniValidateModal = false;
        var p = document.getElementById("dni-error");
        p.classList.replace("hidden", "active");
        dni.classList.add("borderWarning");
    } else {
        var px = document.getElementById("dni-error");
        px.classList.replace("active", "hidden");
        if(dniValue.length < 8){
            var p = document.getElementById("dniErrorLength");
            p.classList.replace("hidden", "active");
            dni.classList.add("borderWarning");
            dniValidateModal = false;
        }else {
            var p = document.getElementById("dniErrorLength");
            p.classList.replace("active", "hidden");
            var validateDni = false
            for (let i = 0; i < dniValue.length; i++) {
                var numDni = dniValue.substring(i,i+1);
                var asciiDni = numDni.charCodeAt();
                if (numDni != Number(numDni) || asciiDni == 32) {
                    validateDni = true;
                }
            }
            if (validateDni){
                p = document.getElementById("dniErrorCaracter");
                p.classList.replace("hidden", "active");
                dni.classList.add("borderWarning");
                dniValidateModal = false;
            } else {
                p = document.getElementById("dniErrorCaracter");
                p.classList.replace("active", "hidden");
                dni.classList.remove("borderWarning");
                dni.classList.add("borderSuccess");
                dniValidateModal = true;
            }
        }
    }
}

function dateBlur (e) {
    var dateValue = e.target.value;
    if (dateValue == ""){
        dateValidateModal = false;
        var p = document.getElementById("date-error");
        p.classList.replace("hidden", "active");
        date.classList.add("borderWarning");
    } else {
        var p = document.getElementById("date-error");
        p.classList.replace("active", "hidden");
        var day = dateValue.substring(0,2);
        var check1 = dateValue.substring(2,3);
        var month = dateValue.substring(3,5);
        var check2 = dateValue.substring(5,6);
        var year = dateValue.substring(6);
        day = Number(day);
        month = Number(month);
        year = Number(year);
        if(day < 1 || day > 31){
            var p = document.getElementById("dateError");
            p.classList.replace("hidden", "active");
            date.classList.add("borderWarning");
            dateValidateModal = false;
        } else if (month < 1 || month > 12) {
            var p = document.getElementById("dateError");
            p.classList.replace("hidden", "active");
            date.classList.add("borderWarning");
            dateValidateModal = false;
        } else if (year < 1900 || year > 2022 || year != Number(year)) {
            var p = document.getElementById("dateError");
            p.classList.replace("hidden", "active");
            date.classList.add("borderWarning");
            dateValidateModal = false;
        } else if(check1 != '/' || check2 != '/'){
            var p = document.getElementById("dateError");
            p.classList.replace("hidden", "active");
            date.classList.add("borderWarning");
            dateValidateModal = false;
        } else {
            p = document.getElementById("dateError");
            p.classList.replace("active", "hidden");
            date.classList.remove("borderWarning");
            date.classList.add("borderSuccess");
            dateValidateModal = true;
        }
    }
    
}

function phoneBlur (e) {
    var phoneValue = e.target.value;
    if (phoneValue == ""){
        phoneValidateModal = false;
        var p = document.getElementById("phone-error");
        p.classList.replace("hidden", "active");
        phone.classList.add("borderWarning");
    } else {
        var p = document.getElementById("phone-error");
        p.classList.replace("active", "hidden");
        if(phoneValue.length == 10){
            p = document.getElementById("phoneErrorLength");
            p.classList.replace("active", "hidden");
            var validatePhone = false
            for (var i = 0; i < phoneValue.length; i++) {
                var numberPhone = phoneValue.substring(i,i+1);
                var asciiPhone = numberPhone.charCodeAt();
                if (numberPhone != Number(numberPhone) || asciiPhone == 32) {
                    validatePhone = true;
                }
            }
            if (validatePhone){
                p = document.getElementById("phoneErrorCaracter");
                p.classList.replace("hidden", "active");
                phone.classList.add("borderWarning");
                phoneValidateModal = false;
            } else {
                p = document.getElementById("phoneErrorCaracter");
                p.classList.replace("active", "hidden");
                phone.classList.remove("borderWarning");
                phone.classList.add("borderSuccess");
                phoneValidateModal = true;
            }
        }else {
            var p = document.getElementById("phoneErrorLength");
            p.classList.replace("hidden", "active");
            phone.classList.add("borderWarning");
            phoneValidateModal = false;
        }
    }
    
}

function addressBlur (e) {
    var addressValue = e.target.value;
    if (addressValue == ""){
        addressValidateModal = false;
        var p = document.getElementById("address-error");
        p.classList.replace("hidden", "active");
        address.classList.add("borderWarning");
    } else {
        var p = document.getElementById("address-error");
        p.classList.replace("active", "hidden");
        if (addressValue.length < 5){
            var p = document.getElementById("addressErrorLength");
            p.classList.replace("hidden", "active");
            address.classList.add("borderWarning");
            addressValidateModal = false;
        } else {
            var p = document.getElementById("addressErrorLength");
            p.classList.replace("active", "hidden");
            if (addressValue.indexOf(" ") === -1){
                var p = document.getElementById("addressErrorSpace");
                p.classList.replace("hidden", "active");
                address.classList.add("borderWarning");
                addressValidateModal = false;
            } else {
                var p = document.getElementById("addressErrorSpace");
                p.classList.replace("active", "hidden");
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
                    var p = document.getElementById("addressErrorCaracter");
                    p.classList.replace("hidden", "active");
                    address.classList.add("borderWarning");
                    addressValidateModal = false;
                } else if(letterAddress + numberAddress + spacesAddress == addressValue.length){
                    p = document.getElementById("addressErrorCaracter");
                    p.classList.replace("active", "hidden");
                    var p2 = document.getElementById("addressErrorCaracterSpecial");
                    p2.classList.replace("active", "hidden");
                    address.classList.remove("borderWarning");
                    address.classList.add("borderSuccess");
                    addressValidateModal = true;
                } else {
                    var p = document.getElementById("addressErrorCaracterSpecial");
                    p.classList.replace("hidden", "active");
                    address.classList.add("borderWarning");
                    addressValidateModal = false;
                }
            }
        }
    }
    
}

function locationBlur (e) {
    var locationValue = e.target.value;
    if (locationValue == ""){
        locationValidateModal = false;
        var p = document.getElementById("location-error");
        p.classList.replace("hidden", "active");
        locationsingup.classList.add("borderWarning");
    } else {
        var p = document.getElementById("location-error");
        p.classList.replace("active", "hidden");
        if (locationValue.length < 3) {
            var p = document.getElementById("locationErrorLength");
            p.classList.replace("hidden", "active");
            locationsingup.classList.add("borderWarning");
            locationValidateModal = false;
        } else {
            var p = document.getElementById("locationErrorLength");
            p.classList.replace("active", "hidden");
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
                p = document.getElementById("addressErrorCaracter");
                p.classList.replace("hidden", "active");
                locationsingup.classList.add("borderWarning");
                locationValidateModal = false;
            } else {
                p = document.getElementById("addressErrorCaracter");
                p.classList.replace("active", "hidden");
                locationsingup.classList.remove("borderWarning");
                locationsingup.classList.add("borderSuccess");
                locationValidateModal = true;
            }
        }
    }
    
}

function postalBlur (e) {
    var postalValue = e.target.value;
    if (postalValue == ""){
        postalValidateModal = false;
        var p = document.getElementById("postal-error");
        p.classList.replace("hidden", "active");
        postal.classList.add("borderWarning");
    } else {
        var p = document.getElementById("postal-error");
        p.classList.replace("active", "hidden");
        if(postalValue == Number(postalValue)){
            var p = document.getElementById("postalErrorLength");
            p.classList.replace("active", "hidden");
            if( postalValue.length == 4 || postalValue.length == 5 ){
                p = document.getElementById("postalErrorCaracter");
                p.classList.replace("active", "hidden");
                postal.classList.remove("borderWarning");
                postal.classList.add("borderSuccess");
                postalValidateModal = true;
            } else {
                p = document.getElementById("postalErrorCaracter");
                p.classList.replace("hidden", "active");
                postal.classList.add("borderWarning");
                postalValidateModal = false;
            }
        }else {
            var p = document.getElementById("postalErrorLength");
            p.classList.replace("hidden", "active");
            postal.classList.add("borderWarning");
            postalValidateModal = false;
        }
    }
}

function emailBlur (e) {
    var emailValue = e.target.value;
    if (emailValue == ""){
        emailValidateModal = false;
        var p = document.getElementById("email-error");
        p.classList.replace("hidden", "active");
        email.classList.add("borderWarning");
    } else {
        var p = document.getElementById("email-error");
        p.classList.replace("active", "hidden");
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var respuestaExpReg = expReg.test(emailValue);
        if(respuestaExpReg){
            p = document.getElementById("emailError");
            p.classList.replace("active", "hidden");
            email.classList.remove("borderWarning");
            email.classList.add("borderSuccess");
            emailValidateModal = true;
        } else {
            var p = document.getElementById("emailError");
            p.classList.replace("hidden", "active");
            email.classList.add("borderWarning");
            emailValidateModal = false;
        }
    }
}

function passwordBlur (e) {
    var passwordValue = e.target.value;
    if (passwordValue == ""){
        passwordValidateModal = false;
        var p = document.getElementById("password-error");
        p.classList.replace("hidden", "active");
        password.classList.add("borderWarning");
    } else {
        var p = document.getElementById("password-error");
        p.classList.replace("active", "hidden");
        var letterPassword = 0;
        var numberPasdword = 0;
        if (passwordValue.length > 7){
            p = document.getElementById("passwordErrorLength");
            p.classList.replace("active", "hidden");
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
                p = document.getElementById("passwordErrorCaracter");
                p.classList.replace("active", "hidden");
                password.classList.remove("borderWarning");
                password.classList.add("borderSuccess");
                passwordValidateModal = true;
                // return checkedPW = password.value;
            } else {
                p = document.getElementById("passwordErrorCaracter");
                p.classList.replace("hidden", "active");
                password.classList.add("borderWarning");
                passwordValidateModal = false;
            }
        } else {
            var p = document.getElementById("passwordErrorLength");
            p.classList.replace("hidden", "active");
            password.classList.add("borderWarning");
            passwordValidateModal = false;
        }
    }
}

function passwordRepeatBlur (e) {
    var passwordRepeatValue = e.target.value;
    if (passwordRepeatValue == ""){
        passwordRepeatValidateModal = false;
        var p = document.getElementById("password-repeat-error");
        p.classList.replace("hidden", "active");
        passwordRepeat.classList.add("borderWarning");
    } else {
        var p = document.getElementById("password-repeat-error");
        p.classList.replace("active", "hidden");
        var lettersPasswordRepeat = 0;
        var numberPasswordRepeat = 0;
        if (passwordRepeatValue.length > 7){
            var p = document.getElementById("passwordRepeatErrorLength");
            p.classList.replace("active", "hidden");
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
                p = document.getElementById("passwordRepeatErrorCaracter");
                p.classList.replace("active", "hidden");
                passwordRepeat.classList.remove("borderWarning");
                passwordRepeat.classList.add("borderSuccess");
                passwordRepeatValidateModal = true;
            } else {
                p = document.getElementById("passwordRepeatErrorCaracter");
                p.classList.replace("hidden", "active");
                passwordRepeat.classList.add("borderWarning");
                passwordRepeatValidateModal = false;
            }
        } else {
            var p = document.getElementById("passwordRepeatErrorLength");
            p.classList.replace("hidden", "active");
            passwordRepeat.classList.add("borderWarning");
            passwordRepeatValidateModal = false;
        }
    }

    // if (passwordRepeatValue != checkedPW){
    //     console.log("MAL las contraseñas coinciden  ");
    // } else {
    //     console.log("bien rey coinciden ");
    // }
}

// funcion pintar msj
function nameFocus () {
    var p = document.getElementById("nameErrorLength");
    var p2 = document.getElementById("nameErrorCaracter");
    p.classList.replace("active", "hidden");
    p2.classList.replace("active", "hidden");
}

function surnameFocus () {
    p = document.getElementById("surnameErrorLength");
    p2 = document.getElementById("surnameErrorCaracter");
    p.classList.replace("active", "hidden");
    p2.classList.replace("active", "hidden");
}

function dniFocus () {
    p = document.getElementById("dniErrorLength");
    p2 = document.getElementById("dniErrorCaracter");
    p.classList.replace("active", "hidden");
    p2.classList.replace("active", "hidden");
}

function dateFocus () {
    p = document.getElementById("dateError");
    p.classList.replace("active", "hidden");
}

function phoneFocus () {
    p = document.getElementById("phoneErrorLength");
    p2 = document.getElementById("phoneErrorCaracter");
    p.classList.replace("active", "hidden");
    p2.classList.replace("active", "hidden");
}

function addressFocus () {
    p = document.getElementById("addressErrorLength");
    p2 = document.getElementById("addressErrorSpace");
    p3 = document.getElementById("addressErrorCaracter");
    p4 = document.getElementById("addressErrorCaracterSpecial");
    p.classList.replace("active", "hidden");
    p2.classList.replace("active", "hidden");
    p3.classList.replace("active", "hidden");
    p4.classList.replace("active", "hidden");
}

function locationFocus () {
    p = document.getElementById("locationErrorLength");
    p2 = document.getElementById("locationErrorCaracter");
    p.classList.replace("active", "hidden");
    p2.classList.replace("active", "hidden");
}

function postalFocus () {
    p = document.getElementById("postalErrorLength");
    p2 = document.getElementById("postalErrorCaracter");
    p.classList.replace("active", "hidden");
    p2.classList.replace("active", "hidden");
}

function emailFocus () {
    p = document.getElementById("emailError");
    p.classList.replace("active", "hidden");
}

function passwordFocus () {
    p = document.getElementById("passwordErrorLength");
    p2 = document.getElementById("passwordErrorCaracter");
    p.classList.replace("active", "hidden");
    p2.classList.replace("active", "hidden");
}

function passwordRepeatFocus () {
    px = document.getElementById("passwordRepeatErrorLength");
    p2 = document.getElementById("passwordRepeatErrorCaracter");
    px.classList.replace("active", "hidden");
    p2.classList.replace("active", "hidden");
}


// verificacion de ventana modal
