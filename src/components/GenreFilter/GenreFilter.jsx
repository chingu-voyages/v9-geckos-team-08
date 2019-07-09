import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    display: 'inline',
    marginLeft: 20,
    textAlign: 'left',
  },
  select: {
    width: 300,
  },
});

function GenreFilter(props) {
  const { classes } = props;

  const [values, setValues] = React.useState({
    genre: '',
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form className={classes.root} autoComplete="off">
      <span>Filter by Genre</span>
      <FormControl className={classes.formControl}>
        <Select
          value={values.genre}
          onChange={handleChange}
          className={classes.select}
          displayEmpty
          inputProps={{
            name: 'genre',
            id: 'genre-select',
          }}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="Action">Action</MenuItem>
          <MenuItem value="Adventure">Adventure</MenuItem>
          <MenuItem value="Comedy">Comedy</MenuItem>
          <MenuItem value="Crime">Crime</MenuItem>
          <MenuItem value="Drama">Drama</MenuItem>
          <MenuItem value="Fantasy">Fantasy</MenuItem>
          <MenuItem value="Historical">Historical</MenuItem>
          <MenuItem value="Horror">Horror</MenuItem>
          <MenuItem value="Mistery">Mistery</MenuItem>
          <MenuItem value="Romance">Romance</MenuItem>
          <MenuItem value="Science Fiction">Science Fiction</MenuItem>
          <MenuItem value="Thriller">Thriller</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

GenreFilter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GenreFilter);
