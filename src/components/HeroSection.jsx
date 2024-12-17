import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import InfoSection from './InfoSection'
import { AiFillCamera } from 'react-icons/ai'
import '../assets/css/HeroSection.css'

const HeroSection = () => {
  return (
    <Container className=" rounded mt-3">
      <Row>
        <Col>
          <Card className="p-0 position-relative">
            <Card.Img
              variant="top"
              src="https://placedog.net/935/200"
              style={{ height: '200', width: '100%' }}
            />
            <InfoSection />
            <Col className="profileDiv">
              <Image
                src="https://placedog.net/180/180"
                className="rounded-circle profilePic"
                style={{
                  border: '5px solid white',
                }}
              />
            </Col>
            <Col>
              <Button className=" cameraProfile rounded-circle">
                <AiFillCamera
                  style={{
                    color: '#2A6097',
                    width: '18px',
                    height: '18px',
                    margin: '5px',
                  }}
                />
              </Button>
            </Col>
            <Col>
              <Button className="cameraIcon rounded-circle">
                <AiFillCamera
                  style={{
                    color: '#2A6097',
                    width: '18px',
                    height: '18px',
                    margin: '5px',
                  }}
                />
              </Button>
            </Col>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroSection
