import {
  ADD_LIKE
} from "../actionTypes";


const defaultState = () => {
  return {
    collection: []
  };
}

const items = (state = defaultState(), action) => {

  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
      };

    default:
      return state;
  }

}

export default items;
