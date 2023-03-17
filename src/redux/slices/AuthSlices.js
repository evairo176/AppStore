import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {showMessage} from '../../utils';
import {globalAction} from './GlobalSlices';

// ================================================================
// user action
// ================================================================
const resetRegisterAction = createAction('users/reset-register');

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

export const LoginAuthAction = createAsyncThunk(
  'auth/login',
  async (values, {rejectWithValue, getState, dispatch}) => {
    console.log(values);
    try {
      // http call
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const {data} = await axios.post(
        `https://foodmarket-backend.buildwithangga.id/api/login`,
        values,
        config,
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const registerAuthAction = createAsyncThunk(
  'auth/register',
  async (values, {rejectWithValue, getState, dispatch}) => {
    console.log(values);
    dispatch(globalAction({type: 'SET_LOADING', value: true}));
    try {
      const url = `https://foodmarket-backend.buildwithangga.id/api/register`;

      // http call
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const {data} = await axios.post(url, values, config);
      dispatch(globalAction({type: 'SET_LOADING', value: false}));
      showMessage('Create account successfully', 'success');
      dispatch(resetRegisterAction());
      return data;
    } catch (error) {
      dispatch(globalAction({type: 'SET_LOADING', value: false}));
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  },
);

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
  extraReducers: builder => {
    // login
    builder.addCase(LoginAuthAction.pending, (state, action) => {
      // state.appErr = undefined;
      // state.serverErr = undefined;
    });
    builder.addCase(LoginAuthAction.fulfilled, (state, action) => {
      console.log(action.payload);
      state.login = action.payload;

      // state.appErr = undefined;
      // state.serverErr = undefined;
    });
    builder.addCase(LoginAuthAction.rejected, (state, action) => {
      console.log(action.payload?.data?.message);
      console.log(action.error?.message);
      state.appErr = action.payload?.data?.message;
      state.serverErr = action.error?.message;
    });

    // register
    builder.addCase(registerAuthAction.pending, (state, action) => {
      state.loading = true;
      // state.appErr = undefined;
      // state.serverErr = undefined;
    });
    builder.addCase(resetRegisterAction, (state, action) => {
      state.isRegistered = true;
    });

    builder.addCase(registerAuthAction.fulfilled, (state, action) => {
      console.log(action.payload);
      state.registered = action.payload;
      state.isRegistered = false;
      showMessage('Create account successfully', 'success');
      // state.appErr = undefined;
      // state.serverErr = undefined;
    });
    builder.addCase(registerAuthAction.rejected, (state, action) => {
      console.log(action.payload?.message);
      console.log(action.error?.message);
      state.appErr = action.payload?.message;
      state.serverErr = action.error?.message;
      showMessage(`${action.error?.message} ${action.payload?.message}`);
    });
  },
});

export const {setRegister} = AuthSlices.actions;
export default AuthSlices.reducer;
