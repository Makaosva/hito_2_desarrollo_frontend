import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsStar } from "react-icons/bs";

const CardPublicacion = ({
  imagen,
  titulo,
  descripcion,
  precio,
  publicadoPor,
  mostrarAgregar = true, // para mostrar o no el boton agregar
}) => {
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
          <Button variant="secondary">Ver Más</Button>
          <BsStar style={{ fontSize: "1.5rem", color: "black" }} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPublicacion;
