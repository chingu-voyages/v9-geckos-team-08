import React from 'react';
import ReactDOM from 'react-dom';
import Trailer from './Trailer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Trailer trailerThumbnail="https://i.ytimg.com/vi/ZFy8ZgLd574/hqdefault.jpg" movieTitle="Child's Play (2019 film)" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
