import { useEffect, useState } from 'react'
import '../assets/css/App.css'
import {
  Row,
  Form,
  Modal,
  InputGroup,
  FormControl,
  Image,
  Button,
  Card,
  Col,
} from 'react-bootstrap'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../redux/actions/activitiesAction'
import imgCasuale from '../services/ImgPexels'
import '../assets/css/Activities.css'
import { FaImage, FaPen } from 'react-icons/fa'

const CreatePost = () => {
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)

  const [currentActivity, setCurrentActivity] = useState(null)
  const [formData, setFormData] = useState({ text: '', image: '' })
  const [searchTerm, setSearchTerm] = useState('')
  const posts = useSelector((state) => state.postsReducer.posts)
  const [localPosts, setLocalPosts] = useState([])
  const imageUser = useSelector((state) => state.userReducer.meProfile.image)
  const name = useSelector((state) => state.userReducer.meProfile.name)
  const surname = useSelector((state) => state.userReducer.meProfile.surname)

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

  const handleCreateActivity = () => {
    setCurrentActivity(null)
    setFormData({ text: '', image: '' })
    setShowModal(true)
  }

  const handleSaveActivity = async () => {
    if (currentActivity !== null) {
      const activityId = localPosts[currentActivity]._id
      try {
        await dispatch(updatePost(activityId, formData))
        setLocalPosts((prev) =>
          prev.map((activity, index) =>
            index === currentActivity ? { ...activity, ...formData } : activity
          )
        )
        setShowModal(false)
      } catch (error) {
        console.error("Errore nell'aggiornamento del post:", error)
      }
    } else {
      try {
        const newPost = await dispatch(createPost(formData))
        setLocalPosts((prev) => [...prev, newPost])
        setShowModal(false)
      } catch (error) {
        console.error('Errore nella creazione del post:', error)
      }
    }
  }

  return (
    <Card className="p-2 mt-4">
      <Card.Body>
        <Form>
          <Row className="w-100 d-flex align-items-center ">
            <Col xs="auto">
              <Link to="/profile">
                <img
                  src={imageUser}
                  alt="avatar"
                  width="60px"
                  className="rounded-circle"
                />
              </Link>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Crea un post"
                className="rounded-5 py-2 px-3 w-100 bg border border-1 border-black"
                onClick={handleCreateActivity}
              />
            </Col>
          </Row>
        </Form>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title className=" fs-4">
              <img
                src={imageUser}
                alt="avatar"
                width="60px"
                className="rounded-circle me-2 border border-1 border-black"
              />
              {name} {surname}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className=" border-0">
            <Form>
              <Form.Group className="mb-3" controlId="formText">
                <Form.Label className=" d-flex align-items-center">
                  <FaPen className="me-1 text-muted" />
                  Testo
                </Form.Label>
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
                <Form.Label className=" d-flex align-items-center">
                  <FaImage size={20} className="me-1 text-muted" />
                  URL immagine
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci l'URL dell'immagine"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
                <InputGroup className="mt-3">
                  <FormControl
                    type="search"
                    placeholder="Cerca immagine"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => fetchRandomImage(searchTerm)}
                  >
                    Cerca
                  </Button>
                </InputGroup>
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
          <Modal.Footer className=" border-0 pt-1 pb-3">
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Annulla
            </Button>
            <Button variant="primary" onClick={handleSaveActivity}>
              Pubblica
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  )
}

export default CreatePost
