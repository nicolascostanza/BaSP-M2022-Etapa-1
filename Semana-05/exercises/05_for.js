// For
// a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para 
//     mostrar una alerta utilizando cada una de las palabras.
// b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada 
//     palabra modificada.
// c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo 
//     con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una 
//     única alerta con la cadena completa.
// d) Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, 
//     es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el 
//     número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
// a)
var arr3 = ['arroz', 'maiz', 'cereal', 'azucar', 'oliva'];
for (var x = 0; x < arr3.length; x++) {
    alert(arr3[x]);
}
// b)
for (var y = 0; y < arr3.length; y++) {
    var result5B;
    result5B = arr3[y].substring(0,1).toUpperCase() + arr3[y].substring(1).toLowerCase();
    alert(result5B);
}
// c)
var sentence = "";
for (var z = 0; z < arr3.length; z++) {
    sentence = sentence + arr3[z];
}
alert(sentence);
// d)
var arr4 = [];
for (var k = 0; k < 10; k++) {
    arr4.push(k)
}
console.log(arr4);