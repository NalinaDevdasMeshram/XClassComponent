import { useState } from "react"


function App() {
  const [valueOfCount, setvalueOfCount] = useState(0);
   const handleIncrement =()=>{
    setvalueOfCount((prevState) => prevState + 1);
     }
  const handleDecrement =()=>{
    setvalueOfCount ((prevState) => prevState - 1);
    }
return (
    <div>
      <h1>Counter App</h1>
      <p>Count:{valueOfCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decremnet</button>
    </div>
  )
}

export default App
