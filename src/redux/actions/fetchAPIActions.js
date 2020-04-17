import * as types from '../constants';

export const fetchAPISuccess = (products) => ({
	type: types.FETCH_SUCCESS,
	payload: { products },
});

export const fetchAPIFailure = (error) => ({
	type: types.FETCH_FAILURE,
	payload: { error },
});

export const fetchAPI = (endpoint) => async (dispatch) => {
	await fetch(endpoint, {
		headers: {
			Authorization: `Bearer ${window.localStorage.getItem('token')}`,
		},
	})
		.then(handleErrors)
		.then((res) => res.json())
		.then((json) => {
			dispatch(fetchAPISuccess(json));
			return json;
		});
};

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}
