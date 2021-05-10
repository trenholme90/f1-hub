import getApiDataList from '../getApiDataList'

export default async function getDriverStandings(season) {
	try {
		return await getApiDataList(`rankings/drivers?season=${season}`)
	} catch (error) {
		throw error
	}
}
