import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import headerImg from "@/assets/NEMSU.png";

function Hymn(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <img src={headerImg} style={{ height: "40px" }} />
      </Modal.Header>
      <Modal.Body>
        <div
          className="text-center overflow-y-scroll flex flex-col gap-2"
          style={{ height: "400px" }}
        >
          <Modal.Title
            id="contained-modal-title-vcenter"
            className={"text-slate-600 font-bold"}
          >
            NEMSU Hymn
          </Modal.Title>
          <span className="font-bold text-sm">
            LYRICIST: Prof Evelyn T. Bagood
            <br /> Music Composer: Mr. Castor V. Balacuit <br />
            Music Arranger: Mr. Carl Martin R. Engcoy
          </span>
          <p>
            Onward with a noble mission <br />
            Unifying with a vision;
            <br /> Glorious footprints of knowledge won
            <br /> Breeding grounds of Glocal Champions
            <br />
            <br /> Emblem of Mindanaoan nobility
            <br /> Radiates the name of a growing NEMSU;
            <br /> North Eastern Mindanao State University <br />
            Flying flag above the pacific blue.
            <br />
            <br /> Refrain:
            <br /> Live! Rise! Soar and Excel!
            <br /> In the NEMSU education <br />
            Leading to a better world
            <br /> By sculpting better lives,
            <br /> The NEMSU vision, NEMSU touch
            <br />
            <br /> N.E.M.S.U The laying portals of brilliant hatch
            <br /> (Repeat Refrain)
            <br />
            <br /> Coda: The NEMSU vision <br />
            NEMSU touch
            <br /> NEMSU!
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Hymn;
