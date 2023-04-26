
import { getSaludo } from "../../src/bases-pruebas/02-template-string"

describe('Testing templates strings', () => {

 test('getsaludo should return "Hola fernando"',()=>{

const nombre= 'fernando';
 const message= getSaludo(nombre);

 expect(message).toBe(`Hola ${nombre}`)

 })

})