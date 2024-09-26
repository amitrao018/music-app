import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";
import styles from "./Card.module.css"; // Ensure this CSS file exists

function AlbumCard({ album }) {
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        image={album.image || "https://via.placeholder.com/150"}
        alt={album.title}
        className={styles.media}
      />
      <CardContent>
        <Typography variant="h6" component="div" className={styles.title}>
          {album.title}
        </Typography>
        <Chip label={`${album.likes} Likes`} className={styles.chip} /> {/* Changed to Likes */}
      </CardContent>
    </Card>
  );
}

export default AlbumCard;


