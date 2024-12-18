import { Col, Container, Row } from 'react-bootstrap'
import CreatePost from '../components/CreatePost'
import PostersHome from '../components/PostersHome'
import FooterHome from '../components/FooterHome'
import LeftSidebarHome from '../components/LeftSidebarHome'
import RightSidebarHome from '../components/RightSidebarHome'

const Home = () => {
  return (
    <Container>
      <Row className="m-0 p-0">
        <Col md={3} className=" d-none d-md-block">
          <LeftSidebarHome />
        </Col>
        <Col xs={12} md={9} lg={6}>
          <div className="d-md-none d-flex justify-content-center mb-3">
            <LeftSidebarHome />
          </div>
          <CreatePost />
          <PostersHome />
          <div className=" d-lg-none">
            <FooterHome />
          </div>
        </Col>
        <Col lg={3} className=" d-none d-lg-block">
          <RightSidebarHome />
          <div className=" d-none d-lg-block">
            <FooterHome />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
