import { Card, Image, Col } from "react-bootstrap";
import "../assets/css/App.css";
import { FaBookmark } from "react-icons/fa";
import { PiPlus } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LeftSidebarHome = () => {
  const imageUser = useSelector((state) => state.userReducer.meProfile.image);
  const name = useSelector((state) => state.userReducer.meProfile.name);
  const surname = useSelector((state) => state.userReducer.meProfile.surname);
  const tittleUser = useSelector((state) => state.userReducer.meProfile.title);
  const imageCopertina = useSelector(
    (state) => state.userReducer.copertinaProfileUrl
  );

  return (
    <div className="d-flex flex-column w-100">
      <Card className="rounded-3 mt-4">
        <Card.Header className="p-0 position-relative">
          <Card.Img
            variant="top"
            src={imageCopertina}
            alt="Copertina"
            style={{ height: "150px", objectFit: "cover" }}
          />
          <Col className="position-absolute top-100 start-50 translate-middle">
            <Image
              src={imageUser || "https://via.placeholder.com/75"}
              alt="Profile"
              roundedCircle
              width="75px"
              height="75px"
              style={{
                objectFit: "cover",
                border: "3px solid white",
                background: "black",
              }}
            />
          </Col>
        </Card.Header>
        <Card.Body className="text-center mt-4">
          <Link to="/profile" className="text-decoration-none text-black">
            <Card.Title className="mb-1">
              {name} {surname}
            </Card.Title>
          </Link>
          <Card.Text className="small text-muted">{tittleUser}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text className="small mb-1">
            Visitatori del profilo: <span className="text-primary">1,5</span>
          </Card.Text>
          <Card.Text className="small">
            Impressioni del post: <span className="text-primary">-0,5</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
          <Card.Text className="small d-flex align-items-center py-1 nav-link-custom2">
            <FaBookmark size={15} className="me-2 text-muted" /> Elementi
            salvati
          </Card.Text>
        </Card.Footer>
      </Card>

      <Card className="mt-2">
        <Card.Body>
          <Card.Text className="text-primary small mb-2 nav-link-custom">
            Gruppi
          </Card.Text>
          <Card.Text className="text-primary small d-flex justify-content-between align-items-center nav-link-custom">
            Eventi <PiPlus className="text-black" />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white text-center">
          <Card.Text className="text-primary small nav-link-custom">
            Scopri di più
          </Card.Text>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default LeftSidebarHome;
