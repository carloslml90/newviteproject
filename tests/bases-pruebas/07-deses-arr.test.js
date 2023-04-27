import { string } from "prop-types";
import { retornaArreglo } from "../../src/bases-pruebas/07-deses-arr";

describe('Testing destruscture array <Destructuring/>',() => {

test('it must return a string and a number',()=>{

const retorno= retornaArreglo
console.log(retorno);
const [letters, numbers]= retornaArreglo();

expect(typeof letters).toEqual('string');
expect(typeof numbers).toEqual('number');

})

})