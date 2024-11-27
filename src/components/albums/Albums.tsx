import axios from "axios";
import React, { useState, useEffect } from "react";
import { Search, Select, SongCards } from "../../components";

interface Song {
  id: string;
  title: string;
  artist: { name: string };
  album: { cover: string };
}

export const Albuns: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [songs, setSongs] = useState<Song[]>([]);
  const [error, setError] = useState<string | null>(null);

  const Limite = 15;

  useEffect(() => {
    const apresentacao = async () => {
      try {
        const response = await axios.get(`/api/search?q=imaginedra&limit=15`);
        const limitedSongs = response.data.data.slice(0, Limite);
        setSongs(limitedSongs);
      } catch (err) {
        setError("Erro ao carregar músicas");
        console.error(err);
      }
    };
    apresentacao();
  }, []);

  const buscar = async () => {
    try {
      setError(null);
      const response = await axios.get(`/api/search?q=${query}`);
      const limitedSongs = response.data.data.slice(0, Limite);
      setSongs(limitedSongs);
    } catch (err) {
      setError("Erro ao buscar músicas");
      console.error(err);
    }
  };

  const controle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    buscar();
  };

  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-row lg:justify-between justify-center sm:p-0 px-8">
        <Search query={query} setQuery={setQuery} handleSearch={controle} />
        <Select />
      </div>
      <div className="py-5 relative flex items-center">
        {error && (
          <p className="flex absolute text-sm font-medium text-white">
            {error}
          </p>
        )}
      </div>
      <div className="flex flex-1"></div>
    </div>
  );
};
