import getApiDataList from '../getApiDataList'

export default async function getTeamStandings(season) {
	try {
		return await getApiDataList(`rankings/drivers?season=${season}`)
	} catch (error) {
		throw error
	}
}
