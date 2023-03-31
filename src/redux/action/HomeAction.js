const {default: axios} = require('axios');
const {API_HOST} = require('../../config');

const getFoodData = () => () => {
  axios
    .get(`${API_HOST.url}/food`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
