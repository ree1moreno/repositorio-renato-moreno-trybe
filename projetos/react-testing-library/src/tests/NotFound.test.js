import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../components/NotFound';

describe('Requirement 4 - Testing NotFound', () => {
  it('check heading text', () => {
    renderWithRouter(<NotFound />);
    const messageNotFound = screen.getByRole('heading', {
      name: /page requested not found/i, level: 2,
    });

    expect(messageNotFound).toBeInTheDocument();
  });

  it('test image shown on page', () => {
    renderWithRouter(<NotFound />);
    const gifUrl = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const imageNotFound = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });

    expect(imageNotFound).toBeInTheDocument();
    expect(imageNotFound.src).toBe(gifUrl);
  });
});
