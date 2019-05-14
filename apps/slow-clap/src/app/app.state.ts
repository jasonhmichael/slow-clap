import { createContext } from 'react';
import { ncaa } from './sample-data/ncaa';

const MyStateContext = createContext({
  currentUser: {
    userId: '',
    userName: ''
  },
  setCurrentUser: undefined,
  gameData: [],
  setGameData: undefined
});

export interface User {
  userId: string;
  userName: string;
}

export interface PersistentApplicationState {
  currentUser: User;
  gameData: Array<any>;
}

export interface ApplicationState extends PersistentApplicationState {
  setCurrentUser: Function;
  setGameData: Function;
}

export const initState = (persistentValues: PersistentApplicationState, useStateFn: Function): ApplicationState => {
  const [currentUser, setCurrentUser] = useStateFn(persistentValues.currentUser || {});
  const [gameData, setGameData] = useStateFn(persistentValues.gameData || ncaa);

  return {
    currentUser,
    setCurrentUser,
    gameData,
    setGameData
  };
};

export const LOCAL_STORAGE_KEY = 'slowClap';

export const retrieveState = (useStateFn: Function): ApplicationState => {
  const persistentApplicationState = localStorage.getItem(LOCAL_STORAGE_KEY);
  const currentApplicationState = persistentApplicationState ? JSON.parse(persistentApplicationState) : {};
  return initState(currentApplicationState, useStateFn);
};

export const recordState = applicationState => {
  const { currentUser, gameData } = applicationState;
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({
      currentUser,
      gameData
    })
  );
};

export default MyStateContext;
