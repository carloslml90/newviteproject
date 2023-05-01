import { render, screen} from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Testing my <CounterApp/>', ()=>{

const InitialValue= 20
test('It must does match with a snapshot',()=>{

const{container}=render(<CounterApp value={InitialValue}/>);

expect(container).toMatchSnapshot();

})



 test('it must show a start value of 100',()=>{

render(<CounterApp value={100}/>);
expect(screen.getByText('100')).toBeTruthy();

}) 

})

