import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { ThirtyDayChallengeChallengeDetails } from './thirty-day-challenge-challenge-details';

describe('ThirtyDayChallengeChallengeDetails', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<ThirtyDayChallengeChallengeDetails />);
    expect(getByText('thirty-day-challenge-challenge-details works!')).toBeTruthy();
  });
});
