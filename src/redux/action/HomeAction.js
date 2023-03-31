import {homeAction} from '../slices/HomeSlices';

const {default: axios} = require('axios');
const {API_HOST} = require('../../config');

const getFoodData = () => dispatch => {
  axios
    .get(`${API_HOST.url}/food`)
    .then(response => {
      //   console.log(response.data.data.data);

      dispatch(homeAction({type: 'SET_FOOD', value: response.data.data.data}));
    })
    .catch(error => {
      console.log(error);
    });
};

export {getFoodData};
