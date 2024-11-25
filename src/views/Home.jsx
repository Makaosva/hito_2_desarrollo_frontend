import { Col, Container, Row } from "react-bootstrap";
import OrdenarPor from "../components/OrdenarPor";
import Buscador from "../components/Buscador";
import CardPublicacion from "../components/CardPublicacion";
import { UsuarioContext } from "../context/UsuarioContext";
import Tienda from "../components/Tienda";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Home = () => {
  const { publicaciones } = useContext(UsuarioContext);

  return (
    <Container className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <h2 className="text-center mb-4 p-4">
        Bienvenidos al MarketPlace de cursos en linea de programacion
      </h2>
      <Row>
        <Col sm="4">
          <OrdenarPor />
        </Col>
        <Col sm="4" className="text-center">
          <h5>Publicaciones</h5>
        </Col>
        <Col sm="4">
          <Buscador />
        </Col>
      </Row>

      <section className="mt-4">
        <Tienda />
      </section>
    </Container>
  );
};

export default Home;
