import React, { useState, useEffect } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import thumbnail1 from "../../assets/album/1.jpg";

const PopularAlbum = () => {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/albums');
        if (!response.ok) throw new Error('Failed to fetch albums');
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div>
      <div className="p-5 flex text-4xl">
        <h1 className="text-gray-500">Popular Albums</h1>
        <RiArrowRightSLine />
      </div>
      <div className="flex gap-4">
        {error && <div className="text-red-500">{error}</div>}
        {albums.map((album, index) => (
          <div key={index} className="grid">
            <img
              src={album.thumbnail || thumbnail1}
              className="h-[140px] w-full object-cover"
              alt={album.title}
            />
            <div className="text-center">
              <p className="text-xl">{album.title}</p>
              <p className="text-l">{album.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularAlbum;
