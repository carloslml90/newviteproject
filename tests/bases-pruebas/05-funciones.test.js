import { getUser } from "../../src/bases-pruebas/05-funciones"

import {getUsuarioActivo} from "../../src/bases-pruebas/05-funciones"

describe('Function testing ', () =>{

    test('GetUser should return an object',()=>{

 const TestUser= {
    uid: 'ABC123',
    username: 'El_Papi1502'
}

const user = getUser();


expect (TestUser).toEqual(user)
    })
    
    test('Another function',()=>{


        const nombre='fernando';
        const user= getUsuarioActivo(nombre);
        expect(user).toStrictEqual({uid:'ABC567', username:nombre })
console.log(user);

        
    })
})