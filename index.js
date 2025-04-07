// // 1
// import concatenar from './modulos/concatenar.js'
//  console.log(concatenar("Aaa ", "Bbb"))

// //2
// const num1 = 20
// const num2 = 30

// import operaciones from './modulos/matematicas.js'
// console.log(operaciones.PI)
// console.log(operaciones.sumar(num1,num2)) 
// console.log(operaciones.restar(num1,num2)) 
// console.log(operaciones.multiplicar(num1,num2)) 
// console.log(operaciones.dividir(num1,num2)) 


// 3
// import Alumno from "./modulos/alumno.js";

// const alumno1 = new Alumno("Jaime Usach", 17765619)
// const alumno2 = new Alumno("Dekel Usach", 48386383)

// console.log(alumno1)
// console.log(alumno2)

// 4
// import fs from 'fs'
// const copiar = (tituloEntrada, salida) => {
//     const textoAnterior = fs.readFileSync(tituloEntrada);

//     fs.writeFile(salida, textoAnterior, () => {
    
//         console.log("archivo creado correctamente")
//          });       
// }

// copiar('texto.txt', 'nuevoArchivo.txt')


// 5/6
// import parsearUrl from "./modulos/parsearUrl.js";

// const objeto1 = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
// console.log(objeto1);


import paisMoneda from "./modulos/paisMoneda.js"

console.log(paisMoneda('US'))
