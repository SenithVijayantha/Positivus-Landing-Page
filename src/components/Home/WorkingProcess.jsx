import React from "react";
import Accordion from "./Accordion";

const WorkingProcess = () => {
  return (
    <div className="flex flex-col mt-32 px-4 py-4 sm:px-12">
      <div className="flex flex-col items-center gap-12 mb-8 ">
        <h1 className="text-4xl bg-secondary-color px-2 rounded-lg font-medium">
          Working Process
        </h1>
        <p className="text-lg text-center sm:text-xl lg:text-base">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <Accordion></Accordion>
      
    </div>
  );
};

export default WorkingProcess;
