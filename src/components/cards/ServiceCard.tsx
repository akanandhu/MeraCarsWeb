import React from 'react';
import StepOne from '~/svg/StepOne.svg';

interface Props {
  index: number;
  heading: string;
  subHeading: string;
  img: React.ReactNode;
}

export default function ServiceCard(props: Props) {
  const { img, heading, subHeading, index } = props;
  return (
    <div className=' border-serviceCardBorder border border-solid shadow-[-20px_17px_30px_0px_rgba(51,102,255,0.05)]  rounded-3xl '>
      <div className='flex justify-center p-4 w-full '>{img}</div>
      <div className='flex gap-1 px-4 py-2 align-middle '>
        <div className='flex gap-2 justify-center align-middle items-center'>
          <div className='flex flex-col'>
            <StepOne height={17} width={51} />
            <div className='flex justify-center  '>
              <p className='text-white  -mt-4 text-xs'>STEP {index}</p>
            </div>
          </div>
          <div className='text-xl font-bold'>{heading}</div>
        </div>
      </div>
      <div className='max-w-96 px-4 pt-3 pb-7 text-sm leading-normal font-medium '>
        {subHeading}
      </div>
    </div>
  );
}
