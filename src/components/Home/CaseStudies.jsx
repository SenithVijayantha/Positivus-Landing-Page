import React from "react";
import { blackGreenArrow } from "../../assets";

const text = [
  `For a local restaurant, we
implemented a targeted PPC
campaign that resulted in a 50%
increase in website traffic and a
increase in sales.`,
  `For a B2B software company, we
developed an SEO strategu that
resulted in a first page ranking
for key keywords and a 200%
increase in organic traffic.`,
  `For a national retail chain, we
created a social media
marketing campaign that
increased followers by 25% and
generated a increase in
online sales.`,
];

const CaseStudies = () => {
  return (
    <div className="flex flex-col items-center mt-32 px-4 py-4 sm:px-12">
      <div className="flex flex-col items-center gap-12 sm:max-w-md mb-8 ">
        <h1 className="text-4xl bg-secondary-color px-2 rounded-lg font-medium">
          Case Studies
        </h1>
        <p className="text-lg text-center sm:text-xl lg:text-base">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      {/* Carousel wrapper for horizontal scroll only on cards */}
      <div className="w-full overflow-x-auto scroll-smooth pb-4 hide-scrollbar px-4">
        <div className="flex gap-8 w-max mx-auto">
          <Card text={text[0]} />
          <Card text={text[1]} />
          <Card text={text[2]} />
        </div>
      </div>
    </div>
  );  
};

const Card = ({ text }) => {
  return (
    <div className={`bg-primary-color text-custom-white-color text-md max-w-80 p-6 rounded-3xl shrink-0`}>
      <div>
        <p className="">{text}</p>
      </div>
      <button className="flex items-center gap-2 mt-4 focus:outline-none focus:ring-2 focus:ring-secondary-color rounded px-3 py-2" type="button">
        <span className="text-secondary-color">Learn More</span>
        <img src={blackGreenArrow} alt="Arrow icon" />
      </button>
    </div>
  );
};

export default CaseStudies;
