import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import Carousel from './Carousel'; 
import Section from './Section'; 
import styles from './SongsSection.module.css'; // Import your CSS for styling

function SongsSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All'); 

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("https://qtify-backend-labs.crio.do/songs");
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await fetch("https://qtify-backend-labs.crio.do/genres");
        const data = await response.json();
        setGenres(data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchSongs();
    fetchGenres();
  }, []);

  const handleChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs = selectedGenre === 'All' 
    ? songs 
    : songs.filter(song => song.genre === selectedGenre);

  return (
    <Section title="Songs"> 
      <h2 className={styles.heading}>Songs</h2> {/* Apply the style here */}
      <Tabs value={selectedGenre} onChange={handleChange} aria-label="song genres" className={styles.tabs}>
        <Tab label="All" value="All" />
        {genres.map((genre) => (
          <Tab label={genre.name} value={genre.name} key={genre.id} />
        ))}
      </Tabs>
      <Carousel albums={filteredSongs} /> 
    </Section>
  );
}

export default SongsSection;


