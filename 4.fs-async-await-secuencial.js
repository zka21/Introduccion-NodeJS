const { readFile } = require('node:fs/promises')

//IIFE - Inmediatly Invoked Function Expression

// ;(
//     async ()=>{
//     console.log('leyendo el primer archivo');
// const textOne =  await readFile('./archivo.txt', 'utf-8',)
// console.log('Primer texto: ', textOne);
    
// console.log('Hacer cosas mientras lee el archivo');

// console.log('leyendo el segundo archivo');
// const textTwo = await readFile('archivo2.txt', 'utf-8')
// console.log('Segundo texto: ', textTwo);
// })()

//El codigo de arriba es iagual al de abajo
// la unica diferencia es que el de arriba usa la IIFE y abajo la normal

async function init(){
    console.log('leyendo el primer archivo');
const textOne =  await readFile('./archivo.txt', 'utf-8',)
console.log('Primer texto: ', textOne);
    
console.log('Hacer cosas mientras lee el archivo');

console.log('leyendo el segundo archivo');
const textTwo = await readFile('archivo2.txt', 'utf-8')
console.log('Segundo texto: ', textTwo);
}
   
init()