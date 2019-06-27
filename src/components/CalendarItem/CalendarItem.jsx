import React from 'react';
import PropTypes from 'prop-types';
import './CalendarItem.css';


const CalendarItem = ({ title }) => {
  const convertIsoToDatetime = (ISOFormat) => {
    const [yyyy, mm, dd] = ISOFormat.split('-');
    return `${mm}-${dd}-${yyyy}`;
  };

  return (
    // TODO: <a> to be replace with react's <Link>
    <a href=".">
      <li className="calendar-item">
        {title.title}
        <span id="dates">{convertIsoToDatetime(title.release_date)}</span>
      </li>
    </a>
  );
};

CalendarItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  title: PropTypes.object.isRequired,
};

export default CalendarItem;
