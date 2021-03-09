const apiKey = 'UInUb6GD9aeeP3djuksso0XBBVPUxPAs'

const API = ({keyword = 'panda'} = {}) => {
	const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=50&offset=0&rating=g&lang=en`
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
	const apiById = `https://api.giphy.com/v1/gifs/${id}?api_key=UInUb6GD9aeeP3djuksso0XBBVPUxPAs`
		return fetch(apiById)
		.then((result) => result.json())
		.then(response => {
			const {data} = response
			const {images, id} = data
			const url = images.downsized_medium.url
			return {url, id}
		})
}

export {API, gifsById}