import React from "react";
import "./Input.css";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 0,
  },
}));

const Input = ({ message, setMessage, sendMessage }) => {
  const classes = useStyles();
  return (
    <div className="inputContainer">
      <input
        className="input"
        type="text"
        placeholder="메세지를 입력하세요"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <Button
        variant="contained"
        color="primary"
        className={`inputButton ${classes.root}`}
        onClick={(e) => sendMessage(e)}
      >
        send
      </Button>
    </div>
  );
};
export default Input;
