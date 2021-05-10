import {
	REQUEST_RACES_BY_SEASON_PENDING,
	REQUEST_RACES_BY_SEASON_SUCCESS,
	REQUEST_RACES_BY_SEASON_FAILED,
	REQUEST_LAST_RACE_PENDING,
	REQUEST_LAST_RACE_SUCCESS,
	REQUEST_LAST_RACE_FAILED,
} from './constants'

const initialState = {
	isPending: false,
	races: [],
	lastRace: {},
	error: '',
}

export const requestRacesBySeason = (state = initialState, action = {}) => {
	switch (action.type) {
		case REQUEST_RACES_BY_SEASON_PENDING:
			return { ...state, isPending: true }
		case REQUEST_RACES_BY_SEASON_SUCCESS:
			return { ...state, races: action.payload, isPending: false }
		case REQUEST_RACES_BY_SEASON_FAILED:
			return { ...state, error: action.payload, isPending: false }
		default:
			return state
	}
}

export const requestLastRace = (state = initialState, action = {}) => {
	switch (action.type) {
		case REQUEST_LAST_RACE_PENDING:
			return { ...state, isPending: true }
		case REQUEST_LAST_RACE_SUCCESS:
			return { ...state, lastRace: action.payload, isPending: false }
		case REQUEST_LAST_RACE_FAILED:
			return { ...state, error: action.payload, isPending: false }
		default:
			return state
	}
}
