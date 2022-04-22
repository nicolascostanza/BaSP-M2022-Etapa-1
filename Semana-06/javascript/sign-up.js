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
nombre.addEventListener("blur", nameBlur)
dni.addEventListener("blur", dniBlur)

// objeto
var validation = {
    name: false,
    surname: false,
}


// functions
function nameBlur (){
    let nameValue = nombre.value;
    // console.log(typeof(nameValue));
    if (nameValue.length < 4){
        console.log("3 letras o menos");
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

// terminados y para limpiar codigo
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

