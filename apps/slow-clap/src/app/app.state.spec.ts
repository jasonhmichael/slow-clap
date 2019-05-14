import {
  ApplicationState,
  PersistentApplicationState,
  initState,
  retrieveState,
  recordState,
  LOCAL_STORAGE_KEY
} from './app.state';
import * as ncaa from './sample-data/ncaa';

describe('app.state', () => {
  let fakeUseStateFn;

  const fakeStateSetter = () => {};

  const fakeUser = { userId: 'mr', userName: 'goodbar' };
  const fakeGameData = [{ foo: 'bar' }];

  beforeEach(() => {
    fakeUseStateFn = jest.fn(val => [val, fakeStateSetter]);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('initState', () => {
    it('should set up state when no state provided', () => {
      const stateFromScratch = initState({} as PersistentApplicationState, fakeUseStateFn);
      expect(stateFromScratch.currentUser).toBe({});
      expect(stateFromScratch.gameData).toBe(ncaa);
      expect(stateFromScratch.setCurrentUser).toBeTruthy();
      expect(stateFromScratch.setGameData).toBeTruthy();
    });
    it('should set up state when all state provided', () => {
      const stateFromGoodies = initState(
        {
          currentUser: fakeUser,
          gameData: fakeGameData
        },
        fakeUseStateFn
      );
      expect(stateFromGoodies.currentUser).toBe(fakeUser);
      expect(stateFromGoodies.gameData).toBe(fakeGameData);
    });
  });

  describe('storage functions', () => {
    beforeEach(() => {
      window.localStorage.__proto__.setItem = jest.fn();
      window.localStorage.__proto__.getItem = jest.fn();
    });

    const fullApplicationState: ApplicationState = {
      currentUser: fakeUser,
      setCurrentUser: () => {},
      gameData: fakeGameData,
      setGameData: () => {}
    };
    const persistentApplicationState: PersistentApplicationState = {
      currentUser: fakeUser,
      gameData: fakeGameData
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
          setCurrentUser: fakeStateSetter,
          setGameData: fakeStateSetter
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
          currentUser: {},
          gameData: ncaa,
          setCurrentUser: fakeStateSetter,
          setGameData: fakeStateSetter
        });
      });
    });
  });
});
