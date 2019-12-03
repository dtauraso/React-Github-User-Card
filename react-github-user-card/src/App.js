import React from 'react';
import ReactDOM from "react-dom";

import UserCard from "./components/UserCard";
import './App.css';

class App extends React.Component {

  state = {
    myUser: {},
    myUsers: []
  }

  getFollowers = (userName) => {

    fetch(`https://api.github.com/users/${userName}/followers`)
      .then(res => res.json())
      .then(users => this.setState({myUsers: users}))
  }

  componentDidMount() {
    console.log("mounting")
    // let users = []
    // seems to force the data to rerender
    fetch("https://api.github.com/users/dtauraso")
      .then(res => res.json())
      .then(user => this.setState({myUser: user}))
      .catch(err => console.log("no github users"))
    
    // getFollowers("dtauraso")
    fetch(`https://api.github.com/users/dtauraso/followers`)
      .then(res => res.json())
      .then(users => this.setState({myUsers: users}))
      .catch(err => console.log("no github followers"))
    // can cause memory leak if not cleaned up
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    console.log("unmounting")
    // can cause memory leak if not cleaned up
    window.addEventListener("resize", this.handleResize)

  }
  componentDidUpdate(prevProps, prevState) {
    // called right after component updates and I assume before react rerenders?
    console.log("updated")
  }
  render() {
    console.log("render")
    // only prints the right thing the second time
    console.log(this.state.myUser)
    console.log(this.state.myUsers)

    return (
      <div className="App">
        {/* {this.state} */}
        {/* myUser is a key in props */}
        <UserCard myUser={this.state.myUser}/>
        {this.state.myUsers.map(user => (
          <UserCard myUser={user}/>
        ))}
      </div>
    );
  }
  
}

export default App;
