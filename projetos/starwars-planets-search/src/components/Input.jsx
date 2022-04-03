import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Input() {
  const { planetName, setFilter } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <form className="input-form">
      <label htmlFor="name-filter">
        <input
          data-testid="name-filter"
          id="name-filter"
          name="name-filter"
          onChange={ handleChange }
          placeholder="Filtrar por nome"
          type="text"
          value={ planetName }
        />
      </label>
    </form>
  );
}

export default Input;
