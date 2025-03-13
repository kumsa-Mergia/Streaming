import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import thumbnail1 from "../../assets/album/1.jpg";



  return (
    <div>
      <div className="p-5 flex text-4xl">
        <h1 className="text-gray-500">Popular Albums</h1>
        <RiArrowRightSLine />
      </div>
      <div className="flex gap-4">
        <div className="text-red-500"></div>
        <div className="grid">
          <img src={thumbnail1} className="h-[140px] w-full object-cover" alt="Album Thumbnail" />
          <div className="text-center">
            <p className="text-xl">title</p>
            <p className="text-l">Artist</p>
          </div>
        </div>
      </div>
      <div>
        
      </div>


    </div>
  );
};

export default PopularAlbum;