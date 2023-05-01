

import PropTypes from 'prop-types';
export const Hello =({title, description, goal}) => {
 const  NewFunction=() =>{
console.log('hola mundo');
}
return (
<>
    <h1 data-testid="test-title">{title}</h1>
    <p>{goal}</p>
    <p>{description}</p>


    </>
)



}


Hello.propTypes= {
title: PropTypes.string,
description: PropTypes.string,
goal: PropTypes.string





}