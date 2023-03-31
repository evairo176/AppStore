import {configureStore} from '@reduxjs/toolkit';
import AuthSlices from '../slices/AuthSlices';
import GlobalSlices from '../slices/GlobalSlices';
import HomeSlices from '../slices/HomeSlices';
import PhotoSlices from '../slices/PhotoSlices';

const store = configureStore({
  reducer: {
    auth: AuthSlices,
    global: GlobalSlices,
    photo: PhotoSlices,
    home: HomeSlices,
  },
});

export default store;
