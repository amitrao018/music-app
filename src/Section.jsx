import React, { useState, useEffect } from "react";
import SongCard from "./Card"; // Rename for clarity: AlbumCard -> SongCard
import Carousel from "./Carousel"; // Import Carousel
import { fetchSongs, fetchTopAlbums } from "./Api"; // Use the correct fetch functions from Api.js
import styles from "./Section.module.css"; // Import your CSS Module for styling

function Section() {
  const [albums, setAlbums] = useState([]); // State for storing albums data
  const [songs, setSongs] = useState([]); // State for storing songs data
  const [loadingAlbums, setLoadingAlbums] = useState(true); // State for loading albums
  const [loadingSongs, setLoadingSongs] = useState(true); // State for loading songs
  const [error, setError] = useState(null); // State for error handling
  const [collapsedAlbums, setCollapsedAlbums] = useState(false); // State for collapsed albums view
  const [collapsedSongs, setCollapsedSongs] = useState(false); // State for collapsed songs view

  // Fetch albums data from API when the component mounts
  useEffect(() => {
    const getAlbums = async () => {
      try {
        const data = await fetchTopAlbums();
        setAlbums(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingAlbums(false);
      }
    };

    getAlbums();
  }, []);

  // Fetch songs data from API when the component mounts
  useEffect(() => {
    const getSongs = async () => {
      try {
        const data = await fetchSongs();
        setSongs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingSongs(false);
      }
    };

    getSongs();
  }, []);

  // Handle loading and error states
  if (loadingAlbums || loadingSongs) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.sectionContainer}>
      {/* Albums Section */}
      <div className={styles.header}>
        <h2>Top Albums</h2>
        <button onClick={() => setCollapsedAlbums((prev) => !prev)}>
          {collapsedAlbums ? "Show All" : "Collapse"}
        </button>
      </div>
      {collapsedAlbums ? (
        <Carousel albums={albums} /> // Show Carousel when collapsed
      ) : (
        <div className={styles.albumGrid}>
          {albums.map((album) => (
            <SongCard key={album.id} album={album} />
          ))}
        </div>
      )}

      {/* Songs Section */}
      <div className={styles.header}>
        <h2>Songs</h2>
        <button onClick={() => setCollapsedSongs((prev) => !prev)}>
          {collapsedSongs ? "Show All" : "Collapse"}
        </button>
      </div>
      {collapsedSongs ? (
        <Carousel albums={songs} /> // Show Carousel when collapsed
      ) : (
        <div className={styles.albumGrid}>
          {songs.map((song) => (
            <SongCard key={song.id} album={song} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;






