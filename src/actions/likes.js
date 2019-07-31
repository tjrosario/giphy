import {
	ADD_LIKE,
  REMOVE_LIKE
} from "../actionTypes";

export const addLike = like => ({
  type: ADD_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});
