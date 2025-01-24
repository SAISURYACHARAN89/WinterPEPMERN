import React ,{useState} from "react";

export default function Events(){
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count+1);
        console.log(count)
    }
    const reset = () => {
        setCount(0);
    }
    return(
        <div>
            <h3>Count : {count}</h3>
            <button style={{ marginRight: "10px" }} onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}