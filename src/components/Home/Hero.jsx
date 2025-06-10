import React from "react";
import { speaker } from "../../assets";
import CTABtn from "./CTABtn";
import CompanyLogoRow from "./CompanyLogoRow";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="lg:hidden flex flex-col items-start sm:items-center px-4 py-4 sm:px-12">
        <h1 className="leading-[3.5rem] sm:mb-4 sm:text-center sm:text-7xl text-5xl font-bold">
          Navigating the <br /> digital landscape <br /> for success
        </h1>
        <img
          src={speaker}
          alt="illustration"
          className="object-contain w-max h-max"
        />
        <div className="sm:max-w-md">
          <p className="text-lg sm:text-xl sm:text-center">
            Our digital marketing agency helps business grow and succeed online
            through a range of services including SEO, PPC, social media
            marketing and content creation.
          </p>
          <CTABtn></CTABtn>
        </div>
      </div>
      <div className="hidden lg:flex flex-row items-center justify-between px-4 py-4 sm:px-12 xl:w-full">
        <div className="flex flex-col items-start">
          <h1 className="leading-[3.5rem] sm:mb-4 text-5xl xl:text-8xl font-bold text-primary-color">
            Navigating the <br /> digital landscape <br /> for success
          </h1>

          <div className="sm:max-w-md">
            <p className="text-lg sm:text-xl lg:text-base xl:text-2xl">
              Our digital marketing agency helps business grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing and content creation.
            </p>
            <CTABtn></CTABtn>
          </div>
        </div>

        <div>
          <img 
            src={speaker}
            alt="illustration"
            className="object-contain w-max h-max lg:w-[90%] lg:h-[90%]"
          />
        </div>
      </div>
      <CompanyLogoRow/>
    </div>
  );
};

export default Hero;
