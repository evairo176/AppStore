import {globalAction} from '../slices/GlobalSlices';

const setLoading = value => {
  return globalAction({type: 'SET_LOADING', value});
};

export {setLoading};
