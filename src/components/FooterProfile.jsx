import { Row, Col, Nav, Dropdown, Container } from 'react-bootstrap'
import { FaShieldAlt } from 'react-icons/fa'
import { FaCircleQuestion } from 'react-icons/fa6'
import { IoMdSettings } from 'react-icons/io'

const FooterProfile = () => {
  return (
    <>
      <hr></hr>
      <Container>
        <Row className="mt-5 text-start">
          <Col md={2}>
            <Nav className="small flex-column">
              <Nav.Link href="#" className="nav-link-custom">
                Informazioni
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                Informazioni sulla community professionale
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                Privacy e Condizioni
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                Sales Solutions
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                Centro sicurezza
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={2}>
            <Nav className="small flex-column">
              <Nav.Link href="#" className="nav-link-custom">
                Accessibilità
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                Carriera
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                Opzioni per gli annunci pubblicitari
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                Mobile
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={2}>
            <Nav className="small flex-column">
              <Nav.Link href="#" className="nav-link-custom">
                Talent Solutions
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                Soluzioni di marketing
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                Pubblicità
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                Piccole imprese
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <Nav className="small flex-column">
              <div className="d-flex">
                <FaCircleQuestion size={20} className="align-baseline" />
                <div className="ms-2">
                  <h6 className="mb-0 nav-link-custom">Domande?</h6>
                  <p className=" text-muted">Centro assistenza</p>
                </div>
              </div>
              <div className="d-flex">
                <IoMdSettings size={20} className="align-baseline" />
                <div className="ms-2">
                  <h6 className="mb-0 nav-link-custom">
                    Gestisci il tuo account e la tua privacy
                  </h6>
                  <p className=" text-muted">Vai alle impostazioni</p>
                </div>
              </div>
              <div className="d-flex">
                <FaShieldAlt size={20} className="align-baseline" />
                <div className="ms-2">
                  <h6 className="mb-0 nav-link-custom">
                    Trasparenza sui contenuti consigliati
                  </h6>
                  <p className=" text-muted">
                    Scopri di più dui conenuti consigliati.
                  </p>
                </div>
              </div>
            </Nav>
          </Col>
          <Col md={3} className="text-start">
            <p className="mb-1 mt-2 small">Seleziona lingua</p>
            <Dropdown drop="up" className=" bg-light">
              <Dropdown.Toggle
                variant="outline-dark"
                id="dropdown-language"
                size="sm"
                className="w-100 text-start d-flex justify-content-between align-items-center"
              >
                Italiano
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">English</Dropdown.Item>
                <Dropdown.Item href="#">Italiano</Dropdown.Item>
                <Dropdown.Item href="#">Español</Dropdown.Item>
                <Dropdown.Item href="#">Français</Dropdown.Item>
                <Dropdown.Item href="#">Deutsch</Dropdown.Item>
                <Dropdown.Item href="#">Português</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={12} className="mt-3 mx-2 text-center">
            <p className="small">
              LinkedIn Corporation &copy; {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FooterProfile
