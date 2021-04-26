import api from './index'

export default async function getApiDataList(url) {
	try {
		const req = await api.get(url)
		return await req.data.response
	} catch (error) {
		throw error
	}
}
