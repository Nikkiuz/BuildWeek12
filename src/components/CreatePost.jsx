import { useState, useRef } from 'react'
import {
  Button,
  Card,
  Form,
  Modal,
  Row,
  Col,
  CardBody,
  ModalTitle,
} from 'react-bootstrap'

import avatar from '../assets/images/avatar.png'
import MFoto from '../assets/images/ModaleFoto.jpeg'

import { FiClock } from 'react-icons/fi'
import { TbPhoto } from 'react-icons/tb'
import { RiVideoFill } from 'react-icons/ri'
import { LuLetterText } from 'react-icons/lu'
import { Link } from 'react-router'

const CreatePost = () => {
  const [showModal, setShowModal] = useState({
    post: false,
    media: false,
    article: false,
  })
  const [mediaType, setMediaType] = useState('')
  const fileInput = useRef(null)

  const handleShowModal = (type, media = '') => {
    setShowModal((prev) => ({ ...prev, [type]: true }))
    if (media) setMediaType(media)
  }

  const handleCloseModal = (type) => {
    setShowModal((prev) => ({ ...prev, [type]: false }))
  }

  const triggerFileInput = () => {
    fileInput.current.click()
  }

  return (
    <Card className="mt-4">
      <CardBody>
        {/* Form principale */}
        <Form className="d-flex align-items-center mb-3">
          <Row className="w-100">
            <Col xs="auto" className="d-flex align-items-center">
              <Link to="/">
                <img
                  src={avatar}
                  alt="avatar"
                  width="45px"
                  className="rounded-circle"
                />
              </Link>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Crea un post"
                className="rounded-5 py-2 px-3 w-100"
                onClick={() => handleShowModal('post')}
              />
            </Col>
          </Row>
        </Form>

        {/* Bottoni Foto e Video */}
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="auto">
            <Button
              variant="outline-light"
              onClick={() => handleShowModal('media', 'photo')}
              className="border-0 text-dark me-4"
            >
              <TbPhoto size={25} className="text-primary me-2" /> Foto
            </Button>

            <Button
              variant="outline-light"
              onClick={() => handleShowModal('media', 'video')}
              className="border-0 text-dark me-4"
            >
              <RiVideoFill size={25} className="text-success me-2" /> Video
            </Button>

            <Button
              variant="outline-light"
              onClick={() => handleShowModal('article')}
              className="border-0 text-dark"
            >
              <LuLetterText size={25} className="text-danger me-2" /> Scrivi un
              articolo
            </Button>
          </Col>
        </Row>

        {/* Modale Crea Post */}
        <Modal show={showModal.post} onHide={() => handleCloseModal('post')}>
          <Modal.Header closeButton>
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
            <Form.Group controlId="postText">
              <Form.Control
                as="textarea"
                placeholder="Di cosa vorresti parlare?"
                rows={10}
                className="border-0"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <FiClock size={25} />
            <Button
              variant="secondary"
              className="rounded-5 py-1"
              onClick={() => handleCloseModal('post')}
            >
              Pubblica
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modale Foto, Video*/}
        <Modal show={showModal.media} onHide={() => handleCloseModal('media')}>
          <Modal.Header closeButton>
            <Modal.Title>Editor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className=" d-flex flex-column align-items-center my-5">
              <img src={MFoto} alt="avatar" width="120px" className="mb-2" />
              <ModalTitle>Per inziare, seleziona i file</ModalTitle>
              <Form.Label className="mt-2">
                Condividi{' '}
                {mediaType === 'photo'
                  ? 'immagini nel tuo post'
                  : 'un video nel tuo post'}
              </Form.Label>
              <Form.Control
                type="file"
                ref={fileInput}
                style={{ display: 'none' }}
              />
              <Button
                variant="primary"
                onClick={triggerFileInput}
                className=" rounded-5 py-1 mt-2"
              >
                Carica dal computer
              </Button>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="rounded-5 py-1">
              Avanti
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modale Articolo */}
        <Modal
          show={showModal.article}
          onHide={() => handleCloseModal('article')}
        >
          <Modal.Header closeButton>
            <Modal.Title>Scrivi un articolo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={10}
                placeholder="Scrivi il tuo articolo qui..."
                className=" border-0"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="rounded-5 py-1">
              Avanti
            </Button>
          </Modal.Footer>
        </Modal>
      </CardBody>
    </Card>
  )
}

export default CreatePost
