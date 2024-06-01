import React, { useState } from "react";
import "../assets/header.scss";
import headersvg from "../assets/nemsu-site-header.svg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import HistoryModal from "./modals/HistoryModal";
import MandateModal from "./modals/MandateModal";
import VisionAndMissionModal from "./modals/VisionAndMissionModal";
import Corevalues from "./modals/Corevalues";
import GoalsModal from "./modals/GoalsModal";
import Hymn from "./modals/Hymn";

function Header() {
  const [showHistory, setShowHistory] = useState(false);
  const [showMandate, setShowMandate] = useState(false);
  const [showVnM, setShowVnM] = useState(false);
  const [showCoreValues, setShowCoreValues] = useState(false);
  const [showGoals, setShowGoals] = useState(false);
  const [showHymn, setShowHymn] = useState(false);

  const handleItemClick = (value) => {
    switch (value) {
      case "Our History":
        setShowHistory(true);
        break;

      case "Mandate":
        setShowMandate(true);
        break;

      case "Vission and Mission":
        setShowVnM(true);
        break;

      case "Core Values":
        setShowCoreValues(true);
        break;

      case "Goals":
        setShowGoals(true);
        break;

      case "University Hymn":
        setShowHymn(true);
        break;
    }
  };

  return (
    <>
      <header className="flex gap-0 items-center justify-between">
        <img src={headersvg} alt="" />
        <div className="flex gap-3 items-center">
          <DropdownButton
            id="dropdown-item-button"
            title={"About Us"}
            variant=""
          >
            <Dropdown.Item
              as="button"
              onClick={() => handleItemClick("Our History")}
            >
              Our History
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => handleItemClick("Mandate")}
            >
              Mandate
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => handleItemClick("Vission and Mission")}
            >
              Vission and Mission
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => handleItemClick("Core Values")}
            >
              Core Values
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleItemClick("Goals")}>
              Goals
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => handleItemClick("University Seal")}
            >
              University Seal
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => handleItemClick("University Hymn")}
            >
              University Hymn
            </Dropdown.Item>
          </DropdownButton>
          <a href="#news">News</a>
          <a href="#campuses">Campuses</a>
          <a href="/facilities">Facilities</a>
        </div>
      </header>

      {showHistory && (
        <HistoryModal show={showHistory} onHide={() => setShowHistory(false)} />
      )}

      {showMandate && (
        <MandateModal show={showMandate} onHide={() => setShowMandate(false)} />
      )}
      {showVnM && (
        <VisionAndMissionModal
          show={showVnM}
          onHide={() => setShowVnM(false)}
        />
      )}
      {showCoreValues && (
        <Corevalues
          show={showCoreValues}
          onHide={() => setShowCoreValues(false)}
        />
      )}
      {showGoals && (
        <GoalsModal show={showGoals} onHide={() => setShowGoals(false)} />
      )}
      {showHymn && <Hymn show={showHymn} onHide={() => setShowHymn(false)} />}
    </>
  );
}

export default Header;
