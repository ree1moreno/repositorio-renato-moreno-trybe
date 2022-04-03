import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function ValueFilter() {
  const { valueFilter, setValueFilter } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    setValueFilter(target.value);
  };

  return (
    <form>
      <label htmlFor="value-filter">
        Valor:
        <input
          data-testid="value-filter"
          id="value-filter"
          name="value-filter"
          onChange={ handleChange }
          type="number"
          value={ valueFilter }
        />
      </label>
    </form>
  );
}
