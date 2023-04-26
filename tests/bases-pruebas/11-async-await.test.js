import { getImagen } from "../../src/bases-pruebas/11-async-await";

describe('Pruebas en 11-async-await.js', ()=>{
test ('getImagen debe retornan un url de la imagen', async () =>{

const url=await getImagen();
console.log(url);

})

})


