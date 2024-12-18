import { Col, Container, Row } from 'react-bootstrap'
import ActivitiesComponent from '../components/ActivitiesComponent'
import ExperienceComponent from '../components/ExperienceComponent'
import HeroSection from '../components/HeroSection'
import Sidebar from '../components/SideBar'
import FooterProfile from '../components/FooterProfile'
import MyBio from '../components/MyBio'

const Profile = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-end">
          <Col xs={12} lg={9}>
            <HeroSection />
            <MyBio />
            <ActivitiesComponent />
            <ExperienceComponent />
          </Col>
          <Col lg={3} className="d-none d-md-flex">
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <FooterProfile />
    </>
  )
}

export default Profile
