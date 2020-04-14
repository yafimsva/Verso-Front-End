import * as types from '../constants';

export const attachUser = (user) => ({
	type: types.ATTACH_USER,
	payload: user,
});
