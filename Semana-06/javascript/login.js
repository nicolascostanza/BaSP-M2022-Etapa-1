let email = document.getElementById("email");
let password = document.getElementById("password");

// validacion de email

email.addEventListener("focus", emailFocus);
email.addEventListener("blur", emailBlur);


function emailFocus (){
    console.log("estoy haciendo focus");
}

function emailBlur (){
    let emailValor = document.getElementById("email").value;
    let letras = [...emailValor];
    cont = 0;
    letras.forEach(e => {
        if(e === '@'){
            cont = cont + 1;
        }
    })
    if (cont == 1) {
        console.log("tiene 1 arroba");     
    } else {
        console.log("errorRRR")
    }  
}

