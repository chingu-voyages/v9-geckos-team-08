import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  trailerThumbnail: {
    width: 210, // Same as youtube thumbnails
    height: 118, // Same as youtube thumbnails
    cursor: 'pointer',
  },
  movieTitle: {
    margin: 0,
    marginBottom: 20,
    color: '#FAFAFA',
    ...theme.typography.caption,
  },
});

function Trailer(props) {
  const { classes, trailerThumbnail, movieTitle } = props;

  return (
    <div>
      <img className={classes.trailerThumbnail} src={trailerThumbnail} alt="trailer thumbnail" />
      <p className={classes.movieTitle}>{movieTitle}</p>
    </div>
  );
}

Trailer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  trailerThumbnail: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
};

export default withStyles(styles)(Trailer);
