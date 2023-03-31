import {createSlice} from '@reduxjs/toolkit';

const HomeSlices = createSlice({
  name: 'home',
  initialState: {
    food: [],
  },
  reducers: {
    homeAction: (state, action) => {
      if (action.payload.type === 'SET_FOOD') {
        return {
          ...state,
          food: action.payload.value,
        };
      }
    },
  },
});

export const {homeAction} = HomeSlices.actions;
export default HomeSlices.reducer;
