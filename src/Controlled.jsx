import React, { useState } from "react";

function Controlled() {

    const [data, setData] = useState({
        name: "",
        email: "",
        pass: ""
    });
    const [condition, setCondition] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem("Data :",JSON.stringify(data));
        setData({
            name:"",
            email:"",
            pass:""
        })
    }

    function handleChange(event) {
        const { name, value } = event.target; 
        setData((prevData) => ({
            ...prevData, 
            [name]: value 
        }));
    }
    //Local Storage
    //setItem("key",value);
    //getItem("key")
    //removeItem("key")
    //Clear();

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Username"
                    value={data.name}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={data.email}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="password"
                    name="pass"
                    placeholder="Enter Password"
                    value={data.pass}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Signup" />
                {localStorage.getItem("Name")}
                
            </form>
            
            {condition && (
                <div>
                    <h1>My name is {data.name}</h1>
                    <h1>My email is {data.email}</h1>
                    <h1>My pass is {data.pass}</h1>
                </div>
            )}
        </div>
    );
}

export { Controlled };
