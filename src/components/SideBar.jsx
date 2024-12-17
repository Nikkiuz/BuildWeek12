import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, ListGroup, Container, Row, Col } from 'react-bootstrap'
import { FaPen } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className="sidebar">
            <Card className="mb-3">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="fw-bold">Lingua del profilo</h6>
                  <p className="mb-0">Italiano</p>
                </div>
                <a href="#" className="text-decoration-none text-primary">
                  <FaPen />
                </a>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="fw-bold">Profilo pubblico e URL</h6>
                  <p className="mb-0">
                    <a
                      href="https://www.linkedin.com/in/omar-abd-el-wahab-58a4511b6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      linkedin.com/in/omar-abd-el-wahab-58a4511b6
                    </a>
                  </p>
                </div>
                <a href="#" className="text-decoration-none text-primary">
                  <FaPen />
                </a>
              </Card.Body>
            </Card>

            <Card className="promo mb-3">
              <Card.Header>Promosso</Card.Header>
              <Card.Body className="text-center">
                <img
                  src="https://via.placeholder.com/200x100"
                  alt="Annuncio"
                  className="img-fluid mb-2"
                />
                <p className="mb-1">
                  Omar, scopri le opportunità offerte da Four Seasons
                </p>
                <Button variant="outline-primary" size="sm" className="w-100">
                  Segui
                </Button>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Header>Altre visualizzazioni</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center">
                  <img
                    src="https://via.placeholder.com/48"
                    alt="Profilo"
                    className="me-3"
                  />
                  <div>
                    <h6 className="mb-0">Maria Rossi</h6>
                    <small>Dottoressa in Ingegneria Informatica</small>
                  </div>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="ms-auto"
                  >
                    Messaggio
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <img
                    src="https://via.placeholder.com/48"
                    alt="Profilo"
                    className="me-3"
                  />
                  <div>
                    <h6 className="mb-0">Marica Crivello</h6>
                    <small>Performance Nutritionist</small>
                  </div>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="ms-auto"
                  >
                    Visualizza profilo
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mb-3">
              <Card.Header>Persone che potresti conoscere</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center">
                  <img
                    src="https://via.placeholder.com/48"
                    alt="Profilo"
                    className="me-3"
                  />
                  <div>
                    <h6 className="mb-0">Ephraim Saka</h6>
                    <small>Bachelors Degree in Philosophy</small>
                  </div>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="ms-auto"
                  >
                    Collegati
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <img
                    src="https://via.placeholder.com/48"
                    alt="Profilo"
                    className="me-3"
                  />
                  <div>
                    <h6 className="mb-0">Luigi Maria Cerotti</h6>
                    <small>Quality Manager at Palazzo Dama</small>
                  </div>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="ms-auto"
                  >
                    Collegati
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="promo mb-3">
              <Card.Header>Promosso</Card.Header>
              <Card.Body className="text-center">
                <img
                  src="https://via.placeholder.com/200x100"
                  alt="Annuncio"
                  className="img-fluid mb-2"
                />
                <p className="mb-1">
                  Omar, scopri le opportunità offerte da Four Seasons
                </p>
                <Button variant="outline-primary" size="sm" className="w-100">
                  Segui
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Sidebar
