import React, { useReducer } from "react";

function reducer(state,action){
    if(action.type === "inc"){
        return {count : state.count+1}
    }
    else if(action.type == "dec"){
        return {count : state.count-1}
    }
    return state
}

function Redux(){
    const [state,dispatch] = useReducer(reducer,{count : 10})
    console.log("Initial State:", state);
    return (
        <div>
            <h1>Count : {state.count}</h1>
            <button onClick={()=>dispatch({type : "inc"})}>increment</button>
            <button onClick={()=>dispatch({type : "dec"})}>decrement</button>
        </div>
    )
}

export default Redux