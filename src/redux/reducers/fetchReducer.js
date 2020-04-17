import * as types from '../constants';

const initialState = {
	items: [],
	loading: true,
	error: null,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.FETCH_SUCCESS:
			return {
				...state,
				loading: false,
				items: action.payload.products,
			};

		case types.FETCH_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				items: [],
			};

		default:
			return state;
	}
}
