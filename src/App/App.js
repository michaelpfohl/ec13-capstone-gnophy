import React from 'react';
import './App.scss';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import fbConnection from '../helpers/connection';

import userData from '../helpers/data/userData';

import MainNavbar from '../components/Navbar';
import Routes from '../helpers/Routes';

fbConnection();
class App extends React.Component {
  state = {
    user: null,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        userData.setCurrentUser(user);
      } else {
        this.setState({ user: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <Router>
          {user && (
            <MainNavbar user={user}/>
          )}
          <Routes user={user}/>
        </Router>
      </div>
    );
  }
}

export default App;
