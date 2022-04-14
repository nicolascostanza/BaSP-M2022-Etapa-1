// Arrays
// a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
//     "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
// b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
// c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
// d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

// e) Invertir el orden del array (utilizar reverse).
// f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar 
//     join).
// g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
// a)
var arr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
    "Noviembre", "Diciembre"];
console.log('\n-Exercise 3.a:');
console.log(arr[4], arr[10]);
// b)
var result3B;
arr.sort();
console.log('\n-Exercise 3.b:');
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// c)
var elementOne, elementTwo;
elementOne = 'Hola';
elementTwo = 'Chau';
arr.unshift(elementOne);
arr.push(elementTwo);
console.log('\n-Exercise 3.c:');
for (let i = 0; i < arr.length ; i++) {
    console.log(arr[i]);
}
// d)
arr.shift();
arr.pop();
console.log('\n-Exercise 3.d:');
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// e)
arr.reverse();
console.log('\n-Exercise 3.e:');
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// f)
var result3F = arr.join('-');
console.log('\n-Exercise 3.f:');
console.log(result3F);
// g)
var arr2, result3G;
arr2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
    "Noviembre", "Diciembre"];
result3G = arr2.slice(4 , 11)
console.log('\n-Exercise 3.g:');
for (let i = 0; i < result3G.length; i++) {
    console.log(result3G[i]);
}