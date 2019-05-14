import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { SetupChallenge } from './setup-challenge';
import { MemoryRouter } from 'react-router-dom';

describe('SetupChallenge', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <SetupChallenge />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <MemoryRouter>
        <SetupChallenge />
      </MemoryRouter>
    );
    expect(getByText('FOR MY WANTS')).toBeTruthy();
  });
});
