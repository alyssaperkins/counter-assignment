// import necessary react testing library helpers here
// import the Counter component here

import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

beforeEach(() => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to my website!/i);
  expect(welcomeMessage).toBeInTheDocument();
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', async () => {
  const incrementButton = screen.getByText('+');
  await userEvent.click(incrementButton);

  const updatedCount = screen.getByText(/1/i);
  expect(updatedCount).toBeInTheDocument();
});

test('clicking - decrements the count', async () => {
  const decrementButton = screen.getByText('-');
  await userEvent.click(decrementButton);

  const updatedCount = screen.getByText(/-1/i);
  expect(updatedCount).toBeInTheDocument();
});
