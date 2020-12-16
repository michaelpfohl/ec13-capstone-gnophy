import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

const AppModal = (props) => {
  const {
    buttonLabel, title, color,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color={color} onClick={toggle} className="modal-button">
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="d-flex">
        <ModalHeader toggle={toggle} className="modal-header" charCode="">{title}</ModalHeader>
        <ModalBody className="modal-body">
          {props.children}
        </ModalBody>
        <ModalFooter className="modal-footer">
          <Button className="btn-danger cancel-button" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AppModal;
