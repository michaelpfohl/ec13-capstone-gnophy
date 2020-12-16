import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import getUser from '../../helpers/data/authData';
import sightingsData from '../../helpers/data/sightingsData';

class SightingForm extends Component {
  state = {
    firebaseKey: this.props.sighting?.firebaseKey || '',
    name: this.props.sighting?.name || '',
    location: this.props.sighting?.location || '',
    biome: this.props.sighting?.biome || '',
    type: this.props.sighting?.type || '',
    notes: this.props.sighting?.notes || '',
    imageUrl: this.props.sighting?.imageUrl || '',
    userId: this.props.sighting?.userId || '',
    outingId: this.props.sighting?.userId || '',
  };

  componentDidMount() {
    const userId = getUser.getUid();
    const { outingId } = this.props;
    this.setState({
      userId,
      outingId,
    });
  }

  handleChange = (e) => {
    if (e.target.name === 'filename') {
      this.setState({ imageUrl: '' });
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(`gnophy/${this.state.userId}/${Date.now()}${e.target.files[0].name}`);
      imageRef.put(e.target.files[0]).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((imageUrl) => {
          this.setState({ imageUrl });
        });
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    const { outingId, experience, addExperience } = this.props;
    const { userId } = this.state;
    e.preventDefault();
    if (this.state.firebaseKey === '') {
      sightingsData.createSighting(this.state).then(() => {
        addExperience(userId, experience);
      });
      this.props.onUpdate?.(outingId);
    } else {
      sightingsData.updateSighting(this.state).then(() => {
        this.props.onUpdate?.(this.state.firebaseKey);
      });
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <form onSubmit={this.handleSubmit} className="add-outing-form">
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"
            className="form-control form-control-lg m-2 modal-input"
            required
          />
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
            placeholder="Location"
            className="form-control form-control-lg m-2 modal-input"
            required
          />
          <input
            type="text"
            name="biome"
            value={this.state.biome}
            onChange={this.handleChange}
            placeholder="Biome"
            className="form-control form-control-lg m-2 modal-input"
            required
          />
          <select
            className="form-control form-control-lg m-2 modal-input"
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
            required
          >
            <option value="" selected disabled hidden>Select Type</option>
            <option value="Flora">Flora</option>
            <option value="Fauna">Fauna</option>
            <option value="Fungi">Fungi</option>
          </select>
          <input
            type="text"
            name="notes"
            value={this.state.notes}
            onChange={this.handleChange}
            placeholder="Notes"
            className="form-control form-control-lg m-2 modal-input"
          />
          <input
            type="url"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
            placeholder="Enter an Image URL or Upload a File"
            className="form-control form-control-lg m-2 modal-input"
            required
          />
          <input
            className="m-2 choose-input"
            type="file"
            id="myFile"
            name="filename"
            accept="image/*"
            onChange={this.handleChange}
          />
          <button className="btn btn-success form-button form-button-text mt-1">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SightingForm;
