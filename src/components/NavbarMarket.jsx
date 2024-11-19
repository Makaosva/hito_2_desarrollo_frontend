import { Navbar } from "react-bootstrap";

function NavbarMarket() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
        <Navbar.Brand>
            {" "}
            <img className="Logo" src="" alt=""/>{" "}
        </Navbar.Brand>
        
    </Navbar>
  )
}
