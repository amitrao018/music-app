import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import Carousel from './Carousel';
import AlbumCard from './Card'; // Adjust the import path if necessary

function Section({ albums, title }) {
  const [collapsed, setCollapsed] = useState(false);

  console.log("Albums in Section:", albums); // Log albums passed to Section

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <Button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? 'Show All' : 'Collapse'}
        </Button>
      </div>
      {collapsed ? (
        <Carousel albums={albums} />
      ) : (
        <Grid container spacing={2}>
          {albums.map((album) => (
            <Grid item xs={12} sm={6} md={4} key={album.id}>
              <AlbumCard album={album} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Section;



