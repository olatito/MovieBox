import React from "react";
import "./Header.css";
import logo from "../../assets/img/Logo.png";
import search from "../../assets/img/Search.png";
import menu from "../../assets/img/Menu.png";



function Header(){
    return(
        <div className="header">
            <div className="imageLogo">
                <img src={logo} />
            </div> 
            <form target="_blank" className="searchBar">
                <input type="text" placeholder="What do you want to watch?"  className="inputField"/><br></br>
                <button className="searchButton"> <img src={search}></img></button>
            </form>
            <div className="signInOption">
                <button className="signIn">Sign In</button>
                <div className="menuBar">
                <img src={menu}></img>
            </div>
            </div>
        </div>
    )
}

export default Header;