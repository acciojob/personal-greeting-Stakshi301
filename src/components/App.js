
import React from "react";
import './../styles/App.css';

const App = () => {
  const[name,usename]=useState('')

  const handleChange = (event) => {
    usename(event.target.value);
  };
  
  return (

    <div>
        {/* Do not remove the main div */}
   <input value={name} onChange={handleChange} type="text"></input>
   {name&&<h1>Hello,{name}!</h1>}
       </div>
  )
}

export default App
