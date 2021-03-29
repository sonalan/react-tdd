import { render, screen } from '@testing-library/react';
import App from './App';

// test() or it() can be used
it('renders learn react link', () => {
  // render the app component
  render(<App />);

  // get element by contains specific text
  const linkElement = screen.getByText(/learn react/i);

  // check the assertion if it fulfill the conditions
  expect(linkElement).toBeInTheDocument();
});
