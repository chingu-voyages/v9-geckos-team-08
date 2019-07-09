import React from 'react';
import ReactDOM from 'react-dom';
import TrailerSection from './TrailerSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const genres = [
    {
      id: 1,
      name: 'Action',
    },
  ];
  ReactDOM.render(<TrailerSection upcomingTitles={[]} genres={genres} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
