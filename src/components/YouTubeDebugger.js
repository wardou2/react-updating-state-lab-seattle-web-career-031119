import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

  constructor(props){
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.setBitrate = this.setBitrate.bind(this)
    this.setRes = this.setRes.bind(this)
  }

  setBitrate() {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  setRes() {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return <div>
      <button className="bitrate" onClick={this.setBitrate}>Set Bitrate</button>
      <button className="resolution" onClick={this.setRes}>Set Resolution</button>
    </div>
  }
}
