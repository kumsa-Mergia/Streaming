import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import thumbnail1 from "../../assets/album/1.jpg";



const NewReleases = () => {
  return (
    <div className="">
      <div className="p-5 flex text-4xl">
        <h1 className="text-gray-500">New Releases</h1>
        <RiArrowRightSLine />
      </div>
      <div className="flex gap-4">
      {/* One */}
      <div className="grid">
        <img src={thumbnail1} className="h-[140px] w-full object-cover" />
        <div class="text-center">
          <p className="text-xl">Memhiru</p>
          <p className="text-l">Bereket Tesfaye</p>
        </div>
      </div>
      </div>

    </div>
  )
}

export default NewReleases