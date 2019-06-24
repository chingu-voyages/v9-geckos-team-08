import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import MovieCard from '../components/MovieCard/MovieCard';
import Trailer from '../components/Trailer/Trailer';
import TrailerSection from '../components/TrailerSection/TrailerSection';
import GenreFilter from '../components/GenreFilter/GenreFilter';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('MovieCard', module)
  .add('blank movie card', () => <MovieCard />)
  .add('with movie title', () => (
    <MovieCard
      movieTitle="Avengers Endgame"
      imgSource="https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    />
  ));

storiesOf('Trailer', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('basic trailer', () => (
    <Trailer
      trailerThumbnail="https://i.ytimg.com/vi/ZFy8ZgLd574/hqdefault.jpg"
      movieTitle="Child's Play (2019 film)"
    />
  ))
  .add('multiple trailers, one over the other', () => (
    <div>
      <Trailer
        trailerThumbnail="https://i.ytimg.com/vi/ZFy8ZgLd574/hqdefault.jpg"
        movieTitle="Child's Play (2019 film)"
      />
      <Trailer
        trailerThumbnail="http://media.altpress.com/uploads/2019/01/spider-man-far-from-home-trailer-1.jpg"
        movieTitle="Spiderman Far From Home"
      />
      <Trailer
        trailerThumbnail="https://i.ytimg.com/vi/7TavVZMewpY/maxresdefault.jpg"
        movieTitle="The Lion King"
      />
      <Trailer
        trailerThumbnail="https://i.ytimg.com/vi/5Lxu75r3-kI/maxresdefault.jpg"
        movieTitle="Hobbs & Shaw"
      />
    </div>
  ));

storiesOf('GenreFilter', module)
  .add('Sample genre filter', () => (
    <GenreFilter />
  ));

storiesOf('TrailerSection', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('Sample trailer section', () => (
    <TrailerSection />
  ));
