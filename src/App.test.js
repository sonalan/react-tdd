import { render, screen } from '@testing-library/react';
import App from './App';

// test() or it() can be used
it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
