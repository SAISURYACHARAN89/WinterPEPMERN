import React, { useEffect, useState } from "react";

export default function Effect(){
    const [count,setCount] = useState(0)
    useEffect(() => {
        console.log("Effect");
        
    }, [count])
    return(
        <div>
            <p>{count}</p>
            <button onClick={() => {setCount(count + 1)}}>++</button>
        </div>
    )
}