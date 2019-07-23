import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import "./Calendar.css";
import CalendarItem from "../CalendarItem/CalendarItem";

const Calender = ({ upcomingTitles, pageCount, handlePageChange }) => {
  function handlePageClick(event) {
    handlePageChange(event);
  }

  return (
    <div className="itemize-titles">
      <h1>Upcoming Releases</h1>
      <ul>
        {upcomingTitles.map(title => (
          <CalendarItem key={title.id} titleID={title.id} title={title} />
        ))}
      </ul>
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </div>
  );
};

Calender.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  upcomingTitles: PropTypes.array.isRequired,
  pageCount: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired
};

export default Calender;
