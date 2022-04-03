import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function ComparisonFilter() {
  const { comparisonFilter, setComparisonFilter } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    setComparisonFilter(target.value);
  };

  return (
    <form>
      <label htmlFor="comparsion-filter">
        Faixa:
        <select
          className="select-filter"
          data-testid="comparison-filter"
          name="comparsion-filter"
          onChange={ handleChange }
          value={ comparisonFilter }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
    </form>
  );
}
