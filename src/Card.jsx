import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";
import styles from "./Card.module.css"; // Create this CSS file for additional styles

function AlbumCard({ album }) {
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        image={album.image || "https://via.placeholder.com/150"} // Use a placeholder image if none is provided
        alt={album.title}
        className={styles.media}
      />
      <CardContent>
        <Typography variant="h6" component="div" className={styles.title}>
          {album.title}
        </Typography>
        <Chip label={`${album.followCount} follows`} className={styles.chip} />
      </CardContent>
    </Card>
  );
}

export default AlbumCard;
