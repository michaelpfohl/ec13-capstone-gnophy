import React, { Component } from 'react';

class SingleOutingHeader extends Component {
  render() {
    const { outing } = this.props;
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-around so-container">
          {outing !== null && (
          <>
          <h1>{outing.name}</h1>
          <h1>{outing.location}</h1>
          <h1>{outing.biome}</h1>
          </>
          )}
        </div>
      </div>
    );
  }
}

export default SingleOutingHeader;
