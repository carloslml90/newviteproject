import PropTypes from 'prop-types';

export const CounterApp=({value}) => {

    return (
    <>
        <h1>Counter APP</h1>

        <h2>Count is + {value}</h2>
    </> 
   
        )
}

CounterApp.propTypes={

value: PropTypes.number.isRequired,
}

