import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import headerImg from "@/assets/NEMSU.png";

function HistoryModal(props) {
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
          Our History
        </Modal.Title>
        <p>
          The University's roots trace back to 1982 with the opening of Bukidnon
          State University's extension in Tandag City. It later evolved into
          Surigao del Sur Polytechnic College in 1992 and gained state college
          status in 1998. Through various developments, including integration
          with other institutions, it became Surigao del Sur State University in
          2010 and North Eastern Mindanao State University in 2021. Dr.
          Baceledes R. Estal served as president from 2014 to 2022, overseeing
          significant expansions and improvements, including the integration of
          NEMSU-Bislig Campus in 2018.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HistoryModal;
