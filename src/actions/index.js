// TODO: add and export your own actions
export function fetchCars(garage) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json());
  return {
    type: "GET_CARS",
    payload: promise
  };
}

export function fetchCar(carId) {
  console.log('running fetchCar');
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${carId}`)
    .then(response => response.json());
  return {
    type: "GET_CAR",
    payload: promise
  };
}

export function addCar(carDetails, callback) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/joshs-garage/cars`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(carDetails)
  })
    .then(response => response.json())
    .then(callback);
  return {
    type: "ADD_CAR",
    payload: promise
  };
}

export function deleteCar(history, car) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${car.id}`, {
    method: "DELETE" })
    .then(response => response.json())
    .then(() => history.push(''));
  return {
    type: "REMOVE_CAR",
    payload: car
  };
}
