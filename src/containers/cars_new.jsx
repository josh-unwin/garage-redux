import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCars, addCar } from '../actions';
import { Field, reduxForm } from 'redux-form'

import Header from '../components/header';

class CarsNew extends Component {
  componentWillMount() {
  }

  submit = (values) => {
    console.log(values);
    this.props.addCar(values, (car) => {
      this.props.history.push('/');
      return car;
    });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <div>New Cars Page</div>
        <CarForm onSubmit={ this.submit } />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    garage: reduxState.garage
  };
}

let CarForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="brand">Brand</label>
        <Field name="brand" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="model">Model</label>
        <Field name="model" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="owner">Owner</label>
        <Field name="owner" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="plate">plate</label>
        <Field name="plate" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
};

CarForm = reduxForm({
  form: 'car'
})(CarForm);

export default connect(mapStateToProps, { addCar })(CarsNew);
