import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import headerImg from "@/assets/NEMSU.png";

function GoalsModal(props) {
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
        <Modal.Title id="contained-modal-title-vcenter">
          Instruction
        </Modal.Title>
        <p>
          To develop competitive, resilient and transformative academic
          community.
        </p>
        <Modal.Title id="contained-modal-title-vcenter">Research</Modal.Title>
        <p>
          To produce high impact research and development for the advancement of
          knowledge and instructional innovation, institutional development and
          policy formulation, and commercialization.
        </p>
        <Modal.Title id="contained-modal-title-vcenter">Extension</Modal.Title>
        <p>
          To improve the lives of the rural and urban poor through transfer of
          technology and knowledge.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GoalsModal;
