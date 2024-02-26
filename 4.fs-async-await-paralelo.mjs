import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./archivo.txt', 'utf-8',),
    readFile('archivo2.txt', 'utf-8')
]).then(([text,secondtext]) => {
    console.log('Primer texto: ', textOne);
    console.log('Segundo texto: ', textTwo);

})


   