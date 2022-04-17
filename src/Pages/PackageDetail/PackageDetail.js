import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PackageDetail = () => {
  const { packageId } = useParams();
  return (
    <div>
      <h1>Welcome to Your Package : {packageId}</h1>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default PackageDetail;