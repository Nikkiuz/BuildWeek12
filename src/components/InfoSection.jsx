import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Image, Row, Spinner, Alert } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { fetchMeProfile } from "../redux/actions/userAction"; // Importa l'action corretta

const InfoSection = () => {
  const dispatch = useDispatch();

  // Recupero dati dallo store Redux
  const profile = useSelector((state) => state.meProfile); // Assumendo che "profile" contenga il profilo personale
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  // Chiamata API al montaggio del componente
  useEffect(() => {
    dispatch(fetchMeProfile());
  }, [dispatch]);

  // Stato di caricamento
  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  // Stato di errore
  if (error) {
    return (
      <div className="text-center mt-5">
        <Alert variant="danger">Errore: {error}</Alert>
      </div>
    );
  }

  console.log("PROVA FILA : ", profile);

  // Stato principale: visualizzazione dei dati
  return (
    <Card.Body className="position-relative">
      <Row>
        <Button className="editIcon">
          <AiOutlineEdit
            style={{
              color: "#181818",
              width: "35px",
              height: "35px",
            }}
          />
        </Button>
        <Col sm={6} className="mt-5">
          <h3 className="mb-0">
            {profile?.name + " " + profile?.surname || "Nome Cognome"}
          </h3>
          <p className="fw-light mt-0 mb-1">
            {profile?.title || "Posizione Lavorativa"}
          </p>
          <p className="fw-light mt-0">{profile?.area || "Posizione"}</p>
        </Col>
        <Col sm={6} className="mt-5 text-center">
          <Row className="flex-column">
            {profile?.education?.map((edu, index) => (
              <Col key={index} className="d-flex align-items-center mb-2">
                <Image
                  className="rounded-circle"
                  src={edu.image || "https://placedog.net/40/40"}
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="ms-2">{edu.school || "SCUOLA"}</span>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row className="align-content-start">
        <Col className="d-flex justify-content-start">
          <Button className="rounded-pill me-2 pt-1 pb-1 shadow">
            Attività
          </Button>
          <Button className="rounded-pill me-2 pt-1 pb-1 shadow">
            Esperienze
          </Button>
          <Button className="rounded-pill me-2 pt-1 pb-1 shadow">
            Formazione
          </Button>
        </Col>
      </Row>
    </Card.Body>
  );
};

export default InfoSection;
