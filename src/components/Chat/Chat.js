import React, { useEffect, useState, useReducer, useCallback } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";

// 하위 컴포넌트
import Messages from "../Messages/Messages";
import RoomInfo from "../RoomInfo/RoomInfo";
import Input from "../Input/Input";

// Material-ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [users, setUsers] = useState("");

  const ENDPOINT = "https://talk-about-server.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    console.log(name, room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, []);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = useCallback(
    (e) => {
      e.preventDefault();
      if (message) {
        socket.emit("sendMessage", message, setMessage(""));
      }
    },
    [message]
  );

  console.log(message, messages);
  console.log(users, "users");

  return (
    <div className="chatOuterContainer">
      <div className="chatInnerContainer">
        <div className="appbar">
          <AppBar color="primary">
            <Toolbar className="toolBar">
              <Typography variant="h4" color="inherit" noWrap>
                Chat About
              </Typography>
              <Button color="inherit" href="/">
                close
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <div className="chatScreen">
          <Paper elevation={5} className="chatScreenPaper">
            <RoomInfo room={room} />
            <Messages messages={messages} name={name} />
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Chat;
