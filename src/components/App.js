import React from 'react';
import { getLocation, getTemperature } from '../services/temperatureApi';
import Temperatures from './containers/Temperatures';

export default function App() {
  getLocation()
    .then(res => console.log(res));

  getTemperature()
    .then(res => console.log(res));
    
  return (
    <>
    < Temperatures />
    </>

  );
}
