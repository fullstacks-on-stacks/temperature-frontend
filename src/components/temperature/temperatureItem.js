import React from 'react';
import PropTypes from 'prop-types';

function TemperatureItem({ location }) {
  return (
    <li>
      <h2>{location.name}</h2>
      <p>some temperature</p>
    </li>
  );
}

TemperatureItem.propTypes = {
  location: PropTypes.object
};

export default TemperatureItem;
