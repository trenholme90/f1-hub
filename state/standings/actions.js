import getTeamStandings from '../../api/teams/getTeamStandings'
import getDriverStandings from '../../api/drivers/getDriverStandings'

import {
	REQUEST_STANDINGS_PENDING,
	REQUEST_STANDINGS_SUCCESS,
	REQUEST_STANDINGS_FAILED,
} from './constants'

export const requestStandings = (season = '2021') => async (dispatch) => {
	dispatch({ type: REQUEST_STANDINGS_PENDING })
	try {
		const teamStandings = await getTeamStandings(season)
		const driverStandings = await getDriverStandings(season)
		if (teamStandings.length > 0 || driverStandings.length > 0)
			dispatch({
				type: REQUEST_STANDINGS_SUCCESS,
				payload: [
					{ 'team-standings': teamStandings, 'driver-standings': driverStandings },
				],
			})
		else throw 'No standings found'
	} catch (error) {
		dispatch({ type: REQUEST_STANDINGS_FAILED, payload: error })
	}
}
