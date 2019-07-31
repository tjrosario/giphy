import {
	ADD_LIKE,
  REMOVE_LIKE,
  USER_ERROR
} from "../actionTypes";

export function addLike(like) {
	return (dispatch, getState) => {
		const { likes, giphy } = getState();

		// check for dups
		const found = likes.collection.some(item => item.id === like.id);
		
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
			weirdness: getState().giphy.weirdness,
			term: giphy.term
		});
	};
}

export function removeLike(like) {
	return {
	  type: REMOVE_LIKE,
	  like
	};
}

