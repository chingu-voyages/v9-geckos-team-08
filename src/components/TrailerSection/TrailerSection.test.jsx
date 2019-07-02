import React from 'react';
import ReactDOM from 'react-dom';
import TrailerSection from './TrailerSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TrailerSection upcomingTitles={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
