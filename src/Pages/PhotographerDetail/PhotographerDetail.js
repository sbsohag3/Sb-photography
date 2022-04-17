import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PhotographerDetail = () => {
  const { photographerId } = useParams();
  return (
    <div>
      <h1>Welcome to Photographer : {photographerId}</h1>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default PhotographerDetail;