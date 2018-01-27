import messages from '../../repositories/message.repository/messages';

class MessageController {

  constructor() {
    this.messages = messages;
  }

  postMessage(msg) {
    return this.messages.push(msg);
  }
}