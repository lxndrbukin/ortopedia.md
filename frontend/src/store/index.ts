import { configureStore } from '@reduxjs/toolkit';
import system from './slices/systemSlice';

export const store = configureStore({
  reducer: {
    system,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './slices/types';
export * from './slices/systemSlice';
