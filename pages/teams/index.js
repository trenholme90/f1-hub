//import { useEffect } from 'react'
import { useSelector } from 'react-redux'
//import getApiDataList from '../../api/getApiDataList'
//import { requestTeams } from './state/actions'

export default function Teams() {
	const teams = useSelector((state) => state.requestTeams.teams)
	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(requestTeams())
	// }, [])
	return (
		<div>
			<h1>F1 Teams</h1>
			{teams ? (
				teams.map((team, index) => <h5 key={index}>{team.name}</h5>)
			) : (
				<h5>Loading...</h5>
			)}
		</div>
	)
}
