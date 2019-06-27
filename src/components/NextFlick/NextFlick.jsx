import React, { Component } from 'react';
import MovieCards from '../MovieCards/MovieCards';
import * as TMDB from '../../utils/MoviesAPI';
import SearchBar from '../SearchBar/SearchBar';
import Calendar from '../Calendar/Calendar';
import * as HELPERS from '../../utils/helpers';
import './NextFlick.css';


class NextFlick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      upcomingTitles: [],
    };
    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {
    // get latest titles on load.
    TMDB.getPlayingNowTitles()
      .then(data => this.setState({ titles: data }));

    // get upcoming titles
    TMDB.getUpcomingTitles()
      .then(HELPERS.sortTitleAsc)
      .then(data => this.setState({ upcomingTitles: data }));
  }

  updateList(search) {
    TMDB.getSpecificTitles(search)
      .then(data => this.setState({ titles: data }));
  }

  render() {
    const { titles, upcomingTitles } = this.state;

    return (
      <div>
        <SearchBar updateList={this.updateList} />
        <MovieCards titles={titles} />
        <Calendar upcomingTitles={upcomingTitles} />
      </div>
    );
  }
}

export default NextFlick;
