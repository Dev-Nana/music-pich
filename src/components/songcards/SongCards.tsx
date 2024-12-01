import React from "react";
import { TbDownload } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { FaEllipsis } from "react-icons/fa6";
import { BsPlayCircle } from "react-icons/bs";

interface SongProps {
  song: {
    id: string;
    name: string; // Alterado de title para name
    artists: { name: string }[]; // Alterado para um array de artistas
    album: { images: { url: string }[] }; // Alterado para um array de imagens
  };
}

export const SongCards: React.FC<SongProps> = ({ song }) => {
  return (
    <div className="flex flex-col xs:w-[10.5rem] sm:w-[13.5rem] w-[12rem] xs:h-[16rem] sm:h-[19rem] h-[18rem] rounded-lg bg-radial-gray overflow-hidden">
      <img src={song.album.images[0]?.url} alt={song.name} className="h-[70%] object-cover object-center" />
      <div className="px-3 flex flex-col h-[36%] xs:h-[40%] justify-evenly">
        <div className="flex flex-col justify-evenly h-[50%]">
          <h3 className="xs:text-xs text-sm font-medium text-white">{song.name}</h3>
          <p className="xs:text-xs text-sm text-gray-400 line-clamp-2">{song.artists.map(artist => artist.name).join(", ")}</p>
        </div>
        <div className="flex flex-row border-t pt-2 xs:py-2 border-gray-700 justify-between w-full">
          <div className="flex justify-between flex-row w-[36%] xs:w-[50%] items-center">
            <TbDownload className="text-[1.1rem] text-gray-400 cursor-pointer" />
            <FaRegHeart className="text-[1rem] text-gray-400 cursor-pointer" />
            <FaEllipsis className="text-[1rem] text-gray-400 cursor-pointer" />
          </div>
          <BsPlayCircle className="text-[1.6rem] text-purple-150 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};