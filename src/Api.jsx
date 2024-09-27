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

// Fetch new albums data
export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch new albums: " + error.message);
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
