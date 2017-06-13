
import React, { Component } from 'react'
class Message extends Component {
  render() {
      return(
        <div>
        <p>{this.props.title}</p>
        <img src={this.props.src}/>
        </div>
      );
    }
  }

export default Message
