import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QuoteBox with id quote-box', () => {
  const result = render(<App />);
  const quoteBox = result.container.querySelector('#quote-box');
  expect(quoteBox).toBeInTheDocument();
});
