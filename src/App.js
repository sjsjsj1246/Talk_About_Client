import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import Chat from "./components/Chat/Chat";

// 1. Router 경로 설정
const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Route path="/" exact component={JoinRoom} />
    <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
