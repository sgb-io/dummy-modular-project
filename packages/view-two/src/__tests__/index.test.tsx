import * as React from 'react';
import { render } from 'react-dom';
import ViewTwo from '../index';

test('it should render', () => {
  const el = document.createElement('div');
  expect(() => render(<ViewTwo />, el)).not.toThrow();
});
