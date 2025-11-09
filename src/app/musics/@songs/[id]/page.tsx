import React from "react";

const Song = ({ params }: { params: { id: string } }) => {
  return <div className=" text-gray-600 text-2xl">Song: {params.id}</div>;
};

export default Song;
