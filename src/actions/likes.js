import {
	ADD_LIKE,
  REMOVE_LIKE
} from "../actionTypes";

export function addLike(like) {
	return (dispatch, getState) => {
		dispatch({
			type: ADD_LIKE,
			like,
			weirdness: getState().giphy.weirdness
		});
	};
}

export function removelike(like) {
	return {
	  type: REMOVE_LIKE,
	  like
	};
}

