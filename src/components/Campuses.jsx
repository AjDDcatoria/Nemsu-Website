import React from "react";
import Card from "./ui/Card";
import cantilan from "../assets/cantilan.png";
import Sm from "../assets/Sm.png";
import Cagwait from "../assets/Cagwait.png";
import Lianga from "../assets/Lianga.png";
import Tagbina from "../assets/Tagbina.png";
import Bislig from "../assets/Bislig.png";
import { FaArrowRightLong } from "react-icons/fa6";

function Campuses() {
  return (
    <section
      id="campuses"
      className="flex justify-center flex-col items-center"
    >
      <div className="flex flex-col items-center title">
        <h1>Campuses</h1>
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        <Card img={cantilan} imageSize={"large"} cardWidth={"medium-with"}>
          <div>
            <h2>Cantilan Campus</h2>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              modi cupiditate a sequi, doloremque repudiandae, dicta atque quae
              quaerat laboriosam, dolorum magni? Laborum molestiae quis saepe
              amet fuga beatae nulla?
            </span>
          </div>
          <a
            href="#"
            className="readmore rounded float-right flex items-center gap-2 mb-3"
          >
            Read more
            <FaArrowRightLong />
          </a>
        </Card>
        <Card img={Sm} imageSize={"large"} cardWidth={"medium-with"}>
          <div>
            <h2>San Miguel Campus</h2>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              modi cupiditate a sequi, doloremque repudiandae, dicta atque quae
              quaerat laboriosam, dolorum magni? Laborum molestiae quis saepe
              amet fuga beatae nulla?
            </span>
          </div>
          <a
            href="#"
            className="readmore rounded float-right flex items-center gap-2 mb-3"
          >
            Read more
            <FaArrowRightLong />
          </a>
        </Card>
        <Card img={Cagwait} imageSize={"large"} cardWidth={"medium-with"}>
          <div>
            <h2>Cagwait Campus</h2>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              modi cupiditate a sequi, doloremque repudiandae, dicta atque quae
              quaerat laboriosam, dolorum magni? Laborum molestiae quis saepe
              amet fuga beatae nulla?
            </span>
          </div>
          <a
            href="#"
            className="readmore rounded float-right flex items-center gap-2 mb-3"
          >
            Read more
            <FaArrowRightLong />
          </a>
        </Card>
        <Card img={Lianga} imageSize={"large"} cardWidth={"medium-with"}>
          <div>
            <h2>Lianga Campus</h2>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              modi cupiditate a sequi, doloremque repudiandae, dicta atque quae
              quaerat laboriosam, dolorum magni? Laborum molestiae quis saepe
              amet fuga beatae nulla?
            </span>
          </div>
          <a
            href="#"
            className="readmore rounded float-right flex items-center gap-2 mb-3"
          >
            Read more
            <FaArrowRightLong />
          </a>
        </Card>
        <Card img={Tagbina} imageSize={"large"} cardWidth={"medium-with"}>
          <div>
            <h2>Tagbina Campus</h2>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              modi cupiditate a sequi, doloremque repudiandae, dicta atque quae
              quaerat laboriosam, dolorum magni? Laborum molestiae quis saepe
              amet fuga beatae nulla?
            </span>
          </div>
          <a
            href="#"
            className="readmore rounded float-right flex items-center gap-2 mb-3"
          >
            Read more
            <FaArrowRightLong />
          </a>
        </Card>
        <Card img={Bislig} imageSize={"large"} cardWidth={"medium-with"}>
          <div>
            <h2>Bislig Campus</h2>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              modi cupiditate a sequi, doloremque repudiandae, dicta atque quae
              quaerat laboriosam, dolorum magni? Laborum molestiae quis saepe
              amet fuga beatae nulla?
            </span>
          </div>
          <a
            href="#"
            className="readmore rounded float-right flex items-center gap-2 mb-3"
          >
            Read more
            <FaArrowRightLong />
          </a>
        </Card>
      </div>
    </section>
  );
}

export default Campuses;
