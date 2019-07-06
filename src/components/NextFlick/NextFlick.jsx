import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MovieCards from '../MovieCards/MovieCards';
import * as TMDB from '../../utils/MoviesAPI';
import SearchBar from '../SearchBar/SearchBar';
import Calendar from '../Calendar/Calendar';
import TrailerSection from '../TrailerSection/TrailerSection';
import * as HELPERS from '../../utils/helpers';
import './NextFlick.css';

const styles = theme => ({
  NextFlick: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: 50,
  },
});

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
    const { classes } = this.props;

    return (
      <div className={classes.NextFlick}>
        <SearchBar updateList={this.updateList} />
        <MovieCards titles={titles} />
        <Grid container>
          <Grid item xs={12} sm={6} lg={4}>
            <TrailerSection upcomingTitles={upcomingTitles} />
          </Grid>
          <Grid item xs={12} sm={6} lg={8}>
            <Calendar upcomingTitles={upcomingTitles} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

NextFlick.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NextFlick);
