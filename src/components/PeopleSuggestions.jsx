import { Card, Button, Row, Col } from 'react-bootstrap';

function PeopleSuggestions() {
  return (
    <Card className="p-3 mb-4">
      <Card.Title as="h4">Persone che potresti conoscere in Roma</Card.Title>
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/80" 
              className="rounded-circle mx-auto mt-3"
              style={{ width: '80px', height: '80px' }}
            />
            <Card.Body>
              <Card.Title as="h6">Nome Cognome</Card.Title>
              <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
                Titolo lavorativo o descrizione
              </Card.Text>
              <Card.Text className="text-muted" style={{ fontSize: '0.8rem' }}>
                Connessioni in comune o altre informazioni
              </Card.Text>
              <Button variant="primary" size="sm">
                Collegati
              </Button>
            </Card.Body>
          </Card>
        </Col>

        
      </Row>
    </Card>
  );
}

export default PeopleSuggestions;
