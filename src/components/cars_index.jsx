import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Car from '../containers/car';


class CarsIndex extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="app">
        <div className="garage">
          <h1>{this.props.garage} - Current Inventory</h1>
          <a class="btn btn-flat" href="#">Add New Car</a>
        </div>
        <div className="car_list">
          { this.props.cars.map((car) => {
            return <Car car={car} key={car.plate} />
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { actionName: actionName },
//     dispatch
//   );
// }

export default connect(mapStateToProps, null)(CarsIndex);
