import { Clock, Home, TrendingUp } from "lucide-react";
import { resolve } from "path";
import React from "react";

const Sidebar = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is Currently Loading.");
    }, 1000)
  );
  return (
    <aside className=" w-64 bg-gray-900 text-white flex flex-col justify-between p-4 min-h-screen">
      <section className="">
        <h2 className=" text-xl font-bold">MENU</h2>
        <nav className=" mt-4">
          <ul className="">
            <li className=" flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
              <Home size={20} /> Discover
            </li>
            <li className=" flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
              <TrendingUp size={20} /> Trending
            </li>
            <li className=" flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
              <Clock size={20} /> Recent
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h2 className=" mt-6 text-xl font-bold">FAVORITE</h2>
        <ul className=" mt-2 mb-[2rem]">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex mt-[2rem] gap-4">
              <img
                src="https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=876"
                alt="muic "
                className=" h-15 w-15 bg-gray-700 rounded-md"
              />
              <p className=" text-white">Random</p>
              <p className=" text-sm text-gray-400">Preson</p>
            </div>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
