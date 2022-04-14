// Variables y Operadores
// a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos 
//         números en una 3er variable.
// b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
// c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
//         guardando el resultado de la suma en una 3er variable (utilizar length).
// a)
var firstNum, secondNum, resultA;
firstNum = 3;
secondNum = 4;
resultA = firstNum + secondNum;
console.log('\n-Exercise 1.a:');
console.log(resultA);
// b)
var firstStr, secondStr, resultB;
firstStr = 'Hola me llamo ';
secondStr = 'Nicolas Costanza';
resultB = firstStr + secondStr;
console.log('\n-Exercise 1.b:');
console.log(resultB);
// c)
var strOne, strTwo, resultC;
strOne = 'Hello Word';
strTwo = 'These are my first steps in javascript';
resultC = strOne.length + strTwo.length;
console.log('\n-Exercise 1.c:');
console.log(resultC);