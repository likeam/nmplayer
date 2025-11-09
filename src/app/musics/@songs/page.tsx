import { time } from "console";
import { Clock, Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const SongsList = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is Currently Loading.");
    }, 2000)
  );

  const songs = [
    { id: 1, title: "Song One", time: "3:45", artist: "Artist A" },
    { id: 2, title: "Song Two", time: "4:20", artist: "Artist B" },
    { id: 3, title: "Song Three", time: "2:58", artist: "Artist C" },
  ];
  return (
    <div className=" w-[90%] mx-auto px-4 bg-gray-800">
      <h2 className=" text-xl text-white mt-8 font-bold mb-6 ">
        Songs Collection
      </h2>
      <ul className=" space-y-4 mb-8">
        {songs.map((song) => (
          <Link href={`/musics/${song.id}`} key={song.id}>
            <li className="flex items-center gap-3 justify-between hover:bg-gray-700 rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105">
              <div className=" flex items-center gap-5">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700"
                  alt="song"
                  className=" h-16 w-16 bg-gray-700 rounded-md"
                />
                <div className="">
                  <p className=" text-white font-medium">{song.artist}</p>
                  <p className=" text-sm text-gray-400">{song.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-gray-400">
                <div className=" flex items-center gap-1">
                  <Clock size={16} />
                  <span>{song.time}</span>
                </div>
                <Heart
                  size={16}
                  className=" cursor-pointer hover:text-red-500"
                />
                <button className=" text-lg font-bold">:</button>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SongsList;
