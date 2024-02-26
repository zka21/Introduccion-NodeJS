import { readFile } from 'node:fs/promises';


console.log('leyendo el primer archivo');
const textOne =  await readFile('./archivo.txt', 'utf-8',)
console.log('Primer texto: ', textOne);
    
console.log('Hacer cosas mientras lee el archivo');

console.log('leyendo el segundo archivo');
const textTwo = await readFile('archivo2.txt', 'utf-8')
console.log('Segundo texto: ', textTwo);

   