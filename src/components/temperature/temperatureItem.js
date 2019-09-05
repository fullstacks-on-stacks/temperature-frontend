import React from 'react';
import PropTypes from 'prop-types';

function TemperatureItem({ temperature }) {
  return (
    <li>
      <p>{temperature.temperature}</p>
    </li>
  );
}

TemperatureItem.propTypes = {
  temperature: PropTypes.object
};

export default TemperatureItem;
