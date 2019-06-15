import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  header: {
    textAlign: 'center',
  },
  media: {
    height: 300,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    margin: theme.spacing(0.8),
    float: 'right',
  },
});

function MovieCard(props) {
  const { classes, movieTitle, imgSource } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        title={movieTitle}
      />
      <CardMedia
        className={classes.media}
        image={imgSource}
      />
      <CardContent>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button variant="contained" color="primary" className={classes.button}>
        More like this
        </Button>
      </CardContent>
    </Card>
  );
}

MovieCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  movieTitle: PropTypes.string.isRequired,
  imgSource: PropTypes.string.isRequired,
};

export default withStyles(styles)(MovieCard);
