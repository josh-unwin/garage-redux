const carsReducer = function(state = [], action) {
  switch (action.type) {
    case "GET_CARS": {
      return action.payload;
    }
    case "GET_CAR": {
      return [action.payload];
    }
    case "REMOVE_CAR": {
      return [action.payload];
    }
    default:
      return state;
  }
};

export default carsReducer;
