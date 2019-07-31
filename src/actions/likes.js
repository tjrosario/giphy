import {
	ADD_LIKE,
  REMOVE_LIKE,
  USER_ERROR
} from "../actionTypes";

import { LIKES } from '../config/index';

export function addLike(like) {
	return (dispatch, getState) => {
		const { likes, giphy } = getState();

		// check for dups
		const found = likes.collection.some(item => item.id === like.id);

		// check if min number of likes met
		const maxed = likes.collection.length === LIKES.min;

		if (maxed) {
			dispatch({
				type: USER_ERROR,
				msg: 'You reached your max number of likes.'
			});			
			return false;
		}
		
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

