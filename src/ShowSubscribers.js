import React from "react";
import Header from "./common/Header";
import { Fragment } from "react";
import "./ShowSubscribers.css";
import "./common/common.css";

class ShowSubscribers extends React.Component {
  
  render() {
    console.log(this.props);
    return [
      <Fragment>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            this.props.subscriberList.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item" key={sub.name}>{sub.name}</span>
                <span className="grid-item" key={sub.phone}>{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" >Delete</button>
                </span>
              </div>
            })
          }

        </div>
      </Fragment>
    ];
  }

}

export default ShowSubscribers;