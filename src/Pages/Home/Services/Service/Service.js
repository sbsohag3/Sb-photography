import React from 'react';

const Service = ({service}) => {
  const { img} =service
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-3">
      <div className="card " style={{ width: "18rem" }}>
        <img
          src={img}
          height={400}
          className="card-img-top mb-2 rounded"
          alt="..."
        />
      </div>
     
    </div>
  );
};

export default Service;