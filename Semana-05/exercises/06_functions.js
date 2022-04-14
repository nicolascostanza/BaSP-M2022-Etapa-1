// Funciones
// a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función 
//     y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
// b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no 
//     es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor 
//     NaN como resultado.
// c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un 
//     número entero.
// d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En 
//     caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
// e) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma 
//     probando que todo siga funcionando igual.
// a)
var result6A;
function suma (a,b){
    return a + b;
}
result6A = suma(3,5);
console.log('\n-Exercise 6.a:');
console.log(result6A);
// b)
function sumaExerciseB (a,b){
    if(typeof a != 'number' || typeof b != 'number'){
        alert("Uno de los parametros da error.\nNo es un numero.\nValor devuelto NaN.")
        return NaN;
    }else{
        return a + b;
    }
}
// c)
function validateInteger(a){
    if(typeof a === 'number'){
        return true;
    }
}
// d)
function sumaExerciseB (a,b){
    if(typeof a != 'number' || typeof b != 'number'){
        alert("Uno de los parametros da error.\nNo es un numero.\nValor devuelto NaN.")
        return NaN;
    }else{
        var responseA = (a % 1 === 0) ? true : false;
        if (!responseA) {
            alert('Error, no es un entero. Es decimal');
            a = Math.round()
        }
        var responseB = (b % 1 === 0) ? true : false;
        if (!responseB) {
            alert('Error, no es un entero. Es decimal');
            b = Math.round()
        }
        return a + b;
    }
}
// e)
// funcion aparte
function validadorEntero(a) {
    var responseA = (a % 1 === 0) ? true : false;
    if (!responseA) {
        alert('Error, no es un entero');
        a = Math.round()
    }
    return a;
}
// la llamo en la funcion de suma
function sumaExerciseB (a,b){
    if(typeof a != 'number' || typeof b != 'number'){
        alert("Uno de los parametros da error.\nNo es un numero.\nValor devuelto NaN.")
        return NaN;
    }else{
        validadorEntero(a);
        validadorEntero(b);
        return a + b;
    }
}