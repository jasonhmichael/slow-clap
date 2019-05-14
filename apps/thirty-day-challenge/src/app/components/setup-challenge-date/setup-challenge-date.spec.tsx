import * as React from 'react';

import { render, cleanup } from 'react-testing-library';

import { SetupChallengeDate } from './setup-challenge-date';

describe('SetupChallengeDate', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<SetupChallengeDate />);
    expect(baseElement).toBeTruthy();
  });
});
