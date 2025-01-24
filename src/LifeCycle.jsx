import React, { Component } from "react";

export default class LifeCycle extends Component {
    constructor() {
        super();
        console.log("constructor called");
        this.state = {
            fname: "Surya"
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps called");
        console.log("props: ", props);
        console.log("state: ", state);

        // Check if the prop value is different from the state and update accordingly
        if (props.firstname !== state.fname) {
            return { fname: props.firstname };
        }

        // Return null if no state change is needed
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount called");
    }

    render() {
        console.log("render called");
        return (
            <div>
                <h1>My name is {this.state.fname}</h1>
            </div>
        );
    }
}
