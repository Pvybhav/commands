import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Select Category" text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Select Category/i);
  expect(linkElement).toBeInTheDocument();
});
