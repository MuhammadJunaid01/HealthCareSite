import React from "react";
import Health from "../health/Health";

import Facility from "./../Services/Facility/Facility";
import Doctors from "./../doctors/Doctors";
import Testomonal from "../testimonal/Testomonal";
import Protects from "../protect/Protects";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Facility></Facility>
      <Health></Health>
      <Doctors></Doctors>
      <Testomonal></Testomonal>
      <Protects></Protects>
      {/* <Services></Services> */}
    </div>
  );
};

export default Home;
