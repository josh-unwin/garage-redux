import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import '../assets/stylesheets/application.scss';

import carsReducer from './reducers/cars_reducer';
import CarsIndex from './components/cars_index';
import CarsNew from './containers/cars_new';
import CarShow from './containers/car_show';

// const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
// const garageName = `garage${Math.floor(10 + (Math.random() * 90))}`;
const garageName = `joshs-garage`;
const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEnhancers(middlewares));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsIndex} />
        <Route path="/add_new" component={CarsNew} />
        <Route path="/cars/:id" component={CarShow} />
        {/*<Redirect from="/" to="/home" />*/}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
