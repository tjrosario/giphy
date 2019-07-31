import {
  REQUEST_GIPHY,
  RECEIVE_GIPHY,
  UPDATE_WEIRDNESS
} from "../actionTypes";


const defaultState = () => {
  return {
    result: {},
    weirdness: 0,
    loading: false
  };
}

const giphy = (state = defaultState(), action) => {

  switch (action.type) {
    case REQUEST_GIPHY:
      return Object.assign({}, state, {
        loading: true
      });

    case RECEIVE_GIPHY:
      return Object.assign({}, state, {
        result: action.result,
        loading: false,
        lastUpdated: action.lastUpdated
      });

    case UPDATE_WEIRDNESS:
      return Object.assign({}, state, {
        weirdness: action.weirdness
      });

    default:
      return state;
  }

}

export default giphy;
