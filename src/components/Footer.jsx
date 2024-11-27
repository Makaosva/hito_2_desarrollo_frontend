import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-black text-white" style={{ height: "70px" }}>
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center mt-4">
            <div className="d-flex justify-content-center">
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="text-white mx-3"
              >
                <FaInstagram style={{ fontSize: "2rem" }} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="text-white mx-3"
              >
                <FaFacebook style={{ fontSize: "2rem" }} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="text-white mx-3
              "
              >
                <FaTwitter style={{ fontSize: "2rem" }} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                className="text-white mx-3"
              >
                <FaYoutube style={{ fontSize: "2rem" }} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
