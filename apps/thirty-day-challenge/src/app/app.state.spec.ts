import {
  ApplicationState,
  PersistentApplicationState,
  getTodaysDate,
  initState,
  retrieveState,
  recordState,
  LOCAL_STORAGE_KEY
} from './app.state';

describe('app.state', () => {
  let fakeUseStateFn;

  const fakeStateSetter = () => {};

  beforeEach(() => {
    fakeUseStateFn = jest.fn(val => [val, fakeStateSetter]);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getTodaysDate', () => {
    it('should return a string date of proper length', () => {
      expect(getTodaysDate()).toBeTruthy();
      expect(getTodaysDate().length).toBe(10);
    });
  });

  describe('initState', () => {
    it('should set up state when no state provided', () => {
      const stateFromScratch = initState({} as PersistentApplicationState, fakeUseStateFn);
      expect(stateFromScratch.targetSpendAmount).toBe('');
      expect(stateFromScratch.startDate).toBe(getTodaysDate());
      expect(stateFromScratch.selectedView).toBe('month');
    });
    it('should set up state when all state provided', () => {
      const stateFromGoodies = initState(
        {
          targetSpendAmount: 'benjamins',
          startDate: 'manyana',
          selectedView: 'sunsets'
        },
        fakeUseStateFn
      );
      expect(stateFromGoodies.targetSpendAmount).toBe('benjamins');
      expect(stateFromGoodies.startDate).toBe('manyana');
      expect(stateFromGoodies.selectedView).toBe('sunsets');
    });
    it('should set up state when some state provided', () => {
      const stateFromTwoFace = initState(
        { targetSpendAmount: 'benjamins' } as PersistentApplicationState,
        fakeUseStateFn
      );
      expect(stateFromTwoFace.targetSpendAmount).toBe('benjamins');
      expect(stateFromTwoFace.startDate).toBe(getTodaysDate());
      expect(stateFromTwoFace.selectedView).toBe('month');
    });
    it('should include setters for the persistent state attributes', () => {
      const vanillaState = initState({ targetSpendAmount: 'benjamins' } as PersistentApplicationState, fakeUseStateFn);
      expect(vanillaState.setTargetSpendAmount).toBeTruthy();
      expect(vanillaState.setStartDate).toBeTruthy();
      expect(vanillaState.setSelectedView).toBeTruthy();
    });
  });

  describe('storage functions', () => {
    beforeEach(() => {
      window.localStorage.__proto__.setItem = jest.fn();
      window.localStorage.__proto__.getItem = jest.fn();
    });

    const fullApplicationState: ApplicationState = {
      targetSpendAmount: '14',
      setTargetSpendAmount: () => {},
      startDate: 'yestaday',
      setStartDate: () => {},
      selectedView: 'grandcanyon',
      setSelectedView: () => {}
    };
    const persistentApplicationState: PersistentApplicationState = {
      targetSpendAmount: '14',
      startDate: 'yestaday',
      selectedView: 'grandcanyon'
    };

    describe('recordState', () => {
      it('should record just persistent state in localstorage', () => {
        recordState(fullApplicationState);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenLastCalledWith(
          LOCAL_STORAGE_KEY,
          JSON.stringify(persistentApplicationState)
        );
      });
    });

    describe('retrieveState', () => {
      it('should get state from localstorage when it exists', () => {
        const mockGetItem = jest.fn(key => JSON.stringify(persistentApplicationState));
        window.localStorage.__proto__.getItem = mockGetItem;

        const retrievedState = retrieveState(fakeUseStateFn);
        expect(localStorage.getItem).toHaveBeenCalledTimes(1);
        expect(localStorage.getItem).toHaveBeenLastCalledWith(LOCAL_STORAGE_KEY);
        expect(mockGetItem.mock.calls.length).toBe(1);
        expect(retrievedState).toEqual({
          ...persistentApplicationState,
          setTargetSpendAmount: fakeStateSetter,
          setStartDate: fakeStateSetter,
          setSelectedView: fakeStateSetter
        });
      });
      it('should init state from scratch when it is not in localStorage', () => {
        const mockGetItem = jest.fn(key => '');
        window.localStorage.__proto__.getItem = mockGetItem;

        const retrievedState = retrieveState(fakeUseStateFn);
        expect(localStorage.getItem).toHaveBeenCalledTimes(1);
        expect(localStorage.getItem).toHaveBeenLastCalledWith(LOCAL_STORAGE_KEY);
        expect(mockGetItem.mock.calls.length).toBe(1);
        expect(retrievedState).toEqual({
          targetSpendAmount: '',
          startDate: getTodaysDate(),
          selectedView: 'month',
          setTargetSpendAmount: fakeStateSetter,
          setStartDate: fakeStateSetter,
          setSelectedView: fakeStateSetter
        });
      });
    });
  });
});
