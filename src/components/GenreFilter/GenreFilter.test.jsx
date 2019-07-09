import React from 'react';
import ReactDOM from 'react-dom';
import GenreFilter from './GenreFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const genres = [
    {
      id: 1,
      name: 'Action',
    },
  ];
  ReactDOM.render(<GenreFilter genres={genres} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
