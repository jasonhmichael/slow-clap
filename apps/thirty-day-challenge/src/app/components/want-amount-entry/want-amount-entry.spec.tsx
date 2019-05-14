import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { WantAmountEntry } from './want-amount-entry';

describe('WantAmountEntry', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<WantAmountEntry />);
    expect(baseElement).toBeTruthy();
  });
});
