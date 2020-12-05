import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import getUser from '../../helpers/data/authData';
import outingsData from '../../helpers/data/outingsData';

class OutingForm extends Component {
  state = {
    firebaseKey: this.props.outing?.firebaseKey || '',
    name: this.props.outing?.name || '',
    location: this.props.outing?.location || '',
    biome: this.props.outing?.biome || '',
    imageUrl: this.props.outing?.imageUrl || '',
    userId: this.props.outing?.userId || '',
  };

  componentDidMount() {
    const userId = getUser.getUid();
    this.setState({
      userId,
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
    e.preventDefault();
    if (this.state.firebaseKey === '') {
      outingsData.createOuting(this.state).then(() => {
        this.props.onUpdate?.();
      });
    } else {
      outingsData.updateOuting(this.state).then(() => {
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
            placeholder="Outing Name"
            className="form-control form-control-lg m-1"
            required
          />
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
            placeholder="Outing Location"
            className="form-control form-control-lg m-1"
            required
          />
          <input
            type="text"
            name="biome"
            value={this.state.biome}
            onChange={this.handleChange}
            placeholder="Outing Biome"
            className="form-control form-control-lg m-1"
            required
          />
          <input
            type="url"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
            placeholder="Enter an Image URL or Upload a File"
            className="form-control form-control-lg m-1"
            required
          />
          <input
            className="m-2"
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

export default OutingForm;
