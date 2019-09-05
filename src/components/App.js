import React from 'react';
import { getLocation, getTemperature } from '../services/temperatureApi';

export default function App() {
  getLocation()
    .then(res => console.log(res));

  getTemperature()
    .then(res => console.log(res));
    
  return <h1>Hello World</h1>;
}
