import React from 'react';
import { screen } from '@testing-library/react';
import { About } from '../components';
import renderWithRouter from './renderWithRouter';

describe('Requirement 2 - Testing About', () => {
  beforeEach(() => renderWithRouter(<About />));

  it('check heading text About Pokédex', () => {
    const aboutTitle = screen.getByRole('heading', { name: /about pokédex/i, level: 2 });

    expect(aboutTitle).toBeInTheDocument();
  });

  it('check if exists 2 paragraphs about Pokédex', () => {
    const firstParag = screen.getByText(/this application simulates/i);
    const secondParag = screen.getByText(/one can filter/i);

    expect(firstParag).toBeInTheDocument();
    expect(secondParag).toBeInTheDocument();
  });

  it('check Pokédex image', () => {
    const pokedexImage = screen.getByRole('img', { name: /pokédex/i });

    expect(pokedexImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
