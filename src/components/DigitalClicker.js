import React, { Component } from 'react'

export default class DigitalClicker extends Component {

  constructor(props){
    super(props)
    this.state = {
      timesClicked: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let updatedClicks = this.state.timesClicked+1
    this.setState({
      timesClicked: updatedClicks
    })
  }

  render(){
    return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
  }
}
