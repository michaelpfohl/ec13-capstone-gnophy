import React, { Component } from 'react';

import logo from '../../assets/images/nounNatureIcon.png';

class HomeComponent extends Component {
  state = {};

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="home-container">
          <div>
            <h1 className="home-header">Welcome to Gnophy</h1>
            <img
              className="home-logo"
              src={logo}
              alt="nature by Creative Mania from the Noun Project"
            />
            <form action="/outings" className="d-flex justify-content-center">
              <button type="submit" className="start-button">
                Click here to get started on an outing!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
