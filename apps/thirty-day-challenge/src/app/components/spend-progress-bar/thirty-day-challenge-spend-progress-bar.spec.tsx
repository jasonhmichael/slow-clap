import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { ThirtyDayChallengeSpendProgressBar } from './thirty-day-challenge-spend-progress-bar';

describe('ThirtyDayChallengeSpendProgressBar', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<ThirtyDayChallengeSpendProgressBar />);
    expect(getByText).toBeTruthy();
  });
});
