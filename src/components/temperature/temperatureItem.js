import React from 'react';
import PropTypes from 'prop-types';

function TemperatureItem({ location }) {
  console.log(location)
  return (
    <li>
      <p>{location.name}</p>
    </li>
  );
}

TemperatureItem.propTypes = {
  location: PropTypes.object
};

export default TemperatureItem;
