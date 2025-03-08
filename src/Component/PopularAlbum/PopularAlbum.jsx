import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import thumbnail1 from "../../assets/album/1.jpg";
import thumbnail2 from "../../assets/album/2.jpg";
import thumbnail3 from "../../assets/album/3.jpg";


const PopularAlbum = () => {
  return (
    <div className="">
      <div className="p-5 flex text-4xl">
        <h1 className="text-gray-500">Popular Albums</h1>
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
      {/* Two */}
      <div className="grid">
        <img src={thumbnail2} className="h-[140px] w-full object-cover" />
        <div class="text-center">
          <p className="text-xl">Memhiru</p>
          <p className="text-l">Bereket Tesfaye</p>
        </div>
      </div>
            {/* Three */}
            <div className="grid">
        <img src={thumbnail3} className="h-[140px] w-full object-cover" />
        <div class="text-center">
          <p className="text-xl">Memhiru</p>
          <p className="text-l">Bereket Tesfaye</p>
        </div>
      </div>
      </div>

    </div>
  );
};

export default PopularAlbum;
