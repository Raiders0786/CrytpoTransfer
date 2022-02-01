import React from 'react';
import {BsShieldFillCheck} from 'react-icons/bs'
import {BiSearchAlt} from "react-icons/bi"
import {RiHeart2Fill} from "react-icons/ri"

const ServiceCard = ({color,title,icon,desc}) => (
  <div className='flex flex-row justify-start p-3 items-center white-glassmorphism m-2 cursor-pointer hover:shadow-xl'>
    <div className={`flex justify-center w-10 h-10 rounded-full items-center ${color}`}>{icon}</div>
    <div className='flex flex-1 flex-col ml-5 '>
      <h1 className='text-white mt-2 text-lg'>{title}</h1>
      <p className='text-white mt-2 text-sm md:w-9/12'>{desc}</p>
    </div>
  </div>
)

export default function Services() {
  return (
    <div id="services" className='flex w-full flex-col md:flex-row  justify-center items-center gradient-bg-services'>
      <div className='flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
        <div className='flex-1 flex flex-col justify-start items-start'>
          <h1 className='text-white text-2xl sm:text-5xl py-2 text-gradient'>
            Services that we
            <br/>
            Continue to Improve.
          </h1>
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-start items-center'>
        <ServiceCard 
        color="bg-[#2952E3]"
        title="Security Guaranteed"
        icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
        desc="Security is guaranted. We always maintain privacy and mainting the quality of our products."
        />
        <ServiceCard 
        color="bg-[#8945F8]"
        title="Best exchange rates"
        icon={<BiSearchAlt fontSize={21} className='text-white' />}
        desc="Security is guaranted. We always maintain privacy and mainting the quality of our products."
        />
        <ServiceCard 
        color="bg-[#F84550]"
        title="Fastest transactions"
        icon={<RiHeart2Fill fontSize={21} className='text-white' />}
        desc="Security is guaranted. We always maintain privacy and mainting the quality of our products."
        />
      </div>
    </div>  
    );
}
