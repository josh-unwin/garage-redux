import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCars } from '../actions';

import Header from '../components/header';
import Car from '../containers/car';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars('joshs-garage');
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="car_list">
          { this.props.cars.map((car) => {
            return <Car car={car} key={car.plate} />;
          })}
        </div>
      </div>
    );
  }
}


function mapStateToProps(reduxState) {
  return {
    cars: reduxState.cars,
    garage: reduxState.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
