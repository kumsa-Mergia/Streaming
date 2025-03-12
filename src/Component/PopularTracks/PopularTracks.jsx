import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import photo1 from "../../assets/singer/1.jpg";
import photo2 from "../../assets/singer/2.jpg";
import photo3 from "../../assets/singer/3.jpg";
import photo4 from "../../assets/singer/4.jpg";
import photo5 from "../../assets/singer/5.jpg";
import photo6 from "../../assets/singer/2.jpg"; // Add photo6 for the last row

const PopularTracks = () => {
  const [hoveredRow, setHoveredRow] = useState(null); // state to track hovered row

  // Array of photo sources for each row
  
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

  return (
    <div>
      <div>
        <div className="p-5 flex text-4xl">
          <h1 className="text-4xl text-gray-500">Popular Tracks</h1>
          <RiArrowRightSLine className="text-4xl" />
        </div>
        <div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Artist
                </th>
                <th scope="col" className="px-6 py-3">
                  Album
                </th>
                <th>
                  <IoMdTime />
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                key={1}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                onMouseEnter={() => setHoveredRow(1)} // Set the hovered row index
                onMouseLeave={() => setHoveredRow(null)} // Reset on mouse leave
              >
                <td className="px-6 py-4">
                  {hoveredRow === 1 ? (
                    <FaPlayCircle className="text-xl text-gray-500" /> // Show play icon on hover
                  ) : (
                    1 // Show number normally
                  )}
                </td>
                <td className="px-6 py-4 flex gap-3">
                  <CiHeart />
                  <img className="h-8 w-8" src={photos[0]} alt="" />{" "}
                  {/* Static photo for the row */}
                  "Ersu Yilag Enji" {/* Title for the row */}
                </td>
                <td className="px-6 py-4">
                  "Azeb Hailu" {/* Artist for the row */}
                </td>
                <td className="px-6 py-4">
                  "Yechelal" {/* Album for the row */}
                </td>
                <td className="px-6 py-4">
                  "5:45" {/* Duration for the row */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PopularTracks;
