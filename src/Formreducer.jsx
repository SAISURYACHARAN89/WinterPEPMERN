import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

function reducer(state,action){
    if(action.type === "email"){
        return {...state,email : action.email}
    }
    else if(action.type === "pass"){
        return {...s,pass : action.pass}
    }
    return state
}

function FormRedux(){
    const [state,dispatch] = useReducer(reducer,{email : "",pass : ""})
    return (
        <div>
            <input type="text" placeholder = "Enter Email" onChange={(e) => dispatch({type: "email",email : e.target.value})}></input> 
            <br />
            <input type="password" placeholder = "Enter Pass" onChange={(e) => dispatch({type : "pass",pass : e.target.value})}></input>
            <br />
            <button type="submit">Submit</button> 
            <h2>{state.email}</h2>
            <h2>{state.pass}</h2>
        </div>
    )
}

export default FormRedux