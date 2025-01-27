import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navcss.css';
export default function NavBar(){
    return(
        <div>
            <ul>
                <li><NavLink to = '/' >Home</NavLink></li>
                <li><NavLink to = '/about'>About</NavLink></li>
                <li><NavLink to = '/contact'>Contact</NavLink></li>
                <li><NavLink to = '/user'>User</NavLink></li>

            </ul>
        </div>
    )
}