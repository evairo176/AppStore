import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';



export const loginAction = createAsyncThunk(
  'users/login',
  async (values, {rejectWithValue, getState, dispatch}) => {
    try {
      const data = 'data';
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  },
);

const initialRegister = {
  fullname:"",
  emailAddress:"",
  password:"",
  password_confirmation:"",
  address:"",
  city:"",
  houseNumber:"",
  phoneNumber:"",
}


const userSlices = createSlice({
  name: 'users',
  initialState: {
    initialRegister
  },
  reducers:{
    setRegister:(state,action)=>{
           switch(action.type){
            case 'SET_REGISTER':
            return {
              ...state,
              fullname:state.value.name,
              emailAddress:state.value.emailAddress,
              password:state.value.password,
              password_confirmation:tate.value.password,
            }
            case "SET_ADDRESS":
              return {
                ...state,
                address:state.value.address,
                city:state.value.city,
                houseNumber:state.value.houseNumber,
                phoneNumber:tate.value.phoneNumber,
              }
           }
    }
  },
  extraReducer: builder => {
    builder.addCase(loginAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.appErr = undefined;
      state.serverErr = undefined;
      state.loading = false;
      state.login = action.payload;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.appErr = action.payload.message;
      state.serverErr = action.error.message;
    });


    builder.addCase(actionCreator.type, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { setRegister } = userSlices.actions;
export default userSlices.reducer;
