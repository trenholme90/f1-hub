import getApiDataList from '../getApiDataList'

export default async function getNextRaces(season) {
	try {
		return await getApiDataList(`races?next=30&season=${season}&type=race`)
	} catch (error) {
		throw error
	}
}
