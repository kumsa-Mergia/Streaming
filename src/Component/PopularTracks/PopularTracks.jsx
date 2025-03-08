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
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  onMouseEnter={() => setHoveredRow(index)} // Set the hovered row index
                  onMouseLeave={() => setHoveredRow(null)} // Reset on mouse leave
                >
                  <td className="px-6 py-4">
                    {hoveredRow === index ? (
                      <FaPlayCircle className="text-xl text-gray-500" /> // Show play icon on hover
                    ) : (
                      index // Show number normally
                    )}
                  </td>
                  <td className="px-6 py-4 flex gap-3">
                    <CiHeart />
                    <img className="h-8 w-8" src={photos[index - 1]} alt="" /> {/* Dynamic photo for each row */}
                    {index === 1
                      ? "Ersu Yilag Enji"
                      : index === 2
                      ? "Esu Sew Kebere"
                      : index === 3
                      ? "Serah Yamesegenehal"
                      : index === 4
                      ? "Yegirbe"
                      : index === 5
                      ? "Betarikeh"
                      : "Salamakir Alwetam"} {/* Title for each row */}
                  </td>
                  <td className="px-6 py-4">
                    {index === 1
                      ? "Azeb Hailu"
                      : index === 2
                      ? "Bereket Tesfaye"
                      : index === 3
                      ? "Tesfaye Gabisso"
                      : index === 4
                      ? "Bereket Tesfaye"
                      : index === 5
                      ? "Hana Tekle"
                      : "Azeb Hailu"} {/* Artist for each row */}
                  </td>
                  <td className="px-6 py-4">
                    {index === 1
                      ? "Yechelal"
                      : index === 2
                      ? "Memihiru"
                      : index === 3
                      ? "Awon Yehonal"
                      : index === 4
                      ? "Memihiru"
                      : index === 5
                      ? "Habte Semay"
                      : "Yechelal"} {/* Album for each row */}
                  </td>
                  <td className="px-6 py-4">
                    {index === 1
                      ? "5:45"
                      : index === 2
                      ? "5:59"
                      : index === 3
                      ? "4:10"
                      : index === 4
                      ? "6:09"
                      : index === 5
                      ? "4:26"
                      : "4:16"} {/* Duration for each row */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PopularTracks;
