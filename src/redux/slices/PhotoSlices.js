import {createSlice} from '@reduxjs/toolkit';

const initPhoto = {
  uri: '',
  type: '',
  name: '',
  isUploadPhoto: false,
};

const PhotoSlices = createSlice({
  name: 'photo',
  initialState: {},
  reducers: {
    setPhotoAction: (state = initPhoto, action) => {
      switch (action.payload.type) {
        case 'SET_PHOTO':
          //   console.log(action.payload);
          return {
            ...state,
            uri: action.payload.value.uri,
            type: action.payload.value.type,
            name: action.payload.value.name,
          };
        case 'SET_UPLOAD_STATUS':
          return {
            ...state,
            isUploadPhoto: action.payload.value,
          };
      }
    },
  },
});

export const {setPhotoAction} = PhotoSlices.actions;
export default PhotoSlices.reducer;
