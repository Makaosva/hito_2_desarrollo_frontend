import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";

const CardPublicacion = ({
  id,
  imagen,
  titulo,
  descripcion,
  precio,
  publicadoPor,
  emailUsuario,
  mostrarAgregar = true, // para mostrar o no el boton agregar
  handleVermasClick, // Agregamos esta prop
  isPrivate = false, // Indicamos si es una vista privada
  esFavorito = false,
}) => {
  const navigate = useNavigate();

  /* const handleVerMas = () => {
    if (isPrivate && handleVermasClick) {
      handleVermasClick(); // Llama la función de cierre en la vista privada
    }
    navigate("/detalle-publicacion", {
      state: {
        imagen,
        email: emailUsuario,
      },
    });
  };
 */
  const handleAgregarAlCarrito = () => {
    navigate("/carrito");
  };

  /* const handleverMas = () => {
    navigate("/detalle-publicacion");
  }; */

  const handleverMas = () => {
    navigate("/detalle-publicacion", {
      state: {
        imagen,
        email: emailUsuario,
      },
    });
  };

  return (
    <Card className="mb-3 shadow-sm w-75 p-3 mx-auto">
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
          {mostrarAgregar && (
            <Button variant="primary" onClick={handleAgregarAlCarrito}>
              Agregar
            </Button>
          )}
          <Button variant="secondary" onClick={handleverMas}>
            Ver Más
          </Button>

          {esFavorito ? (
            <BsStarFill
              style={{
                fontSize: "1.5rem",
                color: "blue",
                cursor: "pointer",
              }}
            />
          ) : (
            <BsStar
              style={{
                fontSize: "1.5rem",
                color: "blue",
                cursor: "pointer",
              }}
            />
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPublicacion;
