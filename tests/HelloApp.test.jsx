import { render, screen } from "@testing-library/react";
import { Hello } from "../src/Helloworld";


describe('<FirstApp/> tests',()=>{


    /* test('should do match with snapshot',()=>{
        
        const nombre='carlos';    
        const title=`${nombre} this is the best web developer  in the world`;
        const {container}=render(<Hello title={title}/>);
        console.log(container);

        expect(container).toMatchSnapshot();
        
        
    }) */
    
    const title='The best developer';

    test('should show title inside a h1',()=>{

    
    const {container, getByText}=render(<Hello title={title}/>)

    expect(getByText).toBeTruthy();
    expect(container).toMatchSnapshot();
    const h1=container.querySelector('h1');
    expect(h1.innerHTML).toContain(title);
})

/* test('I want to create another snapshot', ()=>{

const title='i am practicing for being a big developer';
const description= 'embrace the struggle and just do it being strong and brave '
const {container}= render(<Hello title={title} description={description}/>)

expect(container).toMatchSnapshot();
}) */

test('it must show a message saying "i love me a lot ',()=>{

render(<Hello title={title}/>)
expect(screen.getByText(title)).toBeTruthy();
})
})