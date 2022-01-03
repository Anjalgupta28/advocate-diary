import Modal from 'react-bootstrap/Modal';

export function CustomModal(props) {
  
    return (
        <Modal
          size="sm"
          show={props.showModal}
          onHide={() => props.setShowModal(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm_1">
             {props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>Case No. :{props.caseNo}</div>
            <div>Petitioner :{props.petitioner}</div>
            <div>Respondent :{props.respondent}</div>
            <div>Name Of Client:{props.nameofclient}</div>
            <div>remark:{props.remarks}</div>
            <div>Next Date:{props.nextDate}</div>
            
          </Modal.Body>
        </Modal>
    );
  }
