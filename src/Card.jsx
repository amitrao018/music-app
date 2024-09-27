import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";
import styles from "./Card.module.css"; // CSS for additional styles

function SongCard({ album }) {
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        image={album.image || "https://via.placeholder.com/150"} // Placeholder image if none is provided
        alt={album.title}
        className={styles.media}
      />
      <CardContent>
        <Typography variant="h6" component="div" className={styles.title}>
          {album.title}
        </Typography>
        <Chip
          label={`${album.followCount || album.likes} ${album.followCount ? 'follows' : 'likes'}`} // Adjust based on the album type
          className={styles.chip}
        />
      </CardContent>
    </Card>
  );
}

export default SongCard;




