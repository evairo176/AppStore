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

const getFoodDataByTypes = type => dispatch => {
  axios
    .get(`${API_HOST.url}/food?types=${type}`)
    .then(response => {
      // console.log(response?.data?.data?.data);
      if (type === 'new_food') {
        // console.log(response.data.data.data);
        dispatch(
          homeAction({type: 'SET_NEW_TASTE', value: response.data.data.data}),
        );
      }
      if (type === 'popular') {
        dispatch(
          homeAction({type: 'SET_POPULAR', value: response.data.data.data}),
        );
      }
      if (type === 'recommended') {
        dispatch(
          homeAction({type: 'SET_RECOMMENDED', value: response.data.data.data}),
        );
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export {getFoodData, getFoodDataByTypes};
