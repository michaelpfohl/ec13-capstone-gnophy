import React, { Component } from 'react';

class Achievement extends Component {
  render() {
    const {
      image, name, display,
    } = this.props;
    const displayCard = () => {
      let card = '';
      if (display === true) {
        card = <div className="achievement-card achieved">
          <img className="achievement-medal" alt="achievementImage" src={image} />
          <h1 className="achievement-name">{name}</h1>
        </div>;
      } else {
        card = <div className="achievement-card not-achieved">
          <img className="achievement-medal" alt="achievementImage" src={image} />
          <h1 className="achievement-name">{name}</h1>
        </div>;
      }
      return card;
    };
    return (
      <div>
          {displayCard()}
      </div>
    );
  }
}

export default Achievement;
