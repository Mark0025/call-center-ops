import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from './page';

test('renders dashboard page', () => {
  render(<Dashboard />);
  expect(screen.getByText('Dashboard')).toBeInTheDocument();
  expect(screen.getByText('Welcome to the Dashboard')).toBeInTheDocument();
});
