import React, { Component } from 'react'

export default class Time extends Component {
  constructor(){
    super();
    this.state = {
        time : new Date()
    };
  }
 
  componentDidMount(){
    setInterval(()=>{
        this.setState({time : new Date()})
    },1000)
  }
  render() {
    return (
      <div>time : {this.state.time.toLocaleString()}</div>
    )
  }
}

