import React from 'react';
import ReactDOM from 'react-dom';
import GenreFilter from './GenreFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GenreFilter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
