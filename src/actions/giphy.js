import fetch from 'cross-fetch';

import { GIPHY_API_KEY } from '../config/index';

import {
	REQUEST_GIPHY,
	RECEIVE_GIPHY,
	UPDATE_WEIRDNESS
} from "../actionTypes";

function requestGiphy(term) {
  return {
    type: REQUEST_GIPHY,
    term
  };
}

function receiveGiphy(result) {
  return {
    type: RECEIVE_GIPHY,
    result,
    lastUpdated: Date.now()
  };
}

export function fetchGiphy(term) {
	return (dispatch, getState) => {
		if (getState().giphy.loading) { return false; }

		dispatch(requestGiphy(term));

		const { giphy } = getState();

		return fetch(`http://api.giphy.com/v1/gifs/translate?s=${term}&weirdness=${giphy.weirdness}&api_key=${GIPHY_API_KEY}`)
			.then(response => response.json())
			.then(json => dispatch(receiveGiphy(json.data)));
	};
}

export function updateWeirdness(weirdness) {
	return {
		type: UPDATE_WEIRDNESS,
		weirdness
	};
}
