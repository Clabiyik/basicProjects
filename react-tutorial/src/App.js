import "./App.css";
import Navbar from "./component/Navbar";
import Users from "./component/Users";
import React, { Component } from "react";

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Mustafa Murat Çoşkun",
        salary: "5000",
        department: "Bilişim",
      },
      {
        id: 1,
        name: "Mustafa Murat",
        salary: "5000",
        department: "Bilişim",
      },
      {
        id: 1,
        name: "Mustafa ",
        salary: "5000",
        department: "Bilişim",
      },
    ],
  };
  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
          <hr />
          <Users users={this.state.users}/>
          
        </div>
      </div>
    );
  }
}
export default App;
