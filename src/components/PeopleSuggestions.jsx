import { Card, Button, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllProfiles } from "../redux/actions/userAction";

function PeopleSuggestions() {
  const allProfile = useSelector((state) => state.userReducer.allProfile);
  const loading = useSelector((state) => state.userReducer.loading);
  const error = useSelector((state) => state.userReducer.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProfiles());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <Alert variant="danger">Errore: {error}</Alert>
      </div>
    );
  }

  return (
    <Card className="p-4 mb-4">
      <Card.Title as="h4" className="mb-4">
        Persone che potresti conoscere:
      </Card.Title>
      <Row>
        {allProfile.map((profile) => (
          <Col xs={12} md={6} lg={4} key={profile._id} className="mb-4">
            <Card className="h-100 text-center shadow-sm card-hover">
              <Card.Img
                variant="top"
                src={profile.image || "https://via.placeholder.com/120"}
                className="rounded-circle mx-auto mt-4"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  border: "4px solid #e7e7e7",
                }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title as="h5" className="mb-2">
                    {profile.name} {profile.surname}
                  </Card.Title>
                  <Card.Text
                    className="text-muted"
                    style={{ fontSize: "1rem", marginBottom: "1rem" }}
                  >
                    {profile.title || "Titolo non disponibile"}
                  </Card.Text>
                </div>
                <div className="flex-grow-1 d-flex align-items-end">
                  <Button variant="primary" className="w-100">
                    Collegati
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
}

export default PeopleSuggestions;
