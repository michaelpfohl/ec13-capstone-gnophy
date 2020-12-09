import React from 'react';
import './App.scss';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import fbConnection from '../helpers/connection';

import userData from '../helpers/data/userData';

import MainNavbar from '../components/Navbar';
import Experience from '../components/Experience';
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
        userData.getUser(user).then((response) => {
          this.setState({ experience: response.experience });
        });
      } else {
        this.setState({ user: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { user, experience } = this.state;

    return (
      <div className="App">
        <Router>
          {user && (
            <>
            <MainNavbar user={user}/>
            <Experience experience={experience}/>
            </>
          )}
          <Routes user={user}/>
        </Router>
      </div>
    );
  }
}

export default App;
