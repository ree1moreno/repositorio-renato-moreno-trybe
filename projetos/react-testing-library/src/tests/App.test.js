import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Requirement 1 - Testing App', () => {
  it('check fixed set of navigation links', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });
    const about = screen.getByRole('link', { name: 'About' });
    const favorites = screen.getByRole('link', { name: 'Favorite Pokémons' });

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favorites).toBeInTheDocument();
  });

  it('check Home Link text', () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });
    userEvent.click(home);

    expect(home).toBeInTheDocument();
    expect(history.location.pathname).toBe('/');
  });

  it('check About Link text', () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: 'About' });
    userEvent.click(about);

    expect(about).toBeInTheDocument();
    expect(history.location.pathname).toBe('/about');
  });

  it('check Favorites Link text', () => {
    const { history } = renderWithRouter(<App />);
    const favorites = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favorites);

    expect(favorites).toBeInTheDocument();
    expect(history.location.pathname).toBe('/favorites');
  });

  it('check NotFound page if non-existent link', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/non-existent');
    const pageNotFound = screen.getByText(/Page requested not found/i);

    expect(pageNotFound).toBeInTheDocument();
  });
});
