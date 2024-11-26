import React, {useState} from 'react'

const MyComponent=()=>{

  const [add, setAdd]=useState('');

  const handleAddChange=(event) => {
    const getValue=event.target.value;
    
    setAdd(getValue);
    console.log('cuurent input value', getValue);
   
 }
  
  return(<div>
    <h1>input value: {add}</h1>
     <input value={add} onChange={handleAddChange} type='text'/>

  </div>
    
       
       

    
  )
}
export default MyComponent