import React, {useState} from 'react';

import  { Button, Modal} from 'react-bootstrap';

export default function ModalText(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <div>

        <Button variant="dark" onClick={handleShow} >
          Описание
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Информация </Modal.Title>
          </Modal.Header>
          <Modal.Body  >
              {props.textmodal}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Выйти
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    );
  }
