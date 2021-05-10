import getApiDataList from '../getApiDataList'

export default async function getDriverById(id) {
	try {
		const driver = await getApiDataList(`drivers?id=${id}`)
		return driver[0]
	} catch (error) {
		throw error
	}
}
