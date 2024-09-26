import React, { useState, useEffect } from "react";
import SongCard from "./Card"; // Renaming AlbumCard to SongCard for clarity
import Carousel from "./Carousel"; // Import Carousel for displaying albums
import { fetchSongs, fetchTopAlbums, fetchNewAlbums } from "./Api"; // Ensure correct fetch functions from Api.js
import styles from "./Section.module.css"; // Import your CSS Module for styling

function Section() {
  const [topAlbums, setTopAlbums] = useState([]); // State for storing top albums data
  const [newAlbums, setNewAlbums] = useState([]); // State for storing new albums data
  const [songs, setSongs] = useState([]); // State for storing songs data
  const [loadingTopAlbums, setLoadingTopAlbums] = useState(true); // State for loading top albums
  const [loadingNewAlbums, setLoadingNewAlbums] = useState(true); // State for loading new albums
  const [loadingSongs, setLoadingSongs] = useState(true); // State for loading songs
  const [error, setError] = useState(null); // State for error handling
  const [showAllTop, setShowAllTop] = useState(false); // State for showing all top albums
  const [showAllNew, setShowAllNew] = useState(false); // State for showing all new albums
  const [showAllSongs, setShowAllSongs] = useState(false); // State for showing all songs

  // Fetch top albums data from API when the component mounts
  useEffect(() => {
    const getTopAlbums = async () => {
      try {
        const data = await fetchTopAlbums();
        setTopAlbums(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingTopAlbums(false);
      }
    };

    getTopAlbums();
  }, []);

  // Fetch new albums data from API when the component mounts
  useEffect(() => {
    const getNewAlbums = async () => {
      try {
        const data = await fetchNewAlbums();
        setNewAlbums(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingNewAlbums(false);
      }
    };

    getNewAlbums();
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
  if (loadingTopAlbums || loadingNewAlbums || loadingSongs) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.sectionContainer}>
      {/* Top Albums Section */}
      <div className={styles.header}>
        <h2>Top Albums</h2>
        <button onClick={() => setShowAllTop((prev) => !prev)}>
          {showAllTop ? "Show Less" : "Show All"}
        </button>
      </div>
      {showAllTop ? (
        <div className={styles.albumGrid}>
          {topAlbums.map((album) => ( // Show all top albums
            <SongCard key={album.id} album={album} />
          ))}
        </div>
      ) : (
        <Carousel albums={topAlbums} /> // Use Carousel for limited view
      )}

      {/* New Albums Section */}
      <div className={styles.header}>
        <h2>New Albums</h2>
        <button onClick={() => setShowAllNew((prev) => !prev)}>
          {showAllNew ? "Show Less" : "Show All"}
        </button>
      </div>
      {showAllNew ? (
        <div className={styles.albumGrid}>
          {newAlbums.map((album) => ( // Show all new albums
            <SongCard key={album.id} album={album} />
          ))}
        </div>
      ) : (
        <Carousel albums={newAlbums} /> // Use Carousel for limited view
      )}

      {/* Songs Section */}
      <div className={styles.header}>
        <h2>Songs</h2>
        <button onClick={() => setShowAllSongs((prev) => !prev)}>
          {showAllSongs ? "Show Less" : "Show All"}
        </button>
      </div>
      {showAllSongs ? (
        <div className={styles.albumGrid}>
          {songs.map((song) => ( // Show all songs
            <SongCard key={song.id} album={song} />
          ))}
        </div>
      ) : (
        <Carousel albums={songs} /> // Use Carousel for limited view
      )}
    </div>
  );
}

export default Section;












