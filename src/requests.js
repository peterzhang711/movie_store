const API_KEY = "1eeecbc6017ca9ed1a56f504189e7177";


//endpoints
const requests = {
	fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
}

export default requests