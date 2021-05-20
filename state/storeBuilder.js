import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'

import { requestTeams } from './teams/actions'
import { requestStandings } from './standings/actions'
import { requestRacesBySeason } from './races/actions'
import { requestLastRace } from './races/actions'
import { requestDrivers } from './drivers/actions'

import CircuitLoader from '../components/circuit-loader'

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

	return !loading ? (
		children
	) : (
		<div className='page-loader'>
			<Image
				src='/formula-1-logo.png'
				alt='formula 1 logo'
				width=''
				height=''
				priority={true}
				className='logo'
			/>
			<div className={'circuit-loader-container'}>
				<CircuitLoader isRed={false}></CircuitLoader>
				<CircuitLoader isRed={true}></CircuitLoader>
			</div>
		</div>
	)
}
