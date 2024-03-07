let numeros =[10.34,1,100,350.456]
const varios =["miguel", true, 10, null,3.0]

console.log(numeros);
console.log(varios);
console.log(varios.length + " elementos tiene el arreglo");
console.log(varios[1])

//con push agrego al final
numeros.push("colombia");
console.log(numeros);

//con pop se quita el ultimo
numeros.pop();
console.log(numeros);

//con unshift se agrega al inicio, el primer lugar
numeros.unshift("ferrari 488");
console.log(numeros);

//con shift se quita el primero
numeros.shift();
console.log(numeros);

//metodos excluisivos para metodos

//1 .reduce()  : permite reducir todos los valores de un array  a uno solo
let reducido= numeros.reduce((acumulador,valoractual)=>{
    return acumulador+valoractual;
})

console.log(reducido);

let reducido2= numeros.reduce((acumulador,valoractual)=>{
    return acumulador*valoractual;
})

console.log(reducido2);

// .filter() recorre el array y filtra  los que no cumplan la condicion

let filtrado = numeros.filter(dato=>{
    return  dato >10;
})

console.log(filtrado);

let string= ["colomba","brasil","comoros","conecticut"]
console.log(string.filter(dato=>{
    return dato.startsWith("co");
}))

//3 .map() le agrega o le hace algo  a cada elemento del array 

let mapeo = string.map(pais=>{
    return pais.concat(" hola gente bonita"); 
})

console.log(mapeo);

let mape= numeros.map(numero=>{
    return Math.pow(numero,2);
})

console.log(mape);

//4 .forEach() para cada uno de los elementos del arreglo se le hace algo

numeros.forEach(numero=>{
    console.log(numero);
})


////crear arreglos usando funciones(flecha)
/// usar metodos de arreglos y mostrar resultados(para cada arreglo que construya minimo un metodo)
///minimo crear un metodo


let carros = ["ferrari 488","mclaren 765","nissan gtr r35", " bmw m4","mclaren p1"];
let motos = ["zx10r","mt09","z900","R1","s1000r"];
let ciudades = ["berlin","new york","paris","florida","medllin"];
let deportes =["voleibol", "basket","futbol","balon mano"];

let depor = deportes.map(hola=>{
    return hola.concat(" Es hermoso");
})

console.log(depor);

let flir= carros.filter(letra=>{
    return letra.startsWith("mcl");
})

console.log("Estos son los carros que comienza por mcl: "+ flir)

motos.forEach(mt=>{
    return
})