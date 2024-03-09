/* eslint-disable no-unused-vars */
import { useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
   // //useMemo Practice
   const [num, setNum] = useState(0);
   const [newNum, setnewNum] = useState(0);

   let start = Date.now();
   
   let newResult = useMemo(() => {
      let count = -1;
      let items = new Array(23873442);
      console.log("I am working");//This statement is not executed on each re-render
      items.fill(num);
      let newArray = items.map(() => {
         count = count + 1;
         let obj = {
            id: count,
            isTarget: count === 2332,
         };
         return obj;
      });
      let search = newArray.find((item) => item.isTarget);
      return search;
   }, [num]);

   console.log(newResult);
   let end = Date.now();
   console.log((end - start) / 1000, "Seconds");//To check time required for excecution


   //useRef Practice
   const [name,setName]=useState('');
   let prevName=useRef(null)
   let node=useRef(null)
   console.log(node.current);
   // const [prevName,setPrevName]=useState('');

   function accessValue(){
      prevName.current=name
      setName(node.current.value);
   }

   return (
      <>
         <div>
            <h1>Jai Shreeram</h1>
            <h1>{newNum}</h1>
            <h2></h2>
            <button onClick={() => setnewNum((prev) => prev + 1)}>Change</button>
            <button onClick={() => setNum((prev) => prev + 1)}>Click</button>
            <h1>Now your Name is {name}</h1>
            <h1>But Your Name was {prevName.current}</h1>
            <input ref={node} type="text" onChange={accessValue}/>
         </div>
      </>
   );
}
export default App;