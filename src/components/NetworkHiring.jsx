import { Card, ListGroup, Button } from 'react-bootstrap';

function NetworkHiring() {
  return (
    <Card className="mb-4">
      <Card.Header as="h5">Assunzioni nella tua rete</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <h6>Receptionist di Centro Odontoiatrico</h6>
          <p>Centri Dentistici Primo</p>
          <p><small>Aosta, Valle d'Aosta, Italia (In sede)</small></p>
          <Button variant="link">Candidatura semplice</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Impiegato amministrativo</h6>
          <p>TÜV AUSTRIA Italia</p>
          <p><small>Piacenza, Emilia Romagna, Italia (In sede)</small></p>
          <Button variant="link">Candidatura semplice</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Administration Intern</h6>
          <p>Publicis Media</p>
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

export default NetworkHiring;
