import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { requestTeams } from './teams/actions'
import { requestStandings } from './standings/actions'
import { requestRacesBySeason } from './races/actions'
import { requestLastRace } from './races/actions'
import { requestDrivers } from './drivers/actions'

export const BuildStore = ({ children }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(requestTeams())
		dispatch(requestStandings())
		dispatch(requestRacesBySeason())
		dispatch(requestLastRace())
		dispatch(requestDrivers())
	}, [])

	return children
}
