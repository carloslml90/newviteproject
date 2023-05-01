import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Hello } from './Helloworld'
import { MyIntroduce } from './Introduce-myself'
import { CounterApp } from './CounterApp'


import "./styles.css"
/* import './index.css' */



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={50} />

 <Hello 
 title='i love me a lot'
 description='nothing interesting'
 goal='Will be a great progammer'/>
 
  </React.StrictMode>,
)
