import React, { useEffect, useState } from "react";
import Package from "../Package/Package";


const Packages = () => {
   const [packages, setPackages] = useState([]);

   useEffect(() => {
     fetch("data.json")
       .then((res) => res.json())
       .then((data) => setPackages(data));
   }, []);
   return (
     <div id="services" className="container mt-5">
       <h1 className="service-title text-primary text-center">Our Packages</h1>
       <div className="services-container">
         {packages.map((service) => (
           <Package key={service.id} service={service} />
         ))}
       </div>
     </div>
   );
};

export default Packages;
