import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-auto">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <div className="d-flex justify-content-center">
              <a href="https:/>/www.instagram.com" className="text-white mx-3">
                <FaInstagram style={{ fontSize: "2rem" }} />
              </a>
              <a href="https:/>/www.facebook.com" className="text-white mx-3">
                <FaFacebook style={{ fontSize: "2rem" }} />
              </a>
              <a href="https:/>/www.twitter.com" className="text-white mx-3">
                <FaTwitter style={{ fontSize: "2rem" }} />
              </a>
              <a href="https:/>/www.youtube.com" className="text-white mx-3">
                <FaYoutube style={{ fontSize: "2rem" }} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer