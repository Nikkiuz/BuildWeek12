import { useState } from "react";
import { Link } from "react-router";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  InputGroup,
} from "react-bootstrap";
import { FaSearch, FaBriefcase, FaHome, FaUserFriends } from "react-icons/fa";

import logo from "../assets/logos/linkedin.png";

import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../redux/reducers/searchReducer";

const MyNav = ({ visible }) => {
  const [InputSearch, setInputSearch] = useState(false);

  const handleSearchExpand = () => {
    setInputSearch(true);
  };

  const handleSearchCollapse = () => {
    setInputSearch(false);
  };

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const imageUser = useSelector((state) => state.userReducer.meProfile.image);
  const name = useSelector((state) => state.userReducer.meProfile.name);
  const surname = useSelector((state) => state.userReducer.meProfile.surname);

  return (
    <Navbar className="bg-white d-flex justify-content-center align-items-center my-0 py-0">
      <Container className="mx-0">
        {/* LOGO */}
        <Navbar.Brand className="d-flex align-items-center">
          <img src={logo} alt="logo" width="40px" />
        </Navbar.Brand>

        {/* SEARCH SECTION */}
        {visible && (
          <div className="flex-grow">
            {/* SEARCH - LG SCREEN */}
            <Form className="d-none d-lg-flex w-100">
              <InputGroup className="border rounded-1 d-flex">
                <InputGroup.Text className="border-0 bg-white">
                  <FaSearch className="border-0 text-muted" />
                </InputGroup.Text>
                <FormControl
                  type="search"
                  aria-label="Search"
                  placeholder="Cerca"
                  className="border-0 shadow-none"
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Form>

            {/* SEARCH - MD SCREEN */}
            {InputSearch ? (
              <div className="position-absolute top-0 start-0 w-100 bg-light p-3 d-flex align-items-center d-md-flex d-lg-none z-1">
                <Navbar.Brand className="me-3">
                  <img src={logo} alt="logo" width="40px" />
                </Navbar.Brand>
                <Form className="d-flex flex-grow-1">
                  <InputGroup className="border rounded-1 d-flex">
                    <InputGroup.Text className="border-0 bg-white">
                      <FaSearch className="border-0 text-muted" />
                    </InputGroup.Text>
                    <FormControl
                      type="search"
                      aria-label="Search"
                      placeholder="Cerca"
                      className="border-0 shadow-none"
                      onChange={handleInputChange}
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={handleSearchCollapse}
                      className=" border-0"
                    >
                      Chiudi
                    </Button>
                  </InputGroup>
                </Form>
              </div>
            ) : (
              <Nav.Link
                className="d-flex flex-column align-items-center me-4 d-md-flex d-lg-none"
                onClick={handleSearchExpand}
              >
                <FaSearch size={28} className="mb-1 text-muted" />
                <span className="fs-6 d-none d-lg-block">Cerca</span>
              </Nav.Link>
            )}
          </div>
        )}

        {/* NAVIGATION */}
        <Nav className="d-flex justify-content-center flex-grow-1 me-lg-5">
          <Link
            to={"/"}
            className="nav-link d-flex flex-column align-items-center me-4"
          >
            <FaHome size={30} className="mb-1" />
            <span className="fs-6 d-none d-lg-block">Home</span>
          </Link>
          <Link
            to={"/rete"}
            className="nav-link d-flex flex-column align-items-center me-4"
          >
            <FaUserFriends size={30} className="mb-1" />
            <span className="fs-6 d-none d-lg-block">Rete</span>
          </Link>
          <Link
            to={"/lavoro"}
            className="nav-link d-flex flex-column align-items-center me-4"
          >
            <FaBriefcase size={30} className="mb-1" />
            <span className="fs-6 d-none d-lg-block">Lavoro</span>
          </Link>
        </Nav>

        {/* PROFILE SECTION */}
        <Button className="d-flex flex-lg-column align-items-center bg-transparent text-dark border-0">
          <Link to={"/profile"}>
            <img
              src={imageUser}
              alt="avatar"
              width="35px"
              className="rounded-circle bg-black"
            />
          </Link>
          <div className="d-flex mx-auto">
            <span className="d-none d-lg-block">Tu</span>
            <NavDropdown align="end" className="ms-1">
              <div className="d-flex flex-column">
                <Link
                  to={"/profile"}
                  className="nav-link me-2 d-flex align-items-center"
                >
                  <img
                    src={imageUser}
                    alt="avatar"
                    width="50px"
                    className="rounded-circle mx-2 bg-black"
                  />
                  {name} {surname}
                </Link>
                <Link to={"/profile"}>
                  <Button
                    variant="outline-primary"
                    className="px-5 py-0 rounded-5 mx-2 mt-2"
                  >
                    Visualizza profilo
                  </Button>
                </Link>

                <NavDropdown.Divider className="d-flex flex-column" />
                <NavDropdown.Item className="fw-bold">Account</NavDropdown.Item>
                <Link to={"/"} className="dropdown-item">
                  Impostazioni e privacy
                </Link>
                <Link to={"/"} className="dropdown-item">
                  Guida
                </Link>
                <Link to={"/"} className="dropdown-item">
                  Lingua
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item className="fw-bold">
                  Gestisci
                </NavDropdown.Item>
                <Link to={"/"} className="dropdown-item">
                  Post e attività
                </Link>
                <Link to={"/"} className="dropdown-item">
                  Account per la pubblicazione
                </Link>
                <NavDropdown.Divider />
                <Link to={"/"} className="dropdown-item">
                  Esci
                </Link>
              </div>
            </NavDropdown>
          </div>
        </Button>
      </Container>
    </Navbar>
  );
};

export default MyNav;
