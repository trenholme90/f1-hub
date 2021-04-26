import { useEffect, useState } from 'react'
import getApiDataList from '../../api/getApiDataList'

export default function Teams() {
	const [teams, setTeams] = useState([])

	useEffect(() => {
		const init = async () => {
			const data = await getApiDataList('teams')
			setTeams(data)
		}
		init()
		console.log(teams)
	}, [])
	return (
		<div>
			<h1>F1 Teams</h1>
			{teams.length > 0 ? (
				teams.map((team, index) => <h5 key={index}>{team.name}</h5>)
			) : (
				<h5>Loading...</h5>
			)}
		</div>
	)
}
