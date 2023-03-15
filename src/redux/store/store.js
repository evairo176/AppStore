import {configureStore} from '@reduxjs/toolkit';
import UserSlices from '../slices/UserSlices';


const store = configureStore({
  reducer: {
    users: UserSlices,
  },
});

export default store;
