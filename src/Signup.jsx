import React, { useState } from "react";
import "./signupcss.css"

function Signup() {
    const [data, setData] = useState({ email: "", pass: "" });
    const [logincondition, setCondition] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem("email", data.email);
        localStorage.setItem("pass", data.pass);
        setData({ email: "", pass: "" });
        setCondition(true);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    if (logincondition) {
        return <Login />;
    }

    return (
        <div>
            <h2>Signup Page</h2>
            <form onSubmit={handleSubmit}>
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
                <input className="submit1" type="submit" value="Signup" />
            </form>
        </div>
    );
}

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [loginSuccess, setLogin] = useState(false);

    function handleLogin(e) {
        e.preventDefault();
        const storedEmail = localStorage.getItem("email");
        const storedPass = localStorage.getItem("pass");

        if (email === storedEmail && pass === storedPass) {
            setLogin(true);
        }
    }

    if (loginSuccess) {
        return <Hello />;
    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

function Hello() {
    const email = localStorage.getItem("email");
    return (
        <div>
            <h1>Hello, {email}!</h1>
        </div>
    );
}

export { Signup };
