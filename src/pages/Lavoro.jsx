import { Col, Container, Row } from 'react-bootstrap'
import SidebarJob from '../components/SidebarJob'
import CardJob from '../components/CardJob'

const Lavoro = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-end">
          <Col xs={12} lg={9}>
            <CardJob />
            <SidebarJob />
          </Col>
          <Col lg={3} className="d-none d-md-flex"></Col>
        </Row>
      </Container>
      {/* <FooterProfile /> */}
    </>
  )
}

export default Lavoro
