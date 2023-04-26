

import PropTypes from 'prop-types';
export const Hello =() => {
 const  NewFunction=() =>{
console.log('hola mundo');
}
return (
<>
    <h1>Life  is hard but I'm harder 💪🏾</h1>

    <h2> show my {NewFunction()}</h2>
    </>
)
/* GetHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
          
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 1000 )
    
    });


}
 */


}


Hello.defaultProps= {
title:'First component',

description:'This one make a beautiful output',

goal:'practice',





}