import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { FavoritePokemons } from '../components';
import renderWithRouter from './renderWithRouter';

describe('Requirement 3 - Testing Favorite Pokemons', () => {
  it('check message if no favorite pokemon', () => {});
  renderWithRouter(<FavoritePokemons />);
  const message = screen.getByText(/no favorite pokemon found/i);

  expect(message).toBeInTheDocument();

  it('check favorites pokemons cards', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    const favCheckBox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(favCheckBox);

    const favoriteLink = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favoriteLink);
    const pokemon = screen.getByText(/pikachu/i);

    expect(pokemon).toBeInTheDocument();
  });
});
