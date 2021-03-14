const baseUrl = 'https://api.giphy.com/v1/gifs'
const apiKey = 'UInUb6GD9aeeP3djuksso0XBBVPUxPAs'

const API = ({limits = 20, keyword = 'panda', page = 0} = {}) => {
	const apiUrl = `${baseUrl}/search?api_key=${apiKey}&q=${keyword}&limit=${limits}&offset=${page * limits}&rating=g&lang=en`
	return fetch(apiUrl)
		.then(result => result.json())
		.then(response => {
			const {data} = response;
			const gifs = data.map(image => {
				const {title, id, images} = image
				const url = images.downsized_medium.url
				return {url, title, id}
			})
			return gifs
		})
  }

const gifsById = ({id}) => {
	const apiById = `${baseUrl}/${id}?api_key=${apiKey}`
		return fetch(apiById)
		.then((result) => result.json())
		.then(response => {
			const {data} = response
			const {images, id} = data
			const url = images.downsized_medium.url
			return {url, id}
		})
}

const gifTrending = () => {
	const apiByTrending = `${baseUrl}/trending?api_key=${apiKey}&limit=25&rating=g`
		return fetch(apiByTrending)
		.then((result) => result.json())
		.then(response => {
			const {data} = response
			const trending = data.map(trend => {
				const {title} = trend
				return title
			})
			return trending
		})
}

export {API, gifsById, gifTrending}