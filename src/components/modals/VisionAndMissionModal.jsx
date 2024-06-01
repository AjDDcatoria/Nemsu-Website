import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import headerImg from "@/assets/NEMSU.png";
function VisionAndMissionModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <img src={headerImg} style={{ height: "40px" }} />
      </Modal.Header>
      <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter">Vision</Modal.Title>
        <p>A transformative leading University in Asia and the Pacific.</p>
        <Modal.Title id="contained-modal-title-vcenter">Mission</Modal.Title>
        <p>
          NEMSU shall provide competency-based higher education through
          transformative instruction, relevant research, sustainable extension
          and production responsive to local, regional and global trends.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VisionAndMissionModal;
