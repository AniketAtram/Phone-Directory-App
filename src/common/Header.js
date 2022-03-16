// Main react import
import React from "react";

// Import header css
import './Header.css';

// Creating header as a functional componenet
const Header = function(props){
    return (
        <div className="header"> {props.heading} </div>
    )
}

// This statement allows us to use the component elsewhere
export default Header;