import axios from 'axios'

const api = axios.create({
	baseURL: 'https://api-formula-1.p.rapidapi.com/',
	headers: {
		'Content-Type': 'application/json',
		'x-rapidapi-key': 'be84699696mshf9cb7827c2ffe4bp1f3796jsnc65479944b8d',
	},
})

export default api
