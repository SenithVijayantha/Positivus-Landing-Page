import React from "react";
import ServiceCards from "./ServiceCards";
import {
  blackGreenArrow,
  blackWhiteArrow,
  seoIllustration,
  advertising,
  smMarketing,
  emailMarketing,
} from "../../assets";

const Services = () => {
  return (
    <div className="flex flex-col items-center gap-16 mt-32 px-4 py-4 sm:px-12">
      <div className="flex flex-col items-center gap-8 sm:max-w-md">
        <h1 className="text-4xl bg-secondary-color px-2 rounded-lg font-medium">
          Services
        </h1>
        <p className="text-lg text-center sm:text-xl lg:text-base">
          At our digital marketing agency, we offer a range of services to help
          business grow and succeed online. These services include:
        </p>
      </div>
      <div className="flex flex-col gap-8 max-w-sm md:hidden">
        <ServiceCards
          firstString={"Search Engine "}
          secondString={"Optimization"}
          icon={blackGreenArrow}
          image={seoIllustration}
          textBgColor="bg-secondary-color"
          bgColor="light-gray"
        />
        <ServiceCards
          firstString={"Pay-per-click"}
          secondString={"advertising"}
          icon={blackGreenArrow}
          image={advertising}
          textBgColor="bg-custom-white-color"
          bgColor="secondary-color"
        />
        <ServiceCards
          firstString={"Social Media"}
          secondString={"Marketing"}
          icon={blackWhiteArrow}
          image={smMarketing}
          textBgColor="bg-custom-white-color"
          bgColor="primary-color"
        />
        <ServiceCards
          firstString={"Email"}
          secondString={"Marketing"}
          icon={blackGreenArrow}
          image={emailMarketing}
          textBgColor="bg-secondary-color"
          bgColor="light-gray"
        />
        <ServiceCards
          firstString={"Content"}
          secondString={"Creation"}
          icon={blackGreenArrow}
          image={seoIllustration}
          textBgColor="bg-custom-white-color"
          bgColor="secondary-color"
        />
        <ServiceCards
          firstString={"Analytics and"}
          secondString={"Tracking"}
          icon={blackWhiteArrow}
          image={advertising}
          textBgColor="bg-custom-white-color"
          bgColor="primary-color"
        />
      </div>

      <div className="md:flex gap-8 w-full hidden">
        <div className="flex flex-col items-center gap-12 w-2/4">
          <ServiceCards
            firstString={"Search Engine "}
            secondString={"Optimization"}
            icon={blackGreenArrow}
            image={seoIllustration}
            textBgColor="bg-secondary-color"
            bgColor="light-gray"
          />
          <ServiceCards
            firstString={"Pay-per-click"}
            secondString={"advertising"}
            icon={blackGreenArrow}
            image={advertising}
            textBgColor="bg-custom-white-color"
            bgColor="secondary-color"
          />
          <ServiceCards
            firstString={"Social Media"}
            secondString={"Marketing"}
            icon={blackWhiteArrow}
            image={smMarketing}
            textBgColor="bg-custom-white-color"
            bgColor="primary-color"
          />
        </div>
        <div className="flex flex-col items-center gap-12 w-2/4">
          <ServiceCards
            firstString={"Email"}
            secondString={"Marketing"}
            icon={blackGreenArrow}
            image={emailMarketing}
            textBgColor="bg-secondary-color"
            bgColor="light-gray"
          />
          <ServiceCards
            firstString={"Content"}
            secondString={"Creation"}
            icon={blackGreenArrow}
            image={seoIllustration}
            textBgColor="bg-custom-white-color"
            bgColor="secondary-color"
          />
          <ServiceCards
            firstString={"Analytics and"}
            secondString={"Tracking"}
            icon={blackWhiteArrow}
            image={advertising}
            textBgColor="bg-custom-white-color"
            bgColor="primary-color"
          />
        </div>
      </div>
      <CardMobile></CardMobile>
      <CardDesktop></CardDesktop>
    </div>
  );
};

const CardMobile = () => {
  return (
    <div className="md:hidden border-primary-color border-2 p-8 rounded-3xl max-w-sm">
      <p className="text-3xl font-medium mb-4">Let's make things happen</p>
      <p className="text-lg">
        Contact us today to learn more about how our digital marketing services
        can help your business grow and succeed online
      </p>
      <button className="bg-primary-color text-[#FFFFFF] py-4 sm:text-xl lg:text-base lg:w-2/3 mt-8 w-full rounded-lg">
        Get your proposal
      </button>
    </div>
  );
};

const CardDesktop = () => {
  return (
    <div className="hidden md:flex items-center border-primary-color border-2 p-8 rounded-3xl max-w-sm md:max-w-full ">
      <div className="flex flex-col gap-6  max-w-md">
        <p className="text-3xl font-medium mb-4">Let's make things happen</p>
        <p className="text-lg">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online
        </p>
        <button className="bg-primary-color text-[#FFFFFF] py-4 sm:text-xl lg:text-base lg:w-2/3 mt-8 w-full rounded-lg">
          Get your proposal
        </button>
      </div>
      <div className="flex justify-end max-w-lg">
        <img src={smMarketing} alt="" className="w-[90%] h-auto  object-contain" />
      </div>
    </div>
  );
};

export default Services;
