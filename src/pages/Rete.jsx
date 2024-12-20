import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyNav from "../components/MyNav";

const Rete = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <>
      <header>
        <MyNav visible={isSearchVisible} />
      </header>
      <Container>
        <Row>
          <Col>
            <h1>Working</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rete;
