let nombre = document.getElementById("name");
let surname = document.getElementById("surname");
let dni = document.getElementById("dni");
let date = document.getElementById("date");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
// let location = document.getElementById("location");
let postal = document.getElementById("postal");
let email = document.getElementById("email");
let password = document.getElementById("password");

// events
nombre.addEventListener("blur", nameBlur);
surname.addEventListener("blur", surnameBlur);
dni.addEventListener("blur", dniBlur);
date.addEventListener("blur", dateBlur);
// objeto
var validation = {
    name: false,
    surname: false,
}


// area de trabajo para las funciones 


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
        numero = dniValue.substring(i,i+1);
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
