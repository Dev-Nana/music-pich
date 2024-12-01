import React, { useEffect, useState } from "react";
import { Search, Select, SongCards, Button } from "../../components";
import { getAccessToken, searchTracks } from "../../utils/spotify";

export const Albums: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [songs, setSongs] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const buscar = async (searchQuery: string) => {
    try {
      setLoading(true);
      const token = await getAccessToken();
      const tracks = await searchTracks(searchQuery, token);
      setSongs(tracks);
      setError(null); // Limpar erros anteriores
    } catch (err) {
      setError("Erro ao buscar músicas");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscar("imaginedr");
  }, []);

  const controle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    buscar(query);
  };

  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-row lg:justify-between justify-center sm:p-0 px-8">
        <Search query={query} setQuery={setQuery} handleSearch={controle} />
        <Select />
      </div>
      <div className="py-5 relative flex items-center">
        {loading && (
          <p className="flex absolute text-sm font-medium text-white">
            Carregando músicas...
          </p>
        )}
        {error && (
          <p className="flex absolute text-sm font-medium text-white">{error}</p>
        )}
      </div>
      <div className="flex w-full gap-y-3 gap-x-2 flex-row flex-wrap justify-center">
        {songs.length > 0 ? (
          songs.map((song) => (
            <SongCards
              key={song.id}
              song={{
                id: song.id,
                name: song.name,
                artists: song.artists.map((artist: any) => ({
                  name: artist.name,
                })),
                album: { images: song.album.images },
              }}
            />
          ))
        ) : (
          !loading && (
            <p className="flex absolute text-sm font-medium text-white">
              Nenhuma música encontrada para a busca atual.
            </p>
          )
        )}
        <Button />
      </div>
    </div>
  );
};
