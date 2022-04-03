import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const {
    planetsList,
    planetName,
    numericFilters: { filterByNumericValues },
  } = useContext(PlanetsContext);
  // console.log(planetsList, 'lista');
  // console.log(planetName, 'nome');

  const filterTable = () => {
    const MAIOR_QUE = 'maior que';
    const MENOR_QUE = 'menor que';

    if (planetName) {
      return planetsList
        .filter(
          ({ name }) => name.toLowerCase().includes(planetName.toLowerCase()),
        );
    }

    if (filterByNumericValues.length) {
      switch (filterByNumericValues[0].comparison) {
      case MAIOR_QUE:
        return planetsList
          .filter(
            (planet) => planet[filterByNumericValues[0].column]
                > Number(filterByNumericValues[0].value),
          );
      case MENOR_QUE:
        return planetsList
          .filter(
            (planet) => planet[filterByNumericValues[0].column]
                < Number(filterByNumericValues[0].value),
          );
      default:
        return planetsList
          .filter(
            (planet) => Number(planet[filterByNumericValues[0].column])
                === Number(filterByNumericValues[0].value),
          );
      }
    }

    return planetsList;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {planetsList.length
          && Object.keys(planetsList[0])
            .filter((key) => key !== 'residents')
            .map((title, index) => (
              <th key={ index }>
                {title.replace('_', ' ')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planetsList.length
          // .filter(({ name }) => console.log(name))
          // .filter(({ name }) => name.toLowerCase().includes(planetName.toLowerCase()))
        && filterTable()
          .map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
