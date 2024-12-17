import { Col, Container, Row } from 'react-bootstrap'
import CreatePost from '../components/CreatePost'
import PostersHome from '../components/PostersHome'
import FooterHome from '../components/FooterHome'

const Home = () => {
  return (
    <Container>
      <Row className="m-0 p-0">
        <Col md={9}>
          <CreatePost />
          <PostersHome />
          <FooterHome />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
