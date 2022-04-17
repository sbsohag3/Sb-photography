import React from 'react';
import { BsCheckAll } from "react-icons/bs";

const Benefit = (props) => {
  return (
    <div>
      <p>
        <BsCheckAll className="text-info" />
        {props.benefit}
      </p>
    </div>
  );
};

export default Benefit;