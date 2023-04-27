import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp=({value}) => {
console. log ('executing')
    const [counter, SetCounter]=useState(value);

    const CounterAdd=() => { 

        SetCounter(

        (c) => c + 1);
    }

    const CounterSubstract=() => {

        SetCounter(

            (c) => counter -1
        );
    }    

    const CounterReset=() => {

        SetCounter(

            (c) => value
        );
    }    




    return (
    <>
        <h1>Counter APP</h1>

       

        <h2> Cups of coffe today {counter}</h2>
        <button onClick={CounterAdd}> +1 </button>
        <button onClick={CounterSubstract}> -1 </button>
        <button onClick={CounterReset}> Reset </button>

    </> 
   
        )
}

CounterApp.propTypes={

value: PropTypes.number.isRequired,
}

