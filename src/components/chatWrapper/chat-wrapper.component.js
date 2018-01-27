import React, { Component } from 'react';

import ChatMessage from '../chatMessage/chat-message.component';
import messages from '../../repositories/message.repository/messages';
// import InputForm from '../inputForm/input-form.component';

let idIncr = 0; // Для униклаьности ключа компонетнты

const chatWrapperStyles = {
  'width': '600px',
  'margin': '0 auto',
  'border': '1px solid blue',
  'minHeight': '580px',
  'height': '600px',
};

const formInputStyles = {
  'display': 'block',
  'border': '1px solid #ccc',
  'borderRadius': '4px',
  'padding': '10px',
  'width': 'calc(90% - 20px)',
  'margin': '0 auto',
  'resize': 'none',
  'overflowY': 'auto',
  'overflowX': 'hidden',
  'minHeight': '10%',
};

const listStyles = {
  'width': '90%',
  'margin': '0 auto',
  'border': '1px solid red',
  'height': '80%',
  'overflowX': 'hidden',
  'overflowY': 'auto',
};

class ChatWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: messages,
      inputMsg: '',
    };

    this.renderChatMessages = this.renderChatMessages.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePressEnterKey = this.handlePressEnterKey.bind(this);
  }

  renderChatMessage(message) {
    return <ChatMessage key={message.id}
      id={message.id}
      date={message.date}
      name={message.name}
      msg={message.msg}
      avatar={message.avatar}
    />
  }

  renderChatMessages() {
    // console.log(this.state.messages);
    const messageList = this.state.messages.map(item => {
      return this.renderChatMessage(item);
    }, this);

    console.log(messageList);

    return messageList;
  }

  componentDidMount() {
    console.log('component did mount');
  }

  handlePressEnterKey(e) {
    if (e.key === 'Enter') {
      let inputMsg = this.state.inputMsg;

      if (inputMsg === '') {
        return;
      }

      let msgs = this.state.messages;

      // msgs.push({
      //   id: idIncr++,
      //   userId: idIncr++,
      //   date: Date.now(),
      //   avatar: 'http://www.favslist.com/photos/pages/x1/Garrosh-Hellscream-2013-5509.jpg',
      //   name: 'kozya',
      //   msg: inputMsg,
      // });
      messages.push({
        id: idIncr++,
        userId: idIncr++,
        date: Date.now(),
        avatar: 'http://www.favslist.com/photos/pages/x1/Garrosh-Hellscream-2013-5509.jpg',
        name: 'kozya',
        msg: inputMsg,
      });

      this.setState({
        messages: msgs,
        inputMsg: '',
      });
    }
  }

  handleInputChange(e) {
    this.setState({
      inputMsg: e.target.value,
    });
  }

  render() {
    return (
      <div className="ChatWrapper" style={chatWrapperStyles}>
        <div style={listStyles}>
          {this.renderChatMessages()}
        </div>
        <textarea
          placeholder="Type the message"
          value={this.state.inputMsg}
          onKeyPress={this.handlePressEnterKey}
          style={formInputStyles}
          onChange={this.handleInputChange}>
        </textarea>
      </div>
    );
  }
}

export default ChatWrapper;