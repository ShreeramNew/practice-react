import { useMemo, useState } from "react";
import "./App.css";

function App() {
   const [num, setNum] = useState(0);
   const [newNum, setnewNum] = useState(0);

   let start = Date.now();
   
   let newResult = useMemo(() => {
      let count = -1;
      let items = new Array(23873442);
      console.log("I am working");
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
   console.log((end - start) / 1000, "Seconds");

   return (
      <>
         <div>
            <h1>Jai Shreeram</h1>
            <h1>{newNum}</h1>
            <h2></h2>
            <button onClick={() => setnewNum((prev) => prev + 1)}>Change</button>
            <button onClick={() => setNum((prev) => prev + 1)}>Click</button>
         </div>
      </>
   );
}
export default App;