import {createSlice} from '@reduxjs/toolkit';

const HomeSlices = createSlice({
  name: 'home',
  initialState: {
    food: [],
  },
  reducers: {
    homeReducer: (state, action) => {
      if (action.payload.type === 'SET_FOOD') {
        return {
          ...state,
          food: action.payload.value,
        };
      }
      return state;
    },
  },
});

const {homeReducer} = HomeSlices.actions;
export default HomeSlices.reducer;
