import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function ColumnFilter() {
  const { columnFilter, setColumnFilter, options } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    setColumnFilter(target.value);
  };

  return (
    <form>
      <label htmlFor="column-filter">
        Coluna:
        <select
          className="select-filter"
          data-testid="column-filter"
          name="column-filter"
          onChange={ handleChange }
          value={ columnFilter }
        >
          {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
          {options
            .map((option, index) => (
              <option
                key={ index }
                value={ option }
              >
                {/* {option.replace('_', ' ')} */}
                {option}
              </option>
            ))}
        </select>
      </label>
    </form>
  );
}
