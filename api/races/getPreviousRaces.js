import getApiDataList from '../getApiDataList'

export default async function getPreviousRaces(season) {
	try {
		return await getApiDataList(`races?last=30&season=${season}&type=race`)
	} catch (error) {
		throw error
	}
}
