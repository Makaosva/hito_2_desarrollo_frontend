import React, {useContext} from "react";
import { Card, Button } from "react-bootstrap";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";

const CardPublicacion = ({
  /* id, */
  imagen,
  titulo,
  descripcion,
  precio,
  publicadoPor,
  emailUsuario,
  mostrarAgregar = true, // para mostrar o no el boton agregar
}) => {
  const navigate = useNavigate();
  /* const { favoritos, toggleFavorito } = useContext(UsuarioContext);

  const esFavorito = favoritos.some((fav) => fav.id === id); */

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Text>
          <strong>Precio:</strong> ${precio}
        </Card.Text>
        <Card.Text>
          <strong>Publicado por:</strong> {publicadoPor}
        </Card.Text>
        <div className="d-flex justify-content-between">
          {mostrarAgregar && <Button variant="primary">Agregar</Button>}
          <Button
            variant="secondary"
            onClick={() =>
              navigate("/detalle-publicacion", {
                state: {
                  imagen,
                  email: emailUsuario,
                },
              })
            }
          >
            Ver Más
          </Button>
        {/*   <div onClick={() => toggleFavorito({ id, titulo, imagen, publicadoPor })}>
            {esFavorito ? (
              <BsStarFill style={{ fontSize: "1.5rem", color: "blue" }} />
            ) : ( */}
              <BsStar style={{ fontSize: "1.5rem", color: "black" }} />
           {/*  )}
          </div> */}
          </div>
      </Card.Body>
    </Card>
  );
};

export default CardPublicacion;
