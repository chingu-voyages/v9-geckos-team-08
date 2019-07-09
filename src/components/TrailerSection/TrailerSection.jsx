import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Trailer from '../Trailer/Trailer';
import GenreFilter from '../GenreFilter/GenreFilter';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  title: {
    marginBottom: 30,
  },
  trailerGrid: {
    justifyContent: 'center',
  },
  buttonContainer: {
    textAlign: 'right',
  },
  button: {
    margin: theme.spacing(1),
  },
});

function TrailerSection(props) {
  const { classes, genres, upcomingTitles } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3" className={classes.title}>
          New Trailers
        </Typography>
        <GenreFilter genres={genres} />
        <Grid container spacing={3} className={classes.trailerGrid}>
          {upcomingTitles.filter(title => title.backdrop_path !== null).slice(0, 4).map(title => (
            <Trailer key={title.id} trailerThumbnail={`https://image.tmdb.org/t/p/w300${title.backdrop_path}`} movieTitle={title.title} videos={title.videos} />
          ))}
        </Grid>
        <div className={classes.buttonContainer}>
          <Button className={classes.button}>
            More trailers
          </Button>
        </div>
      </Paper>
    </div>
  );
}

TrailerSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  upcomingTitles: PropTypes.array.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default withStyles(styles)(TrailerSection);
