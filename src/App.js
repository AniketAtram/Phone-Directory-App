import React from "react";
import Header from "./Header";
import { Fragment } from "react";
import "./App.css";

const Subscribers = [
  {
    id:1,
    name: "Aniket Atram",
    phone: "9876543210"
  },
  {
    id:2,
    name: "Sushila Atram",
    phone: "1234567890"
  }
];

class App extends React.Component {
  render() {
    return [
      <Fragment>
      <div>
        <Header />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            Subscribers.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
              </div>
            })
          }

        </div>
      </div>
      </Fragment>
    ];
  }
}

export default App;