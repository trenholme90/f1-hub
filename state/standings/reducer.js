import {
	REQUEST_STANDINGS_PENDING,
	REQUEST_STANDINGS_SUCCESS,
	REQUEST_STANDINGS_FAILED,
} from './constants'

const initialState = {
	isPending: false,
	standings: [],
	error: '',
}

export const requestStandings = (state = initialState, action = {}) => {
	switch (action.type) {
		case REQUEST_STANDINGS_PENDING:
			return { ...state, isPending: true }
		case REQUEST_STANDINGS_SUCCESS:
			return { ...state, standings: action.payload, isPending: false }
		case REQUEST_STANDINGS_FAILED:
			return { ...state, error: action.payload, isPending: false }
		default:
			return state
	}
}
