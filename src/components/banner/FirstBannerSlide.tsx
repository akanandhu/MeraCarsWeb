import { FirstSlideContents } from '@/components/banner/FirstSlideContents';

import MainBanner from '~/svg/CarBanner.svg';

export const FirstBannerSlide = () => {
  return (
    <div>
      <div className='relative z-0'>
        {/* <FirstSlide />  */}
        <div className='w-full'>
          <MainBanner height={600} />
        </div>

        <div className='absolute z-10 top-0 '>
          <FirstSlideContents />
        </div>
      </div>
    </div>
  );
};
