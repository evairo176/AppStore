import axios from 'axios';
import {showMessage} from '../../utils';
import {storeData} from '../../utils/storage';
import {setLoading} from './GlobalAction';

const API_HOST = {
  url: 'https://foodmarket-backend.buildwithangga.id/api',
};

const signUpAction = (dataRegister, photoReducer, navigation) => dispatch => {
  const url = `${API_HOST.url}/register`;
  axios
    .post(url, dataRegister)
    .then(result => {
      //save to local storage

      const token = `${result.data.data.token_type} ${result.data.data.access_token}`;
      const profile = result.data.data.user;

      storeData('token', {
        value: token,
      });

      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);

        axios
          .post(`${API_HOST.url}/user/photo`, photoForUpload, {
            headers: {
              Authorization: token,
              'Content-Type': `multipart/form-data`,
            },
          })
          .then(resUpload => {
            // console.log('res upload:', resUpload);
            profile.profile_photo_url = `https://foodmarket-backend.buildwithangga.id/storage/${resUpload.data.data[0]}`;
            // console.log('hasil:' resUpload);
            storeData('userProfile', profile);
            showMessage('Register Successfully', 'success');
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
          })
          .catch(errUpload => {
            console.log(errUpload);
            showMessage('Upload error');
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
          });
      } else {
        storeData('userProfile', profile);
        showMessage('Create account successfully', 'success');
        navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      }
      dispatch(setLoading(false));
    })
    .catch(err => {
      console.log(err);
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.message);
    });
};

const signInAction = (dataRegister, navigation) => dispatch => {
  const url = `${API_HOST.url}/login`;
  axios
    .post(url, dataRegister)
    .then(result => {
      //save to local storage
      const token = `${result.data.data.token_type} ${result.data.data.access_token}`;
      const profile = result.data.data.user;

      storeData('token', {
        value: token,
      });
      storeData('userProfile', profile);

      dispatch(setLoading(false));
      showMessage('Login Successfully', 'success');
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      console.log(err);
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.data?.message);
    });
};

export {signUpAction, signInAction};
