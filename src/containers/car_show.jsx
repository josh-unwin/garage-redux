import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCar } from '../actions';
import { deleteCar } from '../actions';

import Header from '../components/header';

class CarShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  deleteCarClick = () => {
    const confirmation = confirm("Are you sure?");
    if (confirmation) {
      this.props.deleteCar(this.props.history, this.props.car);
    }
  }

  render() {
    const car = this.props.car;

    if (!car) {
      return <div>No car</div>;
    }
    return (
      <div className="app">
        <Header />

        <div className="car">
          <div className="car-infos">
            <h1>{car.brand} {car.model}</h1>
            <h3>{car.plate}</h3>
            <p>{car.owner}</p>
            <button onClick={this.deleteCarClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = reduxState.cars.find(c => c.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCar, deleteCar },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarShow);
