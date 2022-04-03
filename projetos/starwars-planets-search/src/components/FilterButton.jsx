import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function ButtonFilter() {
  const {
    columnFilter,
    comparisonFilter,
    valueFilter,
    numericFilters: { filterByNumericValues },
    setFilterByNumericValues,
    options,
    setOptions,
  } = useContext(PlanetsContext);

  const handleClick = () => {
    setFilterByNumericValues({
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      ],
    });
    setOptions(options.filter((option) => option !== columnFilter));
  };

  return (
    <form>
      <button
        data-testid="button-filter"
        id="filter-button"
        onClick={ handleClick }
        type="button"
      >
        Filtrar
      </button>
    </form>
  );
}
