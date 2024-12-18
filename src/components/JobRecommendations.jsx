import { Card, ListGroup, Button } from 'react-bootstrap';

function JobRecommendations() {
  return (
    <Card className="mb-4">
      <Card.Header as="h5">Le principali offerte di lavoro per te</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <h6>Assistente amministrativo</h6>
          <p>Effebi Association</p>
          <p><small>Roma, Lazio, Italia (In sede)</small></p>
          <Button variant="link">Candidatura semplice</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Segretaria Amministrativa</h6>
          <p>BePop</p>
          <p><small>Roma, Lazio, Italia (In sede)</small></p>
          <Button variant="link">Candidatura semplice</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Front Desk Receptionist</h6>
          <p>Aviomar Flight Academy</p>
          <p><small>Roma, Lazio, Italia (In sede)</small></p>
          <Button variant="link">Candidatura semplice</Button>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer className="text-center">
        <Button variant="outline-primary">Mostra tutto</Button>
      </Card.Footer>
    </Card>
  );
}

export default JobRecommendations;
