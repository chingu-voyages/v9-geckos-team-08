import React, {Component} from 'react'
import './SearchBar.css';

class SearchBar extends Component {
    updateList = this.props.updateList;

    // updates the titles to search specific titles.
    update(e)  {
        if(e) e.preventDefault();

        let [input] = e.target.children;

        if(input.value) this.updateList(input.value);
    }

    render() {
        return (
            <div className='form-container'>
                <form onSubmit={this.update.bind(this)}>
                    <input type='text' placeholder='Search' />
                    <button id='search-button' type='submit'></button>
                </form>
            </div>
        )
    }
}

export default SearchBar;