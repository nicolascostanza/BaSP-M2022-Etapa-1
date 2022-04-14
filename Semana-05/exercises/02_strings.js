// Strings
// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
//     (utilizar toUpperCase).
// b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 
//     5 caracteres guardando el resultado en una nueva variable (utilizar substring).
// c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 
//     3 caracteres guardando el resultado en una nueva variable (utilizar substring).
// a)
var strA = 'This is a text of more than ten characters';
strA = strA.toUpperCase()
console.log('\n-Exercise 2.a:');
console.log(strA);
// b)
var StrB, result2B;
StrB = 'Example to solve exercise b';
result2B = StrB.substring(0, 5);
console.log('\n-Exercise 2.b:');
console.log(result2B);
// c)
var strC, result2C;
strC = 'Example to solve exercise'
result2C = strC.substring(strC.length - 3)
console.log('\n-Exercise 2.c:');
console.log(result2C);