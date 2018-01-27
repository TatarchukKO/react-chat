import React from 'react';
import ReactDOM from 'react-dom';

const divMsgStyles = {
  'padding': '0 10px 0 10px',
  'display': 'flex',
  'alignItems': 'center',
  'flexWrap': 'wrap',
};

const pMsgStyles = {
  'marginTop': '0',
  'width': '100%',
};

const imgMsgStyles = {
  'marginRight': '10px',
};

function ChatMessage(props) {
  return (
    <div className="chatMessage" style={divMsgStyles}>
      <img src={props.avatar} alt="Avatar" height="30" width="30" style={imgMsgStyles} />
      <h4>{props.name}</h4>
      <p style={pMsgStyles}>{props.msg}</p>
    </div>
  );
}

export default ChatMessage;