describe('Our first component test />', ()=>{
test('This strings should be equal', ()=>{

const message1='Hello world';
const message2= message1.trim();

expect(message1).toBe(message2)
})

test ('This test must fail',()=>{

if (1===0) {
    throw new Error (' These numbers cant be equals')
}

})
})