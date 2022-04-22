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
nombre.addEventListener("blur", emailBlur)
dni.addEventListener("blur", dniBlur)

// functions
function emailBlur (){
    let nameValue = document.getElementById("name").value;
    console.log(nameValue);
    
    if (nameValue.length < 4){
        console.log("3 letras o menos");
    }
    let letras = [...nameValue];
    console.log(letras);
    
    // PRUEBA 3
    // respuesta = nameValue.includes('number');
    // console.log(respuesta);
    
// PRUEBA 4
    // if(typeof nameValue != 'string'){
    //     console.log("no es solo string");
        
    // }

    // PRUEBA 1
    // cont = 0;
    // letras.forEach(e => {
    //     console.log(typeof(letras.e));
    //     if(typeof e != 'string'){
    //         cont = cont + 1;
    //     }
        
    // })
    

    // PRUEBA 2
//     cont = 0;
//     letras.forEach(e => {
//         if(e === '@'){
//             cont = cont + 1;
//         }
//     })
//     if (cont == 1) {
//         console.log("tiene 1 arroba");     
//     } else {
//         console.log("errorRRR")
//     }  
}
function dniBlur () {
    dniValue = document.getElementById("dni").value;
    //  or typeof dni != 'number' VA ADENTRO DEL IF ? 
    if(dniValue.length < 8){
        console.log("distinto de numero");
    }else {
        console.log("bien el dni");
    }
}