import { useEffect, useState } from 'react'
import { Button, Card, Container, Modal, Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../redux/actions/userAction'
import { FaPen } from 'react-icons/fa'

const MyBio = () => {
  const [showModal, setShowModal] = useState(false)
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const profile = useSelector((state) => state.userReducer.meProfile)
  const loading = useSelector((state) => state.userReducer.loading)

  useEffect(() => {
    if (profile) {
      setDescription(profile.bio || '') // Usa `bio` se è così che viene chiamato
    }
  }, [profile])

  const handleSave = () => {
    dispatch(updateProfile({ bio: description })) // Manda l'aggiornamento del campo `bio`
    setShowModal(false)
  }

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }

  return (
    <Container>
      <Card className="mt-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <span className="fw-bolder">Biografia</span>
          <Button
            className="bg-light border-0"
            onClick={() => setShowModal(true)}
          >
            <FaPen className=" text-black" />
          </Button>
        </Card.Header>
        <Card.Body>
          {profile?.bio || 'Nessuna biografia disponibile.'}
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Biografia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default MyBio
