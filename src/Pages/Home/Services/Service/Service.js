import React from 'react';

const Service = ({service}) => {
  const { img} =service
  return (
    <div className="g-4 col-sm-12 col-md-6 col-lg-4">
      <div className="card " style={{ width: "100%" }}>
        <img
          src={img}
          height={400}
          className="card-img-top  rounded"
          alt="..."
        />
      </div>
     
    </div>
  );
};

export default Service;