import "./App.css";

import { useStore } from "./store";



function App() {


  const { count, inc } = useStore()

  
  return (
    <>
         <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
    </>
  );
}

export default App;
