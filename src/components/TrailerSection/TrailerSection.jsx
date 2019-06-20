import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Trailer from '../Trailer/Trailer';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#FAFAFA',
    backgroundColor: '#424342',
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
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3" className={classes.title}>
              New Trailers
            </Typography>
            <Grid container spacing={3} className={classes.trailerGrid}>
              <Grid item>
                <Trailer trailerThumbnail="https://i.ytimg.com/vi/ZFy8ZgLd574/hqdefault.jpg" movieTitle="Child's Play (2019 film)" />
                <Trailer trailerThumbnail="http://media.altpress.com/uploads/2019/01/spider-man-far-from-home-trailer-1.jpg" movieTitle="Spiderman Far From Home" />
              </Grid>
              <Grid item>
                <Trailer trailerThumbnail="https://i.ytimg.com/vi/7TavVZMewpY/maxresdefault.jpg" movieTitle="The Lion King" />
                <Trailer trailerThumbnail="https://i.ytimg.com/vi/5Lxu75r3-kI/maxresdefault.jpg" movieTitle="Hobbs & Shaw" />
              </Grid>
            </Grid>
            <div className={classes.buttonContainer}>
              <Button color="secondary" className={classes.button}>
                More trailers
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

TrailerSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrailerSection);
