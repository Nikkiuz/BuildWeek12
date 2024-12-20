import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreatePost from "../components/CreatePost";
import PostersHome from "../components/PostersHome";
import LeftSidebarHome from "../components/LeftSidebarHome";
import RightSidebarHome from "../components/RightSidebarHome";
import FooterRight from "../components/FooterRight";
import MyNav from "../components/MyNav";

const Home = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <>
      <header>
        <MyNav visible={isSearchVisible} />
      </header>
      <Container className="px-0">
        <Row className="m-0 p-0">
          <Col md={4} lg={3} className="d-none d-md-block">
            <LeftSidebarHome />
          </Col>
          <Col xs={12} md={8} lg={6}>
            <div className="d-md-none d-flex justify-content-center mb-3">
              <LeftSidebarHome />
            </div>
            <CreatePost />
            <PostersHome />
            <div className="d-lg-none">
              <FooterRight />
            </div>
          </Col>
          <Col lg={3} className="d-none d-lg-block">
            <RightSidebarHome />
            <div className="d-none d-lg-block">
              <FooterRight />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
