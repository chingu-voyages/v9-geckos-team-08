import React, {Component} from 'react';
import MovieCards from '../MovieCards/MovieCards';
import * as TMDB from '../../utils/MoviesAPI';




class MovieApp extends Component {
    constructor(props){
        super(props);
        let data = this.getList()
                        .then( (data) =>{
                            this.setState( (state, props) => {
                                state = { titles: data}
                                return state;
                            })
                        } )
                        .catch(console.log)
    }
    state = {titles: []}
    
    getList = () => {
        return TMDB.getPlayingNowTitles();
    }
    componentDidMount(){
        // load data on start.
        
    }

    render(){
        console.log('render(), MovieApp.js' , this.state.titles)
        return (
                <MovieCards className='MovieCards'
                            titles={this.state.titles} />
        )
    }
}

export default MovieApp;