import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Car extends Component {
  render() {
    const car = this.props.car
    return (
      <div className="car">
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
        <div className="car-infos">
          <h3>{car.brand} - {car.model}</h3>
          <p>Owned by <strong>{car.owner}</strong></p>
          <p>Reg <strong>{car.plate}</strong></p>
          <Link to={`/cars/${car.id}`}>
            <p>View car</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Car);
