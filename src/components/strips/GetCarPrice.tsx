import React from 'react';

import CarPriceBanner from '~/svg/CarPriceBanner.svg';
export default function GetCarPrice() {
  return (
    <div className='bg-ctaBannerBlue w-full  h-2/6 '>
      <div className='py-20 '>
        <div className='w-full  flex-shrink-0 relative'>
          <CarPriceBanner />
        </div>
        <h1>Hi</h1>
      </div>
    </div>
  );
}
