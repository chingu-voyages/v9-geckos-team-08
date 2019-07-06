import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  appBar: {
    marginBottom: 50,
  },
  brandName: {
    margin: '0 auto',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

function NavBar(props) {
  const { classes } = props;

  return (
    <AppBar className={classes.appBar} position="static" color="default">
      <Toolbar>
        <Typography variant="h3" color="inherit" className={classes.brandName}>
          NextFlick
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
