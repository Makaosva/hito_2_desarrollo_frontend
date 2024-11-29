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

  esFavorito = false,
}) => {
  const navigate = useNavigate();

  const handleAgregarAlCarrito = () => {
    navigate("/carrito");
  };

  const handleverMas = () => {
    navigate("/detalle-publicacion", {
      state: {
        imagen,
        email: emailUsuario,
      },
    });
  };

  return (
    <Card className="card mb-4 shadow-sm w-75 p-3 mx-auto">
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
            <Button
              variant="dark"
              style={{
                backgroundColor: "#000",
                border: "4px solid #34495e",
                color: "#fff",
              }}
              onClick={handleAgregarAlCarrito}
            >
              Agregar
            </Button>
          )}
          <Button
            variant="secondary"
            style={{ border: "4px solid #34495e" }}
            onClick={handleverMas}
          >
            Ver Más
          </Button>

          {esFavorito ? (
            <BsStarFill
              style={{
                fontSize: "1.5rem",
                color: "#f39c12",
                cursor: "pointer",
              }}
            />
          ) : (
            <BsStar
              style={{
                fontSize: "1.5rem",
                color: "#f39c12",
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
