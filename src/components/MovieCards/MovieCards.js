import React, {Component} from 'react';
import MovieCard from '../MovieCard/MovieCard';
import * as TMDB from '../../utils/MoviesAPI';
import './MovieCards.css'

class MovieCards extends Component{

    shortenTitle = (title) => (title.indexOf(':') !== -1)?
                    title.substr(0, title.indexOf(':')) :
                    title;

    count = 0;
    render(){
        const titles = this.props.titles; 
        return (
            <div className='latest-section'>
                {titles.map( (title) =>
                    <MovieCard  className='card'
                                key={title.id}
                                movieTitle={this.shortenTitle(title.title)}
                                imgSource={TMDB.getPosterURL(title.poster_path)}/>
                )}
          </div>
        );
    }
}

export default MovieCards;