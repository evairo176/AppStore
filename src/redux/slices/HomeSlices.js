import {createSlice} from '@reduxjs/toolkit';

const HomeSlices = createSlice({
  name: 'home',
  initialState: {
    food: [],
    newTaste: [],
    popular: [],
    recommended: [],
  },
  reducers: {
    homeAction: (state, action) => {
      if (action.payload.type === 'SET_FOOD') {
        return {
          ...state,
          food: action.payload.value,
        };
      }
      if (action.payload.type === 'SET_NEW_TASTE') {
        return {
          ...state,
          newTaste: action.payload.value,
        };
      }
      if (action.payload.type === 'SET_POPULAR') {
        return {
          ...state,
          popular: action.payload.value,
        };
      }
      if (action.payload.type === 'SET_RECOMMENDED') {
        return {
          ...state,
          recommended: action.payload.value,
        };
      }
    },
  },
});

export const {homeAction} = HomeSlices.actions;
export default HomeSlices.reducer;
