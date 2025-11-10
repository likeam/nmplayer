import React from "react";

const Song = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <div className=" text-gray-600 bg-gray-800 text-2xl">Song: {id}</div>;
};

export default Song;
