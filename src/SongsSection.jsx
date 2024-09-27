import React, { useState, useEffect } from "react";
import Section from "./Section"; // Reusable Section component
import { fetchGenres } from "./Api"; // Fetch the genres data from the API

function SongsSection() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const genreData = await fetchGenres();
      setGenres(["All", ...genreData]); // Include "All" as a default option
    };

    getGenres();
  }, []);

  return (
    <Section
      isSongSection={true}
      title="Songs"
      genres={genres}
      selectedGenre={selectedGenre}
      onGenreChange={(genre) => setSelectedGenre(genre)}
    />
  );
}

export default SongsSection;
