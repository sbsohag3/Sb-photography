import React from 'react';
import notFound from '../../../images/not-found (1).png'

const NotFound = () => {
  return (
    <div className='text-center mx-auto mt-5 border-none rounded'>
      
      <img className='w-50 rounded-pill' src={notFound} alt="" />
    </div>
  );
};

export default NotFound;