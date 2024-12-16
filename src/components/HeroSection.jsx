import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import InfoSection from './InfoSection'
import { AiFillCamera } from 'react-icons/ai'

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
          <Col className="position-absolute" style={{ top: 115, left: 30 }}>
            <Image
              src="https://placedog.net/180/180"
              className="rounded-circle"
              style={{ border: '5px solid white', width: '190', height: '190' }}
            />
          </Col>
          <Button
            className=" position-absolute rounded-circle d-flex bg-white border-0 p-0 justify-content-center align-content-around"
            style={{ width: '30px', height: '30px', left: 1090, top: 20 }}
          >
            <AiFillCamera
              style={{
                color: '#2A6097',
                width: '18px',
                height: '18px',
                margin: '5px',
              }}
            />
          </Button>
        </Card>
      </Row>
    </Container>
  )
}

export default HeroSection
