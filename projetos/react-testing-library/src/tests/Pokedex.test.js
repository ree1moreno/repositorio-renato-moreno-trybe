import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Requirement 5 - Testing Pokedex', () => {
  it('check heading text', () => {
    renderWithRouter(<App />);
    const pokedexTitle = screen.getByRole('heading', { name: /encountered pokémons/i });

    expect(pokedexTitle).toBeInTheDocument();
  });

  it('check if next Pokemon appears after click on button', () => {
    renderWithRouter(<App />);
    const nextButton = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(nextButton);
    const pokemonImage = screen.getByRole('img', { name: /charmander sprite/i });

    expect(nextButton).toBeInTheDocument();
    expect(pokemonImage).toBeInTheDocument();
  });

  it('check only one pokemon is shown at time', () => {
    renderWithRouter(<App />);
    const pokemonImage = screen.getAllByRole('img');

    expect(pokemonImage).toHaveLength(1);
  });

  it('check filter buttons', () => {
    renderWithRouter(<App />);
    const typeButtons = screen.getAllByTestId('pokemon-type-button');
    const pokTypes = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    const totalOfButtons = 7;

    expect(typeButtons).toHaveLength(totalOfButtons);
    typeButtons.forEach((button, index) => {
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(pokTypes[index]);
    });
  });

  it('check reset to filter button', () => {
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: 'All' });
    userEvent.click(allButton);
    const pikachuImg = screen.getByRole('img', { name: /pikachu sprite/i });

    expect(allButton).toBeInTheDocument();
    expect(pikachuImg).toBeInTheDocument();
  });
});
