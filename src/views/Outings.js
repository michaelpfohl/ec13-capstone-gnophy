import React, { Component } from 'react';

import AppModal from '../components/AppModal';
import OutingForm from '../components/Forms/OutingForm';

class Outings extends Component {
  state = {
    outings: [],
  };

  render() {
    return (
      <div className="outings--container">
        <h1 className="outings--header">Outings</h1>
        <AppModal title={'Create Outing'} buttonLabel={'Create Outing'}>
          <OutingForm />
        </AppModal>
      </div>
    );
  }
}

export default Outings;
