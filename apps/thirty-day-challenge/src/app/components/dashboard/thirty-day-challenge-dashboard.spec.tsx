import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { ThirtyDayChallengeDashboard } from './thirty-day-challenge-dashboard';

describe('ThirtyDayChallengeDashboard', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<ThirtyDayChallengeDashboard />);
    expect(getByText('$')).toBeTruthy();
  });
});
