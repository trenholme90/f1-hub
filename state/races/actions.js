import getPreviousRaces from '../../api/races/getPreviousRaces'
import getNextRaces from '../../api/races/getNextRaces'
import getLastRace from '../../api/races/getLastRace'

import {
	REQUEST_RACES_BY_SEASON_PENDING,
	REQUEST_RACES_BY_SEASON_SUCCESS,
	REQUEST_RACES_BY_SEASON_FAILED,
	REQUEST_LAST_RACE_PENDING,
	REQUEST_LAST_RACE_SUCCESS,
	REQUEST_LAST_RACE_FAILED,
} from './constants'

export const requestRacesBySeason = (season = '2021') => async (dispatch) => {
	dispatch({ type: REQUEST_RACES_BY_SEASON_PENDING })
	try {
		const previousRaces = await getPreviousRaces(season)
		const nextRaces = await getNextRaces(season)
		if (previousRaces.length > 0 || nextRaces.length > 0)
			dispatch({
				type: REQUEST_RACES_BY_SEASON_SUCCESS,
				payload: [...previousRaces, ...nextRaces],
			})
		else throw 'Something went wrong'
	} catch (error) {
		dispatch({ type: REQUEST_RACES_BY_SEASON_FAILED, payload: error })
	}
}

export const requestLastRace = (season = '2021') => async (dispatch) => {
	dispatch({ type: REQUEST_LAST_RACE_PENDING })
	try {
		const lastRace = await getLastRace(season)
		if (lastRace.length > 0)
			dispatch({ type: REQUEST_LAST_RACE_SUCCESS, payload: lastRace })
		else throw 'Display next race'
	} catch (error) {
		dispatch({ type: REQUEST_LAST_RACE_FAILED, payload: error })
	}
}
