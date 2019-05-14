import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { ThirtyDayChallengeWantsSpendingGraph } from './thirty-day-challenge-wants-spending-graph';

describe('ThirtyDayChallengeWantsSpendingGraph', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { getByText } = render(<ThirtyDayChallengeWantsSpendingGraph />);
    expect(getByText('thirty-day-challenge-wants-spending-graph works!')).toBeTruthy();
  });
});
