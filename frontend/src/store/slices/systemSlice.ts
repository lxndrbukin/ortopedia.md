import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Language, SystemState } from './types';
import i18n from '../../i18n';

const initialState: SystemState = {
  lang: (localStorage.getItem('language') as Language) || 'ro',
};

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setLanguage: (state: SystemState, action: PayloadAction<Language>) => {
      state.lang = action.payload;
      i18n.changeLanguage(action.payload);
      localStorage.setItem('language', action.payload);
    },
  },
});

export const { setLanguage } = systemSlice.actions;
export default systemSlice.reducer;
