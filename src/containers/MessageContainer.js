import React, {Component} from 'react'
import $ from 'jquery-ajax'
import Message from '../components/Message'

class MessageContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        messages: []
      }
    }
    componentDidMount() {
      $.get("/api/messages")
      .then((res)=> {
        this.setState({
          messages: res
        })
      });
    }
    render() {
      console.log(this.state.messages)
    return(
      <div>
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
export default MessageContainer
