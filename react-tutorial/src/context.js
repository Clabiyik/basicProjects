import React, { Component } from "react";

const UserContext = React.createContext();

export class UserProvider extends Component {
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
    return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
  }
}
const UserConsumer=UserContext.Consumer;

export default UserConsumer;
