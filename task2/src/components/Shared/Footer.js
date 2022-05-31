import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import "../../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <div
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "2rem",
              }}
            >
              <h5>Guest Service</h5>
              <h5>Your Account</h5>
              <h5>Best attractive place</h5>
              <h6>Frequently Asked Questions</h6>
              <h5>Gift Cards</h5>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "2rem",
              }}
            >
              <h5>Learn More</h5>
              <h5>About Us</h5>
              <h5>New offers</h5>
              <h5>Privacy Policy</h5>
              <h5>Our Blog</h5>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "2rem",
              }}
            >
              <h5>Let's Talk</h5>
              <Button>CHAT WITH US</Button>
              <h5>Help Center</h5>
              <h5>Follow Us</h5>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "2rem",
              }}
            >
              <h5>Address</h5>
              <h6>
                Ta-39/1, Hasna Monjil, Gulshan-Badda Link Road, Dhaka-1212.
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
