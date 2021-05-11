import getDriverStandings from '../../api/drivers/getDriverStandings'
import getDriverById from '../../api/drivers/getDriverById'

import {
	REQUEST_DRIVERS_PENDING,
	REQUEST_DRIVERS_SUCCESS,
	REQUEST_DRIVERS_FAILED,
} from './constants'

export const requestDrivers = (season = 2021) => async (dispatch) => {
	dispatch({ type: REQUEST_DRIVERS_PENDING })
	try {
		const driverStandings = await getDriverStandings(season)
		console.log(driverStandings)
		const driverIDs = driverStandings.map((position) => position.driver.id)
		console.log(driverIDs)
		const drivers = await Promise.all(
			driverIDs.map(async (id) => await getDriverById(id))
		)
		if (drivers.length > 0)
			dispatch({ type: REQUEST_DRIVERS_SUCCESS, payload: drivers })
		else throw 'No drivers found'
	} catch (error) {
		dispatch({ type: REQUEST_DRIVERS_FAILED, payload: error })
	}
}
