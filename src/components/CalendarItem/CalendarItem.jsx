import React from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import { getVideosFromMovie } from "../../utils/MoviesAPI";
import * as HELPERS from "../../utils/helpers";
import "./CalendarItem.css";

const styles = theme => ({
  modal: {
    width: "50vw",
    height: "50vh",
    transform: "translate(50%, 50%)"
  },
  movie: {
    color: theme.palette.background.paper,
    cursor: "pointer",
    userSelect: "none"
  },
  youtubeIframe: {
    width: "100%",
    height: "100%"
  }
});

const CalendarItem = ({ classes, title, titleID }) => {
  const convertIsoToDatetime = ISOFormat => {
    const [yyyy, mm, dd] = ISOFormat.split("-");
    return `${mm}-${dd}-${yyyy}`;
  };

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
    <div className={classes.movie}>
      <li //eslint-disable-line
        onClick={handleOpen}
        className="calendar-item"
      >
        {title.title}
        <span id="dates">{convertIsoToDatetime(title.release_date)}</span>
      </li>
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
    </div>
  );
};

CalendarItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  title: PropTypes.object.isRequired,
  titleID: PropTypes.number.isRequired
};

export default withStyles(styles)(CalendarItem);
