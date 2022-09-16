import { fireEvent, render, screen } from '@testing-library/react';
import Input from './index';

test("Input should be rendered", () => {
  render(<Input />);
  const inputEl = screen.getByTestId('content-input');
  expect(inputEl).toBeInTheDocument();
});

test("input should be empty", () => {
  render(<Input />);
  const inputEl = screen.getByTestId('content-input');
  expect((inputEl as HTMLInputElement).value).toBe("");
});

test("input value should change", () => {
  render(<Input type="text" />);
  const inputEl = screen.getByTestId('content-input');
  const testValue = "test";
  fireEvent.change(inputEl, { target: { value: testValue } });
  expect((inputEl as HTMLInputElement).value).toBe(testValue);
});
