import getApiDataList from '../getApiDataList'

export default async function getTeams() {
	try {
		return await getApiDataList('teams')
	} catch (error) {
		throw error
	}
}
