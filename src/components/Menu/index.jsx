import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

let activeStyle = {backgroundColor : "darkblue", padding : 20, textDecoration : "none", color: "white"}
let notActiveStyle = {textDecoration : "none", padding : 20, color: "white" }
const menuLinkActive = ({isActive}) => isActive? activeStyle : notActiveStyle;

const Menu = () => {
    return (
        <nav className="menu">
            <NavLink className="menu__link" style={menuLinkActive} to="/">Home</NavLink>
            <NavLink className="menu__link" style={menuLinkActive} to="/reviews">Reviews</NavLink>
            <NavLink className="menu__link" style={menuLinkActive} to="/articles">Articles</NavLink>
            <NavLink className="menu__link" style={menuLinkActive} to="/movies">Movies</NavLink>
        </nav>
    )
}

export default Menu;