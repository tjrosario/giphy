import {
	ADD_LIKE,
  REMOVE_LIKE,
  USER_ERROR
} from "../actionTypes";

export function addLike(like) {
	return (dispatch, getState) => {
		// check for dups
		const found = getState().likes.collection.some(item => item.id === like.id);
		
		if (found) {
			dispatch({
				type: USER_ERROR,
				msg: 'You already liked this giphy.'
			});
			return false;
		}

		dispatch({
			type: ADD_LIKE,
			like,
			weirdness: getState().giphy.weirdness
		});
	};
}

export function removeLike(like) {
	return {
	  type: REMOVE_LIKE,
	  like
	};
}

