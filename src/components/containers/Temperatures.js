import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TemperatureList from '../temperature/temperatureList';

import { fetchTemperature } from '../../actions/temperatureAction';
import { getAllTemperatures } from '../../selectors/temperatureSelector';


class Temperatures extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    locations: PropTypes.array.isRequired
  }

  componentDidMount(){
    this.props.fetch();
  }

  render() {
    const { locations } = this.props;

    return ( 
      <TemperatureList locations={locations} />
    );
  }
}

const mapStateToProps = state => ({
  locations: getAllTemperatures(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTemperature());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,  
)(Temperatures) ;


