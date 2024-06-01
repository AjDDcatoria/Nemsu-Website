import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import headerImg from "@/assets/NEMSU.png";

function MandateModal(props) {
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
        <Modal.Title id="contained-modal-title-vcenter">Mandate</Modal.Title>
        <p>
          The university shall primarily provide advanced education, higher
          technological, professional instruction and training in trade,
          fishery, agriculture, science, education, commerce, engineering,
          forestry, nautical courses and other related fields. It shall also
          undertake research and extension services and provide progressive
          leadership in its areas of specialization (RA 9998, Section 2).
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MandateModal;
