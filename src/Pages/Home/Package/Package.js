import React from "react";

import { useNavigate } from "react-router-dom";
import Benefit from "../Benefit/Benefit";

const Package = ({ service }) => {
  const { id, name, img, price, description, bundle } = service;
  const navigate = useNavigate();
  const navigateToPhotographerDetail = (id) => {
    navigate(`/package/${id}`);
  };
  return (
    <div className="">
      <div className="col">
        <div className="card h-100">
          <img src={img} height={400} alt="" />
          <div className="card-body">
            <h5 className="text-info text-center border w-100">{bundle}</h5>
            <h4 className="card-title">{name}</h4>
            <h4 className="text-danger">Price: ${price}</h4>
            {description.map((benefit) => (
              <Benefit benefit={benefit} />
            ))}
          </div>
          <div className="card-footer">
            <button
              onClick={() => navigateToPhotographerDetail(id)}
              className="btn btn-primary w-100"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
