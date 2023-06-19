

import './App.css';
import {useState} from 'react'

function App() {
  const [color,setcolor]=useState(false)
  

  return (
  <div className='div_main' style={color===false?{ background:"white" }:{background:"black"}} >
    <div className='div-2'><button onClick={()=>{setcolor(a=>!a)}} id="button-color">Dark/Lite</button></div>
  </div>
  )
}

export default App;
