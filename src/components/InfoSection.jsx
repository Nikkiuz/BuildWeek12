import { Button, Card, Col, Image, Row } from 'react-bootstrap'
import { AiOutlineEdit } from 'react-icons/ai'

const InfoSection = () => {
  return (
    <Card.Body className="position-relative">
      <Row>
        <Button
          className=" position-absolute d-flex bg-white border-0 p-0 justify-content-center align-content-around"
          style={{ width: '40px', height: '40px', left: 1250, top: 15 }}
        >
          <AiOutlineEdit
            style={{
              color: '#181818',
              width: '35px',
              height: '35px',
            }}
          />
        </Button>
        <Col sm={6} className="mt-5">
          <h3 className="mb-0">Nome Cognome</h3>
          <p className="fw-ligh mt-0 mb-1">Posizione Lavorativa</p>
          <p className="fw-light mt-0">Posizione</p>
        </Col>
        <Col sm={6} className="mt-5 text-center">
          <Row className="flex-column">
            <Col className="mb-2">
              <Image
                className="rounded-circle"
                src="https://placedog.net/40/40"
                style={{ width: '40px', height: '40px' }}
              ></Image>
              <span className="ms-2">SCUOLA</span>
            </Col>
            <Col className="mb-2">
              <Image
                className="rounded-circle"
                src="https://placedog.net/40/40"
                style={{ width: '40px', height: '40px' }}
              ></Image>
              <span className="ms-2">SCUOLA</span>
            </Col>
            <Col>
              <Image
                className="rounded-circle"
                src="https://placedog.net/40/40"
                style={{ width: '40px', height: '40px' }}
              ></Image>
              <span className="ms-2">SCUOLA</span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="align-content-start">
        <Col className="d-flex justify-content-start">
          <Button className="rounded-pill me-2 pt-1 pb-1 shadow">
            Attività
          </Button>
          <Button className="rounded-pill me-2 pt-1 pb-1 shadow">Esperienze</Button>
          <Button className="rounded-pill me-2 pt-1 pb-1 shadow">Formazione</Button>
        </Col>
      </Row>
    </Card.Body>
  )
}

export default InfoSection
