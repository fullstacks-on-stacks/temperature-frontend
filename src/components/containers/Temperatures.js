import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TemperatureList from '../temperature/temperatureList';

//import actions
//import selectors


class Temperatures extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    locations: PropTypes.array.isRequired
  }



  render() {
    return ( 
      <TemperatureList locations={locations} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,  
)(Temperatures) ;


