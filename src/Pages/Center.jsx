import React from "react";
import PopularAlbum from "../Component/PopularAlbum/PopularAlbum";
import PopularTracks from "../Component/PopularTracks/PopularTracks";
import NewReleases from "../Component/NewReleases/NewReleases";

const Center = () => {
  return (
    <div className="w-full p-4 overflow-y-auto h-full ml-auto mr-auto">
      

      <PopularAlbum />
      <PopularTracks />
      <NewReleases />
    </div>
  );
};

export default Center;
