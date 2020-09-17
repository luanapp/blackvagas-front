import React from 'react';
import { render } from '@testing-library/react';
import Void from './Void';

test('renders learn react link', () => {
  const { getByText } = render(<Void />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
