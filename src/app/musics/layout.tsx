import React, { ReactNode } from "react";

const MusicLayout = ({
  children,
  sidebar,
  songs,
  player,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  songs: ReactNode;
  player: ReactNode;
}) => {
  return (
    <div className=" flex h-screen bg-gray-800 text-white ">
      {sidebar}
      <>
        {songs}
        {player}
      </>
      {children}
    </div>
  );
};

export default MusicLayout;
