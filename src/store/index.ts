import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import { AppState } from '../constants/types';

const loadState = (): AppState | undefined => {
  try {
    const serializedState = localStorage.getItem('appState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error('Failed to load state from localStorage:', e);
    return undefined;
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    app: appReducer,
  },
  preloadedState: preloadedState ? { app: preloadedState } : undefined,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
