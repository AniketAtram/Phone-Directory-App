// import logo from './logo.svg';
// import './App.css';
// Main react import
import React from "react";
// Fragment to render the data on we page
import { Fragment } from "react";
// Importing Header from Header.js file
import Header from "./Header";
function App() {
  return (
    <Fragment>
    <Header /> {/*Displaying header dynamically*/}
    <button>Add</button>
    <div>
      <span>Name</span> <br />
      <span>Phone</span>
    </div>
    </Fragment>
  );
}

export default App;
