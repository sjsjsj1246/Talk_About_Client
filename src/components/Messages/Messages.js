import React, { useRef } from "react";

import Message from "./Message/Message";

import "./Messages.css";

const Messages = ({ messages, name }) => {
  return (
    <div id="message" className="messages">
      {messages.map((message, i) => (
        <Message message={message} name={name} />
      ))}
    </div>
  );
};

export default React.memo(Messages);
