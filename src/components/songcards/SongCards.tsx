import React from "react";
import { TbDownload } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { FaEllipsis } from "react-icons/fa6";
import { BsPlayCircle } from "react-icons/bs";

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
    <div className="flex flex-col sm:w-[13.5rem] w-[12rem] sm:h-[19rem] h-[18rem] rounded-lg bg-radial-gray overflow-hidden">
      <img src={song.album.cover} alt={song.title} className="h-[70%] object-cover object-center" />
      <div className="px-3 flex flex-col h-[36%] justify-evenly">

        <div className="flex flex-col justify-evenly h-[50%]">
          <h3 className="text-sm font-medium text-white">{song.title}</h3>
          <p className="text-sm text-gray-400">{song.artist.name}</p>
        </div>

        <div className="flex flex-row border-t pt-2 border-gray-700 justify-between w-full">
          <div className="flex justify-between flex-row w-[36%] items-center">
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
