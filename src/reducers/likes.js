import {
  ADD_LIKE,
  REMOVE_LIKE,
  START_OVER
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
          {
            ...action.like, 
            weirdness: action.weirdness,
            term: action.term
          }
        ]
      };

    case REMOVE_LIKE:
      return {
        ...state,
        collection: state.collection.filter(like => action.like !== like)
      };

    case START_OVER:
      return {
        ...state,
        collection: []
      }

    default:
      return state;
  }

}

export default likes;
