import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AAIT E-Commerce header', () => {
  render(<App />);
  const titleElement = screen.getByText(/AAIT E-Commerce/i);
  expect(titleElement).toBeInTheDocument();
});
