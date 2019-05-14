import { createContext } from 'react';

const MyStateContext = createContext({
  targetSpendAmount: '',
  setTargetSpendAmount: undefined,
  startDate: '',
  setStartDate: undefined,
  selectedView: '',
  setSelectedView: undefined
});

export const getTodaysDate = (): string => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
};

export interface PersistentApplicationState {
  targetSpendAmount: string;
  startDate: string;
  selectedView: string;
}

export interface ApplicationState extends PersistentApplicationState {
  setTargetSpendAmount: Function;
  setStartDate: Function;
  setSelectedView: Function;
}

export const initState = (persistentValues: PersistentApplicationState, useStateFn: Function): ApplicationState => {
  const [targetSpendAmount, setTargetSpendAmount] = useStateFn(persistentValues.targetSpendAmount || '');
  const [startDate, setStartDate] = useStateFn(persistentValues.startDate || getTodaysDate());
  const [selectedView, setSelectedView] = useStateFn(persistentValues.selectedView || 'month');

  return {
    targetSpendAmount,
    setTargetSpendAmount,
    startDate,
    setStartDate,
    selectedView,
    setSelectedView
  };
};

export const LOCAL_STORAGE_KEY = 'thirtyDayChallenge';

export const retrieveState = (useStateFn: Function): ApplicationState => {
  const persistentApplicationState = localStorage.getItem(LOCAL_STORAGE_KEY);
  const currentApplicationState = persistentApplicationState ? JSON.parse(persistentApplicationState) : {};
  return initState(currentApplicationState, useStateFn);
};

export const recordState = applicationState => {
  const { targetSpendAmount, startDate, selectedView } = applicationState;
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({
      targetSpendAmount,
      startDate,
      selectedView
    })
  );
};

export default MyStateContext;
