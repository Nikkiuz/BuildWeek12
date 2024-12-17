import { useState } from 'react'
import { Link } from 'react-router'
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  InputGroup,
} from 'react-bootstrap'
import { FaSearch, FaBriefcase, FaHome, FaUserFriends } from 'react-icons/fa'

import logo from '../assets/logos/linkedin.png'
import avatar from '../assets/images/avatar.png'

const MyNav = () => {
  const [InputSearch, setInputSearch] = useState(false)

  const handleSearchExpand = () => {
    setInputSearch(true)
  }

  const handleSearchCollapse = () => {
    setInputSearch(false)
  }

  return (
    <Navbar className=" bg-white d-flex justify-content-center align-items-center">
      <Container className="mx-0">
        {/* logo  */}
        <Navbar.Brand className="d-flex align-items-center">
          <img src={logo} alt="logo" width="40px" />
        </Navbar.Brand>

        {/* SEARCH  */}
        {InputSearch ? (
          <div className="w-100 position-absolute top-0 start-0 bg-light p-3 d-flex align-items-center">
            <Navbar.Brand className="me-3">
              <img src={logo} alt="logo" width="40px" />
            </Navbar.Brand>
            <Form className="d-flex flex-grow-1">
              <InputGroup>
                <InputGroup.Text>
                  <FaSearch />
                </InputGroup.Text>
                <FormControl
                  type="search"
                  placeholder="Cerca"
                  aria-label="Search"
                />
                <Button
                  variant="outline-primary"
                  onClick={handleSearchCollapse}
                >
                  Chiudi
                </Button>
              </InputGroup>
            </Form>
          </div>
        ) : (
          <Nav>
            <Button
              variant="link"
              className="nav-link d-flex flex-column align-items-center me-4"
              onClick={handleSearchExpand}
            >
              <FaSearch size={30} />
              <span className="fs-6">Cerca</span>
            </Button>

            <Link
              to={'/home'}
              className="nav-link d-flex flex-column align-items-center me-4"
            >
              <FaHome size={30} />
              <span className=" fs-6">Home</span>
            </Link>
            <Link
              to={'/'}
              className="nav-link d-flex flex-column align-items-center me-4"
            >
              <FaUserFriends size={30} />
              <span className=" fs-6">Rete</span>
            </Link>
            <Link
              to={'/'}
              className="nav-link d-flex flex-column align-items-center me-4"
            >
              <FaBriefcase size={30} />
              <span className=" fs-6">Lavoro</span>
            </Link>
          </Nav>
        )}

        <Button className=" d-flex flex-column bg-transparent text-dark border-0">
          <img
            src={avatar}
            alt="avatar"
            width="35px"
            className="rounded-circle"
          />
          <div className=" d-flex mx-auto">
            Tu
            <NavDropdown align="end" className="ms-1">
              <div className=" d-flex flex-column">
                <Link
                  to={'/'}
                  className="nav-link me-2 d-flex align-items-center"
                >
                  <img
                    src={avatar}
                    alt="avatar"
                    width="50px"
                    className="rounded-4 mx-2 mb-2"
                  />
                  Cristiano Ronaldo
                </Link>
                <Button
                  variant="outline-primary"
                  className="px-5 py-0 rounded-5 mx-2"
                >
                  Visualizza profilo
                </Button>
                <NavDropdown.Divider className="d-flex flex-column" />
                <NavDropdown.Item className="fw-bold">Account</NavDropdown.Item>
                <Link to={'/'} className="dropdown-item">
                  Impostazioni e privacy
                </Link>
                <Link to={'/'} className="dropdown-item ">
                  Guida
                </Link>
                <Link to={'/'} className="dropdown-item ">
                  Lingua
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item className="fw-bold">
                  Gestisci
                </NavDropdown.Item>
                <Link to={'/'} className="dropdown-item ">
                  Post e attività
                </Link>
                <Link to={'/'} className="dropdown-item ">
                  Account per la pubblicazione
                </Link>
                <NavDropdown.Divider />
                <Link to={'/'} className="dropdown-item ">
                  Esci
                </Link>
              </div>
            </NavDropdown>
          </div>
        </Button>
      </Container>
    </Navbar>
  )
}

export default MyNav
