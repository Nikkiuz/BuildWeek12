import { Row, Col, Nav } from 'react-bootstrap'

const FooterProfile = () => {
  return (
    <Row className="text-center">
      <Col>
        <Nav className="justify-content-center flex-wrap small">
          <Nav.Link href="#" className="nav-link-custom">
            Informazioni
          </Nav.Link>
          <Nav.Link href="#" className="nav-link-custom">
            Accessibilità
          </Nav.Link>
          <Nav.Link href="#" className="nav-link-custom">
            Centro Assistenza
          </Nav.Link>
          <Nav.Link href="#" className="nav-link-custom">
            Privacy e Condizioni
          </Nav.Link>
          <Nav.Link href="#" className="nav-link-custom">
            Opzioni per gli annunci pubblicitari
          </Nav.Link>
          <Nav.Link href="#" className="nav-link-custom">
            Pubblicità
          </Nav.Link>
          <Nav.Link href="#" className="nav-link-custom">
            Servizi alle aziende
          </Nav.Link>
          <Nav.Link href="#" className="nav-link-custom">
            Opzioni cookie
          </Nav.Link>
        </Nav>
        <div className="mt-2 d-flex justify-content-center">
          <p className=" d-flex align-items-center">
            <span className=" text-primary">Linked</span>
            LinkedIn Corporation &copy;{new Date().getFullYear()}
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default FooterProfile
