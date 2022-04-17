import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Services from '../Services/Services';



const Home = () => {
  return (
    <div>
      <Banner/>
     <Packages/>
      <Services/>
    </div>
  );
};

export default Home;