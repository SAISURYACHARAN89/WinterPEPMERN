import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import NavBar from "./nav";
import User from "./User";
import Userdetails from "./Userdetails";

export default function Router(){
    return(
        <div>
            <BrowserRouter>
            <NavBar></NavBar>  
                  <Routes>
                        <Route path = "/" element = {<Home />}/>
                        <Route path = "/contact" element = {<Contact />}/>
                        <Route path = "/about" element = {<About />}/>
                        <Route path = "/user" element = {<User />}/>
                        <Route path = "/user/:userId" element = {<Userdetails />}/>
                    </Routes>  
            </BrowserRouter>
        </div>
    )
}