import React, { useState, useEffect } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}
const formatDate = date => moment(date).format('h:mm:ss A');

const Clock = ({offset, location}) => {
  const [date, setDate] = useState(getTimeWithOffset(offset));
  useEffect(() => {
    setInterval(() => {
    setDate((getTimeWithOffset(offset)) + 1)
  }, 1000);
  // return () => clearInterval(myInterval);
}, []);
  return(
    <div className="clock">
    <div className="clock__location">
        {location}
    </div>
    <div className="clock__time">
        {formatDate(date)}
    </div>
  </div>
  );
}

export default Clock;