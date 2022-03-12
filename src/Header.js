// Main react import
import React from "react";
// Import required to create a class componenet
// import { Component } from "react";

// Creating header as a class componenet
/*
class Header extends Component {
    render(){
        return(
            <div className="header"> Phone Directory </div>
        )
    }
}
*/

// Creating header as a functional componenet
const Header = function(){
    return (
        <div className="header"> Phone Directory </div>
    )
}

// This statement allows us to use the component elsewhere
export default Header;