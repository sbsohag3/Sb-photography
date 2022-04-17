import React from "react";
import { useNavigate } from "react-router-dom";

const Package = ({ service }) => {
  const { id, name, img, price, description } = service;
  const navigate = useNavigate();
  const navigateToPhotographerDetail = (id) => {
    navigate(`/package/${id}`);
  };
  return (
    <>
      <di>
        <div class="col">
          <div class="card h-100">
            <img width={"100%"} class="card-img-top" src={img} alt="" />
            <div class="card-body">
              <h3>{name}</h3>
              <h4 class="card-text text-danger">Price : {price}</h4>
              <p>
                <small>{description}</small>
              </p>
            </div>
            <div>
              <button
                onClick={() => navigateToPhotographerDetail(id)}
                className="btn btn-primary w-100"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </di>
    </>
  );
};

export default Package;
