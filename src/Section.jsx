import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "./Card"; // Import the AlbumCard component
import styles from "./Section.module.css"; // Create this CSS file for styling
import { Button, Typography } from "@mui/material"; // Material UI components

function Section() {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
        setAlbums(response.data); // Assuming data is an array of album objects
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <Typography variant="h5">Top Albums</Typography>
        <Button variant="outlined" onClick={toggleCollapse}>
          {collapsed ? "Show All" : "Collapse"}
        </Button>
      </div>
      {!collapsed && (
        <div className={styles.grid}>
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
