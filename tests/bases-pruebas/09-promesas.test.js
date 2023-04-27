
import { GetHeroeByIdAsync } from "../../src/bases-pruebas/09-promesas";

describe('Testing promises omg',()=>{

test('This test should return a hero',(done)=>{


const id='1';

GetHeroeByIdAsync(id)
.then(heroe =>{

 expect(hero).toBe(  {id: 1,
    name: 'Batman',
    owner: 'DC'})

    
});
done();


})
})