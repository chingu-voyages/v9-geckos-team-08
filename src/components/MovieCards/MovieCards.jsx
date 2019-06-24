import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import * as TMDB from '../../utils/MoviesAPI';
import './MovieCards.css';

const MovieCards = ({ titles }) => {
  const shortenTitle = title => ((title.indexOf(':') !== -1)
    ? title.substr(0, title.indexOf(':'))
    : title);

  return (
    <div className="latest-section">
      {titles.map(title => (
        <MovieCard
          className="card"
          key={title.id}
          movieTitle={shortenTitle(title.title)}
          imgSource={TMDB.getPosterURL(title.poster_path)}
        />
      ))}
    </div>
  );
};

MovieCards.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  titles: PropTypes.array.isRequired,
};

export default MovieCards;
