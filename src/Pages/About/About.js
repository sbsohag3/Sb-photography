import React from 'react';
import img from '../../images/mypic.jpg';

const About = () => {
  return (
    <div className='container border w-50 mt-5'>
      <div className="text-center">
        <img src={img} className="w-25" alt="" />
      </div>
      <div className=' text-center' >
        <h2 className='mx-auto text-info text-center'>Hey I am Masud Rana Shohagh</h2>
        <h4>The goal of my life</h4>
        <p>
          My goal in life is to be a software Engineer / Web Developer, I work
          tirelessly every day to reach my goal. And I believe that hard work is
          the mother of good fortune.
        </p>
      </div>
    </div>
  );
};

export default About;