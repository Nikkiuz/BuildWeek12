import { Alert, Button, Card, Container, Spinner } from 'react-bootstrap'
import { AiOutlineEdit } from 'react-icons/ai'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMeProfile } from '../redux/actions/userAction'

const MyBio = () => {
  const dispatch = useDispatch()

  // Recupero dati dallo store Redux
  const profile = useSelector((state) => state.userReducer.meProfile) // Assumendo che "profile" contenga il profilo personale
  const loading = useSelector((state) => state.userReducer.loading)
  const error = useSelector((state) => state.userReducer.error)

  // Chiamata API al montaggio del componente
  useEffect(() => {
    dispatch(fetchMeProfile())
  }, [dispatch])

  // Stato di caricamento
  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }

  // Stato di errore
  if (error) {
    return (
      <div className="text-center mt-5">
        <Alert variant="danger">Errore: {error}</Alert>
      </div>
    )
  }

  console.log('PROVA FILA : ', profile)
  return (
    <Container>
      <Card className=" d-flex mt-4" style={{ backgroundColor: 'white' }}>
        <Card.Header className="d-flex align-items-center">
          <span className="fw-bold">Informazioni</span>
          <div className="ms-auto">
            <Button className="border-0" style={{ backgroundColor: '#F8F8F8' }}>
              <AiOutlineEdit
                className="text-black"
                style={{
                  width: '35px',
                  height: '35px',
                }}
              />
            </Button>
          </div>
        </Card.Header>
        <Card.Body>{profile?.bio || 'Biografia'}</Card.Body>
      </Card>
    </Container>
  )
}

export default MyBio
