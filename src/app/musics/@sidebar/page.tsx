import { Home } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <aside className=" w-64 bg-gray-900 text-white flex flex-col justify-between p-4 min-h-screen">
      <section className="">
        <h2 className=" text-xl font-bold">MENU</h2>
        <nav className=" mt-4">
          <ul className="">
            <li className=" flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
              <Home size={20} />
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
};

export default Sidebar;
