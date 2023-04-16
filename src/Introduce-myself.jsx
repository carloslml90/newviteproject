


const name= 'carlos';

const apellido='mata'

const fullname= name.toUpperCase()+' '+ apellido.toUpperCase();

const dates={age:35, stature: 5.7 }


export const MyIntroduce=() =>{


    return ( 

<p> Hello my name is {fullname} and my data are the following: <code>{JSON.stringify(dates)}</code> </p>

        )
    



}