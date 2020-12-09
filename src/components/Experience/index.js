import React, { Component } from 'react';

class Experience extends Component {
  state = {};

  render() {
    const { experience } = this.props;
    const level = Math.floor(experience / 100);
    const leftoverExperience = experience % 100;
    return (
      <div className='d-flex justify-content-center level-container'>
        <div className='progress experience-container'>
          <div
            className='progress-bar progress-bar-striped bg-success progress-bar-animated'
            role='progressbar'
            style={{ width: `${leftoverExperience}%` }}
            aria-valuenow={leftoverExperience}
            aria-valuemin='0'
            aria-valuemax='100'
          ></div>
        </div>
        <div className="level-spacer">·</div>
        <h1 className="level-header">Level {level}</h1>
      </div>
    );
  }
}

export default Experience;
