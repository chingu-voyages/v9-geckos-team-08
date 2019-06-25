import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

// class SearchBar extends Component {
//     updateList = this.props.updateList;

//     // updates the titles to search specific titles.
//     update(e)  {
//         if(e) e.preventDefault();

//         let [input] = e.target.children;

//         if(input.value) this.updateList(input.value);
//     }

//     render() {
//         return (
//             <div className='form-container'>
//                 <form onSubmit={this.update.bind(this)}>
//                     <input type='text' placeholder='Search' />
//                     <button id='search-button' type='submit'></button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default SearchBar;

const SearchBar = ({ updateList }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const [input] = event.target.children;
    updateList(input.value);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" />
        <button id="search-button" type="submit" />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  updateList: PropTypes.func.isRequired,
};

export default SearchBar;
