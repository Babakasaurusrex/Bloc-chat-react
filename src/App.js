import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyCCJqbBeIflobtEAe1lfoexGMAjdnqoujM",
  authDomain: "bloc-chat-fb34d.firebaseapp.com",
  databaseURL: "https://bloc-chat-fb34d.firebaseio.com",
  projectId: "bloc-chat-fb34d",
  storageBucket: "bloc-chat-fb34d.appspot.com",
  messagingSenderId: "87597374899"
};

firebase.initializeApp(config);


class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      activeRoom: ""
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bloc Chat</h1>
        </header>
        <div className="flex-container">
        <section className="App-rooms">
          <RoomList
            firebase={firebase}
            activeRoom={this.state.activeRoom}
          />
        </section>
        </div>
      </div>

    );
  }
}

export default App;