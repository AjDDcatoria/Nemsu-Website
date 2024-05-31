import React from "react";
import "@/assets/footer.scss";
import NEMSU from "@/assets/NEMSU.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import ISO from "@/assets/ISO.jpg";

function Footer() {
  return (
    <>
      <footer className="flex flex-wrap  justify-center gap-5">
        <div className="logo flex flex-col items-center gap-2">
          <img src={NEMSU} />
          <span className="font-bold">
            North Easthern Mindanao State University
          </span>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2 items-center">
              <span className="bg-slate-50 logo flex items-center justify-center rounded-full">
                <FaLocationDot size={"25px"} style={{ color: "blue" }} />
              </span>
              <div>
                <span>Rosario, Tandag City, 8300</span>
                <br />
                <span className="font-bold">Surigao del Sur, Phillipines</span>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <span className="bg-slate-50 logo flex items-center justify-center rounded-full">
                <FaPhone size={"25px"} style={{ color: "blue" }} />
              </span>
              <div>
                <span className="font-bold">08-214-4221</span>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <span className="bg-slate-50 logo flex items-center justify-center rounded-full">
                <MdEmail size={"25px"} style={{ color: "blue" }} />
              </span>
              <div>
                <span className="font-bold">Record@nemsu.edu.ph</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="contact flex flex-col gap-3">
          <div className="flex flex-col gap-3 bg-transparent">
            <h3 className="font-bold text-slate-50">Contact with us</h3>
            <div className="flex gap-2">
              <span>
                <FaFacebookF size={"25px"} />
              </span>
              <span>
                <FaTwitter size={"25px"} />
              </span>
              <span>
                <FaGooglePlusG size={"25px"} />
              </span>
              <span>
                <FaYoutube size={"25px"} />
              </span>
            </div>
          </div>
          <div className="flex gap-2 flex-col">
            <h3 className="text-slate-50 font-bold">Certification</h3>
            <img src={ISO} className="h-32 w-32 object-contain" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
