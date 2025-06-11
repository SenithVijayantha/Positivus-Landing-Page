import React from "react";
import { amazon, dribbble, hubspot, netflix, notion, zoom } from "../../assets";

const CompanyLogoRow = () => {
  return (
    <div className="overflow-hidden w-full bg-transparent py-4">
      <div className="flex animate-scroll-x whitespace-nowrap items-center gap-8">
        <img src={amazon} alt="Amazon" className="w-24 object-contain inline-block" />
        <img src={dribbble} alt="Dribbble" className="w-24 object-contain inline-block" />
        <img src={hubspot} alt="Hubspot" className="w-24 object-contain inline-block" />
        <img src={notion} alt="Notion" className="w-24 object-contain inline-block" />
        <img src={netflix} alt="Netflix" className="w-24 object-contain inline-block" />
        <img src={zoom} alt="Zoom" className="w-24 object-contain inline-block" />
        {/* Duplicate for infinite effect */}
        <img src={amazon} alt="Amazon" className="w-24 object-contain inline-block" />
        <img src={dribbble} alt="Dribbble" className="w-24 object-contain inline-block" />
        <img src={hubspot} alt="Hubspot" className="w-24 object-contain inline-block" />
        <img src={notion} alt="Notion" className="w-24 object-contain inline-block" />
        <img src={netflix} alt="Netflix" className="w-24 object-contain inline-block" />
        <img src={zoom} alt="Zoom" className="w-24 object-contain inline-block" />
      </div>
    </div>
  );
};

export default CompanyLogoRow;
