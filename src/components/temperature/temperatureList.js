import React from 'react';
import PropTypes from 'prop-types';
import TemperatureItem from './temperatureItem';

function TemperatureList({ temperatures }) {
  const temperatureList = temperatures.map((temperature) => {
    return <TemperatureItem key={temperature._id} temperature={temperature} />;
  });

  return (
    <ul>
      {temperatureList}
    </ul>
  );

} 

TemperatureList.propTypes = {
  temperatures: PropTypes.array
};

export default TemperatureList;
