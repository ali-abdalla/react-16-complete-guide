import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'aliabdallah'
  }

  updateHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput update={this.updateHandler}/>
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
