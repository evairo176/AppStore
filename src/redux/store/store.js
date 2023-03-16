import {configureStore} from '@reduxjs/toolkit';
import AuthSlices from '../slices/AuthSlices';
import GlobalSlices from '../slices/GlobalSlices';

const store = configureStore({
  reducer: {
    auth: AuthSlices,
    global: GlobalSlices,
  },
});

export default store;
