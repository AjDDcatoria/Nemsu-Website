import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import headerImg from "@/assets/NEMSU.png";

function Corevalues(props) {
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
        <Modal.Title id="contained-modal-title-vcenter">Competence</Modal.Title>
        <p>
          A combination of observable and measurable knowledge, skills,
          abilities, and personal attributes that contribute to enhance the
          performance of NEMSU employees and ultimately result in organizational
          success.
        </p>
        <Modal.Title id="contained-modal-title-vcenter">
          Accountability
        </Modal.Title>
        <p>
          Responsibility for own actions and decisions, and commitment to
          accomplish work in an ethical, efficient, cost-effective and
          transparent manner manifesting the value of sound stewardship in the
          use of resources for common good
        </p>
        <Modal.Title id="contained-modal-title-vcenter">
          NEMSU CARES...
        </Modal.Title>
        <p>
          These core values are not descriptions of the work we do, nor the
          strategies we employ to accomplish our University vision. They are the
          core values that underlie our works and interactions as we internalize
          responsibilities to fulfill our mission and vision. They are the basic
          elements of how we go about our work and how we deal with clients and
          stakeholders, how we mold students to become competent, innovative,
          globally competitive and service-oriented individuals.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Corevalues;
