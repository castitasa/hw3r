import { useState } from "react";

function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);


  return (
    <div className='App'>
      <input type="text" value={input1} onChange={(e)=>setInput1(e.target.value)} />
      <input type="text" value={input2} onChange={(e)=>setInput2(e.target.value)}/>

      <div>
        <button onClick={()=>{
            setResult(+input1 + +input2)
        }}>+</button>
        <button onClick={()=>{
            setResult(+input1 - +input2)
        }}>-</button>
        <button onClick={()=>{
            setResult(+input1 * +input2)
        }}>*</button>
        <button onClick={()=>{
            setResult(+input1 / +input2)
        }}>/</button>
        <button onClick={()=>{
            setResult(Math.pow(+input1, +input2))
        }}>степень</button>
        <button onClick={()=>{
            setResult(Math.pow(+input1, 1/ +input2))
        }}>корень</button>
      </div>
      <h1>{result}</h1>
    </div>
  );
}

export default App;