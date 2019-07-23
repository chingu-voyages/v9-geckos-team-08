import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import { getVideosFromMovie } from "../../utils/MoviesAPI";
import * as HELPERS from "../../utils/helpers";

const styles = theme => ({
  trailerThumbnail: {
    width: 210, // Same as youtube thumbnails
    height: 118, // Same as youtube thumbnails
    cursor: "pointer"
  },
  movieTitle: {
    margin: 0,
    marginBottom: 20,
    ...theme.typography.caption
  },
  modal: {
    width: "50vw",
    height: "50vh",
    transform: "translate(50%, 50%)"
  },
  youtubeIframe: {
    width: "100%",
    height: "100%"
  }
});

function Trailer(props) {
  const { classes, titleID, trailerThumbnail, movieTitle } = props;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [videos, setVideos] = React.useState("");

  React.useEffect(() => {
    getVideosFromMovie(titleID).then(candidateVideos =>
      setVideos(HELPERS.assignYoutubeTrailer(candidateVideos))
    );
  }, [titleID]);

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
      <Modal open={open} onClose={handleClose}>
        <div className={classes.modal}>
          <iframe
            src={videos}
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
  titleID: PropTypes.number.isRequired,
  trailerThumbnail: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired
};

export default withStyles(styles)(Trailer);
