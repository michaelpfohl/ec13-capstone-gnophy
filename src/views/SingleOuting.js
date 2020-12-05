import React, { Component } from 'react';

import outingsData from '../helpers/data/outingsData';

import AppModal from '../components/AppModal';
import OutingForm from '../components/Forms/OutingForm';
import SingleOutingHeader from '../components/SingleOutingHeader';

class SingleOuting extends Component {
  state = {
    outing: {},
    sightings: [],
  };

  componentDidMount() {
    const outingId = this.props.match.params.id;
    this.getOutingInfo(outingId);
  }

  getOutingInfo = (outingId) => {
    outingsData.getSingleOuting(outingId).then((response) => {
      this.setState({
        outing: response,
      });
    });
  };

  render() {
    const { outing } = this.state;
    return (
      <div>
        <SingleOutingHeader outing={outing}/>
        <AppModal title={'Update Outing'} buttonLabel={'Update Outing'} >
          {Object.keys(outing).length && <OutingForm outing={outing} onUpdate={this.getOutingInfo} />}
        </AppModal>
      </div>
    );
  }
}

export default SingleOuting;
