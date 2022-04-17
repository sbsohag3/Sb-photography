import React from "react";
import wedding1 from "../../../images/wedding/wedding (1).jpg";
import wedding2 from "../../../images/wedding/wedding (2).jpg";
import wedding3 from "../../../images/wedding/wedding (3).jpg";
import wedding4 from "../../../images/wedding/wedding (4).jpg";
import wedding6 from "../../../images/wedding/wedding (6).jpg";
import wedding7 from "../../../images/wedding/wedding (7).jpg";
import wedding8 from "../../../images/wedding/wedding (8).jpg";
import wedding9 from "../../../images/wedding/wedding (9).jpg";
import Service from "./Service/Service";

const services = [
  { id: 1, name: "Avin Mahmudov", img: wedding1 },
  { id: 2, name: "Asfabal Luna", img: wedding2 },
  { id: 3, name: "Asdrubal luna", img: wedding3 },
  { id: 4, name: "Jonathan Borba", img: wedding4 },
  { id: 6, name: "Rayyu Maldives", img: wedding6 },
  { id: 7, name: "Rayu Saldives", img: wedding7 },
  { id: 8, name: "Victoria Priessnitz", img: wedding8 },
  { id: 9, name: "Asdrubal luna", img: wedding9 },
];

const Services = () => {
  return (
    <div id="services" className="container">
      <h2 className="text-primary text-center mt-5">Our Services</h2>
      <div className="row">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
