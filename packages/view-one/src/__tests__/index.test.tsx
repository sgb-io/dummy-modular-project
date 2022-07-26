import * as React from 'react';
import { render } from 'react-dom';
import ViewOne from '../index';

test('it should render', () => {
  const el = document.createElement('div');
  expect(() => render(<ViewOne />, el)).not.toThrow();
});
