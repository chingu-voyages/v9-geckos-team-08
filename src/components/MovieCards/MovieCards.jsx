import React from 'react';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import MovieCard from '../MovieCard/MovieCard';
import * as TMDB from '../../utils/MoviesAPI';
import 'react-alice-carousel/lib/alice-carousel.css';
import './MovieCards.css';

const MovieCards = ({ titles }) => {
  const shortenTitle = title => ((title.indexOf(':') !== -1)
    ? title.substr(0, title.indexOf(':'))
    : title);

  const items = titles.map(title => (
    <MovieCard
      className="card"
      key={title.id}
      movieTitle={shortenTitle(title.title)}
      imgSource={TMDB.getPosterURL(title.poster_path)}
    />
  ));

  const responsive = {
    0: { items: 1 },
    576: { items: 2 },
    768: { items: 2 },
    992: { items: 3 },
    1200: { items: 5 },
  };

  return (
    <div className="latest-section">
      <AliceCarousel
        items={items}
        responsive={responsive}
        mouseDragEnabled
      />
    </div>
  );
};

MovieCards.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  titles: PropTypes.array.isRequired,
};

export default MovieCards;
