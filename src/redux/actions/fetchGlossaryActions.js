import * as types from '../constants';

export const fetchGlossarySuccess = (products) => ({
	type: types.FETCH_GLOSSARY_SUCCESS,
	payload: { products },
});

export const fetchGlossaryFailure = (error) => ({
	type: types.FETCH_GLOSSARY_FAILURE,
	payload: { error },
});

export const fetchGlossary = (token) => async (dispatch) => {
	await fetch('https://greenriverapi.azurewebsites.net/glossary', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then(handleErrors)
		.then((res) => res.json())
		.then((json) => {
			dispatch(fetchGlossarySuccess(json));
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
