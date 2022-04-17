import React from 'react';
import img from '../../images/mypic.jpg';

const About = () => {
  return (
    <div>
      <div className='text-center'>
        <img src={img} className='w-25' alt="" />
      </div>
    </div>
  );
};

export default About;