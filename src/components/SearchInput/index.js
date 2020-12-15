import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchInput extends Component {
  state = {
    text: '',
  };

  componentDidMount() {
    const { type } = this.props;
    this.setState({ type });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.text}/${this.state.type}`);
    this.setState({
      text: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="search-container">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              className="search-input"
              placeholder=" Search here!"
            />
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchInput);
