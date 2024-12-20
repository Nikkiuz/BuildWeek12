import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Card,
  Col,
  Image,
  Row,
  Spinner,
  Alert,
  Modal,
  Form,
} from 'react-bootstrap'
import { fetchMeProfile, updateProfile } from '../redux/actions/userAction'
import { FaPen } from 'react-icons/fa'

const InfoSection = () => {
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)

  const profile = useSelector((state) => state.userReducer.meProfile)
  const loading = useSelector((state) => state.userReducer.loading)
  const error = useSelector((state) => state.userReducer.error)

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    title: '',
    area: '',
  })

  useEffect(() => {
    dispatch(fetchMeProfile())
  }, [dispatch])

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || '',
        surname: profile.surname || '',
        title: profile.title || '',
        area: profile.area || '',
      })
    }
  }, [profile])

  // Funzioni per aprire e chiudere la modale
  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  // Funzione per gestire i cambiamenti del form
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Funzione per salvare i dati
  const handleSave = () => {
    const updatedData = {
      name: formData.name,
      surname: formData.surname,
      title: formData.title,
      area: formData.area,
    }

    dispatch(updateProfile(updatedData))
    handleCloseModal()
  }

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <Alert variant="danger">Errore: {error}</Alert>
      </div>
    )
  }

  return (
    <>
      <Card.Body className="position-relative">
        <Row>
          <Button className="editIcon bg-transparent" onClick={handleOpenModal}>
            <FaPen className=" text-black" />
          </Button>
          <Col sm={6} className="mt-5">
            <h3 className="mb-0">
              {profile?.name + ' ' + profile?.surname || 'Nome Cognome'}
            </h3>
            <p className="fw-light mt-0 mb-1">
              {profile?.title || 'Posizione Lavorativa'}
            </p>
            <p className="fw-light mt-0">{profile?.area || 'Posizione'}</p>
          </Col>
          <Col sm={6} className="mt-5 text-center">
            <Row className="flex-column">
              {profile?.education?.map((edu, index) => (
                <Col key={index} className="d-flex align-items-center mb-2">
                  <Image
                    className="rounded-circle"
                    src={edu.image || 'https://placedog.net/40/40'}
                    style={{ width: '40px', height: '40px' }}
                  />
                  <span className="ms-2">{edu.school || 'SCUOLA'}</span>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="align-content-start">
          <Col className="d-flex justify-content-start">
            <Button className="rounded-pill me-2 pt-1 pb-1 shadow">
              Attività
            </Button>
            <Button className="rounded-pill me-2 pt-1 pb-1 shadow">
              Esperienze
            </Button>
            <Button className="rounded-pill me-2 pt-1 pb-1 shadow">
              Formazione
            </Button>
          </Col>
        </Row>
      </Card.Body>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSurname">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Posizione Lavorativa</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formArea">
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default InfoSection
