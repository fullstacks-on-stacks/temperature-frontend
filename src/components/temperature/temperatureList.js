import React from 'react';
import PropTypes from 'prop-types';
import TemperatureItem from './temperatureItem';

function TemperatureList({ locations }) {
  const locationList = locations.map((location) => {
    return <TemperatureItem key={location.name} location={location} />;
  });

  return (
    <ul>
      {locationList}
    </ul>
  );

} 

TemperatureList.propTypes = {
  locations: PropTypes.array
};

export default TemperatureList;
