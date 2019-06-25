import React, { Component } from 'react';
import MovieCards from '../MovieCards/MovieCards';
import * as TMDB from '../../utils/MoviesAPI';
import SearchBar from '../SearchBar/SearchBar';
import './NextFlick.css';


class NextFlick extends Component {
  constructor(props) {
    super(props);
    this.state = { titles: [] };
    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {
    // get latest titles on load.
    TMDB.getPlayingNowTitles()
      .then(data => this.setState({ titles: data }));
  }

  updateList(search) {
    TMDB.getSpecificTitles(search)
      .then(data => this.setState({ titles: data }));
  }

  render() {
    const { titles } = this.state;

    return (
      <div>
        <SearchBar updateList={this.updateList} />
        <MovieCards titles={titles} />
      </div>
    );
  }
}

export default NextFlick;
