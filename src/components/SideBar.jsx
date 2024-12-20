import { useEffect } from 'react'
import {
  Card,
  Button,
  ListGroup,
  Container,
  Row,
  Col,
  Spinner,
  Alert,
} from 'react-bootstrap'
import { FaPen } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProfiles } from '../redux/actions/userAction'

const Sidebar = () => {
  const dispatch = useDispatch()

  // Recupero dei dati dallo store Redux
  const meProfile = useSelector((state) => state.userReducer.meProfile)
  const allProfile = useSelector((state) => state.userReducer.allProfile)
  const loading = useSelector((state) => state.userReducer.loading)
  const error = useSelector((state) => state.userReducer.error)

  let lastActivity = useSelector((state) => state.postsReducer.posts)
  lastActivity = lastActivity[lastActivity.length - 1]

  useEffect(() => {
    dispatch(fetchAllProfiles())
  }, [dispatch])

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

  console.log('STAMPA TUTTO DENTRO COMPONENTE : ', allProfile[1])
  console.log('PROVAAA 123', lastActivity)

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className="sidebar">
            {/* Lingua del profilo */}
            <Card className="mb-3">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="fw-bold">Lingua del profilo</h6>
                  <p className="mb-0">Italiano</p>
                </div>
                <a href="#" className="text-decoration-none text-primary">
                  <FaPen
                    className="text-black ms-4"
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                </a>
              </Card.Body>
            </Card>

            {/* Profilo pubblico */}
            <Card className="mb-3">
              <Card.Body className="d-flex flex-column">
                <h6 className="fw-bold">Profilo pubblico e URL</h6>
                <p className="mb-0 small">
                  <a
                    href={`https://www.linkedin.com/in/${meProfile.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    {`https://www.linkedin.com/in/
                     ${meProfile.email}`}
                  </a>
                </p>
              </Card.Body>
            </Card>

            {/* Annuncio Promozionale */}
            <Card className="promo mb-3">
              <Card.Header>Attività Recenti:</Card.Header>
              <Card.Body className="text-center">
                {lastActivity && lastActivity.image ? (
                  <div className="rounded-2">
                    <img
                      src={lastActivity.image}
                      alt="Ultima Attività"
                      className="img-fluid mb-2 rounded-2"
                    />
                  </div>
                ) : (
                  <div className="placeholder-image mb-2 border-2">
                    Nessuna immagine disponibile
                  </div>
                )}
                <p className="mb-1 fw-bold">
                  {lastActivity?.text || 'Nessuna attività recente'}
                </p>
              </Card.Body>
            </Card>

            {/* Persone che potresti conoscere */}

            <Card className="mb-3">
              <Card.Header>Altre visualizzazioni</Card.Header>
              <ListGroup variant="flush">
                {allProfile.slice(0, 3).map((person) => (
                  <ListGroup.Item key={person._id} className="d-flex ">
                    <img
                      src={person.image}
                      alt={`Profilo di ${person.name}`}
                      className="me-3  rounded-circle"
                      style={{ width: '48px', height: '48px' }}
                    />
                    <div className="d-lg-flex align-items-lg-center justify-content-lg-end d-md-flex flex-md-column">
                      <h6 className="mb-0">{person.name}</h6>
                      <small>{person.title}</small>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="ms-auto mt-3"
                      >
                        Collegati
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>

            <Card className="mb-3">
              <Card.Header>Persone che potresti conoscere</Card.Header>
              <ListGroup variant="flush">
                {allProfile.slice(4, 11).map((person) => (
                  <ListGroup.Item
                    key={person._id}
                    className="d-flex align-items-center"
                  >
                    <img
                      src={person.image}
                      alt={`Profilo di ${person.name}`}
                      className="me-3 rounded-circle"
                      style={{ width: '48px', height: '48px' }}
                    />
                    <div>
                      <h6 className="mb-0">{person.name}</h6>
                      <small>{person.title}</small>
                    </div>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="ms-auto"
                    >
                      Collegati
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Sidebar
