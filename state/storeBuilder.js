import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'

import { requestTeams } from './teams/actions'
import { requestStandings } from './standings/actions'
import { requestRacesBySeason } from './races/actions'
import { requestLastRace } from './races/actions'
import { requestDrivers } from './drivers/actions'

export const BuildStore = ({ children }) => {
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(true)

	useEffect(async () => {
		await Promise.all([
			dispatch(requestTeams()),
			dispatch(requestStandings()),
			dispatch(requestRacesBySeason()),
			dispatch(requestLastRace()),
			dispatch(requestDrivers()),
		])
		setLoading(false)
	}, [])

	return !loading ? children : <h5>Loading</h5>
}
