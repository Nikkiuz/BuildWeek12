import {
  Card,
  Button,
  Container,
  Row,
  CardBody,
  CardTitle,
  Modal,
  Form,
  InputGroup,
  FormControl,
  Image,
} from 'react-bootstrap'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md'
import { useEffect, useState } from 'react'
import imgCasuale from '../services/ImgPexels'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {
  fetchExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
} from '../redux/actions/experiencesAction'
import { useDispatch, useSelector } from 'react-redux'
import { FaPen } from 'react-icons/fa'

const ExperienceComponent = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalMode, setModalMode] = useState('create')
  const [selectedExperience, setSelectedExperience] = useState(null)
  const [formData, setFormData] = useState({
    role: '',
    company: '',
    description: '',
    startDate: null,
    endDate: null,
    area: '',
    image: '',
  })
  const [searchTerm, setSearchTerm] = useState('')

  const dispatch = useDispatch()
  const experience = useSelector(
    (state) => state.experiencesReducer.experiences
  )

  useEffect(() => {
    dispatch(fetchExperiences())
  }, [dispatch])

  const handleEditActivity = (index) => {
    const exp = experience[index]
    setSelectedExperience(exp)
    setFormData({
      role: exp.role,
      company: exp.company,
      description: exp.description,
      startDate: new Date(exp.startDate),
      endDate: new Date(exp.endDate),
      area: exp.area,
      image: exp.image,
    })
    setModalMode('edit')
    setShowModal(true)
  }

  const handleDeleteExperience = (id) => {
    dispatch(deleteExperience(id))
  }

  const handleCreateActivity = () => {
    setSelectedExperience(null)
    setFormData({
      role: '',
      description: '',
      company: '',
      startDate: null,
      endDate: null,
      area: '',
      image: '',
    })
    setModalMode('create')
    setShowModal(true)
  }

  const handleCloseModal = () => setShowModal(false)

  const fetchRandomImage = (query) => {
    const indexRandom = Math.floor(Math.random() * 11)
    imgCasuale(query)
      .then((arrayImg) => {
        const url = arrayImg[indexRandom]?.src?.large || ''
        setFormData((prev) => ({ ...prev, image: url }))
      })
      .catch((error) => {
        console.error("Errore durante il recupero dell'immagine:", error)
      })
  }

  const handleSaveExperience = () => {
    const payload = {
      role: formData.role,
      company: formData.company,
      startDate: formData.startDate ? formData.startDate.toISOString() : null,
      endDate: formData.endDate ? formData.endDate.toISOString() : null,
      area: formData.area,
      image: formData.image,
      description: formData.description,
    }

    if (modalMode === 'create') {
      dispatch(createExperience(payload))
    } else if (modalMode === 'edit' && selectedExperience) {
      dispatch(updateExperience(selectedExperience._id, payload))
    }
    setShowModal(false)
  }

  return (
    <Container>
      <Card className="d-flex mt-4" style={{ backgroundColor: 'white' }}>
        <Card.Header className="d-flex align-items-center">
          <span className="fw-bold">Esperienza</span>
          <div className="ms-auto">
            <Button className="mx-2" onClick={handleCreateActivity}>
              Crea Esperienza
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Row xs={1} sm={2} md={2} lg={1} className="g-1">
            {experience?.map((exp, index) => (
              <Card key={index}>
                <CardBody className="d-flex">
                  <div className="align-content-center">
                    <Card.Img src={exp.image} style={{ width: '100px' }} />
                  </div>
                  <div className="mx-3 flex-grow-1">
                    <CardTitle className="fw-bold">{exp.role}</CardTitle>
                    <Card.Text
                      className="fw-medium mt-1"
                      style={{ marginBottom: '4px' }}
                    >
                      Azienda: {exp.company}
                    </Card.Text>
                    <Card.Text className="my-0" style={{ opacity: '0.7' }}>
                      {new Date(exp.startDate).toLocaleDateString()}
                    </Card.Text>
                    <Card.Text className="my-0" style={{ opacity: '0.7' }}>
                      {exp.area}
                    </Card.Text>
                    <Card.Text className="fw-bold">{exp.description}</Card.Text>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaPen
                      className="me-2"
                      onClick={() => handleEditActivity(index)}
                      style={{
                        cursor: 'pointer',
                      }}
                    />
                    <MdDeleteForever
                      style={{
                        color: '#181818',
                        width: '24px',
                        height: '24px',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleDeleteExperience(exp._id)}
                    />
                  </div>
                </CardBody>
              </Card>
            ))}
          </Row>
        </Card.Body>
        <Card.Footer>Mostra di più</Card.Footer>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalMode === 'create' ? 'Crea Esperienza' : 'Modifica Esperienza'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type="text"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                placeholder="Inserisci il ruolo"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                type="text"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Inserisci la descrizione"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCompany">
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il nome dell'azienda"
                value={formData.company || ''}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex flex-column"
              controlId="formStartDate"
            >
              <Form.Label>Data Inizio</Form.Label>
              <DatePicker
                selected={formData.startDate}
                onChange={(date) =>
                  setFormData({ ...formData, startDate: date })
                }
                dateFormat="dd/MM/yyyy"
                placeholderText="Seleziona la data di inizio"
                className="form-control"
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex flex-column"
              controlId="formEndDate"
            >
              <Form.Label>Data Fine</Form.Label>
              <DatePicker
                selected={formData.endDate}
                onChange={(date) => setFormData({ ...formData, endDate: date })}
                dateFormat="dd/MM/yyyy"
                placeholderText="Seleziona la data di fine"
                className="form-control"
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formArea">
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci l'area"
                value={formData.area || ''}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCover">
              <Form.Label>URL immagine</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci l'URL dell'immagine"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />
              <div className="d-flex mt-3">
                <InputGroup>
                  <FormControl
                    type="search"
                    placeholder="Cerca"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button
                    variant="outline-primary"
                    onClick={() => fetchRandomImage(searchTerm)}
                  >
                    Cerca
                  </Button>
                </InputGroup>
              </div>
              {formData.image && (
                <div className="mt-3">
                  <Image
                    src={formData.image}
                    alt="Anteprima immagine"
                    fluid
                    style={{ maxHeight: '200px' }}
                  />
                </div>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleSaveExperience}>
            {modalMode === 'create' ? 'Crea' : 'Salva'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default ExperienceComponent
