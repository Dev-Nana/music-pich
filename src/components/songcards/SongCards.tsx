import React from "react";

interface SongProps {
  song: {
    id: string;
    title: string;
    artist: { name: string };
    album: { cover: string };
  };
}

export const SongCards: React.FC<SongProps> = ({ song }) => {
  return (
    <div>
      <img src={song.album.cover} alt={song.title} />
      <div>
        <h3>{song.title}</h3>
        <p>{song.artist.name}</p>
      </div>
    </div>
  );
};
