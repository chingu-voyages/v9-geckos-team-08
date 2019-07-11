import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
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
    ...theme.typography.caption,
  },
  modal: {
    width: '50vw',
    height: '50vh',
    transform: 'translate(50%, 50%)',
  },
  youtubeIframe: {
    width: '100%',
    height: '100%',
  },
});

function assignYoutubeTrailer(videos) {
  const YOUTUBE_URLBASE = 'https://www.youtube.com/embed/';

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

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs>
      <input
        type="image"
        className={classes.trailerThumbnail}
        src={trailerThumbnail}
        onClick={handleOpen}
        alt="trailer thumbnail"
      />
      <p className={classes.movieTitle}>{movieTitle}</p>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className={classes.modal}>
          <iframe
            src={assignYoutubeTrailer(videos)}
            className={classes.youtubeIframe}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>
      </Modal>
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
