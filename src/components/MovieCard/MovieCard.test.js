import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './MovieCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieCard movieTitle="Hello" imgSource="https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
