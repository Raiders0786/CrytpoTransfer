import React from 'react';
import logo from "../../images/cryptos.png"

export default function Footer () {
  return (
    <div id="footer" className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
      <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
        <div className='flex flex-[0.5] justify-center items-center'>
          <img src={logo} alt="logo" className='w-32' />
        </div>
        <div className='flex flex-1 justify-evenly items-center flex:wrap sm:mt-0 mt-10 w-full'>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Market</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Exchange</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Tutorials</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Wallets</p>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col mt-5'>
        <p className='text-white text-sm text-center '>Come Join Us</p>
        <p className='text-white text-sm text-center '>info@kryptomakers.com</p>
      </div>  
      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'>
      </div>
      <div className='sm:w-[90%] flex justify-between items-center mt-3'>
      <p className='text-white text-sm text-center '>@__Raiders 2022</p>
      <p className='text-white text-sm text-center '>All Rights Reserved</p>
      </div>
    </div>
  );
}
