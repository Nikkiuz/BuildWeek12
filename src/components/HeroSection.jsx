import { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Modal,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap'
import InfoSection from './InfoSection'
import { AiFillCamera } from 'react-icons/ai'
import '../assets/css/HeroSection.css'
import imgCasuale from '../services/ImgPexels'
import {
  updateCopertinaProfile,
  updateProfile,
} from '../redux/actions/userAction'
import { useSelector, useDispatch } from 'react-redux'

const HeroSection = () => {
  const [urlImg, setUrlImg] = useState('')
  const [customImgUrl, setCustomImgUrl] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const dispatch = useDispatch()

  const imgProfile = useSelector((state) => state.userReducer.meProfile.image)
  const copertinaProfileUrl = useSelector(
    (state) => state.userReducer.copertinaProfileUrl
  )

  const handleShowModal = (type) => {
    setModalType(type)
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
    setUrlImg('')
    setCustomImgUrl('')
    setSearchTerm('')
  }

  const fetchRandomImage = (query) => {
    const indexRandom = Math.floor(Math.random() * 11)
    imgCasuale(query)
      .then((arrayImg) => {
        const url = arrayImg[indexRandom]?.src?.large || ''
        setUrlImg(url)
      })
      .catch((error) => {
        console.error("Errore durante il recupero dell'immagine:", error)
      })
  }

  const handleSaveImage = () => {
    const finalUrl = customImgUrl || urlImg // Usa l'URL personalizzato se presente
    if (finalUrl) {
      if (modalType === 'background') {
        dispatch(updateCopertinaProfile(finalUrl))
      } else if (modalType === 'profile') {
        dispatch(updateProfile({ image: finalUrl }))
      }
      handleCloseModal()
    }
  }

  useEffect(() => {
    console.log('Stato aggiornato copertinaProfileUrl:', copertinaProfileUrl)
  }, [copertinaProfileUrl])

  return (
    <Container className="rounded mt-3">
      <Row>
        <Col>
          <Card className="p-0 position-relative">
            <Card.Img
              variant="top"
              src={copertinaProfileUrl}
              style={{ height: '200px', width: '100%', objectFit: 'cover' }}
            />
            <InfoSection />
            <Col className="profileDiv">
              <Image
                src={imgProfile}
                className="rounded-circle profilePic"
                style={{ border: '5px solid white', objectFit: 'cover' }}
              />
            </Col>
            <Col>
              <Button
                onClick={() => handleShowModal('profile')}
                className="cameraProfile rounded-circle"
              >
                <AiFillCamera
                  style={{
                    color: '#2A6097',
                    width: '18px',
                    height: '18px',
                    margin: '5px',
                  }}
                />
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => handleShowModal('background')}
                className="cameraIcon rounded-circle"
              >
                <AiFillCamera
                  style={{
                    color: '#2A6097',
                    width: '18px',
                    height: '18px',
                    margin: '5px',
                  }}
                />
              </Button>
            </Col>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === 'background'
              ? 'Modifica Copertina'
              : 'Modifica Immagine Profilo'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {customImgUrl ? (
            <Image
              src={customImgUrl}
              alt="Immagine URL personalizzato"
              fluid
              className="mb-3"
            />
          ) : urlImg ? (
            <Image src={urlImg} alt="Immagine casuale" fluid className="mb-3" />
          ) : (
            <p>Caricamento immagine...</p>
          )}
          <Form className="d-flex flex-column mt-3">
            <InputGroup className="mb-3">
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

            <FormControl
              type="url"
              placeholder="Inserisci URL immagine"
              value={customImgUrl}
              onChange={(e) => setCustomImgUrl(e.target.value)}
              className="mb-3"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSaveImage}>
            Salva
          </Button>
          <Button variant="danger" onClick={handleCloseModal}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default HeroSection
