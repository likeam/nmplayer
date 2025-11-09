import React, { ReactNode } from "react";

const MusicLayout = ({
  children,
  sidebar,
  songs,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  songs: ReactNode;
}) => {
  return (
    <div className=" flex">
      {sidebar}
      <>{songs}</>
      {children}
    </div>
  );
};

export default MusicLayout;
