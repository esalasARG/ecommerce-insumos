import './navbar.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "../CartWidget";
import logoalone from "../../components/img/logoalone.png";

function NavBar() {
    return (
      <Navbar expand="lg" className="navbar-custom">
        <Container className="navbar-container"> 
          {/* Logo de la tienda */}
          <Navbar.Brand className="navbar-brand" href="/">
            <img
              src={logoalone}
              alt="Logo"
            />{" "}
            Oli & Mate
          </Navbar.Brand>
  
          {/* Enlaces de navegación */}
          <Nav className="nav-links">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>

          {/* Widget del carrito */}
          <CartWidget />
        </Container>
      </Navbar>
    );
}

export default NavBar;