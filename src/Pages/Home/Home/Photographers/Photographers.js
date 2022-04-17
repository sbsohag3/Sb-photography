import React, { useEffect, useState } from "react";
import Photographer from "../../Photographer/Photographer";

const Photographers = () => {
  const [photographers, setPhotographers] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPhotographers(data));
  }, []);
  return (
    <div id="services" className="container mt-5">
      <h1 className="service-title text-primary">Our Services</h1>
      <div className="services-container row row-cols-1  row-cols-3 g-4">
        {photographers.map((photographer) => (
          <Photographer key={photographer.id} photographer={photographer} />
        ))}
      </div>
    </div>
  );
};

export default Photographers;
