import React, { useEffect, useState } from 'react';
import Section from './Section';
import Navbar from './Navbar';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [searchData, setSearchData] = useState([]); // Example state for search data

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const topResponse = await fetch("https://qtify-backend-labs.crio.do/albums/top");
        const topData = await topResponse.json();
        console.log("Top Albums:", topData);
        setTopAlbums(topData);

        const newResponse = await fetch("https://qtify-backend-labs.crio.do/albums/new");
        const newData = await newResponse.json();
        console.log("New Albums:", newData);
        setNewAlbums(newData);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  // Mock data for searchData - replace this with actual data as needed
  useEffect(() => {
    const mockSearchData = topAlbums.concat(newAlbums).map(album => ({
      title: album.title,
      slug: album.slug, // Assuming you have a slug property
      songs: album.songs || [], // Assuming you have songs property
    }));

    setSearchData(mockSearchData);
  }, [topAlbums, newAlbums]); // Update search data whenever topAlbums or newAlbums change

  return (
    <div>
      <Navbar searchData={searchData} /> {/* Pass searchData to Navbar */}
      <Section albums={topAlbums} title="Top Albums" />
      <Section albums={newAlbums} title="New Albums" />
    </div>
  );
}

export default App;


