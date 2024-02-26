import axios from "axios";

const API_KEY = "82d77fdc";
const BASE_URL = "http://www.omdbapi.com/";

const movieService = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

export const searchMovies = async (query) => {
  try {
    const response = await movieService.get("", { params: { s: query } });
    return response.data.Search || [];
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return [];
  }
};

export default movieService;
