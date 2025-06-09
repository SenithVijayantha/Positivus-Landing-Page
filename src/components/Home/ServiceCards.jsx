import React from 'react'

const ServiceCards = ({image, icon, firstString, secondString, textBgColor, bgColor}) => {
  return (
    <div className={`flex flex-col sm:max-w-md h-full py-8 px-8 gap-8 rounded-3xl border-primary-color border-b-8 border-t-2 border-x-2 bg-${bgColor}`}>
        <div>
            <span className={`font-semibold text-2xl ${textBgColor} rounded-lg px-2 py-1`}>{firstString}</span>
            <br />
            <span className={`font-semibold text-2xl ${textBgColor} rounded-lg px-2 py-1`}>{secondString}</span>
        </div>
        <div className="flex items-end justify-between gap-8">
            <img src={icon} alt="icon" className="w-12 h-12" />
            <img src={image} alt="service" className=" w-40 h-auto object-contain rounded-3xl" />
            
        </div>
        
    </div>
  )
}

export default ServiceCards