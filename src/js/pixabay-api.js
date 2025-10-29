import axios from "axios";

const API_KEY = "52975697-1a0d4c1008252be130962ab4a";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
    }

