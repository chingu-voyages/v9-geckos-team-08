import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
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

function assignYoutubeTrailer(videos) {
  const YOUTUBE_URLBASE = 'https://youtube.com/watch?v=';

  if (videos.length === 0) {
    return '';
  }

  const validVideos = videos.filter(video => video.site.toLowerCase() === 'youtube');
  const trailers = validVideos.filter(video => video.type.toLowerCase() === 'trailer');
  const teasers = validVideos.filter(video => video.type.toLowerCase() === 'teaser');

  if (trailers.length !== 0) {
    return YOUTUBE_URLBASE + trailers[0].key;
  }

  if (teasers.length !== 0) {
    return YOUTUBE_URLBASE + teasers[0].key;
  }

  return '';
}

function Trailer(props) {
  const {
    classes,
    trailerThumbnail,
    movieTitle,
    videos,
  } = props;

  return (
    <Grid item xs>
      <a href={assignYoutubeTrailer(videos)}><img className={classes.trailerThumbnail} src={trailerThumbnail} alt="trailer thumbnail" /></a>
      <p className={classes.movieTitle}>{movieTitle}</p>
    </Grid>
  );
}

Trailer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  trailerThumbnail: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  videos: PropTypes.array.isRequired,
};

export default withStyles(styles)(Trailer);
