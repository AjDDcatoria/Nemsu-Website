import React from "react";
import "../assets/header.scss";
import headersvg from "../assets/nemsu-site-header.svg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Header() {
  return (
    <>
      <header className="flex gap-0 items-center justify-between">
        <img src={headersvg} alt="" />
        <div className="flex gap-3 items-center">
          <DropdownButton id="dropdown-item-button" title="About Us" variant="">
            <Dropdown.Item as="button">Our History</Dropdown.Item>
            <Dropdown.Item as="button">Mandate</Dropdown.Item>
            <Dropdown.Item as="button">Vission and Mission</Dropdown.Item>
            <Dropdown.Item as="button">Core Values</Dropdown.Item>
            <Dropdown.Item as="button">Goals</Dropdown.Item>
            <Dropdown.Item as="button">University Seal</Dropdown.Item>
            <Dropdown.Item as="button">University Hymn</Dropdown.Item>
          </DropdownButton>
          <a href="#news">News</a>
          <a href="#campuses">Campuses</a>
          <a href="#">Facilities</a>
        </div>
      </header>
    </>
  );
}

export default Header;
