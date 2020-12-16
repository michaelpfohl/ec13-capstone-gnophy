import React, { Component } from 'react';

class NotFound extends Component {
  handleClick = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="not-found-container">
          <h1 className="not-found-header">Page Not Found!</h1>
          <div className="d-flex justify-content-center">
            <button onClick={this.handleClick} className="not-found-button">
              Lost? Click here to go back!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
