import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Requirement 6 - Testing Pokemon', () => {
  it('check pokemon card with infos', () => {
    renderWithRouter(<App />);
    const pokemonTitle = screen.getByTestId('pokemon-name');
    const pokemonType = screen.getByTestId('pokemon-type');
    const pokemonInfo = screen.getByTestId('pokemon-weight');
    const pokemonImage = screen.getByRole('img', { name: 'Pikachu sprite' });

    expect(pokemonTitle).toHaveTextContent(/pikachu/i);
    expect(pokemonType).toHaveTextContent(/electric/i);
    expect(pokemonInfo).toHaveTextContent(/average weight: 6.0 kg/i);
    expect(pokemonImage.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokemonImage.alt).toBe('Pikachu sprite');
  });

  it('check if details link exists', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', { name: /more details/i });

    expect(detailsLink).toBeInTheDocument();
  });

  it('check redirect of details link', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);
    const pokemonTitle = screen.getByRole('heading', {
      name: /pikachu details/i, level: 2,
    });
    expect(pokemonTitle).toBeInTheDocument();
  });

  it('check URL change with pokemon id', () => {
    const { history } = renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    expect(history.location.pathname).toBe('/pokemons/25');
  });

  it('check favorite star on favorites pokemons', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);
    const favCheck = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(favCheck);
    const favoriteIcon = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });

    expect(favoriteIcon).toBeInTheDocument();
    expect(favoriteIcon.src).toBe('http://localhost/star-icon.svg');
    expect(favoriteIcon.alt).toBe('Pikachu is marked as favorite');
  });
});
