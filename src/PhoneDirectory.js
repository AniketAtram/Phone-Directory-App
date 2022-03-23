import React from "react";
// import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers.js";
class PhoneDirectory extends React.Component {
    // state for PhoneDirectory component
    constructor() {
        super();

        this.state = {
            SubscribersListToShow:[
                {id:0,
                name:"Aniket Atram",
                phone:"9021874365"},
                {id:1,
                name:"Shawn Michaels",
                phone:"0912873465"}
            ]
        };
    };

    render() {

        const subscriberList = this.state.SubscribersListToShow;
        return [
            <React.Fragment>
                {/* <AddSubscriber addSubscriberHandler={this.addSubscriberHandler.bind(this)} /> */}
                <ShowSubscribers subscriberList = {subscriberList} />
            </React.Fragment>
        ];
    };

    // Add subscribers handler function
    addSubscriberHandler(newSubscriber){
        console.log('addSubscriberHandler called!');
        let subscriberList = this.state.SubscribersListToShow;
        if (subscriberList.length > 0){
            // check the id of the last object and increment it by 1
            newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        // After updating the id of new subscriber, push it in the array and 
        // update the state
        subscriberList.push(newSubscriber);
        this.setState({SubscribersListToShow : subscriberList});
        console.log(this.state.SubscribersListToShow);
    }
}

export default PhoneDirectory;