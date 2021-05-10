import getApiDataList from '../getApiDataList'

export default async function getLastRaces(season) {
	try {
		return await getApiDataList(`races?last=1&season=${season}&type=race`)
	} catch (error) {
		throw error
	}
}
