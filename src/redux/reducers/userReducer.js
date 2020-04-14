import * as types from '../constants';

const initialState = {
	data: {},
};

export default function reducer(state = initialState, actions) {
	switch (actions.type) {
		case types.ATTACH_USER:
			return {
				...state,
				data: actions.payload,
			};

		default:
			return state;
	}
}
