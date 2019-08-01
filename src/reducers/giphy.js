import {
  REQUEST_GIPHY,
  RECEIVE_GIPHY,
  UPDATE_WEIRDNESS,
  USER_ERROR,
  ADD_LIKE,
  REMOVE_LIKE,
  START_OVER
} from "../actionTypes";


const defaultState = () => {
  return {
    term: '',
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
        term: action.term,
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
        error: action.msg,
        loading: false
      });

    case ADD_LIKE:
    case REMOVE_LIKE:
      return Object.assign({}, state, {
        error: null
      });

    case START_OVER:
      return Object.assign({}, state, {
        ...defaultState()
      });      

    default:
      return state;
  }

}

export default giphy;
