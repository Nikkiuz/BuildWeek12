import { Card, Row, Col, Button } from 'react-bootstrap';

function JobCategories() {
  return (
    <Card className="mb-4">
      <Card.Header as="h5">Esplora le offerte di lavoro per categoria</Card.Header>
      <Card.Body>
        <Row className="g-3">
          <Col xs={6} md={3}>
            <Button variant="outline-secondary" className="w-100">Candidatura semplice</Button>
          </Col>
          <Col xs={6} md={3}>
            <Button variant="outline-secondary" className="w-100">Ibrido</Button>
          </Col>
          <Col xs={6} md={3}>
            <Button variant="outline-secondary" className="w-100">Part time</Button>
          </Col>
          <Col xs={6} md={3}>
            <Button variant="outline-secondary" className="w-100">Da remoto</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default JobCategories;
