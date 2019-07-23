import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 20
  },
  formControl: {
    margin: theme.spacing(1),
    display: "inline",
    marginLeft: 20,
    textAlign: "left"
  },
  select: {
    width: 300
  }
});

function GenreFilter(props) {
  const { classes, genres, selectedGenre, handleGenreChange } = props;

  function handleChange(event) {
    handleGenreChange(event);
  }

  return (
    <form className={classes.root} autoComplete="off">
      <span>Filter by Genre</span>
      <FormControl className={classes.formControl}>
        <Select
          value={selectedGenre}
          onChange={handleChange}
          className={classes.select}
          displayEmpty
          inputProps={{
            name: "selectedGenre",
            id: "genre-select"
          }}
        >
          <MenuItem value="">None</MenuItem>
          {genres.map(genre => (
            <MenuItem key={genre.id} value={genre.name}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
}

GenreFilter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  selectedGenre: PropTypes.string.isRequired,
  handleGenreChange: PropTypes.func.isRequired
};

export default withStyles(styles)(GenreFilter);
