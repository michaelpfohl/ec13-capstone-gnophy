import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import MainNavbar from '../components/Navbar';
import Routes from '../helpers/Routes';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MainNavbar/>
          <Routes/>
        </Router>
      </div>
    );
  }
}

export default App;
