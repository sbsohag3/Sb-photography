import React from "react";
import { useNavigate } from "react-router-dom";

const Photographer = ({ photographer }) => {
  const { id, name, img, price, description } = photographer;
  const navigate = useNavigate();
  const navigateToPhotographerDetail = (id) => {
    navigate(`/photographer/${id}`);
  };
  return (
    <>
      <di>
        <div class="col">
          <div class="card h-100">
            <img
              width={"100%"}
              height={"300px"}
              class="card-img-top"
              src={img}
              alt=""
            />
            <div class="card-body">
              <h2>{name}</h2>
              <p class="card-text">Price : {price}</p>
              <p>
                <small>{description.slice(0, 110)}...</small>
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

export default Photographer;
