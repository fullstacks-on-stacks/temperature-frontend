import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TemperatureList from '../temperature/temperatureList';

import { fetchTemperature } from '../../actions/temperatureAction';
import { getAllTemperatures } from '../../selectors/temperatureSelector';


class Temperatures extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    temperatures: PropTypes.array.isRequired
  }

  componentDidMount(){
    this.props.fetch();
  }

  render() {
    const { temperatures } = this.props;

    return ( 
      <TemperatureList temperatures={temperatures} />
    );
  }
}

const mapStateToProps = state => ({
  temperatures: getAllTemperatures(state)
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


