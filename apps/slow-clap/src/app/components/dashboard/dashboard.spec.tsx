import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText('$')).toBeTruthy();
  });
});
