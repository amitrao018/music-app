import axios from "axios";

// Fetch songs data
export const fetchSongs = async () => {
  try {
    const response = await axios.get("https://qtify-backend-labs.crio.do/songs");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch songs: " + error.message);
  }
};

// Fetch genres data (if needed in the future)
export const fetchGenres = async () => {
  try {
    const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch genres: " + error.message);
  }
};

// Fetch top albums data
export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch top albums: " + error.message);
  }
};
