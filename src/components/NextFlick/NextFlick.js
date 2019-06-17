import React, {Component} from 'react';
import MovieCards from '../MovieCards/MovieCards';
import * as TMDB from '../../utils/MoviesAPI';
import './NextFlick.css';


class NextFlick extends Component {
    constructor(props){
        super(props);
        this.getList()
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
                <MovieCards className='MovieCards' titles={this.state.titles} />
        )
    }
}

export default NextFlick;