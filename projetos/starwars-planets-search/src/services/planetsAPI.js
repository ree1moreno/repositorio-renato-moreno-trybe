const PLANET_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const requestPlanetsAPI = () => (
  fetch(PLANET_API)
    .then((response) => response.json())
    .then((json) => (json))
);

// const data = requestPlanetsAPI();
// console.log(data);

export default requestPlanetsAPI;
