import { Component } from "react";

export default class Comp2 extends Component {
    constructor() {
        super();
        this.state = {
            name: 'John',
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);

    }

    handleClick() {
        this.setState({ count: this.state.count + 1 });
    }
    handleClick2() {
        this.setState({ count: this.state.count + 5 });
    }

    render() {
        return (
            <div>
                <h1>Surya {this.props.fname}</h1>
                <h2>My name is {this.state.name}</h2>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.handleClick}>Increment</button>
                <button onClick={this.handleClick2}>Increment 5 </button>
            </div>
        );
    }
}
