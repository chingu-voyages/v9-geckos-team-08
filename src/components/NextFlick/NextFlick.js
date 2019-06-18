import React, {Component} from 'react';
import MovieCards from '../MovieCards/MovieCards';
import * as TMDB from '../../utils/MoviesAPI';
import './NextFlick.css';
import SearchBar from '../SearchBar/SearchBar';


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
    updateList = (search) => {
        TMDB.getSpecificTitles(search)
            .then( (data) => {
                this.setState( (state, prop) =>{
                    this.state = {titles : data}
                    return this.state;
                })
            })
    }

    render(){
        console.log('render(), MovieApp.js' , this.state.titles)
        return (
                <div>
                    <SearchBar updateList={this.updateList}></SearchBar>
                    <MovieCards className='MovieCards' titles={this.state.titles} />
                </div>
        )
    }
}

export default NextFlick;