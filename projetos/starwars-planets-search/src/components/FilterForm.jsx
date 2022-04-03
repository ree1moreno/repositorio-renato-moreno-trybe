import React from 'react';
import FilterButton from './FilterButton';
import ColumnSelect from './ColumnSelect';
import ComparsionSelect from './ComparsionSelect';
import ValueInput from './ValueInput';
import Input from './Input';

function FilterForm() {
  return (
    <form className="filter-box">
      <h2>Área de filtros</h2>
      <Input />
      <div className="filter-form">
        <ColumnSelect />
        <ComparsionSelect />
        <ValueInput />
        <FilterButton />
      </div>
    </form>
  );
}

export default FilterForm;
