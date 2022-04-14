// Strings
// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
//     (utilizar toUpperCase).
// b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 
//     5 caracteres guardando el resultado en una nueva variable (utilizar substring).
// c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 
//     3 caracteres guardando el resultado en una nueva variable (utilizar substring).
// d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera 
//     letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar 
//     substring, toUpperCase, toLowerCase y el operador +).
// e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la 
//     posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
// f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre 
//     medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la 
//     primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, 
//     substring, toUpperCase, toLowerCase y el operador +).

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
// d)
var strD, result2D;
strD = 'vOs de texto. Lorem Ipsum ha sido el Texto de reLleno estándar de las industrias desde el año';
result2D = strD.substring(0,1).toUpperCase() + strD.substring(1).toLowerCase();
console.log('\n-Exercise 2.d:');
console.log(result2D);
// e)
var strE, result2E;
strE = 'vOs de texto. Lorem Ipsum ha sido el Texto de reLleno estándar de las industrias desde el año';
result2E = strE.indexOf(" ");
console.log('\n-Exercise 2.e:');
console.log(result2E);
// f)
var strF, result2F;
strF = 'UncOpyRightable dermatOglYphIcs';
result2F = strF.substring(0,1).toUpperCase() + strF.substring(1, strF.indexOf(" ")).toLowerCase() 
+ " " + strF.substring(strF.indexOf(" ") + 1, strF.indexOf(" ") + 2).toUpperCase() + 
strF.substring(strF.indexOf(" ") + 2).toLowerCase();
console.log('\n-Exercise 2.f:');
console.log(result2F);