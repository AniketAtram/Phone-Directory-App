import React from "react";
import Header from "./common/Header";
import { Fragment } from "react";
import "./App.css";
import "./common/common.css";

// const Subscribers = [
//   {
//     id:1,
//     name: "Tony Stark",
//     phone: "9876543210"
//   },
//   {
//     id:2,
//     name: "Steve Rodgers",
//     phone: "1234567890"
//   },
//   {
//     id:3,
//     name: "Rovina Ravenclaw",
//     phone: "9999999999"
//   }
// ];

// Event handler for delete button
// function deleteHandler(buttonName) {
//   alert(buttonName +' clicked!');
// }

class App extends React.Component {
  // State for App component
  constructor(props) {
    super(props);
    console.log('Constructor is called.');
    this.state = {
      subscribersListToShow: [
        {
          id:1,
          name: "Tony Stark",
          phone: "9876543210"
        },
        {
          id:2,
          name: "Steve Rodgers",
          phone: "1234567890"
        },
        {
          id:3,
          name: "Rovina Ravenclaw",
          phone: "9999999999"
        }
      ]
    }
  }

  // event handler


  render() {
    console.log('Render method is called.');
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
            this.state.subscribersListToShow.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
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
  // lifecycle
  componentDidMount(){
    console.log('Component Did Mount is called!');
    const newSubscriber = {
      id:4,
      name:"Bruce Banner",
      phone:"9021874356"
    }
    let subscriberList = this.state.subscribersListToShow;
    subscriberList.push(newSubscriber);
    this.setState({subscribersListToShow : subscriberList});
  }
}

export default App;