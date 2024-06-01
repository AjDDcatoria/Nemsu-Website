import React from "react";
import headersvg from "../assets/nemsu-site-header.svg";
import facilities1 from "../assets/facilities1.jpg";
import facilities2 from "../assets/facilities2.jpg";
import facilities3 from "../assets/facilities3.jpg";
import facilities4 from "../assets/facilities4.jpg";
import "../assets/section.scss";
import Footer from "@/components/Footer";

function Facilities() {
  return (
    <>
      <header className="flex gap-0 items-center justify-between">
        <img src={headersvg} alt="" />
        <a href="/">Home</a>
      </header>
      <main id="facilities" className="mt-14 flex flex-col gap-5 ">
        <div>
          <h1>Academic Building</h1>
          <section className=" flex flex-wrap gap-2">
            <div>
              <img src={facilities1} alt="" />
              <i class="bi bi-search"></i>
            </div>
            <div>
              <img src={facilities2} alt="" />
              <i class="bi bi-search"></i>
            </div>
            <div>
              <img src={facilities3} alt="" />
              <i class="bi bi-search"></i>
            </div>
            <div>
              <img src={facilities4} alt="" />
              <i class="bi bi-search"></i>
            </div>
          </section>
        </div>
        <div>
          <h1>Administration</h1>
          <section className=" flex flex-wrap gap-2">
            <div>
              <img src={facilities1} alt="" />
              <i class="bi bi-search"></i>
            </div>
            <div>
              <img src={facilities2} alt="" />
              <i class="bi bi-search"></i>
            </div>
            <div>
              <img src={facilities3} alt="" />
              <i class="bi bi-search"></i>
            </div>
            <div>
              <img src={facilities4} alt="" />
              <i class="bi bi-search"></i>
            </div>
          </section>
        </div>
        <div>
          <h1>Audio Visual Center</h1>
          <section className=" flex flex-wrap gap-2">
            <div>
              <img src={facilities1} alt="" />
              <i class="bi bi-search"></i>
            </div>
            <div>
              <img src={facilities2} alt="" />
              <i class="bi bi-search"></i>
            </div>
            <div>
              <img src={facilities3} alt="" />
              <i class="bi bi-search"></i>
            </div>
          </section>
        </div>
        <div>
          <h1>Auditor's Office</h1>
          <section className=" flex flex-wrap gap-2">
            <div>
              <img src={facilities1} alt="" />
              <i class="bi bi-search"></i>
            </div>
            <div>
              <img src={facilities2} alt="" />
              <i class="bi bi-search"></i>
            </div>
          </section>
        </div>
        <div>
          <h1>College Law</h1>
          <section className=" flex flex-wrap gap-2">
            <div>
              <img src={facilities1} alt="" />
              <i class="bi bi-search"></i>
            </div>
            <div>
              <img src={facilities2} alt="" />
              <i class="bi bi-search"></i>
            </div>
            <div>
              <img src={facilities3} alt="" />
              <i class="bi bi-search"></i>
            </div>
            <div>
              <img src={facilities3} alt="" />
              <i class="bi bi-search"></i>
            </div>
            <div>
              <img src={facilities1} alt="" />
              <i class="bi bi-search"></i>
            </div>
            <div>
              <img src={facilities2} alt="" />
              <i class="bi bi-search"></i>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Facilities;
