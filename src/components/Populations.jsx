import React from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { GiSunglasses } from "react-icons/gi";

function Populations() {
  return (
    <article id="population" className="flex items-center justify-center gap-5">
      <div className="icon-container flex items-center flex-col">
        <div className="icon">
          <FaUserGraduate size={"30px"} style={{ color: "#af00db" }} />
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">15,000+</span>
          <span>Students</span>
        </div>
      </div>
      <div className="icon-container flex items-center flex-col">
        <div className="icon">
          <FaUserGraduate size={"30px"} style={{ color: "#af00db" }} />
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">12+</span>
          <span>Student Nationalities</span>
        </div>
      </div>
      <div className="icon-container flex items-center flex-col">
        <div className="icon">
          <FaUniversity size={"30px"} style={{ color: "#af00db" }} />
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">15+</span>
          <span>Courses</span>
        </div>
      </div>
    </article>
  );
}

export default Populations;
