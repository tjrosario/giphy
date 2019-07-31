import {
  ADD_LIKE,
  REMOVE_LIKE
} from "../actionTypes";


const defaultState = () => {
  return {
    collection: []
  };
}

const likes = (state = defaultState(), action) => {

  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        collection: [
          ...state.collection,
          {...action.like, weirdness: action.weirdness}
        ]
      };

    case REMOVE_LIKE:
      return {
        ...state,
        collection: state.collection.filter(like => action.like !== like)
      };

    default:
      return state;
  }

}

export default likes;
