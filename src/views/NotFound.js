import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found--container">
        <h1 className="not-found--header">Page Not Found!</h1>
        <p>Looks like you got lost, click any link in the navbar to get back on your way!</p>
      </div>
    );
  }
}

export default NotFound;
