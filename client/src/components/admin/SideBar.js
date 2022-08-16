import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="">
      <div class="w-60 h-full shadow-md bg-white pt-28 px-1 absolute">
        <ul class="relative">
          <li class="relative">
            <Link to='/admin'
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Event list
            </Link>
          </li>
          <li class="relative">
            <Link to='/admin/add-events'
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Add event
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
