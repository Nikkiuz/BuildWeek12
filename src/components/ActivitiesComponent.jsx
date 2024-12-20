import { useEffect, useState } from 'react'
import {
  CardBody,
  Container,
  Row,
  Form,
  Modal,
  InputGroup,
  FormControl,
  Image,
} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { AiOutlineEdit } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {
  createPost,
  deletePost,
  fetchPostsProfile,
  updatePost,
} from '../redux/actions/activitiesAction'
import '../assets/css/Activities.css'
import imgCasuale from '../services/ImgPexels'
import { MdDeleteForever } from 'react-icons/md'
import { FaPen } from 'react-icons/fa'

const ActivitiesComponent = () => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const [currentActivity, setCurrentActivity] = useState(null)
  const [formData, setFormData] = useState({ text: '', image: '' })
  const [searchTerm, setSearchTerm] = useState('')
  const posts = useSelector((state) => state.postsReducer.posts)
  const [localPosts, setLocalPosts] = useState([])

  useEffect(() => {
    setLocalPosts(posts)
  }, [posts])

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

  const handleEditActivity = (index) => {
    const activity = localPosts[index]
    if (activity) {
      setCurrentActivity(index)
      setFormData({
        text: activity.text,
        image: activity.image,
      })
      setShowModal(true)
    }
  }

  const handleCreateActivity = () => {
    setCurrentActivity(null)
    setFormData({ text: '', image: '' })
    setShowModal(true)
  }

  const handleDeleteActivity = (index) => {
    const activityId = localPosts[index]._id
    dispatch(deletePost(activityId))
    setLocalPosts(localPosts.filter((_, i) => i !== index))
  }

  const handleSaveActivity = () => {
    if (currentActivity !== null) {
      const activityId = localPosts[currentActivity]._id
      dispatch(updatePost(activityId, formData))
      setLocalPosts((prev) =>
        prev.map((activity, index) =>
          index === currentActivity ? { ...activity, ...formData } : activity
        )
      )
    } else {
      dispatch(createPost(formData)).then((newPost) => {
        setLocalPosts((prev) => [...prev, newPost])
      })
    }
    setShowModal(false)
  }

  useEffect(() => {
    dispatch(fetchPostsProfile('Francois'))
  }, [dispatch])

  return (
    <Container>
      <Card className="d-flex mt-2" style={{ backgroundColor: 'white' }}>
        <Card.Header className="d-flex align-items-center">
          <span className="fw-bold">Attività</span>
          <div className="ms-auto">
            <Button
              id="transitionButton"
              className="mx-3 btn-outline-primary rounded-pill"
              style={{ backgroundColor: 'transparent', border: '1px solid' }}
              onClick={handleCreateActivity}
            >
              Crea un post
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Row xs={1} className="g-1">
            {localPosts.map((activity, index) => (
              <Card key={index}>
                <CardBody>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <div className="d-flex">
                        <Card.Img
                          src={activity.image}
                          style={{ width: '100px' }}
                          alt="Immagine attività"
                        />
                        <Card.Text className="mx-3 fw-bold fs-5 mt-3">
                          {activity.text}
                        </Card.Text>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                      <FaPen
                        className="me-2 text-black"
                        style={{
                          cursor: 'pointer',
                        }}
                        onClick={() => handleEditActivity(index)}
                      />
                      <MdDeleteForever
                        style={{
                          color: '#181818',
                          width: '24px',
                          height: '24px',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleDeleteActivity(index)}
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </Row>
        </Card.Body>
        <Card.Footer>Mostra di più</Card.Footer>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentActivity !== null
              ? 'Modifica attività'
              : 'Crea nuova attività'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formText">
              <Form.Label>Testo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il testo"
                value={formData.text}
                onChange={(e) =>
                  setFormData({ ...formData, text: e.target.value })
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
              <Form className="d-flex mt-3">
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
              </Form>
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
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleSaveActivity}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default ActivitiesComponent
