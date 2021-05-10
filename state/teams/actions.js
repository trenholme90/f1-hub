import getTeams from '../../api/teams/getTeams'

import {
	REQUEST_TEAMS_PENDING,
	REQUEST_TEAMS_SUCCESS,
	REQUEST_TEAMS_FAILED,
} from './constants'

export const requestTeams = () => async (dispatch) => {
	dispatch({ type: REQUEST_TEAMS_PENDING })
	try {
		const teams = await getTeams()
		if (teams.length > 0)
			dispatch({ type: REQUEST_TEAMS_SUCCESS, payload: teams })
		else throw 'No teams found'
	} catch (error) {
		dispatch({ type: REQUEST_TEAMS_FAILED, payload: error })
	}
}
