import { Col, Container, Row } from 'react-bootstrap'
import CreatePost from '../components/CreatePost'
import PostersHome from '../components/PostersHome'
import FooterHome from '../components/FooterHome'
import LeftSidebarHome from '../components/LeftSidebarHome'
import RightSidebarHome from '../components/RightSidebarHome'

const Home = () => {
  return (
    <Container className=" vh-100">
      <Row className="m-0 p-0">
        <Col md={3} className=" d-sm-none d-md-block">
          <LeftSidebarHome />
        </Col>
        <Col xs={12} md={9} lg={6}>
          <CreatePost />
          <PostersHome />
          <FooterHome />
        </Col>
        <Col lg={3} className=" d-none d-lg-block">
          <RightSidebarHome />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
