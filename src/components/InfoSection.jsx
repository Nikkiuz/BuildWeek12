import { Card, Col, Image, Row } from 'react-bootstrap'

const InfoSection = () => {
  return (
    <Card.Body>
      <Row>
        <Col sm={6} className="mt-5">
          <h3 className="mb-0">Nome Cognome</h3>
          <p className="fw-ligh mt-0 mb-1">Posizione Lavorativa</p>
          <p className="fw-light mt-0">Posizione</p>
        </Col>
        <Col sm={6} className="mt-5 text-center">
          <Image
            className="rounded-circle"
            src="https://placedog.net/40/40"
            style={{ width: '40px', height: '40px' }}
          >
          </Image>
            <span className='ms-2'>SCUOLA</span>
        </Col>
        

      </Row>
    </Card.Body>
  )
}

export default InfoSection
