import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import InfoSection from './InfoSection'

const HeroSection = () => {
  return (
    <Container className="position-relative rounded mt-3 ms-5">
      <Row>
        <Card className="p-0">
          <Card.Img
            variant="top"
            src="https://placedog.net/935/200"
            style={{ height: '200', width: '100%' }}
          />
          <InfoSection />
          <Col className="position-absolute" style={{ top: 120, left: 30 }}>
            <Image
              src="https://placedog.net/170/180"
              className="rounded-circle"
              style={{ border: '5px solid white' }}
            />
          </Col>
        </Card>
      </Row>
    </Container>
  )
}

export default HeroSection
