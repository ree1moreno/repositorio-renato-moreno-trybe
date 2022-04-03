import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
// import Input from './components/Input';
import './App.css';
import FilterForm from './components/FilterForm';

function App() {
  return (
    <PlanetsProvider>
      <h1>STAR WARS PROJECT</h1>
      {/* <Input /> */}
      <FilterForm />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
