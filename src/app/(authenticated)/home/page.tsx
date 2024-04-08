import React from 'react';

import ReviewImages from '@/app/(authenticated)/home/_components/ReviewImages';
import Reviews from '@/app/(authenticated)/home/_components/Reviews';
import Top from '@/app/(authenticated)/home/_components/top';




const Page = () => {
  return (

    <div className='w-full pt-[290px] sm:pt-[250px] md:pt-[320px] lg:pt-[280px] flex flex-col gap-16'>
      <Top />
      <div className='flex flex-col md:flex-row gap-4 w-full px-12 md:px-8 lg:px-28'>
        <div className='flex w-full md:w-[75%] '>
          <Reviews />
        </div>
        <div className='w-[40%]'>
          <ReviewImages />
        </div>
      </div>
    </div>
  );
};

export default Page;
