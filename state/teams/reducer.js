import {
	REQUEST_TEAMS_PENDING,
	REQUEST_TEAMS_SUCCESS,
	REQUEST_TEAMS_FAILED,
} from './constants'

const initialState = {
	isPending: false,
	teams: [],
	error: '',
}

export const requestTeams = (state = initialState, action = {}) => {
	switch (action.type) {
		case REQUEST_TEAMS_PENDING:
			return { ...state, isPending: true }
		case REQUEST_TEAMS_SUCCESS:
			return { ...state, teams: action.payload, isPending: false }
		case REQUEST_TEAMS_FAILED:
			return { ...state, error: action.payload, isPending: false }
		default:
			return state
	}
}
