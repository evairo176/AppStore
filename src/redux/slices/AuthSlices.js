import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialRegister = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  address: '',
  city: '',
  houseNumber: '',
  phoneNumber: '',
};

const AuthSlices = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    setRegister: (state = initialRegister, action) => {
      switch (action.payload.type) {
        case 'SET_REGISTER':
          //   console.log(action.payload);
          return {
            ...state,
            name: action.payload.value.name,
            email: action.payload.value.email,
            password: action.payload.value.password,
            password_confirmation: action.payload.value.password_confirmation,
          };
        case 'SET_ADDRESS':
          return {
            ...state,
            address: action.payload.value.address,
            city: action.payload.value.city,
            houseNumber: action.payload.value.houseNumber,
            phoneNumber: action.payload.value.phoneNumber,
          };
      }
    },
  },
});

export const {setRegister} = AuthSlices.actions;
export default AuthSlices.reducer;
