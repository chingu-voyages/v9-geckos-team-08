import React from 'react';
import PropTypes from 'prop-types';
import './Calendar.css';
import CalendarItem from '../CalendarItem/CalendarItem';

const Calender = ({ upcomingTitles }) => (
  <div className="itemize-titles">
    <h1>Upcoming Releases</h1>
    <ul>
      {upcomingTitles.map(title => (
        <CalendarItem key={title.id} title={title} />
      ))}
    </ul>
  </div>
);

Calender.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  upcomingTitles: PropTypes.array.isRequired,
};

export default Calender;
