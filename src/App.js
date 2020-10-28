// global style sheet
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar"
import UserItem from "./components/users/UserItem"

class App extends Component {
  //method as part of a class

  render()  {
    return (
      <div className="App">
        <Navbar /> 
        <UserItem />
        <h1>Hello</h1>
      </div>
    );
    }


}

export default App;
