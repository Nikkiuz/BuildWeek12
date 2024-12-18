import { Col, Container, Row } from 'react-bootstrap'
import SidebarJob from '../components/SidebarJob'
import CardJob from '../components/CardJob'
import FooterJob from '../components/FooterJob'

const Lavoro = () => {
  return (
    <>
      <Container className="py-4">
        <Row className="justify-content-end">
          <Col md={4} lg={3} className="d-none d-md-flex">
            <SidebarJob />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6}>
            <div className="d-md-none d-flex justify-content-center mb-3">
              <SidebarJob />
            </div>
            <CardJob />
          </Col>
          <Col lg={3} className="d-none d-lg-block">
            <FooterJob />
          </Col>
        </Row>
      </Container>
      {/* <FooterProfile /> */}
    </>
  )
}

export default Lavoro
