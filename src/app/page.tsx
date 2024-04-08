import React from 'react';

import HomePage from '@/app/_components/HomePage';
import NavBar from '@/app/_components/NavBar';



const Page = () => {
  return (

    <div className='w-full flex flex-col gap-2 lg:gap-16'>
      <NavBar />
      <HomePage />
    </div>
  );
};

export default Page;
