import React from 'react';
import { BsCheckAll } from "react-icons/bs";

const Benefit = ({benefit}) => {
  return (
    <div>
      <p className='mb-0'>
        <BsCheckAll className="text-info" />
        {benefit}
      </p>
    </div>
  );
};

export default Benefit;