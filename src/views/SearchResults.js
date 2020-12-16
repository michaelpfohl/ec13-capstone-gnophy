import React, { Component } from 'react';

import authData from '../helpers/data/authData';
import outingsData from '../helpers/data/outingsData';
import sightingsData from '../helpers/data/sightingsData';

import OutingCard from '../components/Cards/OutingCard';
import SightingCard from '../components/Cards/SightingCard';

class SearchResults extends Component {
  state = {
    results: [],
    searchTerm: '',
    searchType: '',
  };

  componentDidMount() {
    this.performSearch();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.props.match.params.term.toLowerCase()) {
      this.performSearch();
    }
  }

  performSearch = () => {
    const searchTerm = this.props.match.params.term.toLowerCase();
    const searchType = this.props.match.params.type;
    const userId = authData.getUid();

    if (searchType === 'outing') {
      outingsData.searchOutings(userId, searchTerm).then((results) => {
        this.setState({
          results,
          searchTerm,
          searchType,
        });
      });
    } else {
      sightingsData.searchSightings(userId, searchTerm).then((results) => {
        this.setState({
          results,
          searchTerm,
          searchType,
        });
      });
    }
  };

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { results, searchType } = this.state;

    const showResults = () => (
      results.map((result) => (
        searchType === 'outing' ? <OutingCard key={result.firebaseKey} outing={result} /> : <SightingCard key={result.firebaseKey} sighting={result} />
      ))
    );

    return (
      <>
        <button className="btn btn-success search-again-button" onClick={this.goBack}>Search Again</button>
        <div className='board-container d-flex flex-wrap justify-content-center'>
          {showResults()}
        </div>
      </>
    );
  }
}

export default SearchResults;
