import React, { Component } from "react";
import Header from "./common/Header";
import "./common/common.css";
import "./AddSubscriber.css";

class AddSubscriber extends Component{
    // State for AddSubscriber component
    constructor(){
        super();
        this.state = {
            id:0,
            name:"",
            phone:""
        }
    }

    // event handler for input boxes
    inputChangeHandler=(event) => {
        // make a refrence to a state variable 
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
        // console.log(this.state);
    }

    // render method for AddSubscriber coponent
    render(){
        // remove the name and phone number from the state 
        const { name, phone } = this.state;
        return[
            <>
            {/* Header of the web-app */}
            <Header heading="Phone Directory" />
            <div className="component-body-container">
                {/* Back button */}
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                </div>

                {/* Subscriber form */}
                <form className="subscriber-form" method="GET" >
                    <label htmlFor="name" className="label-control">Name:</label> <br />
                    <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangeHandler} /> <br /> <br />
                    <label htmlFor="phone" className="label-control">Phone:</label> <br />
                    <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangeHandler} /> <br /> <br />

                    {/* Subscriber info */}
                    <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subscriber to be added:</span> <br />
                        <span className="subscriber-info">Name: {name}</span> <br />
                        <span className="subscriber-info">Phone: {phone}</span>
                    </div>

                    {/* Add button */}
                    <button type="submit" className="custom-btn add-btn">Add</button>
                </form>
            </div>
            </>
        ]
    }
}

export default AddSubscriber;