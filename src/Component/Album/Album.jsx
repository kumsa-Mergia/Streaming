import React from "react";
import photo1 from "../../assets/album/1.jpg";
import photo7 from "../../assets/singer/1.jpg";
import photo2 from "../../assets/singer/2.jpg";
import photo3 from "../../assets/singer/3.jpg";
import photo4 from "../../assets/singer/4.jpg";
import photo5 from "../../assets/singer/5.jpg";
import photo6 from "../../assets/singer/2.jpg";

const Album = () => {
  return (
    <div className=" p-4 fixed top-0 right-0 h-full">
      {/* ########### */}
      <div className="flex gap-6 py-1 hover:bg-green-700 hover:p-3">
        <div>
          <img src={photo1} className="h-8 w-8" />
        </div>
        <div className="grid">
          <p className="text-black text-sm hover:text-white hover:font-bold">
            Esu Sew Kebere
          </p>
          <p className="text-gray-500 text-sm hover:text-white">
            Bereket Tesfaye
          </p>
        </div>
      </div>
      {/* ########### */}
      <div className="flex gap-6 py-1 hover:bg-green-700 hover:p-3">
        <div>
          <img src={photo2} className="h-8 w-8" />
        </div>
        <div className="grid">
          <p className="text-black text-sm hover:text-white hover:font-bold">
            Serah Yamesegenehal
          </p>
          <p className="text-gray-500 text-sm hover:text-white">
            Tesfaye Gabisco
          </p>
        </div>
      </div>
      {/* ########### */}
      <div className="flex gap-6 py-1 hover:bg-green-700 hover:p-3">
        <div>
          <img src={photo3} className="h-8 w-8" />
        </div>
        <div className="grid">
          <p className="text-black text-sm hover:text-white hover:font-bold">
            Yegirbe
          </p>
          <p className="text-gray-500  text-sm hover:text-white">
            Bereket Tesfaye
          </p>
        </div>
      </div>
      {/* ########### */}
      <div className="flex gap-6 py-1 hover:bg-green-700 hover:p-3">
        <div>
          <img src={photo4} className="h-8 w-8" />
        </div>
        <div className="grid">
          <p className="text-black text-sm hover:text-white hover:font-bold">
            Betarikeh
          </p>
          <p className="text-gray-500 text-sm hover:text-white">Hana Tekle</p>
        </div>
      </div>
      {/* ########### */}
      <div className="flex gap-6 py-1 hover:bg-green-700 hover:p-3">
        <div>
          <img src={photo5} className="h-8 w-8" />
        </div>
        <div className="grid">
          <p className="text-black text-sm hover:text-white hover:font-bold">
            Salamakir Alwetam
          </p>
          <p className="text-gray-500 text-sm hover:text-white">Azeb Hailu</p>
        </div>
      </div>
      {/* ########### */}

      <div className="flex gap-6 py-1 hover:bg-green-700 hover:p-3">
        <div>
          <img src={photo6} className="h-8 w-8" />
        </div>
        <div className="grid">
          <p className="text-black text-sm hover:text-white hover:font-bold">
            Abet Mihretih
          </p>
          <p className="text-gray-500 text-sm hover:text-white">
            Bereket Tesfaye
          </p>
        </div>
      </div>
      {/* ########### */}
      <div className="flex gap-6 py-1 hover:bg-green-700 hover:p-3">
        <div>
          <img src={photo7} className="h-8 w-8" />
        </div>
        <div className="grid">
          <p className="text-black text-sm hover:text-white hover:font-bold">
            Tselotin Yisemal
          </p>
          <p className="text-gray-500 text-sm hover:text-white">Azeb Hailu</p>
        </div>
      </div>
      {/* ########### */}
      <div className="flex gap-6 py-1 hover:bg-green-700 hover:p-3">
        <div>
          <img src={photo2} className="h-8 w-8" />
        </div>
        <div className="grid">
          <p className="text-black text-sm hover:text-white hover:font-bold">
            Aba Ewedihalew
          </p>
          <p className="text-gray-500 text-sm hover:text-white">
            Derekat Tesfaye
          </p>
        </div>
      </div>
      {/* ########### */}
      <div className="flex gap-6 py-1 hover:bg-green-700 hover:p-3">
        <div>
          <img src={photo4} className="h-8 w-8" />
        </div>
        <div className="grid">
          <p className="text-black text-sm hover:text-white hover:font-bold">
            Kebur Kebur
          </p>
          <p className="text-gray-500 text-sm hover:text-white">Addisu Worku</p>
        </div>
      </div>
    </div>
  );
};

export default Album;
