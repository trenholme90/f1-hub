import {
	REQUEST_DRIVERS_PENDING,
	REQUEST_DRIVERS_SUCCESS,
	REQUEST_DRIVERS_FAILED,
} from './constants'

const initialState = {
	isPending: false,
	drivers: [],
	error: '',
}

export const requestDrivers = (state = initialState, action = {}) => {
	switch (action.type) {
		case REQUEST_DRIVERS_PENDING:
			return { ...state, isPending: true }
		case REQUEST_DRIVERS_SUCCESS:
			return { ...state, drivers: action.payload, isPending: false }
		case REQUEST_DRIVERS_FAILED:
			return { ...state, error: action.payload, isPending: false }
		default:
			return state
	}
}
