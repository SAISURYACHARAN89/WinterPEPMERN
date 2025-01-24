import React, { useEffect, useState }  from "react";

export default function Counter(){
    const [count,setCount] = useState(0)

    useEffect(()=>{
        // function timer(){
        // console.log("count");
        // }
        // document.addEventListener("click",timer)
        // return()=>{
        //     document.removeEventListener("click",timer)
        // }
        const intervalId = setInterval(() => {
            console.log("surya"); 
          }, 3000); 
      
          return () => {
            clearInterval(intervalId); // Use the stored intervalId
          };
        }, []);
    
   

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>setCount(count + 1)}>++</button>
        </div>
    )
}
