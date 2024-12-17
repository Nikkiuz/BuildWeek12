import { useState } from 'react'
import { Button, Card, Form, Modal, Row, Col, CardBody } from 'react-bootstrap'
import avatar from '../assets/images/avatar.png'
import { FiClock } from 'react-icons/fi'
import { TbPhoto } from 'react-icons/tb'
import { RiVideoFill } from 'react-icons/ri'
import { LuLetterText } from 'react-icons/lu'
import { Link } from 'react-router'

const CreatePost = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Card>
      <CardBody>
        <Form inline className=" d-flex justify-content-center  mb-3">
          <Row>
            <Col xs="auto">
              <Link to={'/'}>
                <img
                  src={avatar}
                  alt="avatar"
                  width="45px"
                  className="rounded-circle"
                />
              </Link>
            </Col>
            <Col xs="auto" onClick={handleShow}>
              <Form.Control
                type="text"
                placeholder="Crea un post"
                className=" mr-sm-2 rounded-5 py-2 px-3 "
              />
            </Col>
          </Row>
        </Form>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="auto">
            <Button
              variant="outline-light"
              onClick={handleShow}
              className=" border-0 d-flex text-dark"
            >
              <TbPhoto size={25} className=" text-primary me-2" />
              Foto
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant="outline-light"
              onClick={handleShow}
              className=" border-0 d-flex text-dark"
            >
              <RiVideoFill size={25} className=" text-success me-2" />
              Video
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant="outline-light"
              onClick={handleShow}
              className=" border-0 d-flex text-dark"
            >
              <LuLetterText size={25} className=" text-danger me-2" />
              Scrivi un articolo
            </Button>
          </Col>
        </Row>

        {/* MODALE CREA POST  */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={avatar}
                alt="avatar"
                width="50px"
                className="rounded-circle me-2"
              />
              <div>
                <Modal.Title>Cristiano Ronaldo</Modal.Title>
                <p className="mb-0">Pubblica: Chiunque</p>
              </div>
            </div>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Di cosa vorresti parlare?"
                  rows={10}
                  className=" border-0"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <FiClock size={25} />
            <Button
              variant="secondary"
              className=" rounded-5 py-1 mx-2"
              onClick={handleClose}
            >
              Pubblica
            </Button>
          </Modal.Footer>
        </Modal>
      </CardBody>
    </Card>
  )
}

export default CreatePost
