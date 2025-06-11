import React, { useState } from "react";

const accordionData = [
  {
    number: "01",
    title: "Consultation",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          laborum facere nihil voluptas eos obcaecati eligendi? Ea est nam
          illum! Maiores nulla laborum eligendi magnam inventore totam debitis
          ducimus error.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          laborum facere nihil voluptas eos obcaecati eligendi? Ea est nam
          illum! Maiores nulla laborum eligendi magnam inventore totam debitis
          ducimus error.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Implementation",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          laborum facere nihil voluptas eos obcaecati eligendi? Ea est nam
          illum! Maiores nulla laborum eligendi magnam inventore totam debitis
          ducimus error.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          laborum facere nihil voluptas eos obcaecati eligendi? Ea est nam
          illum! Maiores nulla laborum eligendi magnam inventore totam debitis
          ducimus error.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Reporting and Communication",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          laborum facere nihil voluptas eos obcaecati eligendi? Ea est nam
          illum! Maiores nulla laborum eligendi magnam inventore totam debitis
          ducimus error.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Continual Improvement",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          laborum facere nihil voluptas eos obcaecati eligendi? Ea est nam
          illum! Maiores nulla laborum eligendi magnam inventore totam debitis
          ducimus error.
        </p>
      </>
    ),
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div id="accordion-color">
      {accordionData.map((item, idx) => (
        <div key={idx} className={`transition-colors ${openIndex === idx ? 'bg-secondary-color' : ''}`}>
          <h2>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 ${idx === 0 ? 'rounded-t-xl' : ''} focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3 ${openIndex === idx ? 'bg-secondary-color' : ''}`}
              aria-expanded={openIndex === idx}
              aria-controls={`accordion-color-body-${idx}`}
              onClick={() => toggleAccordion(idx)}
            >
              <span className="flex items-center gap-2">
                <span className="font-bold mr-2">{item.number}</span>
                {item.title}
              </span>
              <svg data-accordion-icon className={`w-3 h-3 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-color-body-${idx}`}
            className={`${openIndex === idx ? '' : 'hidden'}`}
            aria-labelledby={`accordion-color-heading-${idx}`}
          >
            <div className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${openIndex === idx ? 'bg-secondary-color' : ''}`}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
