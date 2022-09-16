import { render, screen } from '@testing-library/react';
import Button from './index';

test("Button should be rendered", () => {
  render(<Button label='test' />);
  const buttonEl = screen.getByTestId('content-button');
  expect(buttonEl).toBeInTheDocument();
});
