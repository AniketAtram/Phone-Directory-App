import React, { Component } from "react";
import Header from "./common/Header";
import "./common/common.css";
import "./AddSubscriber.css";

class AddSubscriber extends Component{
    render(){
        return[
            <>
            <div className="component-body-container">
                {/* Header of the web-app */}
                <Header heading="Phone Directory" />

                {/* Back button */}
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                </div>

                {/* Subscriber form */}
                <form className="subscriber-form">
                    <label htmlFor="name" className="label-control">Name:</label> <br />
                    <input id="name" type="text" className="input-control" name="name"/> <br /> <br />
                    <label htmlFor="phone" className="label-control">Phone:</label> <br />
                    <input id="phone" type="text" className="input-control" name="phone"/> <br /> <br />

                    {/* Subscriber info */}
                    <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subscriber to be added:</span> <br />
                        <span className="subscriber-info">Name: </span> <br />
                        <span className="subscriber-info">Phone: </span>
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