import React, { useEffect, useRef } from "react";
import { Avatar } from "@material-ui/core";
import "./Message.css";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  const msgRef = useRef();

  useEffect(() => {
    msgRef.current.scrollIntoView();
  });

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="messageContainer end" ref={msgRef}>
      <div className="messageBox backgroundLight">
        <p className="messageText black">{text}</p>
      </div>
      <p className="sentMessage">{trimmedName}</p>
      <Avatar className="sentAvatar" />
    </div>
  ) : (
    <div className="messageContainer start" ref={msgRef}>
      <Avatar />
      <p className="sentMessage">{user}</p>
      <div className="messageBox backgroundLight">
        <p className="messageText black">{text}</p>
      </div>
    </div>
  );
};

export default React.memo(Message);
