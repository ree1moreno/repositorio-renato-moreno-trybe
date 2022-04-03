import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import requestPlanetsAPI from '../services/planetsAPI';

function PlanetsProvider({ children }) {
  const [planetsList, setPlanets] = useState([]);
  const [planetName, setFilter] = useState('');
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('0');
  const [numericFilters, setFilterByNumericValues] = useState({
    filterByNumericValues: [],
  });
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const getPlanetsFromAPI = () => {
    requestPlanetsAPI()
      .then(({ results }) => setPlanets(results));
  };

  useEffect(() => {
    getPlanetsFromAPI();
  }, []);

  const context = {
    planetsList,
    planetName,
    setFilter,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    numericFilters,
    setFilterByNumericValues,
    options,
    setOptions,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  // children: PropTypes.node.isRequired,
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PlanetsProvider;
