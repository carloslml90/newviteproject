import {getHeroeById, getHeroesByOwner} from "../../src/bases-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes";


describe('Testing import and export',()=>{

test('This should show a hero by ID',()=>{

const id=1;
const hero= getHeroeById(id);
console.log (hero);

expect(hero).toEqual( heroes.find( (heroe) => heroe.id === id ))

console.log(heroes)





})

test('This should show a hero from DC',()=>{

    const  owner='DC';
    const DCHeroes= getHeroesByOwner(owner);
    console.log (DCHeroes);


     expect(DCHeroes).toEqual([
        {id: 1,name: 'Batman',owner: 'DC'},
         {id: 3,name: 'Superman',owner: 'DC'},
        {  id: 4,name: 'Flash',owner: 'DC'}]
            
            )

            expect(DCHeroes.length).toBe(3)
})



test('This should show a hero from Marvel',()=>{

    const  owner='Marvel';
    const HeroesOwners= getHeroesByOwner(owner);


    console.log (HeroesOwners);

expect(HeroesOwners.length).toBe(2)

expect(HeroesOwners).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    
   
})

})