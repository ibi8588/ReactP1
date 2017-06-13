import React, {Component} from 'react'
import $ from 'jquery-ajax'

class Message extends Component {
    constructor(props) {
      super(props)
      this.state = {
        messages: []
      }
    }
    componentDidMount() {
      $.get("https://boiling-earth-58583.herokuapp.com/api/messages")
      .then((res)=> {
        this.setState({
          messages: res
        })
      });
    }
    render() {
    return(
      <div>
        <h1>{this.props.params.message_title}</h1>
        { this.state.messages.map((message) => <Message title={message.title} />) }
      </div>
    )
  }

  // fetchMessageData(){
  //   let messages = this.props.params.message_title;
  //   $.get("https://boiling-earth-58583.herokuapp.com/api/messages")
  //   .then((res)=> {
  //     console.log(res);
  //   })
  // }

}
export default Message
