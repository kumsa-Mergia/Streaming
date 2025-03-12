import React from "react";
import { MdOutlineMusicNote } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { GrMicrophone } from "react-icons/gr";
import { MdOutlineNewReleases } from "react-icons/md";
import { MdOutlineAlbum } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/img/icon.jpg";
import photo1 from "../../assets/album/1.jpg";

const Sidebar = () => {
  return (
    <div className="w-64  p-4 top-0 left-0 h-full">
      <div className="grid">
        <div className="flex pl-2 py-3">
          <img src={logo} className="h-20 w-20 rounded-full" />
          <h1 className="text-3xl text-green-700 pl-3">Music Hub</h1>
        </div>
        <div>
          <CiSearch />
          <input
            type="text"
            placeholder="Search..."
            class="w-full px-4 py-2 border rounded-md text-2l"
          />
        </div>
      </div>

      <div className="grid text-1xl">
        <div className="py-3 flex gap-4">
          <MdOutlineAlbum />
          <p>Popular Albums</p>
        </div>

        <div className="py-1 flex gap-4">
          <FaArrowTrendUp />
          <p>Popular Tracks</p>
        </div>

        <div className="py-3 flex gap-4">
          <MdOutlineNewReleases />
          <p>New Releases</p>
        </div>
      </div>

      <hr />

      <div className="py-6 flex gap-2">
        <button className="bg-green-700 flex items-center gap-2 rounded-md border-2 p-2 px-4 text-white">
          Login
        </button>
        <button className="hover:bg-green-700 hover:text-white flex justify-center items-center rounded-md p-2 font-bold">
          Register
        </button>
      </div>

      {/* YOUR MUSIC */}
      <div class="">
        <h3 class="text-lg font-semibold mb-2">YOUR MUSIC</h3>
        <div className="py-3 flex gap-4">
          <MdOutlineMusicNote />
          <p>Songs</p>
        </div>
        <div className="py-3 flex gap-4">
          <MdOutlineAlbum />
          <p>Albums</p>
        </div>
        <div className="py-3 flex gap-4">
          <GrMicrophone />
          <p>Artists</p>
        </div>
        <div className="py-3 flex gap-4">
          <VscHistory />
          <p>History</p>
        </div>
      </div>
      <hr />
      <div className="flex py-6 justify-between">
        <h1>PLAYLIST</h1>
        <MdOutlinePlaylistAdd className="text-4xl" />
      </div>

      <div className="flex gap-6 justify-end py-9">
        <div>
          <img src={photo1} className="h-8 w-8" />
        </div>
        <div className="grid">
          <p className="text-black text-sm">Esu Sew Kebere</p>
          <p className="text-gray-500 text-sm">Bereket Tesfaye</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
