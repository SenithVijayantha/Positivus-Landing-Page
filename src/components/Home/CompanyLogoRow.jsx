import React from "react";
import { amazon, dribbble, hubspot, netflix, notion, zoom } from "../../assets";

const CompanyLogoRow = () => {
  return (
    <div className="scroller sm:max-w-sm lg:max-w-5xl mx-auto ">
      <div className="scroller__inner flex flex-wrap justify-center gap-4 sm:gap-8 my-8 lg:justify-between">
        <img src={amazon} alt="" className="w-24 object-contain" />
        <img src={dribbble} alt="" className="w-24 object-contain" />
        <img src={hubspot} alt="" className="w-24 object-contain" />
        <img src={notion} alt="" className="w-24 object-contain" />
        <img src={netflix} alt="" className="w-24 object-contain" />
        <img src={zoom} alt="" className="w-24 object-contain" />
      </div>
    </div>
  );
};

export default CompanyLogoRow;
