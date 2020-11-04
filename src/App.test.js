import { render, screen } from '@testing-library/react';
import App from './App';

test('renders commands text', () => {
  render(<App />);
  const linkElement = screen.getByText(/commands/i);
  expect(linkElement).toBeInTheDocument();
});
