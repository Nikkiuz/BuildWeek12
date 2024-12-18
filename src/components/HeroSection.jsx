import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Modal,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import InfoSection from "./InfoSection";
import { AiFillCamera } from "react-icons/ai";
import "../assets/css/HeroSection.css";
import imgCasuale from "../services/ImgPexels";
import {
  fetchMeProfile,
  updateCopertinaProfile,
  updateProfile,
} from "../redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";

//CHIEDERE A STEFANO COME FARE CON L'IMMAGINE PROFILO

const HeroSection = () => {
  const [urlImgCopertina, setUrlImgCopertina] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const copertinaProfileUrl = useSelector((state) => state.copertinaProfileUrl);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const fetchRandomImage = (query) => {
    const indexRandom = Math.floor(Math.random() * 11);
    imgCasuale(query)
      .then((arrayImg) => {
        const url = arrayImg[indexRandom]?.src?.large || "";
        setUrlImgCopertina(url);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dell'immagine:", error);
      });
  };

  const setNewImgBackGround = () => {
    if (urlImgCopertina) {
      console.log("Nuova immagine per copertina:", urlImgCopertina);
      dispatch(updateCopertinaProfile(urlImgCopertina));
    }
  };

  useEffect(() => {
    console.log("Stato aggiornato copertinaProfileUrl:", copertinaProfileUrl);
  }, [copertinaProfileUrl]);

  return (
    <Container className="rounded mt-3">
      <Row>
        <Col>
          <Card className="p-0 position-relative">
            <Card.Img
              variant="top"
              src={copertinaProfileUrl}
              style={{ height: "200px", width: "100%", objectFit: "cover" }}
            />
            <InfoSection />
            <Col className="profileDiv">
              <Image
                src="https://placedog.net/180/180"
                className="rounded-circle profilePic"
                style={{ border: "5px solid white" }}
              />
            </Col>
            <Col>
              <Button className="cameraProfile rounded-circle">
                <AiFillCamera
                  style={{
                    color: "#2A6097",
                    width: "18px",
                    height: "18px",
                    margin: "5px",
                  }}
                />
              </Button>
            </Col>
            <Col>
              <Button
                onClick={handleShowModal}
                className="cameraIcon rounded-circle"
              >
                <AiFillCamera
                  style={{
                    color: "#2A6097",
                    width: "18px",
                    height: "18px",
                    margin: "5px",
                  }}
                />
              </Button>
            </Col>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Immagine Random</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {urlImgCopertina ? (
            <Image
              src={urlImgCopertina}
              alt="Immagine casuale"
              fluid
              className="mb-3"
            />
          ) : (
            <p>Caricamento immagine...</p>
          )}
          <Form className="d-flex mt-3">
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Cerca"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                variant="outline-primary"
                onClick={() => fetchRandomImage(searchTerm)}
              >
                Cerca
              </Button>
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              setNewImgBackGround();
              handleCloseModal();
            }}
          >
            Salva
          </Button>
          <Button variant="danger" onClick={handleCloseModal}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default HeroSection;
