import {
  REQUEST_GIPHY,
  RECEIVE_GIPHY,
  UPDATE_WEIRDNESS,
  USER_ERROR,
  ADD_LIKE,
  REMOVE_LIKE
} from "../actionTypes";


const defaultState = () => {
  return {
    result: {},
    weirdness: 0,
    loading: false,
    error: null
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

    case USER_ERROR:
      return Object.assign({}, state, {
        error: action.msg
      });

    case ADD_LIKE:
    case REMOVE_LIKE:
      return Object.assign({}, state, {
        error: null
      });

    default:
      return state;
  }

}

export default giphy;
