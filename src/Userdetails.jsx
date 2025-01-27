import React from "react";
import { useParams } from "react-router-dom";
export default function Userdetails(){
    const{userId} = useParams()
    return(
        <div>
            {userId === "user1" && <h1>HEllO $userId</h1>}
            {userId === "user2" && <h1>HEllO $userId2</h1>}
            {userId === "user3" && <h1>HEllO $userId3</h1>}
        </div>
    )
}